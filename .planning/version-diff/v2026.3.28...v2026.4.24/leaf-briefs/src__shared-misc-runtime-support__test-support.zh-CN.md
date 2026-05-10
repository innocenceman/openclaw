# src/shared-misc-runtime-support/test-support

## 一句话结论

test support 所属的 Shared runtime primitives, compatibility, logging and startup support 有 30 个路径变化（新增 10、修改 17、删除 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/test-support`
- Changed path count: `30`
- Status counts: `新增 10、修改 17、删除 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `30` files, `+1135` / `-268`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 10、修改 17、删除 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/test-helpers/resolve-target-error-cases.ts`
- `src/test-helpers/windows-cmd-shim.ts`
- `src/test-utils/bundled-plugin-public-surface.ts`
- `src/test-utils/generation-live-test-helpers.ts`
- `src/test-utils/provider-registry-allowlist.test-helpers.ts`
- `src/test-utils/session-conversation-registry.ts`
- `src/test-utils/session-write-lock-module-mock.ts`
- `src/test-utils/talk-test-provider.ts`
- `src/test-utils/task-registry-runtime.ts`
- `src/test-utils/web-provider-runtime.test-helpers.ts`

### 修改

- `src/test-helpers/ssrf.ts`
- `src/test-helpers/temp-dir.ts`
- `src/test-utils/auth-token-assertions.ts`
- `src/test-utils/camera-url-test-helpers.ts`
- `src/test-utils/channel-plugin-test-fixtures.ts`
- `src/test-utils/channel-plugins.ts`
- `src/test-utils/env.ts`
- `src/test-utils/fetch-mock.ts`
- `src/test-utils/mock-http-response.ts`
- `src/test-utils/plugin-registration.ts`
- `src/test-utils/ports.ts`
- `src/test-utils/repo-scan.ts`
- `src/test-utils/session-state-cleanup.test.ts`
- `src/test-utils/session-state-cleanup.ts`
- `src/test-utils/temp-home.ts`
- `src/test-utils/tracked-temp-dirs.ts`
- `src/test-utils/vitest-mock-fn.ts`

### 删除

- `src/test-helpers/whatsapp-outbound.ts`
- `src/test-utils/imessage-test-plugin.ts`
- `src/test-utils/runtime-source-guardrail-scan.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/test-support` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/test-support/change-to-test.md` 的验证建议。
