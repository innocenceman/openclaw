# src/config-secrets-security/secrets-resolution/secret-storage-audit

## 一句话结论

secret storage audit 所属的 Gateway, config, infrastructure, security and auth 有 12 个路径变化（修改 12），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit`
- Changed path count: `12`
- Status counts: `修改 12`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `12` files, `+389` / `-267`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：修改 12。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 修改

- `src/secrets/apply.test.ts`
- `src/secrets/apply.ts`
- `src/secrets/audit.ts`
- `src/secrets/auth-profiles-scan.ts`
- `src/secrets/auth-store-paths.ts`
- `src/secrets/configure-plan.test.ts`
- `src/secrets/configure-plan.ts`
- `src/secrets/configure.test.ts`
- `src/secrets/configure.ts`
- `src/secrets/path-utils.test.ts`
- `src/secrets/path-utils.ts`
- `src/secrets/storage-scan.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Gateway 使用者
- 配置/安全相关调用方

## 建议验证

- 首选验证：1. Run `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/secret-storage-audit` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-storage-audit/change-to-test.md` 的验证建议。
