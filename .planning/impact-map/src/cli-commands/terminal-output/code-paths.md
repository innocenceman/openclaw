# Terminal Output Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/terminal/**`, `src/cli/progress.ts`
- Runtime handoff: Terminal helpers are the last formatting layer before status/probe/config commands print output.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `60` changed path(s) to this final leaf. `59` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 42, 'A': 17, 'D': 1}`.

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
- `src/terminal/ansi.ts`
- `src/terminal/health-style.ts`
- `src/terminal/links.test.ts`
- `src/terminal/links.ts`
- `src/terminal/note.ts`
- `src/terminal/restore.test.ts`
- `src/terminal/restore.ts`
- `src/terminal/table.test.ts`
- `src/terminal/terminal-link.ts`
- `src/terminal/theme.ts`
- `src/tui/commands.test.ts`
- `src/tui/commands.ts`
- `src/tui/components/assistant-message.ts`
- `src/tui/components/chat-log.test.ts`
- `src/tui/components/chat-log.ts`
- `src/tui/components/custom-editor.test.ts`
- `src/tui/components/custom-editor.ts`
- `src/tui/components/filterable-select-list.ts`
- `... 另有 29 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
