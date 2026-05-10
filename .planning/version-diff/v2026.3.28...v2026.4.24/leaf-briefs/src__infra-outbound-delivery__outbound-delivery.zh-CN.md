# src/infra-outbound-delivery/outbound-delivery

## 一句话结论

outbound delivery 所属的 Outbound delivery, routing, formatting, identity and network infrastructure 有 65 个路径变化（新增 24、修改 32、删除 9），兼容性判断为行为变化。

## Canonical facts

- Feature group: `infra-outbound-delivery`
- Impact-map dir: `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery`
- Changed path count: `65`
- Status counts: `新增 24、修改 32、删除 9`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `65` files, `+6224` / `-2817`

## 功能变化摘要

这个 leaf 属于 `Outbound delivery, routing, formatting, identity and network infrastructure`。本次版本差异显示它的主要变化是：新增 24、修改 32、删除 9。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/cli/send-runtime/channel-outbound-send.test.ts`
- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/AGENTS.md`
- `src/infra/outbound/account-scoped-conversation-bindings.ts`
- `src/infra/outbound/best-effort-delivery.test.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/deliver-types.ts`
- `src/infra/outbound/delivery-queue.reconnect-drain.test.ts`
- `src/infra/outbound/formatting.ts`
- `src/infra/outbound/identity-types.ts`
- `src/infra/outbound/message-plan.test.ts`
- `src/infra/outbound/message-plan.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `src/infra/outbound/message.gateway.runtime.ts`
- `src/infra/outbound/pending-spawn-query.ts`
- `src/infra/outbound/reply-policy.test.ts`
- `src/infra/outbound/reply-policy.ts`
- `src/infra/outbound/session-binding-normalization.ts`
- `src/infra/outbound/session-binding.types.ts`
- `src/infra/outbound/targets-loaded.test.ts`
- `src/infra/outbound/targets-loaded.ts`
- `src/infra/outbound/targets-resolve-shared.ts`
- `src/infra/outbound/targets-session.ts`
- `src/infra/outbound/targets.runtime.ts`

### 修改

- `src/infra/outbound/agent-delivery.test.ts`
- `src/infra/outbound/agent-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/current-conversation-bindings.test.ts`
- `src/infra/outbound/current-conversation-bindings.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/delivery-queue-recovery.ts`
- `src/infra/outbound/delivery-queue-storage.ts`
- `src/infra/outbound/delivery-queue.policy.test.ts`
- `src/infra/outbound/delivery-queue.recovery.test.ts`
- `src/infra/outbound/delivery-queue.storage.test.ts`
- `src/infra/outbound/delivery-queue.test-helpers.ts`
- `src/infra/outbound/delivery-queue.ts`
- `src/infra/outbound/message.channels.test.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/message.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/outbound.test.ts`
- `src/infra/outbound/send-deps.ts`
- `src/infra/outbound/session-context.test.ts`
- `src/infra/outbound/session-context.ts`
- `src/infra/outbound/targets.shared-test.ts`
- `src/infra/outbound/targets.test-helpers.ts`
- `src/infra/outbound/targets.test.ts`
- `src/infra/outbound/targets.ts`
- `src/infra/outbound/thread-id.ts`
- … 另有 2 个路径，详见 `leaf-impact.json`。

### 删除

- `src/cli/send-runtime/discord.ts`
- `src/cli/send-runtime/imessage.ts`
- `src/cli/send-runtime/signal.ts`
- `src/cli/send-runtime/slack.ts`
- `src/cli/send-runtime/telegram.ts`
- `src/cli/send-runtime/whatsapp.ts`
- `src/infra/outbound/deliver.lifecycle.test.ts`
- `src/infra/outbound/deliver.test-helpers.ts`
- `src/infra/outbound/targets.channel-resolution.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`outbound-delivery/` | pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/infra-outbound-delivery/outbound-delivery` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/infra-outbound-delivery/outbound-delivery/change-to-test.md` 的验证建议。
