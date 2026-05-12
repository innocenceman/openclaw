# Media Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `media/`

## Purpose

Media fetch/store/server helpers, path policy, parsing, and local/remote media handling.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `exceptioned-deep-partial`. Standard media suite failed with wrapper failure artifacts; no verified promotion.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `101` (新增 68，修改 33).
- Target-existing changed paths listed here: `101`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/media-generation/live-test-helpers.ts`
- `src/media-generation/model-ref.ts`
- `src/media-generation/normalization.types.ts`
- `src/media-generation/provider-capabilities.contract.test.ts`
- `src/media-generation/runtime-shared.test.ts`
- `src/media-generation/runtime-shared.ts`
- `src/media/audio.test.ts`
- `src/media/audio.ts`
- `src/media/base64.ts`
- `src/media/channel-inbound-roots.fast-path.test.ts`
- `src/media/channel-inbound-roots.ts`
- `src/media/configured-max-bytes.ts`
- `... 另有 89 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `65`
- Target-existing changed paths reflected here: `58`
- Deleted or renamed-away paths omitted from active impact-map: `7`

### Target-version changed paths

- `src/media-generation/model-ref.ts`
- `src/media-generation/provider-capabilities.contract.test.ts`
- `src/media-generation/runtime-shared.test.ts`
- `src/media-generation/runtime-shared.ts`
- `src/media/audio-transcode.test.ts`
- `src/media/audio-transcode.ts`
- `src/media/channel-inbound-roots.fast-path.test.ts`
- `src/media/channel-inbound-roots.ts`
- `src/media/configured-max-bytes.ts`
- `src/media/document-extractors.runtime.ts`
- `src/media/fetch.test.ts`
- `src/media/fetch.ts`
- `src/media/ffmpeg-exec.test.ts`
- `src/media/ffmpeg-exec.ts`
- `src/media/image-ops.ts`
- `src/media/local-roots.test.ts`
- `src/media/media-reference.ts`
- `src/media/mime.test.ts`
- `src/media/mime.ts`
- `src/media/parse.test.ts`
- `src/media/parse.ts`
- `src/media/png-encode.ts`
- `src/media/qr-image.test.ts`
- `src/media/qr-image.ts`
- `src/media/qr-runtime.ts`
- `src/media/qr-terminal.test.ts`
- `src/media/qr-terminal.ts`
- `src/media/store.test.ts`
- `src/media/store.ts`
- `src/media/test-helpers.ts`
- `src/media/video-dimensions.test.ts`
- `src/media/video-dimensions.ts`
- `src/media/web-media.test.ts`
- `src/media/web-media.ts`
- `src/music-generation/live-test-helpers.ts`
- `src/music-generation/normalization.ts`
- `src/music-generation/runtime-types.ts`
- `src/music-generation/runtime.test.ts`
- `src/music-generation/runtime.ts`
- `src/music-generation/types.ts`
- … plus 18 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
