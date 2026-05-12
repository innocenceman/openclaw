# lobster Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                               | Likely downstream impact                                             |
| -------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/lobster/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/lobster/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `14` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 6, 'A': 7, 'D': 1}`.

- `extensions/lobster/README.md`
- `extensions/lobster/index.ts`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-core.d.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.test.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`
- `extensions/lobster/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/lobster/index.ts`
- `extensions/lobster/openclaw.plugin.json`
- `extensions/lobster/package.json`
- `extensions/lobster/src/lobster-ajv-cache.ts`
- `extensions/lobster/src/lobster-runner.test.ts`
- `extensions/lobster/src/lobster-runner.ts`
- `extensions/lobster/src/lobster-taskflow.ts`
- `extensions/lobster/src/lobster-tool.test.ts`
- `extensions/lobster/src/lobster-tool.ts`
- `extensions/lobster/src/taskflow-test-helpers.ts`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
