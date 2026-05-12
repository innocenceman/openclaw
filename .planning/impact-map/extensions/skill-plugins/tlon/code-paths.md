# tlon Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                            | Likely downstream impact                                             |
| -------------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/tlon/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/tlon/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `25` changed path(s) to this final leaf. `25` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 19, 'A': 6}`.

- `extensions/tlon/src/account-fields.ts`
- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/doctor-contract.ts`
- `extensions/tlon/src/doctor.test.ts`
- `extensions/tlon/src/doctor.ts`
- `extensions/tlon/src/logger-runtime.ts`
- `extensions/tlon/src/monitor/approval-runtime.ts`
- `extensions/tlon/src/monitor/approval.test.ts`
- `extensions/tlon/src/monitor/approval.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.test.ts`
- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/monitor/settings-helpers.test.ts`
- `extensions/tlon/src/monitor/settings-helpers.ts`
- `extensions/tlon/src/runtime.ts`
- `extensions/tlon/src/security.test.ts`
- `extensions/tlon/src/setup-surface.ts`
- `extensions/tlon/src/types.ts`
- `extensions/tlon/src/urbit/channel-ops.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/story.ts`
- `extensions/tlon/src/urbit/upload.test.ts`
- `extensions/tlon/src/urbit/upload.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.ts`
- `extensions/tlon/src/monitor/settings-helpers.ts`
- `extensions/tlon/src/setup-surface.ts`
- `extensions/tlon/src/types.ts`
- `extensions/tlon/src/urbit/channel-ops.ts`
- `extensions/tlon/src/urbit/context.ts`
- `extensions/tlon/src/urbit/errors.ts`
- `extensions/tlon/src/urbit/fetch.ts`
- `extensions/tlon/src/urbit/foreigns.ts`
- `extensions/tlon/src/urbit/story.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
