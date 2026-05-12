# Planning Refresh

- Base: `v2026.4.24`
- Target: `v2026.5.4`
- Target source SHA: `325df3efefe9c0887d9357732e68fc8556e78d79`
- Status: `ready-for-semantic-refresh`

## Required refreshes

- .planning/impact-map target-only cleanup
- .planning/codebase or architecture atlas target-version refresh
- .planning/STATE.md baseline update
- version-diff human report projection check

## Deleted-path references in active impact-map

- None detected.

## Feature refresh actions

- `Docs, generated baselines, changelog and public guidance`: risk=`medium`, compatibility=`docs-only`
- `Bundled messaging channel plugins`: risk=`high`, compatibility=`behavior-change`
- `Agent loop, ACP, spawning, command control`: risk=`high`, compatibility=`behavior-change`
- `Build, CI, scripts, tests and release automation`: risk=`medium`, compatibility=`compatible`
- `Memory, media, web UI and terminal UI surfaces`: risk=`medium`, compatibility=`behavior-change`
- `CLI command surface, status output, onboarding and maintenance commands`: risk=`medium`, compatibility=`behavior-change`
- `Native apps and packaging`: risk=`high`, compatibility=`behavior-change`
- `Shared runtime primitives, compatibility, logging and startup support`: risk=`medium`, compatibility=`behavior-change`
- `Model/search/provider plugins and tool surfaces`: risk=`high`, compatibility=`behavior-change`
- `Gateway, config, infrastructure, security and auth`: risk=`high`, compatibility=`behavior-change`
- `Plugin SDK, plugin registry, plugin loading boundaries`: risk=`high`, compatibility=`behavior-change`
- `Miscellaneous repository surface`: risk=`medium`, compatibility=`unknown`
- `Bundled skill plugins and skill runtime surfaces`: risk=`high`, compatibility=`behavior-change`
- `Outbound delivery, routing, formatting, identity and network infrastructure`: risk=`medium`, compatibility=`behavior-change`
