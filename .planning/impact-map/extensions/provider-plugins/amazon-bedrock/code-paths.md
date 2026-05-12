# amazon-bedrock Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                                   | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/amazon-bedrock/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/amazon-bedrock/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/amazon-bedrock/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `17` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 11, 'M': 5, 'D': 1}`.

- `extensions/amazon-bedrock/config-api.ts`
- `extensions/amazon-bedrock/config-compat.test.ts`
- `extensions/amazon-bedrock/config-compat.ts`
- `extensions/amazon-bedrock/discovery.test.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.test.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/index.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.test.ts`
- `extensions/amazon-bedrock/memory-embedding-adapter.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/register.sync.runtime.ts`
- `extensions/amazon-bedrock/setup-api.ts`
- `extensions/amazon-bedrock/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/amazon-bedrock/api.ts`
- `extensions/amazon-bedrock/discovery-shared.ts`
- `extensions/amazon-bedrock/discovery.ts`
- `extensions/amazon-bedrock/embedding-provider.ts`
- `extensions/amazon-bedrock/index.test.ts`
- `extensions/amazon-bedrock/lazy-import.test.ts`
- `extensions/amazon-bedrock/openclaw.plugin.json`
- `extensions/amazon-bedrock/package.json`
- `extensions/amazon-bedrock/register.sync.runtime.ts`
- `extensions/amazon-bedrock/setup-api.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
