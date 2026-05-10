# Path Safety Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

1. Run fs/path/anchored operation targeted tests.
2. Escalate to sandbox workspace/browser/SSH checks when path changes cross backend boundaries.
