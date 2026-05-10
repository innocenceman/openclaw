# extensions/channel-plugins/mattermost

## 一句话结论

mattermost 所属的 Bundled messaging channel plugins 有 88 个路径变化（新增 26、修改 57、删除 5），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/mattermost`
- Changed path count: `88`
- Status counts: `新增 26、修改 57、删除 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `88` files, `+4024` / `-1327`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 26、修改 57、删除 5。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/mattermost/channel-plugin-api.ts`
- `extensions/mattermost/channel-plugin-runtime.ts`
- `extensions/mattermost/contract-api.ts`
- `extensions/mattermost/gateway-auth-api.ts`
- `extensions/mattermost/policy-api.ts`
- `extensions/mattermost/secret-contract-api.ts`
- `extensions/mattermost/slash-route-api.ts`
- `extensions/mattermost/src/approval-auth.test.ts`
- `extensions/mattermost/src/approval-auth.ts`
- `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts`
- `extensions/mattermost/src/channel-api.ts`
- `extensions/mattermost/src/channel-config-shared.ts`
- `extensions/mattermost/src/channel.runtime.ts`
- `extensions/mattermost/src/channel.setup.ts`
- `extensions/mattermost/src/doctor-contract.ts`
- `extensions/mattermost/src/doctor.test.ts`
- `extensions/mattermost/src/doctor.ts`
- `extensions/mattermost/src/gateway-auth-bypass.test.ts`
- `extensions/mattermost/src/gateway-auth-bypass.ts`
- `extensions/mattermost/src/mattermost/draft-stream.test.ts`
- `extensions/mattermost/src/mattermost/draft-stream.ts`
- `extensions/mattermost/src/secret-contract.ts`
- `extensions/mattermost/src/setup.accounts.runtime.ts`
- `extensions/mattermost/src/setup.client.runtime.ts`
- `extensions/mattermost/src/setup.secret-input.runtime.ts`
- `extensions/mattermost/tsconfig.json`

### 修改

- `extensions/mattermost/index.ts`
- `extensions/mattermost/openclaw.plugin.json`
- `extensions/mattermost/package.json`
- `extensions/mattermost/runtime-api.ts`
- `extensions/mattermost/setup-entry.ts`
- `extensions/mattermost/src/channel.test.ts`
- `extensions/mattermost/src/channel.ts`
- `extensions/mattermost/src/config-schema-core.ts`
- `extensions/mattermost/src/config-schema.test.ts`
- `extensions/mattermost/src/config-schema.ts`
- `extensions/mattermost/src/mattermost/accounts.test.ts`
- `extensions/mattermost/src/mattermost/accounts.ts`
- `extensions/mattermost/src/mattermost/client.retry.test.ts`
- `extensions/mattermost/src/mattermost/client.test.ts`
- `extensions/mattermost/src/mattermost/client.ts`
- `extensions/mattermost/src/mattermost/directory.test.ts`
- `extensions/mattermost/src/mattermost/directory.ts`
- `extensions/mattermost/src/mattermost/interactions.test.ts`
- `extensions/mattermost/src/mattermost/interactions.ts`
- `extensions/mattermost/src/mattermost/model-picker.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.test.ts`
- `extensions/mattermost/src/mattermost/monitor-auth.ts`
- `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- `extensions/mattermost/src/mattermost/monitor-resources.test.ts`
- `extensions/mattermost/src/mattermost/monitor-slash.test.ts`
- `extensions/mattermost/src/mattermost/monitor-slash.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.test.ts`
- `extensions/mattermost/src/mattermost/monitor-websocket.ts`
- `extensions/mattermost/src/mattermost/monitor.test.ts`
- `extensions/mattermost/src/mattermost/monitor.ts`
- … 另有 27 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/mattermost/package-manifest.contract.test.ts`
- `extensions/mattermost/src/config-runtime.ts`
- `extensions/mattermost/src/dm-policy.contract.test.ts`
- `extensions/mattermost/src/mattermost/index.ts`
- `extensions/mattermost/src/registry-backed.contract.test.ts`

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

- 首选验证：Manifest/package/channel id changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts` | Escalate to `pnpm build` if exports, package metadata, lazy loading, or install/runtime deps change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/mattermost` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/mattermost/change-to-test.md` 的验证建议。
