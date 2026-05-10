# tavily Skill Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/tavily` (skills=['./skills']).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `skill-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `15` (删除 3，修改 9，新增 3).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/tavily/openclaw.plugin.json`
- `extensions/tavily/package.json`
- `extensions/tavily/src/config.ts`
- `extensions/tavily/src/tavily-client.test.ts`
- `extensions/tavily/src/tavily-client.ts`
- `extensions/tavily/src/tavily-extract-tool.ts`
- `extensions/tavily/src/tavily-search-provider.ts`
- `extensions/tavily/src/tavily-search-tool.ts`
- `extensions/tavily/src/tavily-tool-schema.ts`
- `extensions/tavily/src/tavily-tools.test.ts`
- `extensions/tavily/tsconfig.json`
- `extensions/tavily/web-search-contract-api.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
