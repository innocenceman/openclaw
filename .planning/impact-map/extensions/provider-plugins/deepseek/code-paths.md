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
