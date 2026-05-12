# src/cli-commands/terminal-output

## 一句话结论

terminal output 所属的 CLI command surface, status output, onboarding and maintenance commands 有 60 个路径变化（新增 17、修改 42、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/terminal-output`
- Changed path count: `60`
- Status counts: `新增 17、修改 42、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `60` files, `+4954` / `-652`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 17、修改 42、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/status/fallback-notice-state.ts`
- `src/status/status-labels.ts`
- `src/status/status-message.runtime.ts`
- `src/status/status-message.test.ts`
- `src/status/status-message.ts`
- `src/status/status-queue.runtime.ts`
- `src/status/status-subagents.runtime.ts`
- `src/status/status-text.ts`
- `src/status/status-text.types.ts`
- `src/terminal/links.test.ts`
- `src/tui/components/custom-editor.test.ts`
- `src/tui/embedded-backend.test.ts`
- `src/tui/embedded-backend.ts`
- `src/tui/setup-launch-env.ts`
- `src/tui/tui-backend.ts`
- `src/tui/tui-launch.test.ts`
- `src/tui/tui-launch.ts`

### 修改

- `src/interactive/payload.test.ts`
- `src/interactive/payload.ts`
- `src/terminal/ansi.test.ts`
- `src/terminal/ansi.ts`
- `src/terminal/health-style.ts`
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
- `src/tui/components/custom-editor.ts`
- `src/tui/components/filterable-select-list.ts`
- `src/tui/components/fuzzy-filter.ts`
- `src/tui/components/markdown-message.ts`
- `src/tui/components/searchable-select-list.test.ts`
- `src/tui/components/searchable-select-list.ts`
- `src/tui/components/selectors.ts`
- `src/tui/gateway-chat.test.ts`
- `src/tui/gateway-chat.ts`
- `src/tui/theme/theme.test.ts`
- `src/tui/theme/theme.ts`
- `src/tui/tui-command-handlers.test.ts`
- `src/tui/tui-command-handlers.ts`
- … 另有 12 个路径，详见 `leaf-impact.json`。

### 删除

- `src/tui/theme/syntax-theme.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`terminal-output/` | pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/terminal-output` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/terminal-output/change-to-test.md` 的验证建议。
