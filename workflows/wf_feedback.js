export const meta = {
  name: 'wf-feedback',
  description: 'Post-match feedback audit and pattern candidate detection for Game Sense WC2026',
  phases: [
    { title: 'Audit',   detail: 'Parallel agents audit each locked pattern against tonight result' },
    { title: 'Detect',  detail: 'Scan full feedback history for new pattern candidates' },
    { title: 'Write',   detail: 'Append audit to _feedback.md, candidates to _feedback-pending.md' },
  ],
}

// ── Schemas ────────────────────────────────────────────────────────────────

const PATTERN_AUDIT_SCHEMA = {
  type: 'object',
  properties: {
    patternId:    { type: 'number' },
    patternTitle: { type: 'string' },
    fired:        { type: 'boolean', description: 'Did this pattern apply to tonight match?' },
    correct:      { type: ['boolean', 'null'], description: 'If it fired, was the prediction correct? null if did not fire.' },
    explanation:  { type: 'string', description: 'One sentence: what happened.' },
  },
  required: ['patternId', 'patternTitle', 'fired', 'correct', 'explanation'],
}

const CANDIDATE_SCHEMA = {
  type: 'object',
  properties: {
    found:                  { type: 'boolean' },
    title:                  { type: 'string' },
    mechanism:              { type: 'string', description: 'Causal explanation — WHY it works, not just that it worked.' },
    evidence:               { type: 'array', items: { type: 'string' }, description: 'Game IDs where the pattern appeared (min 3).' },
    proposedRule:           { type: 'string', description: 'Exact text of the rule to add to the skill.' },
    conflictsWithExisting:  { type: 'boolean' },
    conflictExplanation:    { type: 'string' },
  },
  required: ['found'],
}

const SUNSET_SCHEMA = {
  type: 'object',
  properties: {
    patternId:    { type: 'number' },
    failureCount: { type: 'number', description: 'Consecutive applicable games where this pattern was wrong.' },
    flagForReview:{ type: 'boolean' },
    reason:       { type: 'string' },
  },
  required: ['patternId', 'failureCount', 'flagForReview'],
}

// ── Phase 1: Audit ─────────────────────────────────────────────────────────

phase('Audit')
log(`Auditing patterns for match: ${args.matchId}`)

const [feedbackHistory, modelLog, analysisFile] = await parallel([
  () => agent('Read the file _feedback.md and return its complete contents verbatim.', { label: 'read-feedback', phase: 'Audit' }),
  () => agent('Read the file _model-log.md and return its complete contents verbatim.', { label: 'read-modellog', phase: 'Audit' }),
  () => agent(`Read the file analysis/${args.analysisFile || args.matchId + '.md'} and return its complete contents verbatim. If the file does not exist, say "FILE NOT FOUND".`, { label: 'read-analysis', phase: 'Audit' }),
])

const patternContext = `
Match: ${args.matchId}
Date: ${args.date}
Result: ${args.result}
Markets: ${args.correct}/${args.total} correct
Market notes: ${args.marketNotes || 'See analysis file.'}

Full analysis (predictions + result):
${analysisFile}
`

// One agent per locked pattern — run independently so they don't anchor on each other
const patternAudits = await parallel([1, 2, 3, 4].map(id => () =>
  agent(
    `You are independently auditing Pattern ${id} from the Game Sense WC2026 prediction model.

    The 4 locked patterns are:
    1. Set-piece mechanism fires from minute 1 — when a team's primary mechanism is set pieces (data-confirmed), never predict U0.5 first half.
    2. Motivation structure overrides all variables — run group table math first; neither team must win → Under + BTTS No.
    3. Scoreline vs xG: anchor on xG — overperforming results regress, underperforming recover.
    4. Going behind overrides team DNA — any team that concedes first is forced to push, regardless of identity.

    Tonight's context:
    ${patternContext}

    For Pattern ${id} specifically:
    - Did this pattern APPLY to tonight's match? Was there a situation where it was relevant?
    - If yes: did the prediction based on this pattern succeed?
    - Explain in one clear sentence what happened.

    Be precise. If the pattern was not relevant to tonight's match, fired = false.`,
    { label: `audit-p${id}`, schema: PATTERN_AUDIT_SCHEMA, phase: 'Audit' }
  )
))

// ── Phase 2: Detect ────────────────────────────────────────────────────────

phase('Detect')

const candidate = await agent(
  `You are scanning for NEW prediction patterns for the Game Sense WC2026 model.

   Full feedback history (every game analysed so far):
   ${feedbackHistory}

   Current locked patterns (from _model-log.md):
   ${modelLog}

   Tonight's game was added to the history above. Now scan ALL history for a recurring mechanism.

   A valid pattern candidate requires ALL of these:
   1. Appears in AT LEAST 3 distinct, independent games
   2. Has a CAUSAL MECHANISM — you must explain WHY it works structurally, not just that it correlated
   3. Is NOT already covered by an existing locked pattern
   4. Passes the counterfactual: "would we have predicted differently if we'd known this rule?"
   5. Survives the overfitting test: is this a real structural phenomenon or sample noise from 3-4 games?

   ANTI-OVERFITTING GATES — if ANY are true, found = false:
   - Fewer than 3 clean, independent examples
   - Mechanism is "team X performs well" (not structural)
   - Duplicates or is correlated with an existing locked pattern
   - The 3 examples are variations of one context (e.g. all group stage musts-wins at the same score)

   Be conservative. A missed real pattern is less costly than overfitting.`,
  { label: 'detect-candidate', schema: CANDIDATE_SCHEMA, phase: 'Detect' }
)

// Check for sunset flags (patterns failing 3 consecutive applicable games)
const sunsetFlags = await parallel(patternAudits.filter(Boolean).filter(a => a.fired && !a.correct).map(a => () =>
  agent(
    `Pattern ${a.patternId} fired but was WRONG tonight. Check _feedback.md history to count how many consecutive applicable games this pattern has been wrong in a row.

     Feedback history: ${feedbackHistory}

     Count only games where the pattern FIRED (was relevant) and was wrong. If tonight makes 3 or more consecutive failures: flagForReview = true.`,
    { label: `sunset-p${a.patternId}`, schema: SUNSET_SCHEMA, phase: 'Detect' }
  )
))

// ── Phase 3: Write ─────────────────────────────────────────────────────────

phase('Write')

const auditLines = patternAudits.filter(Boolean).map(a => {
  const status = !a.fired ? '— N/A' : a.correct ? '✅ fired + correct' : '❌ fired + wrong'
  return `- P${a.patternId} (${a.patternTitle}): ${status} | ${a.explanation}`
}).join('\n')

const sunsetsToFlag = (sunsetFlags || []).filter(Boolean).filter(s => s.flagForReview)

const feedbackEntry = `
## ${args.matchId.toUpperCase()} | ${args.date}
**Result:** ${args.result} | **Score:** ${args.correct}/${args.total} markets correct

### Pattern Audit
${auditLines}

---
`

await agent(
  `Append the following block to _feedback.md. Add it at the end of the file, after any existing content. Do not modify anything else.

   ${feedbackEntry}`,
  { label: 'write-feedback', phase: 'Write' }
)

// Write candidate if found
if (candidate && candidate.found) {
  const pendingEntry = `
## CANDIDATE [${args.date}]: ${candidate.title}
**Evidence:** ${(candidate.evidence || []).join(' | ')}
**Mechanism:** ${candidate.mechanism}
**Proposed rule:** ${candidate.proposedRule}
**Conflicts with existing:** ${candidate.conflictsWithExisting ? candidate.conflictExplanation : 'None'}
**Status:** Awaiting approval ○

---
`
  await agent(
    `Append the following block to _feedback-pending.md at the end of the file. Do not modify anything else.

     ${pendingEntry}`,
    { label: 'write-candidate', phase: 'Write' }
  )
  log(`⚡ New pattern candidate: "${candidate.title}" → _feedback-pending.md`)
}

// Write sunset flags if any
for (const sunset of sunsetsToFlag) {
  const sunsetEntry = `
## REVIEW FOR RETIREMENT [${args.date}]: Pattern ${sunset.patternId}
**Reason:** ${sunset.reason}
**Consecutive failures:** ${sunset.failureCount}
**Status:** Awaiting decision ○

---
`
  await agent(
    `Append the following block to _feedback-pending.md at the end of the file. Do not modify anything else.

     ${sunsetEntry}`,
    { label: `write-sunset-p${sunset.patternId}`, phase: 'Write' }
  )
  log(`⚠️ Pattern ${sunset.patternId} flagged for retirement review`)
}

if (!candidate?.found && !sunsetsToFlag.length) {
  log('No candidates or sunset flags. Feedback written to _feedback.md.')
}

return {
  audits:    patternAudits.filter(Boolean),
  candidate: candidate || null,
  sunsets:   sunsetsToFlag,
}
