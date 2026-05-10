# tlon Skill Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/tlon` (skills=['node_modules/@tloncorp/tlon-skill']).

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
- Changed paths in this leaf: `25` (修改 19，新增 6).
- Target-existing changed paths listed here: `25`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/tlon/src/account-fields.ts`
- `extensions/tlon/src/core.test.ts`
- `extensions/tlon/src/doctor-contract.ts`
- `extensions/tlon/src/doctor.test.ts`
- `extensions/tlon/src/doctor.ts`
- `extensions/tlon/src/logger-runtime.ts`
- `extensions/tlon/src/monitor/approval-runtime.ts`
- `extensions/tlon/src/monitor/approval.test.ts`
- `extensions/tlon/src/monitor/approval.ts`
- `extensions/tlon/src/monitor/discovery.ts`
- `extensions/tlon/src/monitor/history.ts`
- `extensions/tlon/src/monitor/media.test.ts`
- `... 另有 13 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
