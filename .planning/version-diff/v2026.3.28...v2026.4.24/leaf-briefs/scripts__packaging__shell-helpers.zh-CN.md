# scripts/packaging/shell-helpers

## 一句话结论

shell helpers 所属的 Build, CI, scripts, tests and release automation 有 3 个路径变化（修改 1、删除 1、重命名 1），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/shell-helpers`
- Changed path count: `3`
- Status counts: `修改 1、删除 1、重命名 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `3` files, `+39` / `-671`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：修改 1、删除 1、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 修改

- `docs/install/docker.md`

### 删除

- `scripts/shell-helpers/README.md`

### 重命名

- `scripts/shell-helpers/clawdock-helpers.sh`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `scripts/packaging/shell-helpers` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/shell-helpers/change-to-test.md` 的验证建议。
