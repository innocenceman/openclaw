# src/shared-misc-runtime-support/root-entrypoints

## 一句话结论

root entrypoints 所属的 Shared runtime primitives, compatibility, logging and startup support 有 11 个路径变化（新增 1、修改 10），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints`
- Changed path count: `11`
- Status counts: `新增 1、修改 10`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `11` files, `+246` / `-230`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 1、修改 10。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/entry.version-fast-path.ts`

### 修改

- `src/entry.test.ts`
- `src/entry.ts`
- `src/entry.version-fast-path.test.ts`
- `src/globals.ts`
- `src/index.ts`
- `src/library.test.ts`
- `src/library.ts`
- `src/param-key.ts`
- `src/version.test.ts`
- `src/version.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：1. Run targeted colocated tests such as `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/root-entrypoints` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints/change-to-test.md` 的验证建议。
