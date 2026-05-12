# src/config-secrets-security/security-guards

## 一句话结论

security guards 所属的 Gateway, config, infrastructure, security and auth 有 78 个路径变化（新增 49、修改 21、删除 7、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/security-guards`
- Changed path count: `78`
- Status counts: `新增 49、修改 21、删除 7、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `78` files, `+7441` / `-6784`

## 功能变化摘要

这个 leaf 属于 `Gateway, config, infrastructure, security and auth`。本次版本差异显示它的主要变化是：新增 49、修改 21、删除 7、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/security/audit-channel-account-metadata.test.ts`
- `src/security/audit-channel-dm-policy.test.ts`
- `src/security/audit-channel-readonly-resolution.test.ts`
- `src/security/audit-channel-security.test-helpers.ts`
- `src/security/audit-channel-source-config-discord.test.ts`
- `src/security/audit-channel-source-config-slack.test.ts`
- `src/security/audit-channel-test-helpers.ts`
- `src/security/audit-config-basics.test.ts`
- `src/security/audit-config-include-perms.test.ts`
- `src/security/audit-config-symlink.test.ts`
- `src/security/audit-deep-code-safety.ts`
- `src/security/audit-deep-probe-findings.ts`
- `src/security/audit-exec-safe-bins.test.ts`
- `src/security/audit-exec-sandbox-host.test.ts`
- `src/security/audit-exec-surface.test.ts`
- `src/security/audit-extra.async.test.ts`
- `src/security/audit-extra.summary.ts`
- `src/security/audit-filesystem-windows.test.ts`
- `src/security/audit-gateway-auth-selection.test.ts`
- `src/security/audit-gateway-config.ts`
- `src/security/audit-gateway-exposure.test.ts`
- `src/security/audit-gateway-http-auth.test.ts`
- `src/security/audit-gateway-tools-http.test.ts`
- `src/security/audit-gateway.test.ts`
- `src/security/audit-hooks-routing.test.ts`
- `src/security/audit-loopback-logging.test.ts`
- `src/security/audit-model-hygiene.test.ts`
- `src/security/audit-node-command-findings.test.ts`
- `src/security/audit-plugin-code-safety.test.ts`
- `src/security/audit-plugin-readonly-scope.test.ts`
- … 另有 19 个路径，详见 `leaf-impact.json`。

### 修改

- `src/infra/net/ssrf.dispatcher.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/infra/net/ssrf.ts`
- `src/security/audit-channel.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit.nondeep.runtime.ts`
- `src/security/audit.ts`
- `src/security/dangerous-config-flags.ts`
- `src/security/dangerous-tools.ts`
- `src/security/dm-policy-shared.ts`
- `src/security/external-content.test.ts`
- `src/security/external-content.ts`
- `src/security/fix.test.ts`
- `src/security/fix.ts`
- `src/security/scan-paths.ts`
- `src/security/skill-scanner.test.ts`
- `src/security/skill-scanner.ts`
- `src/security/windows-acl.test.ts`
- `src/security/windows-acl.ts`

### 删除

- `src/security/audit-channel.allow-from.runtime.ts`
- `src/security/audit-channel.discord.runtime.ts`
- `src/security/audit-channel.telegram.runtime.ts`
- `src/security/audit-channel.zalouser.runtime.ts`
- `src/security/audit-extra.ts`
- `src/security/audit.test.ts`
- `src/security/mutable-allowlist-detectors.ts`

### 重命名

- `src/security/temp-path-guard.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/config-secrets-security/security-guards` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/security-guards/change-to-test.md` 的验证建议。
