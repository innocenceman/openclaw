# src/agent-runtime/runtime/cli-runner

## 一句话结论

cli runner 所属的 Agent loop, ACP, spawning, command control 有 27 个路径变化（新增 10、修改 15、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/cli-runner`
- Changed path count: `27`
- Status counts: `新增 10、修改 15、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+7845` / `-1159`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 10、修改 15、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `src/agents/cli-runner.runtime.ts`
- `src/agents/cli-runner/claude-live-session.ts`
- `src/agents/cli-runner/claude-skills-plugin.ts`
- `src/agents/cli-runner/execute.runtime.ts`
- `src/agents/cli-runner/prepare.runtime.ts`
- `src/agents/cli-runner/prepare.test.ts`
- `src/agents/cli-runner/session-history.test.ts`
- `src/agents/cli-runner/session-history.ts`
- `src/agents/cli-runner/toml-inline.ts`

### 修改

- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.bundle-mcp.e2e.test.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `src/agents/cli-runner/execute.ts`
- `src/agents/cli-runner/helpers.ts`
- `src/agents/cli-runner/prepare.ts`
- `src/agents/cli-runner/reliability.ts`
- `src/agents/cli-runner/types.ts`

### 删除

- `src/agents/claude-cli-runner.test.ts`
- `src/agents/cli-runner.session.test.ts`

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

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/cli-runner` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/cli-runner/change-to-test.md` 的验证建议。
