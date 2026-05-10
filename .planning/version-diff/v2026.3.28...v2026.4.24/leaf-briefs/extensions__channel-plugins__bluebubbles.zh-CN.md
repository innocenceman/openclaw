# extensions/channel-plugins/bluebubbles

## 一句话结论

bluebubbles 所属的 Bundled messaging channel plugins 有 88 个路径变化（新增 25、修改 56、删除 5、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/bluebubbles`
- Changed path count: `88`
- Status counts: `新增 25、修改 56、删除 5、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `88` files, `+7915` / `-1279`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 25、修改 56、删除 5、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/bluebubbles/channel-plugin-api.ts`
- `extensions/bluebubbles/contract-api.ts`
- `extensions/bluebubbles/secret-contract-api.ts`
- `extensions/bluebubbles/src/account-resolve.test.ts`
- `extensions/bluebubbles/src/accounts-normalization.ts`
- `extensions/bluebubbles/src/actions-api.ts`
- `extensions/bluebubbles/src/actions-contract.ts`
- `extensions/bluebubbles/src/catchup.test.ts`
- `extensions/bluebubbles/src/catchup.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/client.test.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/doctor-contract.ts`
- `extensions/bluebubbles/src/doctor.test.ts`
- `extensions/bluebubbles/src/doctor.ts`
- `extensions/bluebubbles/src/inbound-dedupe.test.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/monitor-processing-api.ts`
- `extensions/bluebubbles/src/pairing.ts`
- `extensions/bluebubbles/src/secret-contract.ts`
- `extensions/bluebubbles/src/test-helpers.ts`
- `extensions/bluebubbles/src/test-support/monitor-test-support.ts`
- `extensions/bluebubbles/src/webhook-ingress.ts`
- `extensions/bluebubbles/tsconfig.json`

### 修改

- `extensions/bluebubbles/README.md`
- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/index.ts`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/runtime-api.ts`
- `extensions/bluebubbles/setup-entry.ts`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions.runtime.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel.pairing.test.ts`
- `extensions/bluebubbles/src/channel.runtime.ts`
- `extensions/bluebubbles/src/channel.setup.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/chat.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/config-ui-hints.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- … 另有 26 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/bluebubbles/package-manifest.contract.test.ts`
- `extensions/bluebubbles/src/dm-policy.contract.test.ts`
- `extensions/bluebubbles/src/local-file-access.ts`
- `extensions/bluebubbles/src/monitor.webhook-route.test.ts`
- `extensions/bluebubbles/src/registry-backed.contract.test.ts`

### 重命名

- `extensions/bluebubbles/src/status-issues.test.ts`
- `extensions/bluebubbles/src/status-issues.ts`

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

- 首选验证：Manifest/package/entry/runtime barrels | `pnpm test:contracts:channels` plus `pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts` and targeted source inspection of `extensions/bluebubbles/src/channel.ts` | Runtime dependency staging/build if package deps or public exports change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/bluebubbles` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/bluebubbles/change-to-test.md` 的验证建议。
