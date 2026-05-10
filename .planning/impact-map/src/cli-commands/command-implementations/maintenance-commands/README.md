# Maintenance Commands Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `maintenance-commands/`

## Purpose

Backup, cleanup, dashboard, docs, health, message, and utility command handlers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `301` (重命名/移动 3，修改 202，新增 85，删除 11).
- Target-existing changed paths listed here: `288`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `13`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/cli/acp-cli.option-collisions.test.ts`
- `src/cli/acp-cli.ts`
- `src/cli/argv-invocation.test.ts`
- `src/cli/argv-invocation.ts`
- `src/cli/banner-config-lite.ts`
- `src/cli/banner.test.ts`
- `src/cli/banner.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `... 另有 276 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
