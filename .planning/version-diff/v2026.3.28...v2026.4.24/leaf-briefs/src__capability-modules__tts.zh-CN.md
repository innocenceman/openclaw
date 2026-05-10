# src/capability-modules/tts

## 一句话结论

tts 所属的 Memory, media, web UI and terminal UI surfaces 有 17 个路径变化（新增 5、修改 11、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/tts`
- Changed path count: `17`
- Status counts: `新增 5、修改 11、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `17` files, `+753` / `-175`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 5、修改 11、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/tts/directives.test.ts`
- `src/tts/tts-config.test.ts`
- `src/tts/tts-provider-helpers.ts`
- `src/tts/tts-types.ts`
- `src/tts/tts.test.ts`

### 修改

- `src/tts/directives.ts`
- `src/tts/prepare-text.test.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-auto-mode.ts`
- `src/tts/tts-config.ts`
- `src/tts/tts-core.ts`
- `src/tts/tts.ts`

### 删除

- `src/tts/runtime.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/capability-modules/tts` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/tts/change-to-test.md` 的验证建议。
