# xai Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/xai` with provider id(s) `xai`.

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `60` (新增 35，修改 20，删除 4，重命名/移动 1).
- Target-existing changed paths listed here: `56`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 44 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `34`
- Target-existing changed paths reflected here: `34`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
