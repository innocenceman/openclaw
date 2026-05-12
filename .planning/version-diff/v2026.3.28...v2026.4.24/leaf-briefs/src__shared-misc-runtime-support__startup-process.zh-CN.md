# src/shared-misc-runtime-support/startup-process

## 一句话结论

startup process 所属的 Shared runtime primitives, compatibility, logging and startup support 有 77 个路径变化（新增 9、修改 68），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/startup-process`
- Changed path count: `77`
- Status counts: `新增 9、修改 68`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `77` files, `+5853` / `-1471`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 9、修改 68。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/daemon/gateway-entrypoint.ts`
- `src/daemon/restart-logs.test.ts`
- `src/daemon/restart-logs.ts`
- `src/node-host/plugin-node-host.test.ts`
- `src/node-host/plugin-node-host.ts`
- `src/process/command-queue.types.ts`
- `src/process/linux-oom-score.test.ts`
- `src/process/linux-oom-score.ts`
- `src/process/supervisor/adapters/test-support.ts`

### 修改

- `src/daemon/constants.test.ts`
- `src/daemon/constants.ts`
- `src/daemon/container-context.ts`
- `src/daemon/diagnostics.ts`
- `src/daemon/exec-file.ts`
- `src/daemon/inspect.test.ts`
- `src/daemon/inspect.ts`
- `src/daemon/launchd-restart-handoff.test.ts`
- `src/daemon/launchd-restart-handoff.ts`
- `src/daemon/launchd.integration.e2e.test.ts`
- `src/daemon/launchd.test.ts`
- `src/daemon/launchd.ts`
- `src/daemon/paths.ts`
- `src/daemon/program-args.test.ts`
- `src/daemon/program-args.ts`
- `src/daemon/runtime-binary.ts`
- `src/daemon/runtime-hints.test.ts`
- `src/daemon/runtime-hints.ts`
- `src/daemon/runtime-hints.windows-paths.test.ts`
- `src/daemon/runtime-parse.ts`
- `src/daemon/runtime-paths.test.ts`
- `src/daemon/runtime-paths.ts`
- `src/daemon/schtasks-exec.test.ts`
- `src/daemon/schtasks-exec.ts`
- `src/daemon/schtasks.install.test.ts`
- `src/daemon/schtasks.startup-fallback.test.ts`
- `src/daemon/schtasks.stop.test.ts`
- `src/daemon/schtasks.ts`
- `src/daemon/service-audit.ts`
- `src/daemon/service-env.test.ts`
- … 另有 38 个路径，详见 `leaf-impact.json`。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/startup-process` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/startup-process/change-to-test.md` 的验证建议。
