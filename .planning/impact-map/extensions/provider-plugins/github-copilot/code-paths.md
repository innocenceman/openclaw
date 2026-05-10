# github-copilot Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                                   | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/github-copilot/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/github-copilot/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/github-copilot/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `25` changed path(s) to this final leaf. `24` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 13, 'M': 11, 'D': 1}`.

- `extensions/github-copilot/auth.test.ts`
- `extensions/github-copilot/auth.ts`
- `extensions/github-copilot/connection-bound-ids.live.test.ts`
- `extensions/github-copilot/connection-bound-ids.test.ts`
- `extensions/github-copilot/connection-bound-ids.ts`
- `extensions/github-copilot/embeddings.test.ts`
- `extensions/github-copilot/embeddings.ts`
- `extensions/github-copilot/index.test.ts`
- `extensions/github-copilot/index.ts`
- `extensions/github-copilot/login.ts`
- `extensions/github-copilot/models-defaults.ts`
- `extensions/github-copilot/models.test.ts`
- `extensions/github-copilot/models.ts`
- `extensions/github-copilot/openclaw.plugin.json`
- `extensions/github-copilot/package.json`
- `extensions/github-copilot/provider-auth.contract.test.ts`
- `extensions/github-copilot/provider-discovery.contract.test.ts`
- `extensions/github-copilot/provider-runtime.contract.test.ts`
- `extensions/github-copilot/register.runtime.ts`
- `extensions/github-copilot/replay-policy.ts`
- `extensions/github-copilot/stream.test.ts`
- `extensions/github-copilot/stream.ts`
- `extensions/github-copilot/token.ts`
- `extensions/github-copilot/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
