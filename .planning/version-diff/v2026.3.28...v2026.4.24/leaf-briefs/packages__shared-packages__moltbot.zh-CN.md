# packages/shared-packages/moltbot

## 一句话结论

moltbot 所属的 Plugin SDK, plugin registry, plugin loading boundaries 有 3 个路径变化（删除 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages/moltbot`
- Changed path count: `3`
- Status counts: `删除 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `3` files, `+0` / `-18`

## 功能变化摘要

这个 leaf 属于 `Plugin SDK, plugin registry, plugin loading boundaries`。本次版本差异显示它的主要变化是：删除 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 删除

- `packages/moltbot/index.js`
- `packages/moltbot/package.json`
- `packages/moltbot/scripts/postinstall.js`

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

- 首选验证：Change `bin` metadata | Confirm declared `packages/moltbot/bin/moltbot.js` exists and forwards correctly. | Run npm pack/install smoke in an isolated temp project before release.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `packages/shared-packages/moltbot` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/packages/shared-packages/moltbot/change-to-test.md` 的验证建议。
