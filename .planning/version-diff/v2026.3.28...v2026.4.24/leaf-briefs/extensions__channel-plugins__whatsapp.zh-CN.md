# extensions/channel-plugins/whatsapp

## 一句话结论

whatsapp 所属的 Bundled messaging channel plugins 有 224 个路径变化（新增 106、修改 100、删除 7、重命名 11），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/whatsapp`
- Changed path count: `224`
- Status counts: `新增 106、修改 100、删除 7、重命名 11`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `220` files, `+17360` / `-4449`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 106、修改 100、删除 7、重命名 11。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/whatsapp/channel-plugin-api.ts`
- `extensions/whatsapp/config-api.ts`
- `extensions/whatsapp/constants.ts`
- `extensions/whatsapp/contract-api.ts`
- `extensions/whatsapp/directory-contract-api.ts`
- `extensions/whatsapp/doctor-contract-api.ts`
- `extensions/whatsapp/index.test.ts`
- `extensions/whatsapp/legacy-session-surface-api.ts`
- `extensions/whatsapp/legacy-state-migrations-api.ts`
- `extensions/whatsapp/login-qr-runtime.ts`
- `extensions/whatsapp/outbound-payload-test-api.ts`
- `extensions/whatsapp/secret-contract-api.ts`
- `extensions/whatsapp/security-contract-api.ts`
- `extensions/whatsapp/setup-entry.test.ts`
- `extensions/whatsapp/setup-plugin-api.ts`
- `extensions/whatsapp/src/account-config.ts`
- `extensions/whatsapp/src/account-ids.ts`
- `extensions/whatsapp/src/account-types.ts`
- `extensions/whatsapp/src/agent-tools-login.test.ts`
- `extensions/whatsapp/src/approval-auth.test.ts`
- `extensions/whatsapp/src/approval-auth.ts`
- `extensions/whatsapp/src/auth-store.runtime.ts`
- `extensions/whatsapp/src/auth-store.test.ts`
- `extensions/whatsapp/src/auto-reply/config.runtime.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.runtime.ts`
- `extensions/whatsapp/src/auto-reply/monitor/ack-reaction.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/audio-preflight.runtime.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-activation.runtime.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-activation.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/group-gating.runtime.ts`
- … 另有 76 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/whatsapp/api.ts`
- `extensions/whatsapp/auth-presence.ts`
- `extensions/whatsapp/index.ts`
- `extensions/whatsapp/login-qr-api.ts`
- `extensions/whatsapp/openclaw.plugin.json`
- `extensions/whatsapp/package.json`
- `extensions/whatsapp/runtime-api.ts`
- `extensions/whatsapp/setup-entry.ts`
- `extensions/whatsapp/src/accounts.test.ts`
- `extensions/whatsapp/src/accounts.ts`
- `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts`
- `extensions/whatsapp/src/action-runtime-target-auth.ts`
- `extensions/whatsapp/src/action-runtime.test.ts`
- `extensions/whatsapp/src/action-runtime.ts`
- `extensions/whatsapp/src/active-listener.test.ts`
- `extensions/whatsapp/src/active-listener.ts`
- `extensions/whatsapp/src/agent-tools-login.ts`
- `extensions/whatsapp/src/auth-store.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts`
- `extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.test-harness.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts`
- `extensions/whatsapp/src/auto-reply.web-auto-reply.last-route.test.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.test.ts`
- `extensions/whatsapp/src/auto-reply/deliver-reply.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`
- `extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`
- `extensions/whatsapp/src/auto-reply/mentions.ts`
- `extensions/whatsapp/src/auto-reply/monitor.ts`
- … 另有 70 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/whatsapp/package-manifest.contract.test.ts`
- `extensions/whatsapp/src/auto-reply/monitor/process-message.inbound-context.test.ts`
- `extensions/whatsapp/src/channel.test.ts`
- `extensions/whatsapp/src/group-policy.contract.test.ts`
- `extensions/whatsapp/src/inbound.contract.test.ts`
- `extensions/whatsapp/src/monitor-inbox.streams-inbound-messages.test.ts`
- `extensions/whatsapp/src/plugins-core.contract.test.ts`

### 重命名

- `extensions/whatsapp/channel-catalog.contract.test.ts`
- `extensions/whatsapp/src/heartbeat-recipients.test.ts`
- `extensions/whatsapp/src/heartbeat-recipients.ts`
- `extensions/whatsapp/src/monitor-inbox.allows-messages-from-senders-allowfrom-list.test-support.ts`
- `extensions/whatsapp/src/monitor-inbox.allows-messages-from-senders-allowfrom-list.test.ts`
- `extensions/whatsapp/src/monitor-inbox.append-upsert.test-support.ts`
- `extensions/whatsapp/src/monitor-inbox.append-upsert.test.ts`
- `extensions/whatsapp/src/monitor-inbox.blocks-messages-from-unauthorized-senders-not-allowfrom.test-support.ts`
- `extensions/whatsapp/src/monitor-inbox.blocks-messages-from-unauthorized-senders-not-allowfrom.test.ts`
- `extensions/whatsapp/src/monitor-inbox.captures-media-path-image-messages.test-support.ts`
- `extensions/whatsapp/src/monitor-inbox.captures-media-path-image-messages.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/whatsapp` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/whatsapp/change-to-test.md` 的验证建议。
