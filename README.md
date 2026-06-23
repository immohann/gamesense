# World Cup 2026 — Prediction System
> AI-powered match analysis using the Game Sense framework.

---

## HOW TO LOAD CONTEXT (keep it lean)

For any match analysis, load ONLY these files:
1. `_skill.md` — the prediction framework (phases 1-6)
2. `_groups.md` — current group standings (for motivation mapping)
3. `teams/XXX.md` — home team profile
4. `teams/YYY.md` — away team profile

Do NOT load the full teams folder. Load only the two relevant team files.

---

## POST-MATCH WORKFLOW (run after every result)

1. Open the two team files → update **Tournament Form** section with result + xG + key obs
2. Open `_model-log.md` → add row to backtesting table
3. Open `_groups.md` → update the affected group table
4. Open `web/data.js` → update match entry from `pending` to `completed` with result
5. (Optional) Save pre-match analysis to `analysis/YYYY-MM-DD_XXX-YYY.md`

**Do not update the HTML file.** Only `data.js` changes. The page re-renders automatically.

---

## TEAM FILE NAMING

Use 3-letter FIFA codes: ARG, FRA, EGY, NZL, URU, CPV, BRA, GER, etc.

---

## DEPLOYING THE WEB PAGE

The `web/` folder is a self-contained deployable unit:
- Upload `web/index.html` + `web/data.js` to any static host
- GitHub Pages, Netlify, Vercel — all work with zero config
- After each game: update `data.js` only, re-upload that one file

---

## GROUPS QUICK REF

| Group | Teams |
|---|---|
| G | Egypt, Belgium, Iran, New Zealand |
| H | Spain, Uruguay, Cape Verde, Saudi Arabia |
| I | France, Norway, Senegal, Iraq |
| J | Argentina, Austria, Algeria, Jordan |
| K | Colombia, Portugal, Congo DR, Uzbekistan |
| L | England, Panama, Ghana, Croatia |

---

## MODEL PERFORMANCE SUMMARY
→ See `_model-log.md` for full breakdown.
