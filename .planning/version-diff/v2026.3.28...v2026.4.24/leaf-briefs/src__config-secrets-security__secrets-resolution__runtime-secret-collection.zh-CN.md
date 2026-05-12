# src/config-secrets-security/secrets-resolution/runtime-secret-collection

## 一句话结论

runtime secret collection 所属的 Gateway, config, infrastructure, security and auth 有 59 个路径变化（新增 44、修改 14、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection`
- Changed path count: `59`
- Status counts: `新增 44、修改 14、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `59` files, `+7855` / `-4785`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 44、修改 14、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/runtime-auth-profiles-oauth-policy.test.ts`
- `src/secrets/runtime-auth-refresh-failure.test.ts`
- `src/secrets/runtime-auth-store-inline-refs.test.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-channel-inactive-variants.test-support.ts`
- `src/secrets/runtime-channel-inactive-variants.test.ts`
- `src/secrets/runtime-command-secrets.ts`
- `src/secrets/runtime-config-collectors-channels.test.ts`
- `src/secrets/runtime-config-collectors-plugins.test.ts`
- `src/secrets/runtime-config-collectors-plugins.ts`
- `src/secrets/runtime-core-snapshots.test.ts`
- `src/secrets/runtime-discord-surface.test.ts`
- `src/secrets/runtime-discord.test-support.ts`
- `src/secrets/runtime-gateway-local-surfaces.test.ts`
- `src/secrets/runtime-inactive-core-surfaces.test.ts`
- `src/secrets/runtime-inactive-telegram-surfaces.test.ts`
- `src/secrets/runtime-legacy-x-search.test.ts`
- `src/secrets/runtime-manifest.runtime.ts`
- `src/secrets/runtime-matrix-shadowing.test.ts`
- `src/secrets/runtime-matrix-top-level.test.ts`
- `src/secrets/runtime-matrix.test-support.ts`
- `src/secrets/runtime-nextcloud-talk-file-precedence.test.ts`
- `src/secrets/runtime-nextcloud-talk.test-support.ts`
- `src/secrets/runtime-openai-file-fixture.test-helper.ts`
- `src/secrets/runtime-prepare.runtime.ts`
- `src/secrets/runtime-provider-and-media-surfaces.test.ts`
- `src/secrets/runtime-request-secret-refs.test.ts`
- `src/secrets/runtime-telegram-token-inheritance.test.ts`
- `src/secrets/runtime-telegram.test-support.ts`
- … 另有 14 个路径，详见 `leaf-impact.json`。

### 修改

- `src/secrets/exec-resolution-policy.ts`
- `src/secrets/provider-env-vars.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth-collectors.ts`
- `src/secrets/runtime-config-collectors-channels.ts`
- `src/secrets/runtime-config-collectors-core.ts`
- `src/secrets/runtime-config-collectors.ts`
- `src/secrets/runtime-gateway-auth-surfaces.ts`
- `src/secrets/runtime-web-tools.test.ts`
- `src/secrets/runtime-web-tools.ts`
- `src/secrets/runtime-web-tools.types.ts`
- `src/secrets/runtime.coverage.test.ts`
- `src/secrets/runtime.test.ts`
- `src/secrets/runtime.ts`

### 删除

- `src/secrets/runtime.integration.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- Gateway 使用者
- agent runtime 集成方
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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/runtime-secret-collection` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection/change-to-test.md` 的验证建议。
