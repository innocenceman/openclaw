# Terminal Output Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `cli-commands/`
- Leaf: `terminal-output/`

## Purpose

ANSI-safe tables, palette, prompts, and progress rendering.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `60` (修改 42，新增 17，删除 1).
- Target-existing changed paths listed here: `59`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/interactive/payload.test.ts`
- `src/interactive/payload.ts`
- `src/status/fallback-notice-state.ts`
- `src/status/status-labels.ts`
- `src/status/status-message.runtime.ts`
- `src/status/status-message.test.ts`
- `src/status/status-message.ts`
- `src/status/status-queue.runtime.ts`
- `src/status/status-subagents.runtime.ts`
- `src/status/status-text.ts`
- `src/status/status-text.types.ts`
- `src/terminal/ansi.test.ts`
- `... 另有 47 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
