# src/cli-commands/command-implementations/config-doctor-commands

## 一句话结论

config doctor commands 所属的 CLI command surface, status output, onboarding and maintenance commands 有 192 个路径变化（新增 55、修改 116、删除 9、重命名 12），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands`
- Changed path count: `192`
- Status counts: `新增 55、修改 116、删除 9、重命名 12`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `192` files, `+20132` / `-6425`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 55、修改 116、删除 9、重命名 12。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/commands/daemon-install-auth-profiles-source.runtime.ts`
- `src/commands/daemon-install-auth-profiles-store.runtime.ts`
- `src/commands/doctor-auth.profile-health.test.ts`
- `src/commands/doctor-browser.facade.test.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`
- `src/commands/doctor-bundled-plugin-runtime-deps.ts`
- `src/commands/doctor-claude-cli.test.ts`
- `src/commands/doctor-claude-cli.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.constants-drift.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.test.ts`
- `src/commands/doctor-cron-dreaming-payload-migration.ts`
- `src/commands/doctor-cron-legacy-delivery.test.ts`
- `src/commands/doctor-cron-store-migration.test.ts`
- `src/commands/doctor-device-pairing.test.ts`
- `src/commands/doctor-device-pairing.ts`
- `src/commands/doctor-workspace.test.ts`
- `src/commands/doctor.types.ts`
- `src/commands/doctor/shared/allow-from-mode.types.ts`
- `src/commands/doctor/shared/channel-doctor.test.ts`
- `src/commands/doctor/shared/channel-doctor.ts`
- `src/commands/doctor/shared/channel-legacy-config-migrate.test.ts`
- `src/commands/doctor/shared/channel-legacy-config-migrate.ts`
- `src/commands/doctor/shared/channel-plugin-blockers.test.ts`
- `src/commands/doctor/shared/channel-plugin-blockers.ts`
- `src/commands/doctor/shared/legacy-config-compat.ts`
- `src/commands/doctor/shared/legacy-config-compatibility-base.ts`
- `src/commands/doctor/shared/legacy-config-core-migrate.ts`
- `src/commands/doctor/shared/legacy-config-core-normalizers.ts`
- `src/commands/doctor/shared/legacy-config-migrate.provider-shapes.test.ts`
- `src/commands/doctor/shared/legacy-config-migrations.channels.ts`
- … 另有 25 个路径，详见 `leaf-impact.json`。

### 修改

- `src/commands/config-validation.test.ts`
- `src/commands/config-validation.ts`
- `src/commands/configure.daemon.test.ts`
- `src/commands/configure.daemon.ts`
- `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`
- `src/commands/configure.gateway-auth.ts`
- `src/commands/configure.gateway.ts`
- `src/commands/configure.shared.ts`
- `src/commands/configure.wizard.test.ts`
- `src/commands/configure.wizard.ts`
- `src/commands/daemon-install-helpers.test.ts`
- `src/commands/daemon-install-helpers.ts`
- `src/commands/daemon-install-plan.shared.ts`
- `src/commands/doctor-auth.deprecated-cli-profiles.test.ts`
- `src/commands/doctor-auth.hints.test.ts`
- `src/commands/doctor-auth.ts`
- `src/commands/doctor-bootstrap-size.ts`
- `src/commands/doctor-browser.ts`
- `src/commands/doctor-completion.ts`
- `src/commands/doctor-config-analysis.ts`
- `src/commands/doctor-config-flow.include-warning.test.ts`
- `src/commands/doctor-config-flow.missing-default-account-bindings.integration.test.ts`
- `src/commands/doctor-config-flow.safe-bins.test.ts`
- `src/commands/doctor-config-flow.test-utils.ts`
- `src/commands/doctor-config-flow.test.ts`
- `src/commands/doctor-config-flow.ts`
- `src/commands/doctor-config-preflight.ts`
- `src/commands/doctor-cron.test.ts`
- `src/commands/doctor-cron.ts`
- `src/commands/doctor-gateway-auth-token.ts`
- … 另有 86 个路径，详见 `leaf-impact.json`。

### 删除

- `src/commands/doctor.matrix-migration.test.ts`
- `src/commands/doctor.migrates-slack-discord-dm-policy-aliases.test.ts`
- `src/commands/doctor.update-repair-no-restart.test.ts`
- `src/commands/doctor/providers/discord.test.ts`
- `src/commands/doctor/providers/discord.ts`
- `src/commands/doctor/providers/matrix.test.ts`
- `src/commands/doctor/providers/telegram.test.ts`
- `src/commands/doctor/shared/mutable-allowlist.test.ts`
- `src/commands/doctor/shared/mutable-allowlist.ts`

### 重命名

- `src/commands/doctor-browser.test.ts`
- `src/commands/doctor-cron-legacy-delivery.ts`
- `src/commands/doctor-cron-payload-migration.ts`
- `src/commands/doctor-cron-store-migration.ts`
- `src/commands/doctor/providers/matrix.ts`
- `src/commands/doctor/providers/telegram.ts`
- `src/commands/doctor/shared/legacy-config-migrate.test.ts`
- `src/commands/doctor/shared/legacy-config-migrate.ts`
- `src/commands/doctor/shared/legacy-config-migrations.audio.ts`
- `src/commands/doctor/shared/legacy-config-migrations.ts`
- `src/commands/doctor/shared/legacy-web-search-migrate.test.ts`
- `src/commands/doctor/shared/legacy-web-search-migrate.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/config-doctor-commands` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands/change-to-test.md` 的验证建议。
