# src/capability-modules/acp/runtime-session-identity

## 一句话结论

runtime session identity 所属的 Agent loop, ACP, spawning, command control 有 13 个路径变化（新增 2、修改 11），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/runtime-session-identity`
- Changed path count: `13`
- Status counts: `新增 2、修改 11`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `13` files, `+336` / `-138`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 2、修改 11。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`

### 修改

- `src/acp/conversation-id.ts`
- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/errors.test.ts`
- `src/acp/runtime/errors.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/registry.ts`
- `src/acp/runtime/session-identifiers.ts`
- `src/acp/runtime/session-identity.ts`
- `src/acp/runtime/session-meta.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/capability-modules/acp/runtime-session-identity` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/runtime-session-identity/change-to-test.md` 的验证建议。
