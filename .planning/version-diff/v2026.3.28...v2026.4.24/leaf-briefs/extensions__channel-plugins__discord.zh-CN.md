# extensions/channel-plugins/discord

## 一句话结论

discord 所属的 Bundled messaging channel plugins 有 307 个路径变化（新增 99、修改 197、删除 10、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/discord`
- Changed path count: `307`
- Status counts: `新增 99、修改 197、删除 10、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `307` files, `+22397` / `-10284`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 99、修改 197、删除 10、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/channel-plugin-api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/configured-state.ts`
- `extensions/discord/contract-api.ts`
- `extensions/discord/directory-contract-api.ts`
- `extensions/discord/doctor-contract-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/runtime-setter-api.ts`
- `extensions/discord/secret-contract-api.ts`
- `extensions/discord/security-audit-contract-api.ts`
- `extensions/discord/security-contract-api.ts`
- `extensions/discord/setup-plugin-api.ts`
- `extensions/discord/src/approval-handler.runtime.test.ts`
- `extensions/discord/src/approval-handler.runtime.ts`
- `extensions/discord/src/approval-native.test.ts`
- `extensions/discord/src/approval-native.ts`
- `extensions/discord/src/approval-runtime.ts`
- `extensions/discord/src/approval-shared.ts`
- `extensions/discord/src/audit-core.ts`
- `extensions/discord/src/channel-actions.contract.test.ts`
- `extensions/discord/src/channel-actions.runtime.ts`
- `extensions/discord/src/channel-api.ts`
- `extensions/discord/src/client.proxy.test.ts`
- `extensions/discord/src/component-custom-id.ts`
- `extensions/discord/src/components.types.ts`
- `extensions/discord/src/config-schema.test.ts`
- `extensions/discord/src/conversation-identity.ts`
- `extensions/discord/src/delivery-retry.ts`
- `extensions/discord/src/directory-contract.test.ts`
- … 另有 69 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/discord/api.ts`
- `extensions/discord/index.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/setup-entry.ts`
- `extensions/discord/src/account-inspect.test.ts`
- `extensions/discord/src/account-inspect.ts`
- `extensions/discord/src/accounts.test.ts`
- `extensions/discord/src/accounts.ts`
- `extensions/discord/src/actions/handle-action.guild-admin.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/actions/runtime.guild.ts`
- `extensions/discord/src/actions/runtime.messaging.ts`
- `extensions/discord/src/actions/runtime.moderation.authz.test.ts`
- `extensions/discord/src/actions/runtime.moderation.ts`
- `extensions/discord/src/actions/runtime.presence.test.ts`
- `extensions/discord/src/actions/runtime.presence.ts`
- `extensions/discord/src/actions/runtime.shared.ts`
- `extensions/discord/src/actions/runtime.test.ts`
- `extensions/discord/src/actions/runtime.ts`
- `extensions/discord/src/api.test.ts`
- `extensions/discord/src/audit.test.ts`
- `extensions/discord/src/audit.ts`
- `extensions/discord/src/channel-actions.test.ts`
- `extensions/discord/src/channel-actions.ts`
- `extensions/discord/src/channel.setup.ts`
- `extensions/discord/src/channel.test.ts`
- `extensions/discord/src/channel.ts`
- … 另有 167 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/discord/package-manifest.contract.test.ts`
- `extensions/discord/src/group-policy.contract.test.ts`
- `extensions/discord/src/inbound.contract.test.ts`
- `extensions/discord/src/monitor.tool-result.accepts-guild-messages-mentionpatterns-match.e2e.test.ts`
- `extensions/discord/src/monitor.tool-result.sends-status-replies-responseprefix.test.ts`
- `extensions/discord/src/monitor.tool-result.test-harness.ts`
- `extensions/discord/src/monitor.tool-result.test-helpers.ts`
- `extensions/discord/src/monitor/provider.lifecycle.reconnect.ts`
- `extensions/discord/src/plugins-core.contract.test.ts`
- `extensions/discord/src/registry-backed.contract.test.ts`

### 重命名

- `extensions/discord/src/test-support/provider.test-support.ts`

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

- 首选验证：Manifest/package/entry/runtime deps | `pnpm test:contracts:channels` plus `pnpm test -- extensions/discord/src/channel.test.ts` | Runtime dependency staging/build if package deps or exports change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/discord` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/discord/change-to-test.md` 的验证建议。
