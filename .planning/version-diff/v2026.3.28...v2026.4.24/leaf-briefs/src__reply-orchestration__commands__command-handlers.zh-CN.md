# src/reply-orchestration/commands/command-handlers

## 一句话结论

command handlers 所属的 Agent loop, ACP, spawning, command control 有 111 个路径变化（新增 45、修改 63、删除 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/commands/command-handlers`
- Changed path count: `111`
- Status counts: `新增 45、修改 63、删除 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `111` files, `+12917` / `-6460`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 45、修改 63、删除 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/auto-reply/reply/commands-abort-trigger.test.ts`
- `src/auto-reply/reply/commands-agent-scope.test-support.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-approve.test.ts`
- `src/auto-reply/reply/commands-bash-alias.test.ts`
- `src/auto-reply/reply/commands-compact.runtime.ts`
- `src/auto-reply/reply/commands-compact.test.ts`
- `src/auto-reply/reply/commands-context-command.ts`
- `src/auto-reply/reply/commands-core.send-policy.test.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-test-mocks.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-parse.test.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.ts`
- `src/auto-reply/reply/commands-reset-mode.test.ts`
- `src/auto-reply/reply/commands-reset-mode.ts`
- `src/auto-reply/reply/commands-reset.ts`
- `src/auto-reply/reply/commands-session-abort.test-support.ts`
- `src/auto-reply/reply/commands-session-restart.test.ts`
- `src/auto-reply/reply/commands-session-usage.test.ts`
- `src/auto-reply/reply/commands-status-subagents.ts`
- `src/auto-reply/reply/commands-stop-target.test.ts`
- `src/auto-reply/reply/commands-subagents-control.runtime.ts`
- … 另有 15 个路径，详见 `leaf-impact.json`。

### 修改

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/context.test.ts`
- `src/auto-reply/reply/commands-acp/context.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/install-hints.test.ts`
- `src/auto-reply/reply/commands-acp/install-hints.ts`
- `src/auto-reply/reply/commands-acp/lifecycle.ts`
- `src/auto-reply/reply/commands-acp/runtime-options.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-approve.ts`
- `src/auto-reply/reply/commands-bash.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-btw.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-context-report.test.ts`
- `src/auto-reply/reply/commands-context-report.ts`
- `src/auto-reply/reply/commands-context.test.ts`
- `src/auto-reply/reply/commands-context.ts`
- `src/auto-reply/reply/commands-core.runtime.ts`
- `src/auto-reply/reply/commands-core.test.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.tools.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-mcp.test.ts`
- … 另有 33 个路径，详见 `leaf-impact.json`。

### 删除

- `src/auto-reply/reply/commands-plugins.toggle.test.ts`
- `src/auto-reply/reply/commands-subagents-spawn.test.ts`
- `src/auto-reply/reply/commands.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/reply-orchestration/commands/command-handlers` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/commands/command-handlers/change-to-test.md` 的验证建议。
