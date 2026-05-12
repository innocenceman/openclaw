# src/agent-runtime/runtime/context-subagents/subagent-registry

## 一句话结论

subagent registry 所属的 Agent loop, ACP, spawning, command control 有 42 个路径变化（新增 13、修改 28、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry`
- Changed path count: `42`
- Status counts: `新增 13、修改 28、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `42` files, `+5189` / `-1475`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 13、修改 28、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/subagent-registry-announce-read.ts`
- `src/agents/subagent-registry-helpers.test.ts`
- `src/agents/subagent-registry-lifecycle.test.ts`
- `src/agents/subagent-registry-steer-runtime.ts`
- `src/agents/subagent-registry.persistence.resume.test.ts`
- `src/agents/subagent-registry.persistence.test-support.ts`
- `src/agents/subagent-registry.runtime.ts`
- `src/agents/subagent-registry.test-helpers.ts`
- `src/agents/subagent-spawn.context.test.ts`
- `src/agents/subagent-spawn.depth-limits.test.ts`
- `src/agents/subagent-spawn.runtime.ts`
- `src/agents/subagent-spawn.thread-binding.test.ts`
- `src/agents/subagent-spawn.types.ts`

### 修改

- `src/agents/subagent-registry-cleanup.test.ts`
- `src/agents/subagent-registry-cleanup.ts`
- `src/agents/subagent-registry-completion.test.ts`
- `src/agents/subagent-registry-completion.ts`
- `src/agents/subagent-registry-helpers.ts`
- `src/agents/subagent-registry-lifecycle.ts`
- `src/agents/subagent-registry-queries.test.ts`
- `src/agents/subagent-registry-queries.ts`
- `src/agents/subagent-registry-read.ts`
- `src/agents/subagent-registry-run-manager.ts`
- `src/agents/subagent-registry-runtime.ts`
- `src/agents/subagent-registry.announce-loop-guard.test.ts`
- `src/agents/subagent-registry.archive.e2e.test.ts`
- `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`
- `src/agents/subagent-registry.mocks.shared.ts`
- `src/agents/subagent-registry.nested.e2e.test.ts`
- `src/agents/subagent-registry.persistence.test.ts`
- `src/agents/subagent-registry.steer-restart.test.ts`
- `src/agents/subagent-registry.store.ts`
- `src/agents/subagent-registry.test.ts`
- `src/agents/subagent-registry.ts`
- `src/agents/subagent-registry.types.ts`
- `src/agents/subagent-spawn.attachments.test.ts`
- `src/agents/subagent-spawn.model-session.test.ts`
- `src/agents/subagent-spawn.test-helpers.ts`
- `src/agents/subagent-spawn.test.ts`
- `src/agents/subagent-spawn.ts`
- `src/agents/subagent-spawn.workspace.test.ts`

### 删除

- `src/agents/subagent-registry.context-engine.test.ts`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/context-subagents/subagent-registry` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry/change-to-test.md` 的验证建议。
