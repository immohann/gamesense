#!/usr/bin/env node
// Game Sense WC2026 — Automation CLI
//
// Commands:
//   node run.js pre HOME AWAY              Run pre-match analysis now
//   node run.js post HOME-AWAY [H] [A]     Run post-match pipeline now
//   node run.js approve N                  Approve feedback item N → updates _skill.md + _model-log.md
//   node run.js reject N "reason"          Reject feedback item N
//   node run.js crons                      Show scheduled crons from schedule.json
//   node run.js setup-crons               Create all crons via claude -p

'use strict';
const { spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
process.chdir(ROOT);

const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case 'pre':          runPreMatch(args);              break;
  case 'post':         runPostMatch(args);             break;
  case 'approve':      approveFeedback(args[0]);       break;
  case 'reject':       rejectFeedback(args[0], args.slice(1).join(' ')); break;
  case 'crons':        listCrons();                    break;
  case 'setup-crons':  setupCrons();                   break;
  default:             showHelp();
}

// ─────────────────────────────────────────────
// PRE-MATCH
// ─────────────────────────────────────────────
function runPreMatch([home, away]) {
  if (!home || !away) return err('Usage: node run.js pre HOME AWAY (e.g. node run.js pre NOR SEN)');

  home = home.toUpperCase();
  away = away.toUpperCase();
  const match = getMatch(`${home.toLowerCase()}-${away.toLowerCase()}`);

  const prompt = [
    `run pre-match analysis for ${home} vs ${away}`,
    match ? `, MD${match.matchday} Group ${match.group}, ${match.date}, kickoff ${match.kickoff}` : '',
  ].join('');

  console.log(`\n▶ Pre-match: ${home} vs ${away}`);
  const output = callClaude(prompt);
  const json = extractJSON(output);
  if (!json) return err('No JSON block found in claude output — check the analysis manually.');

  require('./scripts/commit').run(json.commitMsg || `${home} vs ${away} — pre-match picks`);
  console.log(`\n✅ Done. ${json.commitMsg}`);
}

// ─────────────────────────────────────────────
// POST-MATCH
// ─────────────────────────────────────────────
function runPostMatch([matchId, homeGoals, awayGoals, ...rest]) {
  if (!matchId) return err('Usage: node run.js post HOME-AWAY [homeGoals] [awayGoals] ["scorers etc"]');

  const extras = rest.join(' ');
  const resultStr = (homeGoals !== undefined && awayGoals !== undefined)
    ? `, result ${homeGoals}-${awayGoals}${extras ? ', ' + extras : ''}`
    : '';

  const prompt = `post-match ${matchId}${resultStr}`;

  console.log(`\n▶ Post-match: ${matchId}`);
  const output = callClaude(prompt);
  const json = extractJSON(output);
  if (!json) return err('No JSON block found in claude output — update files manually.');

  require('./scripts/commit').run(json.commitMsg || `${matchId} — post-match update`);
  console.log(`  Markets: ${json.correct}/${json.total} correct`);

  // Run feedback workflow
  console.log('\n▶ Feedback workflow...');
  const fbPrompt = [
    `run feedback workflow for match ${matchId}`,
    json.date   ? `, date ${json.date}` : '',
    json.result ? `, result ${json.result}` : '',
    json.correct !== undefined ? `, correct ${json.correct} out of ${json.total} markets` : '',
  ].join('');

  callClaude(fbPrompt);
  require('./scripts/commit').run(`${matchId} — feedback log updated`);
  console.log('\n✅ Post-match pipeline complete.');
}

// ─────────────────────────────────────────────
// APPROVE FEEDBACK
// ─────────────────────────────────────────────
function approveFeedback(itemNum) {
  if (!itemNum) return err('Usage: node run.js approve N');
  const n = parseInt(itemNum, 10);
  const pendingFile = path.join(ROOT, '_feedback-pending.md');
  let content = fs.readFileSync(pendingFile, 'utf8');

  // Find the Nth CANDIDATE or REVIEW block
  const blocks = content.split(/(?=^## )/m).filter(b => b.trim());
  const idx = n - 1;
  if (idx < 0 || idx >= blocks.length) return err(`Item ${n} not found (${blocks.length} items exist)`);

  const target = blocks[idx];
  if (target.includes('✅ approved') || target.includes('❌ rejected')) {
    return err(`Item ${n} is already resolved.`);
  }

  // Mark as approved
  blocks[idx] = target.replace('Awaiting approval ○', `✅ Approved`);
  fs.writeFileSync(pendingFile, blocks.join(''), 'utf8');

  // Extract proposed rule and add to _model-log.md + _skill.md via claude -p
  console.log(`\n▶ Approving item ${n}...`);
  const prompt = `Item ${n} in _feedback-pending.md has been approved. Extract the proposed rule and: 1) add it as a new locked pattern in _model-log.md patterns section, 2) add the rule to _skill.md Phase 4 stress test checklist. Keep exact wording from the "Proposed rule:" field.`;
  callClaude(prompt);
  require('./scripts/commit').run(`Pattern approved: item ${n} from _feedback-pending.md`);
  console.log(`✅ Pattern locked into _model-log.md and _skill.md`);
}

// ─────────────────────────────────────────────
// REJECT FEEDBACK
// ─────────────────────────────────────────────
function rejectFeedback(itemNum, reason) {
  if (!itemNum) return err('Usage: node run.js reject N "reason"');
  const n = parseInt(itemNum, 10);
  const pendingFile = path.join(ROOT, '_feedback-pending.md');
  let content = fs.readFileSync(pendingFile, 'utf8');

  const blocks = content.split(/(?=^## )/m).filter(b => b.trim());
  const idx = n - 1;
  if (idx < 0 || idx >= blocks.length) return err(`Item ${n} not found`);

  blocks[idx] = blocks[idx].replace(
    'Awaiting approval ○',
    `❌ Rejected${reason ? ' — ' + reason : ''}`
  );
  fs.writeFileSync(pendingFile, blocks.join(''), 'utf8');
  require('./scripts/commit').run(`Pattern rejected: item ${n}${reason ? ' — ' + reason : ''}`);
  console.log(`✅ Item ${n} rejected.`);
}

// ─────────────────────────────────────────────
// LIST CRONS
// ─────────────────────────────────────────────
function listCrons() {
  const schedule = JSON.parse(fs.readFileSync(path.join(ROOT, 'schedule.json'), 'utf8'));
  const pending = schedule.matches.filter(m => m.status !== 'completed' && m.kickoffUTC);
  if (!pending.length) { console.log('No schedulable matches (all completed or no kickoffUTC).'); return; }

  console.log('\nScheduled crons (from schedule.json):\n');
  pending.forEach(m => {
    const ko      = new Date(m.kickoffUTC);
    const preFire = new Date(ko.getTime() - 2 * 60 * 60 * 1000);
    console.log(`  ${m.matchId.padEnd(10)} KO: ${ko.toISOString()}  |  pre-match fires: ${preFire.toISOString()}`);
  });
}

// ─────────────────────────────────────────────
// SETUP CRONS
// ─────────────────────────────────────────────
function setupCrons() {
  const schedule = JSON.parse(fs.readFileSync(path.join(ROOT, 'schedule.json'), 'utf8'));
  const pending = schedule.matches.filter(m => m.status !== 'completed' && m.kickoffUTC);

  const prompt = [
    'Set up two CronCreate crons per match for these WC2026 fixtures.',
    'For each match:',
    '  Cron 1: fires 2 hours before kickoffUTC — command: node run.js pre HOME AWAY',
    '  Cron 2: fires at kickoffUTC — command: node scripts/pulse.js MATCH-ID',
    'Matches:',
    ...pending.map(m => `  ${m.matchId}: home=${m.home} away=${m.away} kickoffUTC=${m.kickoffUTC}`),
  ].join('\n');

  console.log('\n▶ Creating crons via claude -p...');
  callClaude(prompt);
  console.log('✅ Crons created.');
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function callClaude(prompt) {
  const result = spawnSync('claude', ['-p', prompt], {
    cwd:       ROOT,
    encoding:  'utf8',
    maxBuffer: 10 * 1024 * 1024,
    timeout:   600_000,  // 10 min max per call
  });
  if (result.error) err(`claude CLI error: ${result.error.message}`);
  if (result.status !== 0) {
    console.error(result.stderr || '');
    err(`claude exited with status ${result.status}`);
  }
  // Stream output to console while also returning it
  process.stdout.write(result.stdout);
  return result.stdout;
}

function extractJSON(output) {
  const m = output.match(/```json\n([\s\S]*?)\n```/);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

function getMatch(matchId) {
  try {
    const s = JSON.parse(fs.readFileSync(path.join(ROOT, 'schedule.json'), 'utf8'));
    return s.matches.find(m => m.matchId === matchId) || null;
  } catch { return null; }
}

function err(msg) {
  console.error('\n❌', msg);
  process.exit(1);
}

function showHelp() {
  console.log(`
  Game Sense WC2026 — Automation CLI

  node run.js pre HOME AWAY                   Run pre-match analysis (e.g. pre NOR SEN)
  node run.js post HOME-AWAY [H] [A] [info]   Run post-match pipeline (e.g. post nor-sen 2 1)
  node run.js approve N                        Approve pending feedback item N
  node run.js reject N "reason"               Reject pending feedback item N
  node run.js crons                            List all scheduled crons
  node run.js setup-crons                     Create crons for all pending matches
  `);
}
