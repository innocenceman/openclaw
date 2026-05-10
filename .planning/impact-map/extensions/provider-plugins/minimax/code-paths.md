# minimax Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                            | Likely downstream impact                                       |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/minimax/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/minimax/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/minimax/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `32` changed path(s) to this final leaf. `31` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 20, 'M': 11, 'D': 1}`.

- `extensions/minimax/image-generation-provider.test.ts`
- `extensions/minimax/image-generation-provider.ts`
- `extensions/minimax/index.test.ts`
- `extensions/minimax/index.ts`
- `extensions/minimax/media-understanding-provider.ts`
- `extensions/minimax/minimax.live.test.ts`
- `extensions/minimax/model-definitions.test.ts`
- `extensions/minimax/model-definitions.ts`
- `extensions/minimax/music-generation-provider.test.ts`
- `extensions/minimax/music-generation-provider.ts`
- `extensions/minimax/onboard.test.ts`
- `extensions/minimax/openclaw.plugin.json`
- `extensions/minimax/package.json`
- `extensions/minimax/plugin-registration.contract.test.ts`
- `extensions/minimax/provider-catalog.ts`
- `extensions/minimax/provider-contract-api.ts`
- `extensions/minimax/provider-discovery.contract.test.ts`
- `extensions/minimax/provider-http.test-helpers.ts`
- `extensions/minimax/provider-registration.ts`
- `extensions/minimax/speech-provider.test.ts`
- `extensions/minimax/speech-provider.ts`
- `extensions/minimax/src/minimax-web-search-provider.runtime.ts`
- `extensions/minimax/src/minimax-web-search-provider.test.ts`
- `extensions/minimax/src/minimax-web-search-provider.ts`
- `extensions/minimax/test-api.ts`
- `extensions/minimax/tsconfig.json`
- `extensions/minimax/tts.ts`
- `extensions/minimax/video-generation-provider.test.ts`
- `extensions/minimax/video-generation-provider.ts`
- `extensions/minimax/web-search-contract-api.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
