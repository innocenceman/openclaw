# Media Understanding Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation | Escalation trigger | Notes |
| ------------ | ---------------- | ------------------ | ----- |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `verified`. All non-live media-understanding tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `69` (修改 46，新增 22，删除 1).
- Target-existing path refs in active map: `68`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/image-generation/image-assets.test.ts`
- `src/image-generation/image-assets.ts`
- `src/image-generation/live-test-helpers.ts`
- `src/image-generation/normalization.ts`
- `src/image-generation/openai-compatible-image-provider.test.ts`
- `src/image-generation/openai-compatible-image-provider.ts`
- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/runtime-types.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/image-generation/types.ts`
- `src/link-understanding/apply.ts`
- `src/link-understanding/runner.ts`
- `src/media-understanding/apply.sanitize-mime.test.ts`
- `src/media-understanding/apply.test.ts`
- `src/media-understanding/apply.ts`
- `src/media-understanding/attachments.cache.ts`
- `src/media-understanding/attachments.normalize.ts`
- `src/media-understanding/attachments.ts`
- `src/media-understanding/audio-preflight.test.ts`
- `src/media-understanding/audio-preflight.ts`
- `src/media-understanding/audio.test-helpers.ts`
- `src/media-understanding/defaults.constants.ts`
- `src/media-understanding/defaults.test.ts`
- `src/media-understanding/defaults.ts`
- `src/media-understanding/echo-transcript.test.ts`
- `src/media-understanding/errors.ts`
- `src/media-understanding/format.test.ts`
- `src/media-understanding/image.test.ts`
- `src/media-understanding/image.ts`
- `src/media-understanding/manifest-metadata.ts`
- `src/media-understanding/media-understanding-misc.test.ts`
- `src/media-understanding/output-extract.ts`
- `src/media-understanding/provider-registry.test.ts`
- `src/media-understanding/resolve.ts`
- `src/media-understanding/runner.auto-audio.test.ts`
- `src/media-understanding/runner.entries.ts`
- `src/media-understanding/runner.test-utils.ts`
- `src/media-understanding/runner.ts`
- `src/media-understanding/runner.video.test.ts`
- … plus 9 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
