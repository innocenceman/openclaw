# src/reply-orchestration/streaming

## 一句话结论

streaming 所属的 Agent loop, ACP, spawning, command control 有 27 个路径变化（新增 2、修改 21、删除 3、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/streaming`
- Changed path count: `27`
- Status counts: `新增 2、修改 21、删除 3、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `27` files, `+2309` / `-2457`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 2、修改 21、删除 3、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`

### 修改

- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-mocks.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.media-note.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `src/auto-reply/reply.runtime.ts`
- `src/auto-reply/reply.stage-sandbox-media.scp-remote-path.test.ts`
- `src/auto-reply/reply.test-harness.ts`
- `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts`
- `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`
- `src/auto-reply/reply.ts`
- `src/auto-reply/reply/block-streaming.ts`
- `src/auto-reply/reply/get-reply-inline-actions.skip-when-config-empty.test.ts`
- `src/auto-reply/reply/get-reply-inline-actions.ts`

### 删除

- `src/auto-reply/reply.directive.directive-behavior.applies-inline-reasoning-mixed-messages-acks-immediately.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.defaults-think-low-reasoning-capable-models-no.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.model-directive-test-utils.ts`

### 重命名

- `src/auto-reply/reply.triggers.trigger-handling.test-harness.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/reply-orchestration/streaming` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/streaming/change-to-test.md` 的验证建议。
