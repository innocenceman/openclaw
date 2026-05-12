# extensions/channel-plugins/matrix

## 一句话结论

matrix 所属的 Bundled messaging channel plugins 有 285 个路径变化（新增 94、修改 176、删除 5、重命名 10），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/matrix`
- Changed path count: `285`
- Status counts: `新增 94、修改 176、删除 5、重命名 10`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `285` files, `+34677` / `-5336`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 94、修改 176、删除 5、重命名 10。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/matrix/.npmignore`
- `extensions/matrix/SPEC-SUPPORT.md`
- `extensions/matrix/auth-presence.ts`
- `extensions/matrix/channel-plugin-api.ts`
- `extensions/matrix/cli-metadata.ts`
- `extensions/matrix/contract-api.ts`
- `extensions/matrix/index.test.ts`
- `extensions/matrix/plugin-entry.handlers.runtime.ts`
- `extensions/matrix/runtime-heavy-api.ts`
- `extensions/matrix/runtime-setter-api.ts`
- `extensions/matrix/secret-contract-api.ts`
- `extensions/matrix/setup-plugin-api.ts`
- `extensions/matrix/src/approval-auth.test.ts`
- `extensions/matrix/src/approval-auth.ts`
- `extensions/matrix/src/approval-handler.runtime.test.ts`
- `extensions/matrix/src/approval-handler.runtime.ts`
- `extensions/matrix/src/approval-ids.ts`
- `extensions/matrix/src/approval-native.test.ts`
- `extensions/matrix/src/approval-native.ts`
- `extensions/matrix/src/approval-reaction-auth.ts`
- `extensions/matrix/src/approval-reactions.test.ts`
- `extensions/matrix/src/approval-reactions.ts`
- `extensions/matrix/src/channel-account-paths.ts`
- `extensions/matrix/src/channel.setup.ts`
- `extensions/matrix/src/cli-metadata.ts`
- `extensions/matrix/src/config-adapter.ts`
- `extensions/matrix/src/doctor-contract.ts`
- `extensions/matrix/src/doctor.test.ts`
- `extensions/matrix/src/exec-approval-resolver.test.ts`
- `extensions/matrix/src/exec-approval-resolver.ts`
- … 另有 64 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/matrix/CHANGELOG.md`
- `extensions/matrix/api.ts`
- `extensions/matrix/index.ts`
- `extensions/matrix/openclaw.plugin.json`
- `extensions/matrix/package.json`
- `extensions/matrix/runtime-api.ts`
- `extensions/matrix/setup-entry.ts`
- `extensions/matrix/src/account-selection.ts`
- `extensions/matrix/src/actions.account-propagation.test.ts`
- `extensions/matrix/src/actions.test.ts`
- `extensions/matrix/src/actions.ts`
- `extensions/matrix/src/channel.account-paths.test.ts`
- `extensions/matrix/src/channel.directory.test.ts`
- `extensions/matrix/src/channel.resolve.test.ts`
- `extensions/matrix/src/channel.runtime.ts`
- `extensions/matrix/src/channel.setup.test.ts`
- `extensions/matrix/src/channel.ts`
- `extensions/matrix/src/cli.test.ts`
- `extensions/matrix/src/cli.ts`
- `extensions/matrix/src/config-schema.test.ts`
- `extensions/matrix/src/config-schema.ts`
- `extensions/matrix/src/directory-live.test.ts`
- `extensions/matrix/src/directory-live.ts`
- `extensions/matrix/src/matrix/account-config.ts`
- `extensions/matrix/src/matrix/accounts.test.ts`
- `extensions/matrix/src/matrix/accounts.ts`
- `extensions/matrix/src/matrix/actions/client.test.ts`
- `extensions/matrix/src/matrix/actions/devices.test.ts`
- `extensions/matrix/src/matrix/actions/devices.ts`
- `extensions/matrix/src/matrix/actions/messages.test.ts`
- … 另有 146 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/matrix/legacy-crypto-inspector.ts`
- `extensions/matrix/package-manifest.contract.test.ts`
- `extensions/matrix/src/matrix/index.ts`
- `extensions/matrix/src/registry-backed.contract.test.ts`
- `extensions/matrix/src/session-binding.contract.test.ts`

### 重命名

- `extensions/matrix/src/account-selection.test.ts`
- `extensions/matrix/src/doctor.ts`
- `extensions/matrix/src/legacy-crypto.ts`
- `extensions/matrix/src/legacy-state.ts`
- `extensions/matrix/src/migration-config.test.ts`
- `extensions/matrix/src/migration-config.ts`
- `extensions/matrix/src/migration-snapshot-backup.ts`
- `extensions/matrix/src/startup-maintenance.test.ts`
- `extensions/matrix/src/startup-maintenance.ts`
- `extensions/matrix/src/test-helpers.ts`

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

- 首选验证：Manifest/package/entry/crypto bootstrap | `pnpm test:contracts:channels` plus `pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts` | `pnpm build` for crypto/runtime dependency boundary changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/matrix` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/matrix/change-to-test.md` 的验证建议。
