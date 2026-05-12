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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `35`
- Target-existing changed paths reflected here: `35`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/cli/progress.test.ts`
- `src/cli/progress.ts`
- `src/interactive/payload.ts`
- `src/status/status-message.ts`
- `src/status/status-text.ts`
- `src/status/status-text.types.ts`
- `src/terminal/osc-progress.test.ts`
- `src/terminal/osc-progress.ts`
- `src/terminal/prompt-select-styled-params.ts`
- `src/terminal/prompt-select-styled.test.ts`
- `src/terminal/prompt-select-styled.ts`
- `src/terminal/stream-writer.test.ts`
- `src/tui/commands.test.ts`
- `src/tui/commands.ts`
- `src/tui/components/fuzzy-filter.ts`
- `src/tui/embedded-backend.test.ts`
- `src/tui/embedded-backend.ts`
- `src/tui/gateway-chat.test.ts`
- `src/tui/gateway-chat.ts`
- `src/tui/tui-backend.ts`
- `src/tui/tui-command-handlers.test.ts`
- `src/tui/tui-command-handlers.ts`
- `src/tui/tui-event-handlers.test.ts`
- `src/tui/tui-event-handlers.ts`
- `src/tui/tui-formatters.test.ts`
- `src/tui/tui-formatters.ts`
- `src/tui/tui-last-session.test.ts`
- `src/tui/tui-last-session.ts`
- `src/tui/tui-launch.test.ts`
- `src/tui/tui-session-actions.test.ts`
- `src/tui/tui-session-actions.ts`
- `src/tui/tui-submit-test-helpers.ts`
- `src/tui/tui-types.ts`
- `src/tui/tui.test.ts`
- `src/tui/tui.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
