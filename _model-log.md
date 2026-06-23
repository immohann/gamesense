# Model Performance Log
> Updated after every completed match.

---

## RUNNING TOTALS
- **Games analyzed:** 2 completed | 2 pending (FRA-IRQ, POR-UZB pre-match done)
- **Markets tracked:** 16 confirmed (8 per completed game)
- **Correct:** 12 | **Wrong:** 4 | **Pending:** 14
- **Hit rate:** 75% (12/16 across both completed games)

---

## MATCH-BY-MATCH SCORECARD

### MD2 — NZL 1-3 EGY | Jun 21
| Market | Our Call | Result | ✅/❌ |
|---|---|---|---|
| Match winner | Egypt | Egypt 3-1 | ✅ |
| Over/Under 2.5 | Under | 4 goals — Over | ❌ |
| BTTS | No | NZL scored — Yes | ❌ |
| 1H Under 0.5 | Yes (high conf) | Goal at 15' | ❌ |
| 2H Over 1.5 | Yes | 3 second-half goals | ✅ |
| Egypt -1 handicap | Lean (low conf) | Won by 2 — covers | ✅ |
| Marmoush scorer | Yes | Did not score | ❌ |
| Salah scorer | Yes | Scored 67' | ✅ |
| **Game score** | | | **4/8** |

### MD2 — ARG 2-0 AUT | Jun 22
| Market | Our Call | Result | ✅/❌ |
|---|---|---|---|
| Match winner | Argentina | ARG 2-0 | ✅ |
| Over/Under 2.5 | Under (vs cluster Over) | 2 goals | ✅ |
| BTTS | No | Austria 0 goals | ✅ |
| 1H Under 1.5 | Yes (high conf) | 1 goal at 38' | ✅ |
| 2H Over 0.5 | Yes | Goal at 90' | ✅ |
| Argentina -1 | Lean (low conf) | Won by 2 — covers | ✅ |
| Argentina to win to nil | Lean | Clean sheet | ✅ |
| Messi scorer | Yes (high conf) | Scored ~38' | ✅ |
| **Game score** | | | **8/8** |

---

## PATTERN LIBRARY (lessons locked in)

### ❌ PATTERN 1 — Set-piece mechanism override
**Game:** NZL vs EGY | **Market:** 1H Under 0.5
**What happened:** We identified set pieces as NZL's primary mechanism, then still predicted a scoreless first half citing "slow tempo" narrative. NZL scored at 15' from a corner.
**Rule locked in:** When a team's primary mechanism is set pieces AND that mechanism is backed by data (NZL set-play xG 0.67 vs Iran), NEVER simultaneously predict U0.5 first half. Set pieces are tempo-independent — they fire on the first corner of the game.

### ✅ PATTERN 2 — Motivation structure is the dominant variable
**Game:** ARG vs AUT | **Market:** Over/Under, BTTS
**What happened:** Cluster backed Over 2.5 based on MD1 scorelines. We checked the group table: neither team needed to win. Game was conservative 2-0. Every market went our way.
**Rule locked in:** ALWAYS run group table math before any market call. If neither team needs to win → Under + BTTS No regardless of reputation, recent form, or scoreline trends. This overrides everything.

### ✅ PATTERN 3 — Scoreline vs xG anchoring
**Game:** NZL vs EGY pre-match | **Stress test confirmed**
**What happened:** Cluster read NZL's 2-2 vs Iran as evidence of attacking quality. We read the xG (Iran 1.50, NZL 1.24 with Just scoring 2 goals on 0.31 xG = overperformance). NZL's output vs Egypt was correctly predicted to be lower.
**Rule locked in:** Always check if a scoreline overperformed xG before projecting forward. An overperforming result regresses; an underperforming result recovers. Never anchor predictions on scorelines without the xG check.

### ❌ PATTERN 4 — Going behind overrides team DNA
**Game:** NZL vs EGY | **Market:** Under 2.5
**What happened:** Egypt's DNA is "defensive-first" under Hossam Hassan. We expected an Under. Egypt went 0-1 behind at 15', and Hossam Hassan's defensive instincts were overridden by the scoreline necessity.
**Rule locked in:** Any team's DNA can be overridden by a deficit. Going behind is a score-state trigger that changes a team's shape regardless of manager identity. Always model "what does each team do if they fall behind at X minute?" before calling Under.

---

## PENDING ANALYSES
| Game | Date | Pre-match analysis | Result |
|---|---|---|---|
| FRA vs IRQ | Jun 22 4pm CDT | ✅ Complete | Pending |
| POR vs UZB | Jun 23 12pm CDT | ✅ Complete | Pending |
