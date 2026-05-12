# mistral Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                            | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/mistral/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/mistral/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/mistral/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `20` changed path(s) to this final leaf. `18` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 10, 'R': 1, 'A': 7, 'D': 2}`.

- `extensions/mistral/api.test.ts`
- `extensions/mistral/api.ts`
- `extensions/mistral/embedding-provider.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/media-understanding-provider.ts`
- `extensions/mistral/memory-embedding-adapter.ts`
- `extensions/mistral/mistral.live.test.ts`
- `extensions/mistral/model-definitions.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `extensions/mistral/package.json`
- `extensions/mistral/provider-compat.ts`
- `extensions/mistral/realtime-transcription-provider.test.ts`
- `extensions/mistral/realtime-transcription-provider.ts`
- `extensions/mistral/test-api.ts`
- `extensions/mistral/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/mistral/api.ts`
- `extensions/mistral/embedding-provider.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/mistral.live.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `extensions/mistral/package.json`
- `extensions/mistral/provider-catalog.ts`
- `extensions/mistral/provider-compat.ts`
- `extensions/mistral/realtime-transcription-provider.test.ts`
- `extensions/mistral/realtime-transcription-provider.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
