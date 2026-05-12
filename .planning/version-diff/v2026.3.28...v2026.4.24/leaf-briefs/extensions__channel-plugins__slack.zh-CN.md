# extensions/channel-plugins/slack

## 一句话结论

slack 所属的 Bundled messaging channel plugins 有 235 个路径变化（新增 92、修改 130、删除 13），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/slack`
- Changed path count: `235`
- Status counts: `新增 92、修改 130、删除 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `235` files, `+15540` / `-3110`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 92、修改 130、删除 13。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/slack/account-inspect-api.ts`
- `extensions/slack/channel-entry.ts`
- `extensions/slack/channel-plugin-api.ts`
- `extensions/slack/config-api.ts`
- `extensions/slack/configured-state.ts`
- `extensions/slack/contract-api.ts`
- `extensions/slack/directory-contract-api.ts`
- `extensions/slack/doctor-contract-api.ts`
- `extensions/slack/http-routes-api.ts`
- `extensions/slack/inbound-contract-test-api.ts`
- `extensions/slack/index.test.ts`
- `extensions/slack/interactive-replies-api.ts`
- `extensions/slack/message-tool-api.ts`
- `extensions/slack/outbound-payload-test-api.ts`
- `extensions/slack/runtime-setter-api.ts`
- `extensions/slack/secret-contract-api.ts`
- `extensions/slack/security-contract-api.ts`
- `extensions/slack/setup-plugin-api.ts`
- `extensions/slack/src/account-reply-mode.ts`
- `extensions/slack/src/accounts.runtime.ts`
- `extensions/slack/src/action-runtime.runtime.ts`
- `extensions/slack/src/action-threading.test.ts`
- `extensions/slack/src/actions.runtime.ts`
- `extensions/slack/src/approval-auth.test.ts`
- `extensions/slack/src/approval-auth.ts`
- `extensions/slack/src/approval-handler.runtime.test.ts`
- `extensions/slack/src/approval-handler.runtime.ts`
- `extensions/slack/src/approval-native.test.ts`
- `extensions/slack/src/approval-native.ts`
- `extensions/slack/src/blocks.test.ts`
- … 另有 62 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/slack/api.ts`
- `extensions/slack/index.ts`
- `extensions/slack/openclaw.plugin.json`
- `extensions/slack/package.json`
- `extensions/slack/runtime-api.ts`
- `extensions/slack/setup-entry.ts`
- `extensions/slack/src/account-inspect.ts`
- `extensions/slack/src/accounts.test.ts`
- `extensions/slack/src/accounts.ts`
- `extensions/slack/src/action-runtime.test.ts`
- `extensions/slack/src/action-runtime.ts`
- `extensions/slack/src/action-threading.ts`
- `extensions/slack/src/actions.download-file.test.ts`
- `extensions/slack/src/actions.ts`
- `extensions/slack/src/blocks-input.ts`
- `extensions/slack/src/blocks-render.ts`
- `extensions/slack/src/blocks.test-helpers.ts`
- `extensions/slack/src/channel-actions.ts`
- `extensions/slack/src/channel-migration.ts`
- `extensions/slack/src/channel-type.ts`
- `extensions/slack/src/channel.setup.ts`
- `extensions/slack/src/channel.test.ts`
- `extensions/slack/src/channel.ts`
- `extensions/slack/src/client.test.ts`
- `extensions/slack/src/client.ts`
- `extensions/slack/src/config-schema.ts`
- `extensions/slack/src/config-ui-hints.ts`
- `extensions/slack/src/directory-config.ts`
- `extensions/slack/src/directory-live.ts`
- `extensions/slack/src/draft-stream.test.ts`
- … 另有 100 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/slack/package-manifest.contract.test.ts`
- `extensions/slack/src/blocks-fallback.test.ts`
- `extensions/slack/src/blocks-input.test.ts`
- `extensions/slack/src/channel.runtime.ts`
- `extensions/slack/src/group-policy.contract.test.ts`
- `extensions/slack/src/inbound.contract.test.ts`
- `extensions/slack/src/message-actions.test.ts`
- `extensions/slack/src/modal-metadata.test.ts`
- `extensions/slack/src/outbound-hooks.test.ts`
- `extensions/slack/src/outbound-payload.contract.test.ts`
- `extensions/slack/src/plugin-shared.ts`
- `extensions/slack/src/plugins-core.contract.test.ts`
- `extensions/slack/src/registry-backed.contract.test.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/slack/src/channel.test.ts extensions/slack/src/channel-migration.test.ts` | `pnpm build` is required if package exports, staged deps, lazy runtime, or setup entry boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/slack` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/slack/change-to-test.md` 的验证建议。
