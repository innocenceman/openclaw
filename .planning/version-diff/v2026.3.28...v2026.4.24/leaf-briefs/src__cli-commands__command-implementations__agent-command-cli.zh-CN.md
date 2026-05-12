# src/cli-commands/command-implementations/agent-command-cli

## 一句话结论

agent command cli 所属的 CLI command surface, status output, onboarding and maintenance commands 有 30 个路径变化（新增 7、修改 17、删除 6），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli`
- Changed path count: `30`
- Status counts: `新增 7、修改 17、删除 6`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+1949` / `-893`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 7、修改 17、删除 6。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent-command.test-support.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agents.binding-format.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.providers.test.ts`

### 修改

- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.matrix.integration.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.identity.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.identity.test.ts`
- `src/commands/agents.providers.ts`
- `src/commands/agents.test.ts`

### 删除

- `src/commands/agent.cli-provider.test.ts`
- `src/commands/agent/delivery.ts`
- `src/commands/agent/run-context.ts`
- `src/commands/agent/session-store.test.ts`
- `src/commands/agent/session-store.ts`
- `src/commands/agent/types.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/agent-command-cli` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli/change-to-test.md` 的验证建议。
