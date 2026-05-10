# src/shared-misc-runtime-support/logging-support

## 一句话结论

logging support 所属的 Shared runtime primitives, compatibility, logging and startup support 有 49 个路径变化（新增 25、修改 24），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/logging-support`
- Changed path count: `49`
- Status counts: `新增 25、修改 24`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `49` files, `+6326` / `-566`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 25、修改 24。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/logging/diagnostic-log-events.test.ts`
- `src/logging/diagnostic-memory.test.ts`
- `src/logging/diagnostic-memory.ts`
- `src/logging/diagnostic-payload.ts`
- `src/logging/diagnostic-runtime.ts`
- `src/logging/diagnostic-stability-bundle.test.ts`
- `src/logging/diagnostic-stability-bundle.ts`
- `src/logging/diagnostic-stability.test.ts`
- `src/logging/diagnostic-stability.ts`
- `src/logging/diagnostic-support-bundle.test.ts`
- `src/logging/diagnostic-support-bundle.ts`
- `src/logging/diagnostic-support-export.test.ts`
- `src/logging/diagnostic-support-export.ts`
- `src/logging/diagnostic-support-log-redaction.ts`
- `src/logging/diagnostic-support-redaction.ts`
- `src/logging/level-filter.test.ts`
- `src/logging/levels.test.ts`
- `src/logging/log-file-path.ts`
- `src/logging/log-tail.test.ts`
- `src/logging/log-tail.ts`
- `src/logging/log-test-helpers.ts`
- `src/logging/logger-transport.test.ts`
- `src/logging/test-helpers/diagnostic-log-capture.ts`
- `src/logging/test-helpers/warn-log-capture.ts`
- `src/logging/types.ts`

### 修改

- `src/logger.test.ts`
- `src/logging/config.test.ts`
- `src/logging/config.ts`
- `src/logging/console-capture.test.ts`
- `src/logging/console-timestamp.test.ts`
- `src/logging/console.ts`
- `src/logging/diagnostic-session-state.ts`
- `src/logging/diagnostic.test.ts`
- `src/logging/diagnostic.ts`
- `src/logging/env-log-level.ts`
- `src/logging/levels.ts`
- `src/logging/log-file-size-cap.test.ts`
- `src/logging/logger-env.test.ts`
- `src/logging/logger-timestamp.test.ts`
- `src/logging/logger.browser-import.test.ts`
- `src/logging/logger.ts`
- `src/logging/node-require.ts`
- `src/logging/parse-log-line.ts`
- `src/logging/redact-identifier.ts`
- `src/logging/redact.test.ts`
- `src/logging/redact.ts`
- `src/logging/subsystem.test.ts`
- `src/logging/subsystem.ts`
- `src/logging/timestamps.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/logging-support` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/logging-support/change-to-test.md` 的验证建议。
