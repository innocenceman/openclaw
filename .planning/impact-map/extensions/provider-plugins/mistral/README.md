# mistral Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/mistral` with provider id(s) `mistral`.

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
- Changed paths in this leaf: `20` (修改 10，重命名/移动 1，新增 7，删除 2).
- Target-existing changed paths listed here: `18`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/mistral/api.test.ts`
- `extensions/mistral/api.ts`
- `extensions/mistral/embedding-provider.ts`
- `extensions/mistral/index.ts`
- `extensions/mistral/media-understanding-provider.test.ts`
- `extensions/mistral/media-understanding-provider.ts`
- `extensions/mistral/memory-embedding-adapter.ts`
- `extensions/mistral/mistral.live.test.ts`
- `extensions/mistral/model-definitions.test.ts`
- `extensions/mistral/model-definitions.ts`
- `extensions/mistral/onboard.test.ts`
- `extensions/mistral/openclaw.plugin.json`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
