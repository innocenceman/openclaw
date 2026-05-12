# ui/web-ui/styles-types

## 一句话结论

styles types 所属的 Memory, media, web UI and terminal UI surfaces 有 18 个路径变化（新增 7、修改 11），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/styles-types`
- Changed path count: `18`
- Status counts: `新增 7、修改 11`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+4062` / `-105`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 7、修改 11。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `ui/src/styles/chat/layout.test.ts`
- `ui/src/styles/components.test.ts`
- `ui/src/styles/config-quick.css`
- `ui/src/styles/config-quick.test.ts`
- `ui/src/styles/cron-quick-create.css`
- `ui/src/styles/dreams.css`
- `ui/src/styles/layout.mobile.test.ts`

### 修改

- `ui/src/styles.css`
- `ui/src/styles/base.css`
- `ui/src/styles/chat/grouped.css`
- `ui/src/styles/chat/layout.css`
- `ui/src/styles/chat/sidebar.css`
- `ui/src/styles/chat/text.css`
- `ui/src/styles/chat/tool-cards.css`
- `ui/src/styles/components.css`
- `ui/src/styles/config.css`
- `ui/src/styles/layout.css`
- `ui/src/styles/layout.mobile.css`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Global or feature stylesheet changed | `pnpm ui:build` | Escalate to `pnpm test:ui` or browser smoke when the style change affects interactive layout or view logic assumptions.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `ui/web-ui/styles-types` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/styles-types/change-to-test.md` 的验证建议。
