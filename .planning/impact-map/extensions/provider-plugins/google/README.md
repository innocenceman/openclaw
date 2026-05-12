# Google Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/google/` registering provider ids `google` and `google-gemini-cli`, plus Google image-generation, media-understanding, and Gemini web-search capabilities.

## Why this remains one leaf

Google spans API-key auth, Gemini CLI OAuth, provider model helpers, image/media support, and a web-search provider, but those surfaces still ship as one plugin package `@openclaw/google-plugin`.

## Entry contracts

- Plugin id: `google` from `extensions/google/openclaw.plugin.json`.
- Provider ids: `google`, `google-gemini-cli` from the manifest and entrypoint registration path.
- Package/install contract: `@openclaw/google-plugin` from `extensions/google/package.json`.
- Loader boundary: `extensions/google/index.ts` registers provider, Gemini CLI OAuth provider, image-generation, media-understanding, and web-search surfaces.

## Primary behavior surfaces

- `extensions/google/index.ts`: main plugin registration for API-key auth, Gemini CLI OAuth registration, media/image providers, and Gemini web-search provider.
- `extensions/google/gemini-cli-provider.ts`, `oauth.*.ts`, and `provider-models.ts`: Gemini CLI OAuth discovery, credential parsing, project-aware token behavior, and model alias helpers.
- `extensions/google/image-generation-provider.ts`: Gemini image generation/edit path, OAuth or API-key auth, size/resolution handling, and response decoding.
- `extensions/google/media-understanding-provider.ts`: Google media-understanding provider registration.
- `extensions/google/src/gemini-web-search-provider.ts`: Gemini-backed web-search grounding provider.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; Google tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-google.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; Google provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `69` (新增 39，修改 25，删除 3，重命名/移动 2).
- Target-existing changed paths listed here: `66`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/google/api.test.ts`
- `extensions/google/api.ts`
- `extensions/google/cli-backend.ts`
- `extensions/google/default-model.test.ts`
- `extensions/google/embedding-batch.ts`
- `extensions/google/embedding-provider.test.ts`
- `extensions/google/embedding-provider.ts`
- `extensions/google/gemini-auth.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/generation-provider-metadata.ts`
- `extensions/google/google-genai-runtime.ts`
- `extensions/google/google-shared.test.ts`
- `... 另有 54 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `37`
- Target-existing changed paths reflected here: `37`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/google/cli-backend.ts`
- `extensions/google/embedding-batch.ts`
- `extensions/google/embedding-provider.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/google-genai-runtime.ts`
- `extensions/google/google-shared.test.ts`
- `extensions/google/google.live.test.ts`
- `extensions/google/index.test.ts`
- `extensions/google/index.ts`
- `extensions/google/media-understanding-provider.video.test.ts`
- `extensions/google/model-id.test.ts`
- `extensions/google/model-id.ts`
- `extensions/google/music-generation-provider.test.ts`
- `extensions/google/music-generation-provider.ts`
- `extensions/google/oauth.shared.ts`
- `extensions/google/oauth.test.ts`
- `extensions/google/openclaw.plugin.json`
- `extensions/google/package.json`
- `extensions/google/plugin-registration.contract.test.ts`
- `extensions/google/provider-contract-api.ts`
- `extensions/google/provider-registration.ts`
- `extensions/google/provider-runtime.contract.test.ts`
- `extensions/google/realtime-voice-provider.test.ts`
- `extensions/google/realtime-voice-provider.ts`
- `extensions/google/setup-api.test.ts`
- `extensions/google/setup-api.ts`
- `extensions/google/speech-provider.test.ts`
- `extensions/google/speech-provider.ts`
- `extensions/google/src/gemini-web-search-provider.runtime.ts`
- `extensions/google/src/gemini-web-search-provider.shared.ts`
- `extensions/google/src/gemini-web-search-provider.ts`
- `extensions/google/transport-stream.test.ts`
- `extensions/google/transport-stream.ts`
- `extensions/google/vertex-adc.ts`
- `extensions/google/video-generation-provider.test.ts`
- `extensions/google/video-generation-provider.ts`
- `extensions/google/web-search-provider.test.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
