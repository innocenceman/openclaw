# src/config-secrets-security/sessions

## 一句话结论

sessions 所属的 Gateway, config, infrastructure, security and auth 有 53 个路径变化（新增 20、修改 32、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/sessions`
- Changed path count: `53`
- Status counts: `新增 20、修改 32、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `53` files, `+2815` / `-1148`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 20、修改 32、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/config/sessions/combined-store-gateway.ts`
- `src/config/sessions/inbound.runtime.ts`
- `src/config/sessions/reset-policy.ts`
- `src/config/sessions/reset-preserved-selection.ts`
- `src/config/sessions/reset.test.ts`
- `src/config/sessions/runtime-types.ts`
- `src/config/sessions/session-key.test-helpers.ts`
- `src/config/sessions/store-entry.ts`
- `src/config/sessions/store-load.ts`
- `src/config/sessions/store-lock-state.ts`
- `src/config/sessions/store-maintenance-runtime.ts`
- `src/config/sessions/test-helpers.ts`
- `src/config/sessions/thread-info.ts`
- `src/config/sessions/transcript-mirror.ts`
- `src/config/sessions/transcript-resolve.runtime.ts`
- `src/config/sessions/transcript.runtime.ts`
- `src/config/sessions/transcript.test.ts`
- `src/sessions/session-chat-type-shared.ts`
- `src/sessions/session-chat-type.ts`
- `src/sessions/session-id-resolution.test.ts`

### 修改

- `src/config/sessions/delivery-info.test.ts`
- `src/config/sessions/delivery-info.ts`
- `src/config/sessions/disk-budget.test.ts`
- `src/config/sessions/disk-budget.ts`
- `src/config/sessions/explicit-session-key-normalization.test.ts`
- `src/config/sessions/explicit-session-key-normalization.ts`
- `src/config/sessions/group.ts`
- `src/config/sessions/main-session.ts`
- `src/config/sessions/metadata.ts`
- `src/config/sessions/paths.ts`
- `src/config/sessions/reset.ts`
- `src/config/sessions/session-file.ts`
- `src/config/sessions/session-key.test.ts`
- `src/config/sessions/sessions.test.ts`
- `src/config/sessions/store-maintenance.ts`
- `src/config/sessions/store-read.test.ts`
- `src/config/sessions/store.lock.test.ts`
- `src/config/sessions/store.pruning.integration.test.ts`
- `src/config/sessions/store.pruning.test.ts`
- `src/config/sessions/store.session-key-normalization.test.ts`
- `src/config/sessions/store.ts`
- `src/config/sessions/targets.ts`
- `src/config/sessions/transcript.ts`
- `src/config/sessions/types.ts`
- `src/sessions/input-provenance.ts`
- `src/sessions/level-overrides.ts`
- `src/sessions/model-overrides.test.ts`
- `src/sessions/model-overrides.ts`
- `src/sessions/send-policy.ts`
- `src/sessions/session-id-resolution.ts`
- … 另有 2 个路径，详见 `leaf-impact.json`。

### 删除

- `src/config/sessions/store-summary.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/sessions` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/sessions/change-to-test.md` 的验证建议。
