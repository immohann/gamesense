#!/usr/bin/env node
// Polls ESPN's public WC scoreboard every 5 min until match reaches FT.
// When FT detected: waits 15 min then triggers run.js post.
//
// Usage: node scripts/pulse.js <matchId>
// Example: node scripts/pulse.js nor-sen

const { spawnSync } = require('child_process');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const matchId = process.argv[2];
if (!matchId) { console.error('Usage: node scripts/pulse.js <matchId>'); process.exit(1); }

const schedule = require(path.join(ROOT, 'schedule.json'));
const match = schedule.matches.find(m => m.matchId === matchId);
if (!match) { console.error(`Match not found in schedule.json: ${matchId}`); process.exit(1); }

// ESPN team name → FIFA 3-letter code (expand as needed)
const ESPN_NAMES = {
  'Norway': 'NOR', 'Senegal': 'SEN', 'France': 'FRA', 'Iraq': 'IRQ',
  'Argentina': 'ARG', 'Austria': 'AUT', 'Algeria': 'ALG', 'Jordan': 'JOR',
  'Portugal': 'POR', 'Uzbekistan': 'UZB', 'Egypt': 'EGY', 'Iran': 'IRN',
  'Belgium': 'BEL', 'New Zealand': 'NZL', 'Spain': 'ESP', 'Uruguay': 'URU',
  'Cape Verde': 'CPV', 'Saudi Arabia': 'SAU',
};

const POLL_INTERVAL_MS  = 5  * 60 * 1000;  // 5 min
const POST_FT_WAIT_MS   = 15 * 60 * 1000;  // 15 min after FT
const MAX_DURATION_MS   = 130 * 60 * 1000; // safety cap: 130 min from KO

const ESPN_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

async function checkMatch() {
  const res = await fetch(ESPN_URL);
  if (!res.ok) throw new Error(`ESPN API ${res.status}`);
  const data = await res.json();
  const events = data.events || [];

  for (const event of events) {
    const comp = event.competitions?.[0];
    if (!comp) continue;
    const [c0, c1] = comp.competitors || [];
    if (!c0 || !c1) continue;

    const homeCode = ESPN_NAMES[c0.team?.displayName] || c0.team?.abbreviation;
    const awayCode = ESPN_NAMES[c1.team?.displayName] || c1.team?.abbreviation;

    const isOurMatch =
      (homeCode === match.home && awayCode === match.away) ||
      (homeCode === match.away && awayCode === match.home);

    if (!isOurMatch) continue;

    const statusName = event.status?.type?.name || '';
    const statusDesc = event.status?.type?.description || '';
    const homeGoals  = parseInt(c0.score || 0, 10);
    const awayGoals  = parseInt(c1.score || 0, 10);

    const finished = statusName === 'STATUS_FULL_TIME' ||
                     statusName === 'STATUS_FINAL'     ||
                     statusDesc.toLowerCase().includes('final');

    return { finished, homeGoals, awayGoals, statusName };
  }

  return { finished: false, homeGoals: null, awayGoals: null, statusName: 'not_found' };
}

async function main() {
  console.log(`[pulse] Watching ${matchId} (${match.home} vs ${match.away})`);
  const startTime = Date.now();

  while (Date.now() - startTime < MAX_DURATION_MS) {
    try {
      const { finished, homeGoals, awayGoals, statusName } = await checkMatch();
      const elapsed = Math.round((Date.now() - startTime) / 60000);
      console.log(`[pulse] ${elapsed}min — status: ${statusName} | score: ${homeGoals}-${awayGoals}`);

      if (finished) {
        console.log(`[pulse] ✅ FT detected — ${match.home} ${homeGoals}-${awayGoals} ${match.away}`);
        console.log(`[pulse] Waiting 15 min before post-match pipeline...`);
        await sleep(POST_FT_WAIT_MS);

        console.log(`[pulse] Triggering post-match: ${matchId} ${homeGoals}-${awayGoals}`);
        const result = spawnSync(
          'node',
          ['run.js', 'post', matchId, String(homeGoals), String(awayGoals)],
          { cwd: ROOT, stdio: 'inherit' }
        );
        process.exit(result.status || 0);
      }
    } catch (err) {
      console.error(`[pulse] API error: ${err.message} — retrying in 5 min`);
    }

    await sleep(POLL_INTERVAL_MS);
  }

  console.error(`[pulse] Safety cap reached (130 min). Run post-match manually: node run.js post ${matchId}`);
  process.exit(1);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main();
