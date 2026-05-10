# extensions/channel-plugins/msteams

## 一句话结论

msteams 所属的 Bundled messaging channel plugins 有 148 个路径变化（新增 59、修改 85、删除 4），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/msteams`
- Changed path count: `148`
- Status counts: `新增 59、修改 85、删除 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `148` files, `+17132` / `-2404`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 59、修改 85、删除 4。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/contract-api.ts`
- `extensions/msteams/secret-contract-api.ts`
- `extensions/msteams/src/actions.ts`
- `extensions/msteams/src/approval-auth.ts`
- `extensions/msteams/src/attachments.graph.test.ts`
- `extensions/msteams/src/attachments.test-helpers.ts`
- `extensions/msteams/src/attachments/bot-framework.test.ts`
- `extensions/msteams/src/attachments/bot-framework.ts`
- `extensions/msteams/src/attachments/graph.test.ts`
- `extensions/msteams/src/attachments/remote-media.test.ts`
- `extensions/msteams/src/channel-api.ts`
- `extensions/msteams/src/channel.test.ts`
- `extensions/msteams/src/conversation-store-helpers.test.ts`
- `extensions/msteams/src/directory.ts`
- `extensions/msteams/src/doctor.ts`
- `extensions/msteams/src/file-consent-invoke.ts`
- `extensions/msteams/src/file-consent.test.ts`
- `extensions/msteams/src/graph-group-management.test.ts`
- `extensions/msteams/src/graph-group-management.ts`
- `extensions/msteams/src/graph-members.test.ts`
- `extensions/msteams/src/graph-members.ts`
- `extensions/msteams/src/graph-messages.actions.test.ts`
- `extensions/msteams/src/graph-messages.read.test.ts`
- `extensions/msteams/src/graph-messages.search.test.ts`
- `extensions/msteams/src/graph-messages.test-helpers.ts`
- `extensions/msteams/src/graph-teams.test.ts`
- `extensions/msteams/src/graph-teams.ts`
- `extensions/msteams/src/monitor-handler.adaptive-card.test.ts`
- … 另有 29 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/msteams/api.ts`
- `extensions/msteams/index.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/src/attachments.helpers.test.ts`
- `extensions/msteams/src/attachments.test.ts`
- `extensions/msteams/src/attachments.ts`
- `extensions/msteams/src/attachments/download.ts`
- `extensions/msteams/src/attachments/graph.ts`
- `extensions/msteams/src/attachments/html.ts`
- `extensions/msteams/src/attachments/remote-media.ts`
- `extensions/msteams/src/attachments/shared.test.ts`
- `extensions/msteams/src/attachments/shared.ts`
- `extensions/msteams/src/attachments/types.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.directory.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-schema.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/conversation-store-fs.ts`
- `extensions/msteams/src/conversation-store-helpers.ts`
- `extensions/msteams/src/conversation-store.shared.test.ts`
- `extensions/msteams/src/conversation-store.ts`
- `extensions/msteams/src/directory-live.ts`
- `extensions/msteams/src/errors.test.ts`
- `extensions/msteams/src/errors.ts`
- `extensions/msteams/src/feedback-reflection-prompt.ts`
- … 另有 55 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/msteams/CHANGELOG.md`
- `extensions/msteams/channel-catalog.contract.test.ts`
- `extensions/msteams/package-manifest.contract.test.ts`
- `extensions/msteams/src/graph-messages.test.ts`

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

- 首选验证：Manifest/package/entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts` | `pnpm build` is required if exports, lazy runtime boundaries, package metadata, or runtime deps change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/msteams` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/msteams/change-to-test.md` 的验证建议。
