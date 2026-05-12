# extensions/provider-plugins/byteplus

## 一句话结论

byteplus 所属的 Model/search/provider plugins and tool surfaces 有 13 个路径变化（新增 6、修改 5、删除 1、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/byteplus`
- Changed path count: `13`
- Status counts: `新增 6、修改 5、删除 1、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `13` files, `+656` / `-90`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 6、修改 5、删除 1、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/byteplus/index.test.ts`
- `extensions/byteplus/plugin-registration.contract.test.ts`
- `extensions/byteplus/provider-discovery.ts`
- `extensions/byteplus/tsconfig.json`
- `extensions/byteplus/video-generation-provider.test.ts`
- `extensions/byteplus/video-generation-provider.ts`

### 修改

- `extensions/byteplus/index.ts`
- `extensions/byteplus/models.ts`
- `extensions/byteplus/openclaw.plugin.json`
- `extensions/byteplus/package.json`
- `extensions/byteplus/provider-catalog.ts`

### 删除

- `extensions/byteplus/provider.contract.test.ts`

### 重命名

- `extensions/byteplus/live.test.ts`

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

## 建议验证

- 首选验证：Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/byteplus` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/byteplus/change-to-test.md` 的验证建议。
