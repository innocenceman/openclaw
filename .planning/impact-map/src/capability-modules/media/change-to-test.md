# Media Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation | Escalation trigger | Notes |
| ------------ | ---------------- | ------------------ | ----- |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `exceptioned-deep-partial`. Standard media suite failed with wrapper failure artifacts; no verified promotion.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `101` (新增 68，修改 33).
- Target-existing path refs in active map: `101`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
