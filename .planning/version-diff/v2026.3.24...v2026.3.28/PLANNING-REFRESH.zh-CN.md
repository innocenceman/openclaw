# Planning Refresh

- Base: `v2026.3.24`
- Target: `v2026.3.28`
- Target source SHA: `f9b1079283a8ee25a7cee77c8f8225d5c813bc30`
- Status: `ready-for-semantic-refresh`

## Required refreshes

- .planning/impact-map target-only cleanup
- .planning/codebase or architecture atlas target-version refresh
- .planning/STATE.md baseline update
- version-diff human report projection check

## Deleted-path references in active impact-map

- None detected.

## Feature refresh actions

- `Bundled messaging channel plugins`: risk=`high`, compatibility=`behavior-change`
- `Plugin SDK, plugin registry, plugin loading boundaries`: risk=`high`, compatibility=`behavior-change`
- `Agent loop, ACP, spawning, command control`: risk=`high`, compatibility=`behavior-change`
- `Gateway, config, infrastructure, security and auth`: risk=`high`, compatibility=`behavior-change`
- `Model/search/provider plugins and tool surfaces`: risk=`high`, compatibility=`behavior-change`
- `Native apps and packaging`: risk=`high`, compatibility=`behavior-change`
- `Build, CI, scripts, tests and release automation`: risk=`medium`, compatibility=`compatible`
- `Miscellaneous repository surface`: risk=`medium`, compatibility=`unknown`
- `Memory, media, web UI and terminal UI surfaces`: risk=`medium`, compatibility=`behavior-change`
- `Docs, generated baselines, changelog and public guidance`: risk=`medium`, compatibility=`docs-only`
