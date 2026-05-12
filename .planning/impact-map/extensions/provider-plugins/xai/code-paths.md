# xai Provider Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                           | Trace start                                        | Likely downstream impact                                       |
| ------------------------------ | -------------------------------------------------- | -------------------------------------------------------------- |
| Manifest to provider catalog   | `extensions/xai/openclaw.plugin.json`              | Provider lists, auth choices, onboarding, config docs/UI sync. |
| Entrypoint to provider runtime | `extensions/xai/index.ts`                          | Provider registry, model catalog, auth method behavior.        |
| Auth/config path               | `extensions/xai/index.ts` and manifest auth fields | Secrets, env vars, setup prompts, provider status.             |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `60` changed path(s) to this final leaf. `56` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 35, 'M': 20, 'D': 4, 'R': 1}`.

- `extensions/xai/.boundary-stubs/anthropic-vertex-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-runtime-api.d.ts`
- `extensions/xai/.boundary-stubs/speech-core-runtime-api.d.ts`
- `extensions/xai/api.test.ts`
- `extensions/xai/api.ts`
- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/index.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/model-id.test.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-contract-api.ts`
- `extensions/xai/provider-models.ts`
- `extensions/xai/realtime-transcription-provider.test.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/setup-api.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.test.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `... 另有 26 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/onboard.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-discovery.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `extensions/xai/src/web-search-provider.runtime.ts`
- `extensions/xai/src/web-search-response.types.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-config.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/test-helpers.ts`
- `extensions/xai/tsconfig.json`
- `extensions/xai/video-generation-provider.test.ts`
- `extensions/xai/video-generation-provider.ts`
- `extensions/xai/web-search.test.ts`
- `extensions/xai/x-search.live.test.ts`
- `extensions/xai/x-search.test.ts`
- `extensions/xai/x-search.ts`
- `extensions/xai/xai.live.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
