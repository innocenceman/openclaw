# src/gateway-api-surface/server-methods

## 一句话结论

server methods 所属的 Gateway, config, infrastructure, security and auth 有 81 个路径变化（新增 29、修改 52），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/gateway-api-surface/server-methods`
- Changed path count: `81`
- Status counts: `新增 29、修改 52`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `81` files, `+15507` / `-2287`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 29、修改 52。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/gateway/server-methods/approval-shared.ts`
- `src/gateway/server-methods/channels.start.test.ts`
- `src/gateway/server-methods/chat-webchat-media.test.ts`
- `src/gateway/server-methods/chat-webchat-media.ts`
- `src/gateway/server-methods/chat.send-deleted-agent.test.ts`
- `src/gateway/server-methods/commands.test.ts`
- `src/gateway/server-methods/commands.ts`
- `src/gateway/server-methods/config.shared-auth.test.ts`
- `src/gateway/server-methods/config.test-helpers.ts`
- `src/gateway/server-methods/config.test.ts`
- `src/gateway/server-methods/cron.validation.test.ts`
- `src/gateway/server-methods/deleted-agent-guard.test-helpers.ts`
- `src/gateway/server-methods/diagnostics.test.ts`
- `src/gateway/server-methods/diagnostics.ts`
- `src/gateway/server-methods/doctor.memory-core-runtime.ts`
- `src/gateway/server-methods/models-auth-status.test.ts`
- `src/gateway/server-methods/models-auth-status.ts`
- `src/gateway/server-methods/native-hook-relay.test.ts`
- `src/gateway/server-methods/native-hook-relay.ts`
- `src/gateway/server-methods/record-shared.ts`
- `src/gateway/server-methods/sessions.runtime.ts`
- `src/gateway/server-methods/sessions.send-deleted-agent.test.ts`
- `src/gateway/server-methods/shared-types.ts`
- `src/gateway/server-methods/skills.search-detail.test.ts`
- `src/gateway/server-methods/talk.test.ts`
- `src/gateway/server-methods/tools-effective.runtime.ts`
- `src/gateway/server-methods/tts.test.ts`
- `src/gateway/server-methods/usage.cost-usage-cache.test.ts`
- `src/gateway/server-methods/web.start.test.ts`

### 修改

- `src/gateway/server-methods.control-plane-rate-limit.test.ts`
- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent-job.ts`
- `src/gateway/server-methods/agent-timestamp.ts`
- `src/gateway/server-methods/agent-wait-dedupe.ts`
- `src/gateway/server-methods/agent.create-event.test.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents-mutate.test.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat-transcript-inject.ts`
- `src/gateway/server-methods/chat.abort-persistence.test.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/cron.ts`
- `src/gateway/server-methods/devices.test.ts`
- `src/gateway/server-methods/devices.ts`
- `src/gateway/server-methods/doctor.test.ts`
- `src/gateway/server-methods/doctor.ts`
- `src/gateway/server-methods/exec-approval.ts`
- `src/gateway/server-methods/logs.ts`
- `src/gateway/server-methods/nodes.helpers.ts`
- `src/gateway/server-methods/nodes.invoke-wake.test.ts`
- `src/gateway/server-methods/nodes.ts`
- `src/gateway/server-methods/plugin-approval.test.ts`
- `src/gateway/server-methods/plugin-approval.ts`
- `src/gateway/server-methods/push.ts`
- … 另有 22 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：`server-methods/` | pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/gateway-api-surface/server-methods` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/gateway-api-surface/server-methods/change-to-test.md` 的验证建议。
