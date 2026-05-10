# opencode-go Provider Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for provider plugin `extensions/opencode-go` with provider id(s) `opencode-go`.

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
- Changed paths in this leaf: `13` (修改 6，新增 6，删除 1).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/opencode-go/api.ts`
- `extensions/opencode-go/index.test.ts`
- `extensions/opencode-go/index.ts`
- `extensions/opencode-go/media-understanding-provider.test.ts`
- `extensions/opencode-go/media-understanding-provider.ts`
- `extensions/opencode-go/onboard.test.ts`
- `extensions/opencode-go/onboard.ts`
- `extensions/opencode-go/openclaw.plugin.json`
- `extensions/opencode-go/package.json`
- `extensions/opencode-go/plugin-registration.contract.test.ts`
- `extensions/opencode-go/provider-catalog.ts`
- `extensions/opencode-go/tsconfig.json`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
