# extensions/channel-plugins/signal

## 一句话结论

signal 所属的 Bundled messaging channel plugins 有 69 个路径变化（新增 18、修改 41、删除 8、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/signal`
- Changed path count: `69`
- Status counts: `新增 18、修改 41、删除 8、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `69` files, `+2003` / `-765`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 18、修改 41、删除 8、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/signal/channel-entry.ts`
- `extensions/signal/channel-plugin-api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/contract-api.ts`
- `extensions/signal/secret-contract-api.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/accounts.test.ts`
- `extensions/signal/src/approval-auth.test.ts`
- `extensions/signal/src/approval-auth.ts`
- `extensions/signal/src/config-schema.test.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/monitor/event-handler.silent-ingest.test.ts`
- `extensions/signal/src/monitor/inbound-context.ts`
- `extensions/signal/src/normalize.test.ts`
- `extensions/signal/src/probe.contract.test.ts`
- `extensions/signal/src/send.runtime.ts`
- `extensions/signal/src/uuid.ts`
- `extensions/signal/tsconfig.json`

### 修改

- `extensions/signal/api.ts`
- `extensions/signal/index.ts`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/setup-entry.ts`
- `extensions/signal/src/accounts.ts`
- `extensions/signal/src/channel.setup.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/config-schema.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/dm-policy.contract.test.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/identity.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/message-actions.ts`
- `extensions/signal/src/monitor.tool-result.autostart.test.ts`
- `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`
- `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/event-handler.inbound-context.test.ts`
- `extensions/signal/src/monitor/event-handler.mention-gating.test.ts`
- `extensions/signal/src/monitor/event-handler.test-harness.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/monitor/event-handler.types.ts`
- `extensions/signal/src/normalize.ts`
- `extensions/signal/src/outbound-session.ts`
- … 另有 11 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/signal/src/inbound.contract.test.ts`
- `extensions/signal/src/index.ts`
- `extensions/signal/src/outbound-adapter.ts`
- `extensions/signal/src/outbound.test.ts`
- `extensions/signal/src/plugin-shared.ts`
- `extensions/signal/src/plugins-core.contract.test.ts`
- `extensions/signal/src/registry-backed.contract.test.ts`
- `extensions/signal/test-api.ts`

### 重命名

- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/signal/src/core.test.ts` | `pnpm build` is required if package exports, runtime API, or lazy runtime boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/signal` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/signal/change-to-test.md` 的验证建议。
