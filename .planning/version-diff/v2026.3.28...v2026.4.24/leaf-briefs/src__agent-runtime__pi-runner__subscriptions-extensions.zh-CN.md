# src/agent-runtime/pi-runner/subscriptions-extensions

## 一句话结论

subscriptions extensions 所属的 Agent loop, ACP, spawning, command control 有 67 个路径变化（新增 10、修改 41、删除 2、重命名 14），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions`
- Changed path count: `67`
- Status counts: `新增 10、修改 41、删除 2、重命名 14`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `67` files, `+7706` / `-6114`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 10、修改 41、删除 2、重命名 14。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/pi-embedded-helpers/bootstrap.test.ts`
- `src/agents/pi-embedded-helpers/failover-matches.test.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.test.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.ts`
- `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.runtime.ts`
- `src/agents/pi-embedded-subscribe.openai-responses.test-helpers.ts`
- `src/agents/pi-embedded-subscribe.promise.ts`
- `src/agents/pi-embedded-subscribe.shared-types.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-commentary-phase-output.test.ts`

### 修改

- `src/agents/pi-embedded-helpers.buildbootstrapcontextfiles.test.ts`
- `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`
- `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`
- `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`
- `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`
- `src/agents/pi-embedded-helpers.ts`
- `src/agents/pi-embedded-helpers.validate-turns.test.ts`
- `src/agents/pi-embedded-helpers/bootstrap.ts`
- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `src/agents/pi-embedded-helpers/images.ts`
- `src/agents/pi-embedded-helpers/messaging-dedupe.ts`
- `src/agents/pi-embedded-helpers/openai.ts`
- `src/agents/pi-embedded-helpers/thinking.test.ts`
- `src/agents/pi-embedded-helpers/thinking.ts`
- `src/agents/pi-embedded-helpers/turns.ts`
- `src/agents/pi-embedded-runner/extensions.test.ts`
- `src/agents/pi-embedded-runner/extensions.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.ts`
- `src/agents/pi-embedded-subscribe.handlers.ts`
- `src/agents/pi-embedded-subscribe.handlers.types.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.calls-onblockreplyflush-before-tool-execution-start-preserve.test.ts`
- … 另有 11 个路径，详见 `leaf-impact.json`。

### 删除

- `src/agents/pi-embedded-subscribe.handlers.lifecycle.compaction-reconcile.test.ts`
- `src/agents/pi-extensions/context-pruning/pruner.test.ts`

### 重命名

- `src/agents/pi-extensions/compaction-instructions.test.ts`
- `src/agents/pi-extensions/compaction-instructions.ts`
- `src/agents/pi-extensions/compaction-safeguard-quality.ts`
- `src/agents/pi-extensions/compaction-safeguard-runtime.ts`
- `src/agents/pi-extensions/compaction-safeguard.test.ts`
- `src/agents/pi-extensions/compaction-safeguard.ts`
- `src/agents/pi-extensions/context-pruning.test.ts`
- `src/agents/pi-extensions/context-pruning.ts`
- `src/agents/pi-extensions/context-pruning/extension.ts`
- `src/agents/pi-extensions/context-pruning/pruner.ts`
- `src/agents/pi-extensions/context-pruning/runtime.ts`
- `src/agents/pi-extensions/context-pruning/settings.ts`
- `src/agents/pi-extensions/context-pruning/tools.ts`
- `src/agents/pi-extensions/session-manager-runtime-registry.ts`

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

- 首选验证：1. Run `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/subscriptions-extensions` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions/change-to-test.md` 的验证建议。
