# extensions/channel-plugins/zalouser

## 一句话结论

zalouser 所属的 Bundled messaging channel plugins 有 60 个路径变化（新增 17、修改 40、删除 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalouser`
- Changed path count: `60`
- Status counts: `新增 17、修改 40、删除 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `60` files, `+1901` / `-772`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 17、修改 40、删除 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/zalouser/channel-plugin-api.ts`
- `extensions/zalouser/contract-api.ts`
- `extensions/zalouser/doctor-contract-api.ts`
- `extensions/zalouser/secret-contract-api.ts`
- `extensions/zalouser/setup-plugin-api.ts`
- `extensions/zalouser/src/accounts.runtime.ts`
- `extensions/zalouser/src/channel-api.ts`
- `extensions/zalouser/src/channel.adapters.ts`
- `extensions/zalouser/src/channel.runtime.ts`
- `extensions/zalouser/src/directory.ts`
- `extensions/zalouser/src/doctor-contract.ts`
- `extensions/zalouser/src/doctor.test.ts`
- `extensions/zalouser/src/doctor.ts`
- `extensions/zalouser/src/security-audit.test.ts`
- `extensions/zalouser/src/security-audit.ts`
- `extensions/zalouser/src/setup-test-helpers.ts`
- `extensions/zalouser/tsconfig.json`

### 修改

- `extensions/zalouser/README.md`
- `extensions/zalouser/api.ts`
- `extensions/zalouser/index.ts`
- `extensions/zalouser/openclaw.plugin.json`
- `extensions/zalouser/package.json`
- `extensions/zalouser/runtime-api.ts`
- `extensions/zalouser/setup-entry.ts`
- `extensions/zalouser/src/accounts.test.ts`
- `extensions/zalouser/src/accounts.ts`
- `extensions/zalouser/src/channel.directory.test.ts`
- `extensions/zalouser/src/channel.sendpayload.test.ts`
- `extensions/zalouser/src/channel.setup.test.ts`
- `extensions/zalouser/src/channel.setup.ts`
- `extensions/zalouser/src/channel.test.ts`
- `extensions/zalouser/src/channel.ts`
- `extensions/zalouser/src/config-schema.ts`
- `extensions/zalouser/src/group-policy.test.ts`
- `extensions/zalouser/src/group-policy.ts`
- `extensions/zalouser/src/monitor.account-scope.test.ts`
- `extensions/zalouser/src/monitor.group-gating.test.ts`
- `extensions/zalouser/src/monitor.ts`
- `extensions/zalouser/src/probe.ts`
- `extensions/zalouser/src/qr-temp-file.ts`
- `extensions/zalouser/src/reaction.ts`
- `extensions/zalouser/src/runtime.ts`
- `extensions/zalouser/src/send.test.ts`
- `extensions/zalouser/src/session-route.ts`
- `extensions/zalouser/src/setup-core.ts`
- `extensions/zalouser/src/setup-surface.test.ts`
- `extensions/zalouser/src/setup-surface.ts`
- … 另有 10 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/zalouser/CHANGELOG.md`
- `extensions/zalouser/package-manifest.contract.test.ts`
- `extensions/zalouser/src/outbound-payload.contract.test.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/zalouser/src/channel.setup.test.ts extensions/zalouser/src/tool.test.ts` | `pnpm build` is required if package metadata, exports, runtime deps, or dynamic/runtime boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/zalouser` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/zalouser/change-to-test.md` 的验证建议。
