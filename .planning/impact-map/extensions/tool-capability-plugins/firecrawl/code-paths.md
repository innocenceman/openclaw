# firecrawl Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                 | Likely downstream impact                                             |
| -------------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/firecrawl/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/firecrawl/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `19` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 7, 'D': 3, 'M': 9}`.

- `extensions/firecrawl/api.ts`
- `extensions/firecrawl/index.ts`
- `extensions/firecrawl/openclaw.plugin.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/src/config.ts`
- `extensions/firecrawl/src/firecrawl-client.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider.ts`
- `extensions/firecrawl/src/firecrawl-scrape-tool.ts`
- `extensions/firecrawl/src/firecrawl-search-provider.ts`
- `extensions/firecrawl/src/firecrawl-search-tool.ts`
- `extensions/firecrawl/src/firecrawl-tools.test.ts`
- `extensions/firecrawl/tsconfig.json`
- `extensions/firecrawl/web-fetch-contract-api.ts`
- `extensions/firecrawl/web-fetch-provider.ts`
- `extensions/firecrawl/web-search-contract-api.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/firecrawl/api.ts`
- `extensions/firecrawl/openclaw.plugin.json`
- `extensions/firecrawl/package.json`
- `extensions/firecrawl/src/config.ts`
- `extensions/firecrawl/src/firecrawl-client.ts`
- `extensions/firecrawl/src/firecrawl-fetch-provider-shared.ts`
- `extensions/firecrawl/src/firecrawl-tools.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
