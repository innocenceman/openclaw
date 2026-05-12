# src/cli-commands/command-implementations/channel-plugin-commands

## 一句话结论

channel plugin commands 所属的 CLI command surface, status output, onboarding and maintenance commands 有 38 个路径变化（新增 9、修改 29），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands`
- Changed path count: `38`
- Status counts: `新增 9、修改 29`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `38` files, `+3596` / `-1079`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 9、修改 29。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/registry.test.ts`
- `src/commands/channel-setup/trusted-catalog.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.status.external-env.test.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/configure.channels.test.ts`

### 修改

- `src/commands/channel-account-context.test.ts`
- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-test-helpers.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.mock-harness.ts`
- `src/commands/channels.plugin-install.test-helpers.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.status.command-flow.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add-mutators.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status.ts`
- `src/commands/configure.channels.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：1. Run `pnpm test -- src/commands/channels.ts src/commands/channels`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/channel-plugin-commands` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/channel-plugin-commands/change-to-test.md` 的验证建议。
