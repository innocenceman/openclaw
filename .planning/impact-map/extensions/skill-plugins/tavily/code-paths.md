# tavily Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                              | Likely downstream impact                                             |
| -------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/tavily/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/tavily/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `15` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 3, 'M': 9, 'A': 3}`.

- `extensions/tavily/openclaw.plugin.json`
- `extensions/tavily/package.json`
- `extensions/tavily/src/config.ts`
- `extensions/tavily/src/tavily-client.test.ts`
- `extensions/tavily/src/tavily-client.ts`
- `extensions/tavily/src/tavily-extract-tool.ts`
- `extensions/tavily/src/tavily-search-provider.ts`
- `extensions/tavily/src/tavily-search-tool.ts`
- `extensions/tavily/src/tavily-tool-schema.ts`
- `extensions/tavily/src/tavily-tools.test.ts`
- `extensions/tavily/tsconfig.json`
- `extensions/tavily/web-search-contract-api.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
