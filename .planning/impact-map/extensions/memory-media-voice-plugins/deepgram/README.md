# deepgram Memory/Media/Voice Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/deepgram` (manifest/config plugin).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `12` (修改 7，删除 1，新增 4).
- Target-existing changed paths listed here: `11`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/audio.ts`
- `extensions/deepgram/index.ts`
- `extensions/deepgram/media-understanding-provider.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/realtime-transcription-provider.test.ts`
- `extensions/deepgram/realtime-transcription-provider.ts`
- `extensions/deepgram/test-api.ts`
- `extensions/deepgram/tsconfig.json`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `6`
- Target-existing changed paths reflected here: `6`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/realtime-transcription-provider.test.ts`
- `extensions/deepgram/realtime-transcription-provider.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
