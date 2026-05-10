# Exec Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/`
- Leaf: `exec/`

## Purpose

Reply-side exec helpers, directives, and command execution staging.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `22` (修改 19，新增 3).
- Target-existing changed paths listed here: `22`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/auto-reply/reply/bash-command.stop.test.ts`
- `src/auto-reply/reply/bash-command.ts`
- `src/auto-reply/reply/directive-handling.auth-profile.ts`
- `src/auto-reply/reply/directive-handling.auth.ts`
- `src/auto-reply/reply/directive-handling.defaults.ts`
- `src/auto-reply/reply/directive-handling.directive-only.ts`
- `src/auto-reply/reply/directive-handling.fast-lane.ts`
- `src/auto-reply/reply/directive-handling.impl.ts`
- `src/auto-reply/reply/directive-handling.mixed-inline.test.ts`
- `src/auto-reply/reply/directive-handling.model-picker.ts`
- `src/auto-reply/reply/directive-handling.model-selection.ts`
- `src/auto-reply/reply/directive-handling.model.test.ts`
- `... 另有 10 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
