# extensions/tool-capability-plugins/openshell

## 一句话结论

openshell 所属的 Model/search/provider plugins and tool surfaces 有 14 个路径变化（新增 4、修改 9、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/openshell`
- Changed path count: `14`
- Status counts: `新增 4、修改 9、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `14` files, `+1009` / `-450`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 4、修改 9、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/openshell/src/backend.test.ts`
- `extensions/openshell/src/backend.types.ts`
- `extensions/openshell/src/config.test.ts`
- `extensions/openshell/tsconfig.json`

### 修改

- `extensions/openshell/index.ts`
- `extensions/openshell/package.json`
- `extensions/openshell/src/backend.e2e.test.ts`
- `extensions/openshell/src/backend.ts`
- `extensions/openshell/src/config.ts`
- `extensions/openshell/src/fs-bridge.ts`
- `extensions/openshell/src/mirror.test.ts`
- `extensions/openshell/src/mirror.ts`
- `extensions/openshell/src/openshell-core.test.ts`

### 删除

- `extensions/openshell/src/remote-fs-bridge.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Manifest/config changed | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/openshell` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/openshell/change-to-test.md` 的验证建议。
