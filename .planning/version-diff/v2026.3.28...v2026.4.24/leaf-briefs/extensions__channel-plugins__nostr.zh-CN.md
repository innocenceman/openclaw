# extensions/channel-plugins/nostr

## 一句话结论

nostr 所属的 Bundled messaging channel plugins 有 39 个路径变化（新增 11、修改 26、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/nostr`
- Changed path count: `39`
- Status counts: `新增 11、修改 26、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `39` files, `+1936` / `-1188`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 11、修改 26、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/nostr/channel-plugin-api.ts`
- `extensions/nostr/setup-plugin-api.ts`
- `extensions/nostr/src/channel-api.ts`
- `extensions/nostr/src/channel.setup.ts`
- `extensions/nostr/src/gateway.ts`
- `extensions/nostr/src/inbound-direct-dm-runtime.ts`
- `extensions/nostr/src/nostr-key-utils.ts`
- `extensions/nostr/src/nostr-profile-core.ts`
- `extensions/nostr/src/nostr-profile-http-runtime.ts`
- `extensions/nostr/src/nostr-profile-url-safety.ts`
- `extensions/nostr/tsconfig.json`

### 修改

- `extensions/nostr/README.md`
- `extensions/nostr/api.ts`
- `extensions/nostr/index.ts`
- `extensions/nostr/openclaw.plugin.json`
- `extensions/nostr/package.json`
- `extensions/nostr/setup-entry.ts`
- `extensions/nostr/src/channel.inbound.test.ts`
- `extensions/nostr/src/channel.outbound.test.ts`
- `extensions/nostr/src/channel.test.ts`
- `extensions/nostr/src/channel.ts`
- `extensions/nostr/src/config-schema.ts`
- `extensions/nostr/src/nostr-bus.fuzz.test.ts`
- `extensions/nostr/src/nostr-bus.inbound.test.ts`
- `extensions/nostr/src/nostr-bus.integration.test.ts`
- `extensions/nostr/src/nostr-bus.test.ts`
- `extensions/nostr/src/nostr-bus.ts`
- `extensions/nostr/src/nostr-profile-http.test.ts`
- `extensions/nostr/src/nostr-profile-http.ts`
- `extensions/nostr/src/nostr-profile-import.ts`
- `extensions/nostr/src/nostr-profile.fuzz.test.ts`
- `extensions/nostr/src/nostr-profile.ts`
- `extensions/nostr/src/nostr-state-store.ts`
- `extensions/nostr/src/runtime.ts`
- `extensions/nostr/src/setup-surface.ts`
- `extensions/nostr/src/test-fixtures.ts`
- `extensions/nostr/src/types.ts`

### 删除

- `extensions/nostr/CHANGELOG.md`
- `extensions/nostr/package-manifest.contract.test.ts`

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

- 首选验证：Manifest/package/route entry changed | `pnpm test:contracts:channels` plus `pnpm test -- extensions/nostr/src/channel.test.ts extensions/nostr/src/nostr-profile-http.test.ts` | `pnpm build` is required if package exports, runtime deps, HTTP route registration, or lazy-loading boundaries change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/channel-plugins/nostr` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/nostr/change-to-test.md` 的验证建议。
