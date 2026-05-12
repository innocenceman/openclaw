# extensions/channel-plugins/googlechat

## 一句话结论

googlechat 所属的 Bundled messaging channel plugins 有 49 个路径变化（新增 21、修改 27、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/googlechat`
- Changed path count: `49`
- Status counts: `新增 21、修改 27、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `49` files, `+3750` / `-788`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 21、修改 27、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/googlechat/channel-plugin-api.ts`
- `extensions/googlechat/contract-api.ts`
- `extensions/googlechat/secret-contract-api.ts`
- `extensions/googlechat/setup-plugin-api.ts`
- `extensions/googlechat/src/approval-auth.test.ts`
- `extensions/googlechat/src/approval-auth.ts`
- `extensions/googlechat/src/channel.adapters.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/doctor-contract.test.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/doctor.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `extensions/googlechat/src/monitor-routing.ts`
- `extensions/googlechat/src/secret-contract.test.ts`
- `extensions/googlechat/src/secret-contract.ts`
- `extensions/googlechat/src/sender-allow.ts`
- `extensions/googlechat/tsconfig.json`

### 修改

- `extensions/googlechat/api.ts`
- `extensions/googlechat/index.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/setup-entry.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.test.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/api.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/monitor-access.test.ts`
- `extensions/googlechat/src/monitor-access.ts`
- `extensions/googlechat/src/monitor-types.ts`
- `extensions/googlechat/src/monitor-webhook.test.ts`
- `extensions/googlechat/src/monitor-webhook.ts`
- `extensions/googlechat/src/monitor.ts`
- `extensions/googlechat/src/monitor.webhook-routing.test.ts`
- `extensions/googlechat/src/runtime.ts`
- `extensions/googlechat/src/setup-core.ts`
- `extensions/googlechat/src/setup-surface.ts`
- `extensions/googlechat/src/setup.test.ts`
- `extensions/googlechat/src/targets.test.ts`
- `extensions/googlechat/src/targets.ts`

### 删除

- `extensions/googlechat/package-manifest.contract.test.ts`

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

- 首选验证：Manifest/package/entry/channel | `pnpm test:contracts:channels` plus `pnpm test -- extensions/googlechat/src/channel.test.ts` | Build/staging if deps or exports change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/googlechat` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/googlechat/change-to-test.md` 的验证建议。
