# deepseek Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                             | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/deepseek/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/deepseek/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/deepseek/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 8, 'A': 4, 'D': 1}`.

- `extensions/deepseek/api.ts`
- `extensions/deepseek/deepseek.live.test.ts`
- `extensions/deepseek/index.test.ts`
- `extensions/deepseek/index.ts`
- `extensions/deepseek/models.ts`
- `extensions/deepseek/onboard.ts`
- `extensions/deepseek/openclaw.plugin.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/provider-catalog.ts`
- `extensions/deepseek/provider-discovery.ts`
- `extensions/deepseek/stream.ts`
- `extensions/deepseek/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/deepseek/deepseek.live.test.ts`
- `extensions/deepseek/index.test.ts`
- `extensions/deepseek/index.ts`
- `extensions/deepseek/models.ts`
- `extensions/deepseek/onboard.ts`
- `extensions/deepseek/openclaw.plugin.json`
- `extensions/deepseek/package.json`
- `extensions/deepseek/provider-discovery.ts`
- `extensions/deepseek/provider-policy-api.test.ts`
- `extensions/deepseek/provider-policy-api.ts`
- `extensions/deepseek/stream.ts`
- `extensions/deepseek/thinking.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
