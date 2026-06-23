// Game Sense — Data File
// UPDATE THIS FILE AFTER EVERY GAME. HTML never changes.
// Last updated: June 22, 2026

const WC_DATA = {
  lastUpdated: "June 22, 2026 — post NOR 3-2 SEN + FRA 3-0 IRQ",
  venmo: "mdogra3", // Venmo handle — links auto-generated from this

  modelStats: {
    gamesAnalyzed:   6,
    gamesCompleted:  4,
    marketsTracked:  31,
    marketsCorrect:  21,
    marketsWrong:    10,
    marketsPending:  20,
  },

  groups: [
    {
      id: "G",
      teams: [
        { name: "Egypt",       flag: "🇪🇬", p:2, w:1, d:1, l:0, gf:4, ga:2, pts:4, qualified: false },
        { name: "Iran",        flag: "🇮🇷", p:2, w:0, d:2, l:0, gf:2, ga:2, pts:2, qualified: false },
        { name: "Belgium",     flag: "🇧🇪", p:2, w:0, d:2, l:0, gf:1, ga:1, pts:2, qualified: false },
        { name: "New Zealand", flag: "🇳🇿", p:2, w:0, d:1, l:1, gf:3, ga:5, pts:1, qualified: false },
      ]
    },
    {
      id: "I",
      teams: [
        { name: "France",  flag: "🇫🇷", p:2, w:2, d:0, l:0, gf:6, ga:1, pts:6, qualified: true  },
        { name: "Norway",  flag: "🇳🇴", p:2, w:2, d:0, l:0, gf:7, ga:3, pts:6, qualified: true  },
        { name: "Senegal", flag: "🇸🇳", p:2, w:0, d:0, l:2, gf:3, ga:6, pts:0, qualified: false },
        { name: "Iraq",    flag: "🇮🇶", p:2, w:0, d:0, l:2, gf:1, ga:7, pts:0, qualified: false },
      ]
    },
    {
      id: "J",
      teams: [
        { name: "Argentina", flag: "🇦🇷", p:2, w:2, d:0, l:0, gf:5, ga:0, pts:6, qualified: true },
        { name: "Austria",   flag: "🇦🇹", p:2, w:1, d:0, l:1, gf:3, ga:3, pts:3, qualified: false },
        { name: "Jordan",    flag: "🇯🇴", p:1, w:0, d:0, l:1, gf:1, ga:3, pts:0, qualified: false },
        { name: "Algeria",   flag: "🇩🇿", p:1, w:0, d:0, l:1, gf:0, ga:3, pts:0, qualified: false },
      ]
    },
    {
      id: "K",
      teams: [
        { name: "Colombia",   flag: "🇨🇴", p:1, w:1, d:0, l:0, gf:3, ga:1, pts:3, qualified: false },
        { name: "Congo DR",   flag: "🇨🇩", p:1, w:0, d:1, l:0, gf:1, ga:1, pts:1, qualified: false },
        { name: "Portugal",   flag: "🇵🇹", p:1, w:0, d:1, l:0, gf:1, ga:1, pts:1, qualified: false },
        { name: "Uzbekistan", flag: "🇺🇿", p:1, w:0, d:0, l:1, gf:1, ga:3, pts:0, qualified: false },
      ]
    },
  ],

  matches: [
    // ── COMPLETED ─────────────────────────────────────────────────────────
    {
      id: "nzl-egy",
      date: "Jun 21",
      homeTeam: { name: "New Zealand", flag: "🇳🇿", code: "NZL" },
      awayTeam: { name: "Egypt",       flag: "🇪🇬", code: "EGY" },
      status: "completed",
      result: { home: 1, away: 3 },
      predictions: {
        winner:     { call: "Egypt",     result: "Egypt 3-1",         correct: true,  conf: "M" },
        overUnder:  { call: "Under 2.5", result: "Over (4 goals)",    correct: false, conf: "M" },
        btts:       { call: "No",        result: "Yes — NZL scored",  correct: false, conf: "M" },
        firstHalf:  { call: "U0.5 ⭐",   result: "Goal at 15'",       correct: false, conf: "H" },
        secondHalf: { call: "O1.5",      result: "3 second-half goals", correct: true, conf: "M" },
        handicap:   { call: "EGY -1",    result: "Covered (won by 2)", correct: true, conf: "L" },
        scorer1:    { call: "Salah",     result: "Scored 67'",         correct: true,  conf: "M" },
        scorer2:    { call: "Marmoush",  result: "Did not score",      correct: false, conf: "M" },
      },
      keyInsight: "Set-piece mechanism fires from minute 1, not just 2H. Egypt's defensive DNA dissolved when they fell behind — going behind overrides any team identity.",
      score: { correct: 4, total: 8 },
      report: {
        consensus: "Egypt to win — unanimous. Total goals: most sources Under, citing Egypt's defensive DNA. Set-piece threat from NZL noted but not factored into 1H markets.",
        gameFlow: {
          home:      "New Zealand — need result after Iran draw. Must attack.",
          away:      "Egypt — 1pt from Iran draw, another point acceptable. Expected to defend deep.",
          mechanism: "NZL: Bell/Surman set pieces — confirmed 0.67 set-play xG vs Iran. EGY: Salah individual quality, Marmoush movement vs low block.",
          trigger:   "Egypt going behind (15') — defensive DNA dissolved, forced to attack, scored 3 in 2H.",
        },
        stressTest: [
          "Set-piece mechanism fires from minute 1 — U0.5 1H was wrong despite NZL's confirmed 0.67 set-play xG vs Iran",
          "Egypt's defensive DNA dissolved when they fell 0-1 behind — going behind overrides any team identity",
          "Marmoush scorer lacked a concrete mechanism vs NZL's disciplined low block — no named path to goal",
        ],
      },
    },
    {
      id: "arg-aut",
      date: "Jun 22",
      homeTeam: { name: "Argentina", flag: "🇦🇷", code: "ARG" },
      awayTeam: { name: "Austria",   flag: "🇦🇹", code: "AUT" },
      status: "completed",
      result: { home: 2, away: 0 },
      predictions: {
        winner:     { call: "Argentina",                        result: "ARG 2-0",           correct: true,  conf: "M" },
        overUnder:  { call: "Under 2.5 ⭐ (vs cluster Over)",  result: "Under — 2 goals",   correct: true,  conf: "H" },
        btts:       { call: "No",                               result: "AUT 0 goals",        correct: true,  conf: "M" },
        firstHalf:  { call: "U1.5 ⭐",                         result: "1 goal at 38'",      correct: true,  conf: "H" },
        secondHalf: { call: "O0.5",                             result: "Goal at 90'",        correct: true,  conf: "M" },
        handicap:   { call: "ARG -1",                           result: "Won by 2 — covers",  correct: true,  conf: "L" },
        scorer1:    { call: "Messi ⭐",                        result: "Scored ~38'",        correct: true,  conf: "H" },
        winToNil:   { call: "Yes",                              result: "Clean sheet",        correct: true,  conf: "M" },
      },
      keyInsight: "Motivation structure is the dominant variable. Neither team needed to win → conservative game → every Under/BTTS No market hit. Cluster's Over lean anchored on MD1 scorelines without running group table math.",
      score: { correct: 8, total: 8 },
      report: {
        consensus: "Over 2.5 — CBS SportsLine, SportsLine. Racing Post predicted 2-0 correct score, which implicitly contradicts Over 2.5. The cluster was contradicting itself without noticing.",
        gameFlow: {
          home:      "Argentina — win preferred but draw advances them comfortably (already 3pts from MD1).",
          away:      "Austria — same. Both teams advance with a draw. Neither team needed to win.",
          mechanism: "ARG: De Paul → Messi half-space → Lautaro/Álvarez in behind. AUT: Schmid from range, set pieces — BUT Baumgartner OUT, through-ball mechanism broken vs Romero/Lisandro.",
          trigger:   "Austria falling behind → then forced to push → opens counter space for ARG's second goal.",
        },
        stressTest: [
          "Group table math: neither team must win → conservative game guaranteed → Over 2.5 lean invalidated immediately",
          "Austria without Baumgartner = no through-ball vs elite CBs (Romero/Lisandro) → BTTS No confirmed",
          "Cluster anchored on MD1 scorelines (3-0, 3-1) without checking group table math — the textbook scoreline trap",
        ],
      },
    },

    // ── PENDING / UPCOMING ─────────────────────────────────────────────────
    {
      id: "nor-sen",
      date: "Jun 22",
      homeTeam: { name: "Norway",  flag: "🇳🇴", code: "NOR" },
      awayTeam: { name: "Senegal", flag: "🇸🇳", code: "SEN" },
      status: "completed",
      result: { home: 3, away: 2 },
      predictions: {
        winner:     { call: "Draw ⭐ (vs NOR lean)", result: "NOR 3-2 — Norway controlled",       correct: false, conf: "M" },
        overUnder:  { call: "Under 2.5",             result: "Over — 5 goals",                    correct: false, conf: "M" },
        btts:       { call: "Yes",                   result: "Yes — Sarr scored twice",           correct: true,  conf: "M" },
        firstHalf:  { call: "U1.5 ⭐",              result: "1-0 HT, Pedersen 43' only goal",    correct: true,  conf: "H" },
        secondHalf: { call: "O0.5",                  result: "4 goals: Haaland ×2, Sarr ×2",     correct: true,  conf: "H" },
        scorer1:    { call: "Haaland",               result: "Scored twice (48', 58')",           correct: true,  conf: "H" },
        scorer2:    { call: "Sorloth ⭐",            result: "Did not score",                     correct: false, conf: "M" },
      },
      keyInsight: "Senegal never sat back — they attacked from the start, making the draw call structurally wrong. Game exploded: 5 goals, both teams open all match. 1H U1.5 ⭐ was the cleanest hit (HT 1-0, Pedersen 43'). Haaland delivered twice. Sorloth pick wrong — Norway's other goals came from Pedersen + Haaland.",
      score: { correct: 4, total: 7 },
      report: {
        consensus: "Norway win — narrow majority. Split on the draw at +230 (Covers.com explicit value call). Over 2.5 from SportsLine citing Norway's 8 goals. Critical cluster contradiction: sources backing NOR win + Over assume SEN attacks openly; sources backing draw assume SEN defends first. These cannot both be right — group table determines which is correct.",
        gameFlow: {
          home:      "Norway — win = qualify tonight, but draw = 4pts, comfortable for MD3 vs France. Solbakken has no reason to gamble.",
          away:      "Senegal — MUST NOT LOSE. Not a pure must-win. Minimum 1 point. Will defend first, probe second — not throw men forward recklessly.",
          mechanism: "NOR: Wide delivery → Haaland central run. Odegaard through-balls. Sorloth arrives unmarked when Koulibaly double-covers Haaland. SEN: Mane counter-attack central channel. Sarr pace vs Wolfe (Norway's least tested FB). Jackson in behind.",
          trigger:   "55-65' if 0-0 — Norway push Aursnes higher. Senegal's internal tension (need a point, can't afford to lose) creates hesitation at the decision moment.",
        },
        stressTest: [
          "Cluster's Over lean assumes SEN attack openly — group table says they won't. Must-not-lose posture = defensive first → Under 2.5",
          "Idrissa Gana Gueye screening Odegaard — nobody in the cluster mentions this. If Gueye wins the midfield battle, Haaland's service drops dramatically",
          "Haaland vs Koulibaly ≠ Haaland vs Iraq. Norway's 11-of-12 inside-box shots was against the worst defense in the tournament. Quality adjustment required",
          "Draw structurally supported by BOTH teams' group positions — when both teams' optimal minimum is the same outcome, the win lean is structurally wrong",
        ],
      },
    },
    {
      id: "alg-jor",
      date: "Jun 22",
      homeTeam: { name: "Algeria", flag: "🇩🇿", code: "ALG" },
      awayTeam: { name: "Jordan",  flag: "🇯🇴", code: "JOR" },
      status: "pending",
      kickoff: "10:00 PM CDT",
      predictions: {
        winner:    { call: "Algeria",      result: null, correct: null, conf: "M" },
        overUnder: { call: "Over 2.5 ⭐",  result: null, correct: null, conf: "H" },
        btts:      { call: "Yes ⭐",       result: null, correct: null, conf: "H" },
        firstHalf: { call: "U1.5",         result: null, correct: null, conf: "M" },
        scorer1:   { call: "Gouiri ⭐",    result: null, correct: null, conf: "H" },
        scorer2:   { call: "Tamari",       result: null, correct: null, conf: "M" },
      },
      keyInsight: "Pattern 2 in reverse: both must win → both attack from KO → Over/BTTS is the structural call. Mahrez confirmed starting. Eimer's Under 2.5 dissent rejected — 'both desperate = caution' fails when neither team can defend for a draw. Jordan's 0.9+ xG vs AUT (4 shots on target, scored at 50') means they WILL find the net.",
      score: { correct: null, total: 6 },
      report: {
        consensus: "Algeria unanimous at -195 (Opta 60.7% win, 25k simulations). O/U split: majority Over (Racing Post bet builder, Covers -108, RotoWire 1-2 implied) vs Eimer/CBS Under (-110). Scorer cluster: Gouiri at +125/+165 (primary), Mahrez, Amoura. Key trap: Algeria 0-3 scoreline anchoring — that was vs Romero/Lisandro. Jordan's backline is categorically different. Jordan's 1-3 scoreline overstates their performance — 4 shots on target, more than Austria's 3.",
        gameFlow: {
          home:      "Algeria — MUST WIN. Push forward from minute 1. Mahrez confirmed starting = creative mechanism fully active. Ait-Nouri overlapping left creates width overloads on Jordan's exposed wingback.",
          away:      "Jordan — MUST WIN. Cannot park the bus. Deep block (their best shape) is structurally unavailable tonight. Tamari roaming right = counter-attack mechanism when Algeria overcommit (they will).",
          mechanism: "ALG: Mahrez cuts inside from right half-space, Gouiri arrives late from second position, Ait-Nouri wide left. Set pieces: Mahrez delivery quality vs Jordan's OG+pen vulnerability vs AUT. JOR: Tamari counter pace in channels when Algeria push men forward. Olwan movement (scored vs AUT).",
          trigger:   "Open from kick-off — both must win removes any settling period. First goal escalates desperation immediately, accelerating all subsequent goals.",
        },
        stressTest: [
          "Eimer (CBS, 21-10 run) backs Under 2.5 — dissent rejected: 'both desperate = caution' fails mechanism test. Both must win = both attack. Pattern 2 runs in reverse here. Over confirmed.",
          "Algeria's 0 xG vs ARG cannot project forward — Romero/Lisandro are the best CB pair in the tournament. Jordan's backline is average. Mahrez starting = mechanism active. Algeria winner stays Medium (not dropped).",
          "Jordan's 1-3 scoreline overstates their defensive problems — 0.9+ xG, 4 shots on target, Olwan scored at 50'. BTTS mechanism confirmed. Avoid Algeria win-to-nil (+140, FOX).",
          "Chaibi (Racing Post anytime bet builder pick) is NOT in the starting lineup — likely sub. Don't back as primary scorer. Gouiri (+125) is the correct play.",
        ],
      },
    },
    {
      id: "fra-irq",
      date: "Jun 22",
      homeTeam: { name: "France", flag: "🇫🇷", code: "FRA" },
      awayTeam: { name: "Iraq",   flag: "🇮🇶", code: "IRQ" },
      status: "completed",
      result: { home: 3, away: 0 },
      predictions: {
        winner:     { call: "France",       result: "FRA 3-0",                         correct: true,  conf: "H" },
        overUnder:  { call: "Over 2.5 ⭐",  result: "Over — 3 goals",                 correct: true,  conf: "H" },
        secondHalf: { call: "O1.5 ⭐",     result: "2 goals (Mbappe 54', Dembele 66')", correct: true,  conf: "H" },
        scorer1:    { call: "Mbappe ⭐",   result: "2 goals (14', 54')",              correct: true,  conf: "H" },
        firstHalf:  { call: "O0.5",         result: "Yes — Mbappe 14'",               correct: true,  conf: "M" },
        over35:     { call: "Over 3.5",     result: "Under — exactly 3 goals",        correct: false, conf: "M" },
        btts:       { call: "Yes",          result: "No — Iraq 0 shots on target",    correct: false, conf: "M" },
        scorer2:    { call: "Barcola",      result: "Dembele scored, not Barcola",    correct: false, conf: "M" },
      },
      keyInsight: "Mbappe brace + Dembele sealed it. Iraq's 0 shots on target killed the BTTS call — they never truly threatened despite 44% possession. 2H O1.5 ⭐ hit cleanly (54' + 66') despite a 2-hour lightning delay. Over 3.5 missed narrowly — exactly 3. Dembele started and scored; Barcola pick was wrong.",
      score: { correct: 5, total: 8 },
      report: {
        consensus: "France to win — unanimous at -1500. Total goals split: Over 2.5 consensus, Over 3.5 at ~-124 is the sharper value debate (CBS SportsLine specific pick). Internal contradiction: some sources calling 3-0 France while backing BTTS Yes simultaneously.",
        gameFlow: {
          home:      "France — win preferred to control Group I top spot. Olise centrally feeding Mbappe in behind.",
          away:      "Iraq — MUST WIN. Cannot sit 5-4-1 for 90 mins. Push men forward from kick-off.",
          mechanism: "FRA: Olise → through-ball → Mbappe in behind Iraq's exposed line. IRQ: Hussein aerial threat (scored vs Norway), Ali Al-Hamadi pace. France have conceded in 6 consecutive games.",
          trigger:   "Iraq must push from minute 1 — game is open from KO. Once France score, Iraq's urgency escalates further, creating more counter space.",
        },
        stressTest: [
          "France 1H flatness (0.02 xG vs Senegal in 1H) — if Olise starts wide, France are flat for 45 mins → 1H O0.5 is Medium",
          "Iraq has a real BTTS mechanism: Hussein aerial (scored vs Norway) + France 6-game no-clean-sheet run + must-attack structure",
          "France -2.5 handicap (Fox Sports rec) — Iraq will score. AVOID this market. Stick to -1.",
          "Giant vs minnow trap: lazy 2-0 call misses Iraq's must-win motivation entirely",
        ],
      },
    },
    {
      id: "por-uzb",
      date: "Jun 23",
      homeTeam: { name: "Portugal",   flag: "🇵🇹", code: "POR" },
      awayTeam: { name: "Uzbekistan", flag: "🇺🇿", code: "UZB" },
      status: "upcoming",
      kickoff: "12:00 PM CDT",
      predictions: {
        winner:     { call: "Portugal",       result: null, correct: null, conf: "M" },
        overUnder:  { call: "Under 2.5",      result: null, correct: null, conf: "M" },
        btts:       { call: "No",             result: null, correct: null, conf: "M" },
        firstHalf:  { call: "U1.5 ⭐",       result: null, correct: null, conf: "H" },
        scorer1:    { call: "Joao Neves ⭐", result: null, correct: null, conf: "H" },
        scorer2:    { call: "Fernandes",      result: null, correct: null, conf: "M" },
      },
      keyInsight: "Portugal's deep-block breaking mechanism produced only 0.64 xG vs Congo DR. Ronaldo structural problem — not a footnote. Neither team must win → motivation structure override → conservative game.",
      score: { correct: null, total: 6 },
      report: {
        consensus: "Portugal to win — unanimous. Total goals: mixed — some Over 2.5 based on Ronaldo narrative. Ronaldo scorer picks everywhere across all tiers.",
        gameFlow: {
          home:      "Portugal — a draw keeps them in qualification contention, no must-win pressure.",
          away:      "Uzbekistan — can still advance. Neither team forced to be fully open.",
          mechanism: "POR: deep-block breaking produced 0.64 xG vs Congo DR. Joao Neves is the form carrier, not Ronaldo. UZB: set pieces, transition off compact shape.",
          trigger:   "If Portugal fall behind — then they must push, opening counter space for UZB.",
        },
        stressTest: [
          "Portugal's xG vs Congo DR was 0.64 — compact defensive blocks neutralize their buildup completely",
          "Ronaldo structural problem: not finding space behind defensive lines, not on set pieces — drop him as scorer pick",
          "Neither team must win → motivation structure override → Under + BTTS No regardless of Portugal's reputation",
        ],
      },
    },
  ],

  patterns: [
    {
      id: 1,
      status: "locked",
      title: "Set-piece mechanism fires from minute 1",
      detail: "When a team's primary scoring mechanism is set pieces (confirmed by data), never simultaneously predict U0.5 first half. Set pieces are tempo-independent.",
      trigger: "NZL vs EGY: predicted U0.5 1H despite knowing NZL's set-play xG was 0.67 vs Iran. Surman scored at 15' from a Bell corner.",
    },
    {
      id: 2,
      status: "locked",
      title: "Motivation structure overrides all other variables",
      detail: "Always run group table math FIRST. If neither team needs to win → Under + BTTS No regardless of reputation, form, or scoring trends.",
      trigger: "ARG vs AUT: cluster backed Over on MD1 scorelines. Table math showed both advance with a draw. Final: 2-0, all Under/BTTS No markets hit.",
    },
    {
      id: 3,
      status: "locked",
      title: "Scoreline vs xG: anchor on xG, not the score",
      detail: "An overperforming result (score >> xG) regresses. An underperforming result (xG >> score) recovers. Never project a scoreline without the xG check.",
      trigger: "NZL vs EGY: cluster read NZL's 2-2 vs Iran as form evidence. Just scored 2 goals on 0.31 xG = extreme overperformance. xG check correctly predicted regression.",
    },
    {
      id: 4,
      status: "locked",
      title: "Going behind overrides team DNA",
      detail: "Any team that falls behind, regardless of defensive identity, is forced to push forward. Model for 'what does this team do if they concede first?' before calling Under.",
      trigger: "EGY vs NZL: Egypt 'defensive-first' DNA dissolved when they fell 0-1. Three second-half goals as they pushed forward.",
    },
  ],
};
