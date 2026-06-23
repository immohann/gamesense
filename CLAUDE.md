# World Cup 2026 — AI Prediction Tracker

## Project overview
AI-powered match predictions using the 6-phase Game Sense framework.
All team profiles, standings, model logs, and analysis live in this repo.
The web/ folder deploys to static hosting (GitHub Pages / Netlify).

---

## ALWAYS LOAD AT SESSION START (no exceptions)
Read these files at the start of every session before doing anything:
1. `_skill.md` — the complete 6-phase prediction framework. Follow it exactly.
2. `_groups.md` — live group standings. Required for Phase 2 motivation mapping.
3. `_model-log.md` — locked patterns and backtesting log. Apply patterns in Phase 4.

---

## CONTEXT LOADING RULE (efficiency)
When analyzing a match, load ONLY the two relevant team files:
- `teams/XXX.md` + `teams/YYY.md`
Do NOT load all team files at once. The whole point is surgical loading.

Available team files: ALG, ARG, AUT, BEL, CPV, EGY, ESP, FRA, IRN, IRQ, JOR, NOR, NZL, POR, SAU, SEN, URU, UZB

---

## POST-MATCH WORKFLOW (run after every result, in this order)
1. Update `teams/XXX.md` → Tournament Form section: result, xG, possession, scorers, key obs
2. Update `teams/YYY.md` → same
3. Update `_groups.md` → affected group table standings
4. Update `_model-log.md` → add scorecard row, note any new locked pattern
5. Update `web/data.js` → flip match from pending/upcoming to completed, add result + market outcomes
6. Save the pre-match analysis to `analysis/YYYY-MM-DD_XXX-YYY.md`
7. Commit: `git add -A && git commit -m "MD[X] XXX [score] YYY — post-match update"`
8. Push: `git push` (triggers auto-deploy if GitHub Pages / Netlify connected)

---

## ADDING NEW TEAM FILES
Use 3-letter FIFA codes. Copy the structure from any existing team file.
Required sections: Identity & DNA | Key Players | Qualifying Campaign | Tournament Form | Betting Patterns
Every new team file must be added to the available team files list above in this CLAUDE.md.

---

## FILE NAMING
- Team files: `teams/XXX.md` (FIFA 3-letter code)
- Analysis archives: `analysis/YYYY-MM-DD_XXX-YYY.md`
- Always-load files: `_skill.md`, `_groups.md`, `_model-log.md` (all at root)
- Web: `web/index.html` (never changes) + `web/data.js` (only file updated after each game)

---

## WEB DEPLOYMENT
`web/` is a self-contained static site:
- `web/index.html` — rendering engine. Never edit this.
- `web/data.js` — the only file that changes after each game.
Upload both to GitHub Pages, Netlify, or Vercel. Update data.js only for ongoing updates.
Hosted at: [ADD URL ONCE DEPLOYED]

---

## HEADLESS MODE (automated claude -p calls)
When invoked non-interactively, recognise the prompt type and follow exactly:

### "run pre-match analysis for [HOME] vs [AWAY]..."
1. Load _skill.md, _groups.md, _model-log.md (same as session start)
2. Load teams/HOME.md + teams/AWAY.md
3. Run all 6 phases — Phase 1 REQUIRES live WebSearch, no general knowledge
4. Write complete analysis to analysis/YYYY-MM-DD_HOME-AWAY.md
5. Update web/data.js — insert match as status:"pending" with predictions, conf, report, keyInsight
6. End response with this exact JSON block (the only JSON block in the response):
```json
{ "type": "pre-match", "matchId": "home-away", "status": "complete", "commitMsg": "MD[X] HOME vs AWAY — pre-match picks + data.js" }
```

### "post-match [HOME-AWAY], result [X]-[Y]..."
1. Load analysis/YYYY-MM-DD_HOME-AWAY.md (the pre-match predictions)
2. WebSearch final xG + possession stats (Sofascore / ESPN)
3. Score every prediction market — correct or wrong + one-line reason
4. Update teams/HOME.md → Tournament Form section
5. Update teams/AWAY.md → Tournament Form section
6. Update _groups.md → update standings for affected group
7. Update _model-log.md → scorecard row + updated running totals
8. Update web/data.js → flip to "completed", add result + all market outcomes
9. End response with this exact JSON block:
```json
{ "type": "post-match", "matchId": "home-away", "date": "YYYY-MM-DD", "result": "X-Y", "correct": 0, "total": 0, "status": "complete", "commitMsg": "MD[X] HOME X-Y AWAY — post-match update" }
```

### "run feedback workflow for match [MATCH-ID]..."
Use the Workflow tool: `{ scriptPath: "workflows/wf_feedback.js", args: { matchId, date, result, correct, total, marketNotes } }`

---

## SKILL INTEGRATION NOTES
The `_skill.md` framework has three laws that override everything else:
1. No assumption without a mechanism
2. Every stress test flaw must change the output
3. Matchup context beats team quality

The locked patterns (in `_model-log.md`) are additions to the skill that were earned in live games:
- Set-piece mechanism override: never predict U0.5 1H when primary mechanism is set pieces
- Motivation structure override: group table math runs before any other analysis
- Scoreline vs xG: always anchor on xG, never on the raw scoreline
- Going behind overrides DNA: model what teams do when trailing before calling Under
