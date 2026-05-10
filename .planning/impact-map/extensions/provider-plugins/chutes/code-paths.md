# chutes Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                           | Likely downstream impact                                       |
| ------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/chutes/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/chutes/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/chutes/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `9` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 2, 'M': 5, 'R': 1, 'D': 1}`.

- `extensions/chutes/implicit-provider.test.ts`
- `extensions/chutes/index.ts`
- `extensions/chutes/models.test.ts`
- `extensions/chutes/models.ts`
- `extensions/chutes/onboard.ts`
- `extensions/chutes/package.json`
- `extensions/chutes/provider-catalog.ts`
- `extensions/chutes/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
