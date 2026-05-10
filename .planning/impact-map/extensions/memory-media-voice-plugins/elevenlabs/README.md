# elevenlabs Memory/Media/Voice Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/elevenlabs` (manifest/config plugin).

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
- Changed paths in this leaf: `22` (新增 13，重命名/移动 1，修改 7，删除 1).
- Target-existing changed paths listed here: `21`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/elevenlabs/config-api.ts`
- `extensions/elevenlabs/config-compat.test.ts`
- `extensions/elevenlabs/config-compat.ts`
- `extensions/elevenlabs/contract-api.ts`
- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/index.ts`
- `extensions/elevenlabs/media-understanding-provider.test.ts`
- `extensions/elevenlabs/media-understanding-provider.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `... 另有 9 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
