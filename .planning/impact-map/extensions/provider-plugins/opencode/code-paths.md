# opencode Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                             | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/opencode/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/opencode/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/opencode/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `11` changed path(s) to this final leaf. `10` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 5, 'A': 5, 'D': 1}`.

- `extensions/opencode/api.ts`
- `extensions/opencode/index.test.ts`
- `extensions/opencode/index.ts`
- `extensions/opencode/media-understanding-provider.test.ts`
- `extensions/opencode/media-understanding-provider.ts`
- `extensions/opencode/onboard.test.ts`
- `extensions/opencode/openclaw.plugin.json`
- `extensions/opencode/package.json`
- `extensions/opencode/plugin-registration.contract.test.ts`
- `extensions/opencode/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/opencode/index.test.ts`
- `extensions/opencode/index.ts`
- `extensions/opencode/onboard.test.ts`
- `extensions/opencode/openclaw.plugin.json`
- `extensions/opencode/package.json`
- `extensions/opencode/plugin-registration.contract.test.ts`
- `extensions/opencode/provider-policy-api.test.ts`
- `extensions/opencode/provider-policy-api.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
