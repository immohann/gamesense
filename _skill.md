---
name: world-cup-predictor
description: >
  A game-sense-first World Cup (or any major soccer tournament) match prediction
  framework. Collects expert predictions, maps how the game will actually be played,
  stress-tests assumptions against real match data, and produces market-by-market
  analysis grounded in tactical reality — not reputation or rankings. Use whenever
  the user asks about World Cup predictions, match analysis, betting picks, or wants
  to stress test soccer predictions. Trigger also when the user wants to find flaws
  in expert picks or analyze team form before a match.
---

# World Cup Match Predictor — Game Sense Edition

The core principle of this skill: **understand how the game will actually be played
before making any market call.** Reputation, rankings, and stats are inputs — not
conclusions. The game being played between these two specific teams in this specific
context is always the dominant factor.

---

## The Three Laws (never violate these)

**Law 1 — No assumption without a mechanism.**
Never say "Team A will score because they have quality attackers." Always ask:
*Through what specific mechanism do they score against this specific opponent?*
If you cannot name the mechanism concretely, do not back goals.

**Law 2 — Every stress test flaw must change the output.**
If the stress test finds a real flaw, it must either flip the lean or drop confidence
to Low. "Noted but still backing the consensus" is not allowed. That is the single
biggest source of bad calls in soccer prediction.

**Law 3 — Matchup context beats team quality.**
A better team in a neutral open game is not the same as a better team in this specific
tactical matchup. Always ask: does this team's quality actually translate here?
Rankings and reputation are irrelevant when the game context contradicts them.

---

## Phase 1 — Collect the Prediction Cluster

Pull predictions from multiple credible sources. Find what the cluster agrees on
and — crucially — where it splits. The split is where value lives.

**Source tiers (weight accordingly):**

Tier 1 — Quantitative/Model-based:
- Opta Supercomputer (via Al Jazeera or theanalyst.com)
- WhoScored projected scorelines and win probabilities
- ESPN DTAI model, Kalshi prediction markets

Tier 2 — Sharp Expert Analysts:
- Covers.com, SportsBookReview.com, RotoWire, Racing Post, Sports Interaction

Tier 3 — Mainstream:
- Fox Sports, CBS SportsLine, FanDuel Research, Yahoo Sports

**What to extract from the cluster:**
- Match winner consensus — unanimous or split?
- Total goals lean — where does the cluster sit?
- BTTS lean
- Where analysts disagree (this is the most valuable signal)
- Key narrative every source repeats

Report as a cluster summary. What appears across multiple independent sources
with different reasoning is a signal. One source saying something is noise.

**⚠️ MANDATORY: Phase 1 requires live web searches — never use general knowledge.**
- Search: "[Team A] vs [Team B] prediction [year]" — get actual picks and odds
- Search each tier source individually: check Racing Post, CBS SportsLine, RotoWire, Fox Sports
- Never summarize the cluster as "unanimous" without having searched at least 3 independent sources from different tiers
- Capture the specific odds being quoted (e.g. Over 3.5 at -124, not just "Over 2.5") — the line matters
- Look for internal cluster contradictions: a source calling a 3-0 correct score while also backing BTTS Yes is a flaw, and those contradictions are exactly where value lives
- Failure to search = Phase 1 is not complete

---

## Phase 2 — Game Flow Mapping (run this before any stat analysis)

This is the most important phase. Before looking at any numbers, map out how
this specific game will actually be played.

Answer these questions in order:

**1. What does each team need from this game?**
- Must win / need a point / result doesn't matter
- This determines tactical shape more than anything else
- A team defending for a draw plays 4-4-2 low block — regardless of their ranking
- A team that must win plays open and creates space for the opponent to exploit
- CHECK THE GROUP TABLE FIRST. This is confirmed as the dominant variable.

**2. What tactical shape will each team set up?**
- Who controls possession and who sits off?
- Will the underdog defend deep or press high?
- Does the favorite have a mechanism to break a deep block specifically?

**3. Where do goals physically come from for each team?**
Name the specific mechanism — not "they have good attackers":
- Set pieces? (who takes them, who attacks them)
- Counter-attack? (who carries the ball, who makes the run)
- Positional buildup breaking through? (through what channel, with which player)
- Individual brilliance? (which specific player, in what situation)

If the mechanism is blocked by injury, suspension, or the opponent's shape —
the goals expectation drops regardless of what the stats say.

**4. What is the underdog's actual game plan and can they execute it?**
Give the underdog's defensive plan equal weight as the favorite's attack.
A disciplined low block executed well beats paper quality every time.
Ask: does the underdog have the personnel and discipline to execute this plan
for 90 minutes? Recent evidence only — not historical reputation.

**5. When does this game open up?**
Identify the trigger point — when does the losing team have to change shape?
Before that trigger: low scoring, cagey. After it: more open, more goals.
This drives first half vs second half markets directly.

---

## Phase 3 — Statistical Reality Check

Now use data to validate or challenge the game flow map.

For each team's most recent match collect:

**xG (Expected Goals)** — most important single number.
- Scoreline on low xG = fluke result, not true form
- 0-0 on 2.3 xG = bad finishing or great goalkeeping, not bad attack
- 5-1 on 1.4 xG = clinical finishing or defensive collapse, not true dominance
Always adjust the narrative for xG vs actual score.

**Shots and shots on target** — volume and quality of chances

**How did they concede?** — open play vs set piece vs individual error
These are very different defensive vulnerabilities

**First half vs second half pattern** — some teams consistently start slow
(Japan: 9 of 10 WC goals in second half). This is a real pattern, use it.

**Opposition quality adjustment** — who did they face?
A result against a weak opponent tells you less than a result against a strong one.
Always note the quality of the opposition when reading form.

**Data sources:** theanalyst.com, sofascore.com, fbref.com, espn.com match reports

---

## Phase 4 — Stress Test

Find the flaws. Be adversarial. Try to break the consensus.

### The Stress Test Checklist:

**Scoreline anchoring** — Is the consensus reading the score or the xG?
A team that lost 5-1 on 1.4 xG is very different from one that lost 5-1 on 4.0 xG.

**The mechanism test** — For every Over call: can you name the specific mechanism
through which each team scores against this specific opponent's shape?
If not, the Over lean is an assumption, not an analysis.

**Tactical absence impact** — When a key player is out, ask:
Does this team have an alternative mechanism to do what that player does?
If no alternative exists, this is not a footnote — it changes the market call.
Example: Belgium without Doku = no vertical pace against a deep block.
No alternative pace carrier = broken attacking mechanism = Under, not Over.

**Underdog game plan respect** — Has the analysis given equal weight to how
the underdog will defend? Or has it spent 80% on the favorite's attack?
The underdog's discipline is often the dominant factor in low-profile group games.

**Stale H2H** — Is historical head-to-head data recent and relevant?
H2H from different eras, different squads, or different competitions is noise.

**Motivation asymmetry (both directions)** — A must-win team attacks more
AND leaves more space. A team happy with a draw defends deeper AND more
organized. Both sides of this cut both ways — map it for each team.

**Goalkeeper outlier** — Is the consensus assuming a heroic performance
continues, or assuming reversion to mean? Name the goalkeeper's recent form
explicitly and decide which assumption the market is making.

**Qualification math** — What does each team actually need?
A team that needs a point will set up completely differently from a team that
needs three. This is not minor — it is often the single most important factor.

**Team quality vs matchup quality** — Is the consensus confusing "better team
overall" with "better team in this specific tactical context"? Rankings and
reputation only matter in open games. Compact defensive setups neutralize quality.

**SET PIECE OVERRIDE RULE (locked in from NZL vs EGY):**
When a team's primary scoring mechanism is set pieces AND that mechanism is
confirmed by data, NEVER simultaneously predict U0.5 first half. Set pieces
are tempo-independent — they activate on the first corner of the game.

### Stress test output rule:
Every flaw found must result in one of:
- Flipping the lean in that market
- Dropping confidence to Low
- Explicitly flagging "avoid this market — too much uncertainty"

"Noted but still backing consensus" is not an allowed output.

---

## Phase 5 — Market-by-Market Analysis

Only reach this phase after the game flow map and stress test are complete.
Markets must flow from the game flow map — not from the consensus.

**Match Winner (1X2)**
Anchor on: what does each team need, what tactical shape results, who has
the mechanism to score against that shape.
State confidence: High / Medium / Low with one-line reason.

**Total Goals (Over/Under 2.5 and 3.5)**
Anchor on: game flow map. If the map says "cagey, one team defends deep,
no clear mechanism to break them" — lean Under regardless of team quality.
The mechanism test is mandatory before any Over call.
Note where the cluster splits — that is where value is most likely to be found.

**BTTS (Both Teams To Score)**
Anchor on: does the underdog have a realistic mechanism to score?
Not "they have some quality" — a specific, concrete path to a goal.
Check: set pieces, counter, individual error likelihood, goalkeeper form.
H2H BTTS record is relevant only if recent and in comparable context.

**First Half vs Second Half**
Map directly from game flow analysis:
- Cautious start by both teams → 1st half Under 1.5 (high confidence when supported)
- Team that scores late consistently → 2nd half goals lean
- New manager / must-not-lose start → especially cautious first half
- Trigger point identified → note when game likely opens up
- NEVER call 1H U0.5 when a team's primary mechanism is set pieces (see locked pattern)

**Asian Handicap**
Only recommend when the game flow map supports a specific margin.
If stress test reveals uncertainty in margin — explicitly say avoid.
Never back a handicap just because the team is heavily favored.

**Anytime Scorer**
Prioritize: penalty takers, set piece specialists, players in current form.
Must have a concrete mechanism to score — not just "they're a good striker."
Note who appears consistently across multiple independent sources.

**Corners / Cards**
Corners follow territorial dominance, not goals.
A team pinning the opponent back earns corners even in 0-0 games.
High possession + opponent defending deep = corners value independent of scoreline.

---

## Phase 6 — Final Output Format

```
MATCH: [Team A] vs [Team B] | [Date/Time] | [Group/Stage]
Odds: [Team A] / Draw / [Team B]

CONSENSUS SUMMARY
- Winner lean: [team] at [odds]
- Total goals lean: Over/Under [X]
- Where cluster splits: [the debate]

GAME FLOW MAP
- [Team A] needs: [must win / point / open]
- [Team B] needs: [must win / point / open]
- Expected shape: [who attacks, who defends, who sits deep]
- [Team A] scoring mechanism: [specific, concrete]
- [Team B] scoring mechanism: [specific, concrete]
- When does game open up: [trigger point]
- Key unknown: [the one variable that could flip everything]

STATISTICAL REALITY
- [Team A] last match: [result | xG | key observation]
- [Team B] last match: [result | xG | key observation]
- Adjustment: [what the xG says vs what the scoreline says]

STRESS TEST — FLAWS FOUND
(Only real flaws — do not manufacture them, do not ignore them)
1. [Flaw → market impact]
2. [Flaw → market impact]
3. [Flaw → market impact]

MARKET-BY-MARKET
| Market           | Lean            | Confidence | Reason (one line)       |
|------------------|-----------------|------------|--------------------------|
| Match winner     |                 |            |                          |
| Over/Under 2.5   |                 |            |                          |
| BTTS             |                 |            |                          |
| 1st half goals   |                 |            |                          |
| 2nd half goals   |                 |            |                          |
| Handicap         |                 |            |                          |
| Anytime scorer   |                 |            |                          |

HIGHEST CONFIDENCE CALLS: [2-3 picks that survived stress testing and game flow mapping]
AVOID: [markets where stress test found unresolved uncertainty]
```

---

## Key Principles

**Game flow first, stats second.**
Stats describe what happened. Game flow map predicts what will happen.
Build the market calls from the game flow map, then use stats to validate.

**The mechanism test is non-negotiable.**
Every Over call requires a named, specific, concrete scoring mechanism.
"They have good attackers" is not a mechanism. It is an assumption.

**The cluster is a signal, not an answer.**
Five experts agreeing with different reasoning = signal.
Five experts copying each other's narrative = noise.
The split between experts = where value lives.

**Stress test flaws change the output. Always.**
Finding a flaw and still backing the consensus is the most expensive mistake
in soccer prediction. If you find it, act on it.

**Confidence calibration (6 levels — use the data code in data.js):**
- **MAX** `XH` — Locked pattern confirmed + all three factors agree + cluster unanimous. Near-certainty. Use sparingly.
- **HIGH** `H` — Game flow map + stats + stress test all point the same direction. No unresolved doubts.
- **MED-HI** `MH` — Game flow map is clear, but one minor factor (a stat or a single stress test item) raises a small doubt. Still a strong call.
- **MED** `M` — Game flow points one way, but stats or stress test raise a real, unresolved doubt. Backing it but with reservation.
- **MED-LO** `ML` — More doubt than certainty after analysis. Lean only — not a strong bet.
- **LOW** `L` — Meaningful uncertainty remains after the full analysis. Flag as LOW, do not star.
- **Avoid** — Stress test found a real flaw with no resolution. Do not assign a confidence level — mark as "Avoid" in the market table.

**Respect the underdog's game plan.**
In tournament soccer, disciplined defending beats paper quality regularly.
Analyze the underdog's defensive plan with the same rigor as the favorite's attack.

**Motivation structure is the dominant variable (confirmed ARG vs AUT).**
Always run group table math FIRST. If neither team needs to win → Under + BTTS No
regardless of reputation, form, or scoring trends. This overrides everything.
