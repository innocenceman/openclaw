# src/agent-runtime/runtime/command-session-store

## 一句话结论

command session store 所属的 Agent loop, ACP, spawning, command control 有 74 个路径变化（新增 68、修改 6），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-session-store`
- Changed path count: `74`
- Status counts: `新增 68、修改 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `74` files, `+18208` / `-313`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 68、修改 6。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/command/attempt-execution.cli.test.ts`
- `src/agents/command/attempt-execution.helpers.ts`
- `src/agents/command/attempt-execution.runtime.ts`
- `src/agents/command/attempt-execution.shared.ts`
- `src/agents/command/attempt-execution.test.ts`
- `src/agents/command/delivery.runtime.ts`
- `src/agents/command/session-store.runtime.ts`
- `src/agents/command/session-store.test.ts`
- `src/agents/command/session.resolve-session-key.test.ts`
- `src/agents/command/shared-types.ts`
- `src/tasks/detached-task-runtime-contract.ts`
- `src/tasks/detached-task-runtime-state.ts`
- `src/tasks/detached-task-runtime.test.ts`
- `src/tasks/detached-task-runtime.ts`
- `src/tasks/import-boundary.test-helpers.ts`
- `src/tasks/runtime-internal.ts`
- `src/tasks/task-boundaries.test.ts`
- `src/tasks/task-domain-views.ts`
- `src/tasks/task-executor-policy.test.ts`
- `src/tasks/task-executor-policy.ts`
- `src/tasks/task-executor.test.ts`
- `src/tasks/task-executor.ts`
- `src/tasks/task-flow-owner-access.test.ts`
- `src/tasks/task-flow-owner-access.ts`
- `src/tasks/task-flow-registry.audit.test.ts`
- `src/tasks/task-flow-registry.audit.ts`
- `src/tasks/task-flow-registry.maintenance.test.ts`
- `src/tasks/task-flow-registry.maintenance.ts`
- `src/tasks/task-flow-registry.paths.ts`
- `src/tasks/task-flow-registry.store.sqlite.ts`
- … 另有 38 个路径，详见 `leaf-impact.json`。

### 修改

- `src/agents/command/attempt-execution.ts`
- `src/agents/command/delivery.test.ts`
- `src/agents/command/delivery.ts`
- `src/agents/command/session-store.ts`
- `src/agents/command/session.ts`
- `src/agents/command/types.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/agents/command`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/command-session-store` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/command-session-store/change-to-test.md` 的验证建议。
