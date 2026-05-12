# extensions/channel-plugins/imessage

## 一句话结论

imessage 所属的 Bundled messaging channel plugins 有 73 个路径变化（新增 33、修改 33、删除 7），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/imessage`
- Changed path count: `73`
- Status counts: `新增 33、修改 33、删除 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `73` files, `+3066` / `-1283`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 33、修改 33、删除 7。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/imessage/channel-plugin-api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/contract-api.ts`
- `extensions/imessage/doctor-contract-api.ts`
- `extensions/imessage/media-contract-api.ts`
- `extensions/imessage/secret-contract-api.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/accounts.test.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/config-accessors.test.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/config-schema.test.ts`
- `extensions/imessage/src/conversation-id-core.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/parse-notification.test.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.test.ts`
- `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.ts`
- `extensions/imessage/src/monitor/watch-error-log.test.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- `extensions/imessage/src/normalize.test.ts`
- `extensions/imessage/src/normalize.ts`
- `extensions/imessage/src/outbound-send-deps.ts`
- `extensions/imessage/src/probe.contract.test.ts`
- `extensions/imessage/src/status-core.ts`
- `extensions/imessage/src/status.test.ts`
- … 另有 3 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/imessage/api.ts`
- `extensions/imessage/index.ts`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/setup-entry.ts`
- `extensions/imessage/src/accounts.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/channel.setup.ts`
- `extensions/imessage/src/channel.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-schema.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-id.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor/deliver.test.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/parse-notification.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/probe.ts`
- `extensions/imessage/src/runtime.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/setup-surface.ts`
- `extensions/imessage/src/shared.ts`
- … 另有 3 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/imessage/src/channel.outbound.test.ts`
- `extensions/imessage/src/group-policy.contract.test.ts`
- `extensions/imessage/src/outbound-adapter.ts`
- `extensions/imessage/src/outbound-payload.contract.test.ts`
- `extensions/imessage/src/plugin-shared.ts`
- `extensions/imessage/src/plugins-core.contract.test.ts`
- `extensions/imessage/src/registry-backed.contract.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：Monitor gating/inbound context | `pnpm test -- extensions/imessage/src/monitor.gating.test.ts extensions/imessage/src/monitor/inbound-processing.test.ts` | Routing/command tests if policy changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/imessage` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/imessage/change-to-test.md` 的验证建议。
