# microsoft Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                 | Likely downstream impact                                             |
| -------------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/microsoft/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/microsoft/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `9` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 2, 'M': 6, 'D': 1}`.

- `extensions/microsoft/microsoft.live.test.ts`
- `extensions/microsoft/openclaw.plugin.json`
- `extensions/microsoft/package.json`
- `extensions/microsoft/speech-provider.test.ts`
- `extensions/microsoft/speech-provider.ts`
- `extensions/microsoft/tsconfig.json`
- `extensions/microsoft/tts.test.ts`
- `extensions/microsoft/tts.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
