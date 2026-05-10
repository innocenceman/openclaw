# Legacy Migration Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Leaf: `legacy-migration/`

## Purpose

Legacy config/service migration helpers and doctor-facing compatibility repair.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `14` (修改 5，重命名/移动 6，新增 1，删除 2).
- Target-existing changed paths listed here: `6`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `8`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/commands/doctor-legacy-config.migrations.test.ts`
- `src/commands/doctor-legacy-config.test.ts`
- `src/config/legacy-config-detection.test-support.ts`
- `src/config/legacy.rules.ts`
- `src/config/legacy.shared.ts`
- `src/config/legacy.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
