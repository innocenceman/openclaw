# openshell Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                 | Likely downstream impact                                             |
| -------------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/openshell/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/openshell/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `14` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 9, 'A': 4, 'D': 1}`.

- `extensions/openshell/index.ts`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/backend.test.ts`
- `extensions/openshell/src/backend.ts`
- `extensions/openshell/src/backend.types.ts`
- `extensions/openshell/src/config.test.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/mirror.ts`
- `extensions/openshell/src/openshell-core.test.ts`
- `extensions/openshell/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
