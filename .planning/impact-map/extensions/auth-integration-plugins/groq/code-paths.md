# groq Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                            | Likely downstream impact                                             |
| -------------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/groq/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/groq/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `6` changed path(s) to this final leaf. `5` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3, 'D': 1, 'A': 2}`.

- `extensions/groq/media-understanding-provider.ts`
- `extensions/groq/openclaw.plugin.json`
- `extensions/groq/package.json`
- `extensions/groq/test-api.ts`
- `extensions/groq/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
