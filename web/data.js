// Game Sense — Data File
// UPDATE THIS FILE AFTER EVERY GAME. HTML never changes.
// Last updated: June 22, 2026

const WC_DATA = {
  lastUpdated: "June 22, 2026 — post ARG 2-0 AUT",
  venmo: "mdogra3", // Venmo handle — links auto-generated from this

  modelStats: {
    gamesAnalyzed:   6,
    gamesCompleted:  2,
    marketsTracked:  16,
    marketsCorrect:  12,
    marketsWrong:    4,
    marketsPending:  34,
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
        { name: "Norway",  flag: "🇳🇴", p:1, w:1, d:0, l:0, gf:4, ga:1, pts:3, qualified: false },
        { name: "France",  flag: "🇫🇷", p:1, w:1, d:0, l:0, gf:3, ga:1, pts:3, qualified: false },
        { name: "Senegal", flag: "🇸🇳", p:1, w:0, d:0, l:1, gf:1, ga:3, pts:0, qualified: false },
        { name: "Iraq",    flag: "🇮🇶", p:1, w:0, d:0, l:1, gf:1, ga:4, pts:0, qualified: false },
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
      status: "pending",
      kickoff: "7:00 PM CDT",
      predictions: {
        winner:     { call: "Draw ⭐ (vs NOR lean)", result: null, correct: null, conf: "M" },
        overUnder:  { call: "Under 2.5",             result: null, correct: null, conf: "M" },
        btts:       { call: "Yes",                   result: null, correct: null, conf: "M" },
        firstHalf:  { call: "U1.5 ⭐",              result: null, correct: null, conf: "H" },
        secondHalf: { call: "O0.5",                  result: null, correct: null, conf: "H" },
        scorer1:    { call: "Haaland",               result: null, correct: null, conf: "H" },
        scorer2:    { call: "Sorloth ⭐",            result: null, correct: null, conf: "M" },
      },
      keyInsight: "Senegal must-not-lose + Norway comfortable with draw = structural draw the cluster ignores. Koulibaly + Idrissa Gana Gueye double pivot are the tactical factors nobody mentions. Draw at +230 is the value call.",
      score: { correct: null, total: 7 },
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
        scorer1:   { call: "Al-Dardour",   result: null, correct: null, conf: "M" },
      },
      keyInsight: "Both teams must win to control MD3 destiny. Locked pattern runs in reverse: both attack from KO, neither can park the bus. Jordan's defensive DNA is irrelevant tonight. Over/BTTS is the structural call — not the quality call.",
      score: { correct: null, total: 5 },
      report: {
        consensus: "Algeria expected favorite (~-150 to -200) on ranking/squad quality. Over lean from 'both desperate' narrative. Key trap: 'Algeria redemption after 0-3 humiliation' — scoreline anchoring. The 0-3 was against Romero/Lisandro. Jordan's backline is categorically different.",
        gameFlow: {
          home:      "Algeria — must win to face AUT in MD3 (vs ARG if they lose). Push forward from the start. Mahrez (if fit) is the key creative mechanism.",
          away:      "Jordan — must win to face ARG rotation in MD3 (vs AUT if they lose). Defensive DNA (deep block) is their strength — but tonight they're forced to abandon it.",
          mechanism: "ALG: Mahrez quality in behind Jordan's flat backline (key unknown — confirm lineup). Slimani hold-up + runners. Set pieces. JOR: Al-Dardour physical duels + set pieces. Al-Taamari pace in transition. Counter when Algeria overcommit.",
          trigger:   "Game is open from kick-off — no trigger needed. Both chasing. First goal escalates the chasing team's desperation immediately, accelerating further goals.",
        },
        stressTest: [
          "Algeria's 0 shots on target was vs Romero/Lisandro — best CB pair in the tournament. Cannot project forward. Algeria vs Jordan's average backline is a completely different game",
          "Jordan's 1-3 scoreline overstates how poor they were — 4 shots on target (more than Austria's 3), scored at 50', then conceded OG + stoppage pen. They are more competitive than that result implies",
          "Jordan's defensive DNA is irrelevant tonight — must-win forces them to abandon their best shape. A Jordan chasing a goal is Jordan at their defensive worst",
          "Mahrez is the biggest swing factor — if he starts, Algeria's ceiling vs Jordan's backline rises dramatically. Confirm before backing ALG -1.5 AH",
        ],
      },
    },
    {
      id: "fra-irq",
      date: "Jun 22",
      homeTeam: { name: "France", flag: "🇫🇷", code: "FRA" },
      awayTeam: { name: "Iraq",   flag: "🇮🇶", code: "IRQ" },
      status: "pending",
      kickoff: "4:00 PM CDT",
      predictions: {
        winner:     { call: "France",       result: null, correct: null, conf: "H" },
        overUnder:  { call: "Over 2.5 ⭐",  result: null, correct: null, conf: "H" },
        over35:     { call: "Over 3.5",     result: null, correct: null, conf: "M" },
        btts:       { call: "Yes",          result: null, correct: null, conf: "M" },
        firstHalf:  { call: "O0.5",         result: null, correct: null, conf: "M" },
        secondHalf: { call: "O1.5 ⭐",     result: null, correct: null, conf: "H" },
        scorer1:    { call: "Mbappe ⭐",   result: null, correct: null, conf: "H" },
        scorer2:    { call: "Barcola",      result: null, correct: null, conf: "M" },
      },
      keyInsight: "Iraq MUST WIN — they cannot park the bus for 90 mins. This removes their only defensive option and opens the game beyond every giant-vs-minnow template. Iraq's urgency is the mechanism behind Over 3.5, not France's quality alone.",
      score: { correct: null, total: 8 },
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
