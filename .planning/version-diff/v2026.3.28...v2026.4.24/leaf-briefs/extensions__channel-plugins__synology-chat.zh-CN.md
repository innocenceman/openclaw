# extensions/channel-plugins/synology-chat

## 一句话结论

synology chat 所属的 Bundled messaging channel plugins 有 30 个路径变化（新增 8、修改 20、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/synology-chat`
- Changed path count: `30`
- Status counts: `新增 8、修改 20、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+854` / `-394`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 8、修改 20、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/synology-chat/api.ts`
- `extensions/synology-chat/channel-plugin-api.ts`
- `extensions/synology-chat/contract-api.ts`
- `extensions/synology-chat/src/approval-auth.test.ts`
- `extensions/synology-chat/src/approval-auth.ts`
- `extensions/synology-chat/src/security-audit.test.ts`
- `extensions/synology-chat/src/security-audit.ts`
- `extensions/synology-chat/tsconfig.json`

### 修改

- `extensions/synology-chat/index.ts`
- `extensions/synology-chat/openclaw.plugin.json`
- `extensions/synology-chat/package.json`
- `extensions/synology-chat/setup-entry.ts`
- `extensions/synology-chat/src/accounts.ts`
- `extensions/synology-chat/src/channel.integration.test.ts`
- `extensions/synology-chat/src/channel.test.ts`
- `extensions/synology-chat/src/channel.ts`
- `extensions/synology-chat/src/client.test.ts`
- `extensions/synology-chat/src/client.ts`
- `extensions/synology-chat/src/core.test.ts`
- `extensions/synology-chat/src/gateway-runtime.ts`
- `extensions/synology-chat/src/inbound-turn.ts`
- `extensions/synology-chat/src/runtime.ts`
- `extensions/synology-chat/src/security.ts`
- `extensions/synology-chat/src/session-key.ts`
- `extensions/synology-chat/src/setup-surface.ts`
- `extensions/synology-chat/src/test-http-utils.ts`
- `extensions/synology-chat/src/webhook-handler.test.ts`
- `extensions/synology-chat/src/webhook-handler.ts`

### 删除

- `extensions/synology-chat/package-manifest.contract.test.ts`
- `extensions/synology-chat/src/registry-backed.contract.test.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/synology-chat/src/core.test.ts extensions/synology-chat/src/channel.test.ts` | `pnpm build` is required if package metadata, exports, or runtime dependency behavior changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/synology-chat` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/synology-chat/change-to-test.md` 的验证建议。
