# extensions/tool-capability-plugins/llm-task

## 一句话结论

llm task 所属的 Model/search/provider plugins and tool surfaces 有 4 个路径变化（新增 1、修改 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/llm-task`
- Changed path count: `4`
- Status counts: `新增 1、修改 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+70` / `-41`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 1、修改 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/llm-task/tsconfig.json`

### 修改

- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Tool behavior changed | `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts` | Add broader orchestration tests when embedded-agent contract or safety defaults change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/llm-task` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/llm-task/change-to-test.md` 的验证建议。
