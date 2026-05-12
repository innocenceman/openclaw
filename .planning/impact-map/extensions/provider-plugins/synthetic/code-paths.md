# synthetic Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                              | Likely downstream impact                                       |
| ------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/synthetic/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/synthetic/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/synthetic/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `5` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3, 'D': 1, 'A': 1}`.

- `extensions/synthetic/api.ts`
- `extensions/synthetic/onboard.test.ts`
- `extensions/synthetic/package.json`
- `extensions/synthetic/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/synthetic/models.ts`
- `extensions/synthetic/onboard.test.ts`
- `extensions/synthetic/openclaw.plugin.json`
- `extensions/synthetic/package.json`
<!-- version-diff-refresh:v2026.5.4:end -->
