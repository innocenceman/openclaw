# cloudflare-ai-gateway Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                                          | Likely downstream impact                                       |
| ------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/cloudflare-ai-gateway/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/cloudflare-ai-gateway/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/cloudflare-ai-gateway/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 5, 'A': 2, 'D': 1}`.

- `extensions/cloudflare-ai-gateway/api.ts`
- `extensions/cloudflare-ai-gateway/catalog-provider.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/models.ts`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/cloudflare-ai-gateway/catalog-provider.ts`
- `extensions/cloudflare-ai-gateway/index.test.ts`
- `extensions/cloudflare-ai-gateway/index.ts`
- `extensions/cloudflare-ai-gateway/openclaw.plugin.json`
- `extensions/cloudflare-ai-gateway/package.json`
- `extensions/cloudflare-ai-gateway/provider-discovery.contract.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.test.ts`
- `extensions/cloudflare-ai-gateway/stream-wrappers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
