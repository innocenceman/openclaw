# extensions/channel-plugins/zalo

## 一句话结论

zalo 所属的 Bundled messaging channel plugins 有 65 个路径变化（新增 18、修改 42、删除 4、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalo`
- Changed path count: `65`
- Status counts: `新增 18、修改 42、删除 4、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `65` files, `+3091` / `-564`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 18、修改 42、删除 4、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/zalo/channel-plugin-api.ts`
- `extensions/zalo/contract-api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/secret-contract-api.ts`
- `extensions/zalo/setup-api.ts`
- `extensions/zalo/src/actions.test.ts`
- `extensions/zalo/src/approval-auth.test.ts`
- `extensions/zalo/src/approval-auth.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `extensions/zalo/src/monitor.types.ts`
- `extensions/zalo/src/outbound-media.test.ts`
- `extensions/zalo/src/outbound-media.ts`
- `extensions/zalo/src/runtime-support.ts`
- `extensions/zalo/src/secret-contract.ts`
- `extensions/zalo/src/setup-allow-from.ts`
- `extensions/zalo/test-support/monitor-mocks-test-support.ts`
- `extensions/zalo/tsconfig.json`

### 修改

- `extensions/zalo/README.md`
- `extensions/zalo/api.ts`
- `extensions/zalo/index.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/setup-entry.ts`
- `extensions/zalo/src/accounts.test.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/api.test.ts`
- `extensions/zalo/src/api.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.runtime.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/group-access.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/monitor.webhook.test.ts`
- `extensions/zalo/src/monitor.webhook.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/probe.ts`
- `extensions/zalo/src/proxy.ts`
- `extensions/zalo/src/runtime-api.ts`
- `extensions/zalo/src/runtime.ts`
- `extensions/zalo/src/send.test.ts`
- … 另有 12 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/zalo/CHANGELOG.md`
- `extensions/zalo/package-manifest.contract.test.ts`
- `extensions/zalo/src/group-policy.contract.test.ts`
- `extensions/zalo/src/registry-backed.contract.test.ts`

### 重命名

- `extensions/zalo/test-support/lifecycle-test-support.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts` | `pnpm build` is required if package metadata, exports, runtime deps, or lazy runtime boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/zalo` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/zalo/change-to-test.md` 的验证建议。
