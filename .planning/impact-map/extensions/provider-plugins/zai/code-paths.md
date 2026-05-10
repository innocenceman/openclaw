# zai Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                        | Likely downstream impact                                       |
| ------------------------------ | -------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/zai/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/zai/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/zai/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `15` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 4, 'M': 9, 'D': 2}`.

- `extensions/zai/config-api.ts`
- `extensions/zai/index.test.ts`
- `extensions/zai/index.ts`
- `extensions/zai/media-understanding-provider.ts`
- `extensions/zai/model-definitions.test.ts`
- `extensions/zai/model-definitions.ts`
- `extensions/zai/onboard.test.ts`
- `extensions/zai/onboard.ts`
- `extensions/zai/openclaw.plugin.json`
- `extensions/zai/package.json`
- `extensions/zai/provider-runtime.contract.test.ts`
- `extensions/zai/test-api.ts`
- `extensions/zai/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
