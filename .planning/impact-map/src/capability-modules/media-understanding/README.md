# Media Understanding Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `media-understanding/`

## Purpose

Audio/video/image understanding runner, provider registry, and attachment guards.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. All non-live media-understanding tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `69` (修改 46，新增 22，删除 1).
- Target-existing changed paths listed here: `68`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/image-generation/live-test-helpers.test.ts`
- `src/image-generation/live-test-helpers.ts`
- `src/image-generation/model-ref.ts`
- `src/image-generation/normalization.ts`
- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/provider-registry.ts`
- `src/image-generation/runtime-types.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/image-generation/types.ts`
- `src/link-understanding/apply.ts`
- `... 另有 56 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `53`
- Target-existing changed paths reflected here: `49`
- Deleted or renamed-away paths omitted from active impact-map: `4`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
