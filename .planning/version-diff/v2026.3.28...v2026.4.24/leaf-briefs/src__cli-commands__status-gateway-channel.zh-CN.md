# src/cli-commands/status-gateway-channel

## 一句话结论

status gateway channel 所属的 CLI command surface, status output, onboarding and maintenance commands 有 102 个路径变化（新增 44、修改 56、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/status-gateway-channel`
- Changed path count: `102`
- Status counts: `新增 44、修改 56、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `102` files, `+8914` / `-2868`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 44、修改 56、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/cli/daemon-cli/install.runtime.ts`
- `src/cli/daemon-cli/launchd-recovery.test.ts`
- `src/cli/daemon-cli/launchd-recovery.ts`
- `src/cli/daemon-cli/lifecycle.runtime.ts`
- `src/cli/daemon-cli/status.runtime.ts`
- `src/commands/gateway-status/output.test.ts`
- `src/commands/gateway-status/test-support.ts`
- `src/commands/status-all/channels-table.test.ts`
- `src/commands/status-all/channels-table.ts`
- `src/commands/status-all/channels-token-summary.ts`
- `src/commands/status-all/diagnosis.test.ts`
- `src/commands/status-all/format.test.ts`
- `src/commands/status-all/gateway.test.ts`
- `src/commands/status-all/report-data.ts`
- `src/commands/status-all/report-sections.ts`
- `src/commands/status-all/report-tables.test.ts`
- `src/commands/status-all/report-tables.ts`
- `src/commands/status-all/text-report.test.ts`
- `src/commands/status-all/text-report.ts`
- `src/commands/status.command-report-data.test.ts`
- `src/commands/status.command-report-data.ts`
- `src/commands/status.command-report.test.ts`
- `src/commands/status.command-report.ts`
- `src/commands/status.command-sections.test.ts`
- `src/commands/status.command-sections.ts`
- `src/commands/status.format.test.ts`
- `src/commands/status.gateway-connection.runtime.ts`
- `src/commands/status.gateway-connection.test.ts`
- `src/commands/status.gateway-connection.ts`
- `src/commands/status.node-mode.test.ts`
- … 另有 14 个路径，详见 `leaf-impact.json`。

### 修改

- `src/cli/daemon-cli/gateway-token-drift.test.ts`
- `src/cli/daemon-cli/gateway-token-drift.ts`
- `src/cli/daemon-cli/install.integration.test.ts`
- `src/cli/daemon-cli/install.test.ts`
- `src/cli/daemon-cli/install.ts`
- `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`
- `src/cli/daemon-cli/lifecycle-core.test.ts`
- `src/cli/daemon-cli/lifecycle-core.ts`
- `src/cli/daemon-cli/lifecycle.test.ts`
- `src/cli/daemon-cli/lifecycle.ts`
- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/register-service-commands.test.ts`
- `src/cli/daemon-cli/register-service-commands.ts`
- `src/cli/daemon-cli/register.ts`
- `src/cli/daemon-cli/restart-health.test.ts`
- `src/cli/daemon-cli/restart-health.ts`
- `src/cli/daemon-cli/shared.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.print.test.ts`
- `src/cli/daemon-cli/status.print.ts`
- `src/cli/daemon-cli/status.ts`
- `src/commands/gateway-status/discovery.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `src/commands/gateway-status/helpers.ts`
- `src/commands/gateway-status/output.ts`
- `src/commands/gateway-status/probe-run.ts`
- `src/commands/status-all/channels.mattermost-token-summary.test.ts`
- `src/commands/status-all/channels.ts`
- … 另有 26 个路径，详见 `leaf-impact.json`。

### 删除

- `src/commands/status-all/agents.ts`
- `src/commands/status.scan.json-core.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：`status-gateway-channel/` | pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/status-gateway-channel` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/status-gateway-channel/change-to-test.md` 的验证建议。
