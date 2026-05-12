# Terminal Output Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope       | First validation                                                                                                                   | Escalation trigger                                                                          | Notes                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------- |
| `terminal-output/` | pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (修改 42，新增 17，删除 1).
- Target-existing path refs in active map: `59`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
