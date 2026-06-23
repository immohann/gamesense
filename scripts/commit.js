#!/usr/bin/env node
// Handles git add + commit + push after every pipeline run.
// Called by run.js with a pre-built commit message.

const { execSync } = require('child_process');

function run(message) {
  if (!message) throw new Error('commit.js: message required');
  try {
    execSync('git add -A', { stdio: 'inherit' });
    execSync(`git commit -m "${message}\n\nCo-Authored-By: Game Sense Automation <noreply@gamesense.ai>"`, { stdio: 'inherit' });
    // Push only if a remote exists
    const remotes = execSync('git remote').toString().trim();
    if (remotes) {
      execSync('git push', { stdio: 'inherit' });
      console.log('  pushed → auto-deploy triggered');
    } else {
      console.log('  committed locally (no remote yet — add one with: git remote add origin <url>)');
    }
  } catch (err) {
    console.error('git error:', err.message);
    process.exit(1);
  }
}

module.exports = { run };

// Allow direct invocation: node scripts/commit.js "message"
if (require.main === module) {
  const msg = process.argv.slice(2).join(' ');
  if (!msg) { console.error('Usage: node scripts/commit.js "commit message"'); process.exit(1); }
  run(msg);
}
