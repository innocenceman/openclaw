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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
<!-- version-diff-refresh:v2026.5.4:end -->
