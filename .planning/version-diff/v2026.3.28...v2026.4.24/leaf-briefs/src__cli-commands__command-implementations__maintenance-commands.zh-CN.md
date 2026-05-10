# src/cli-commands/command-implementations/maintenance-commands

## 一句话结论

maintenance commands 所属的 CLI command surface, status output, onboarding and maintenance commands 有 301 个路径变化（新增 85、修改 202、删除 11、重命名 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands`
- Changed path count: `301`
- Status counts: `新增 85、修改 202、删除 11、重命名 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `300` files, `+24775` / `-10105`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 85、修改 202、删除 11、重命名 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/cli/argv-invocation.test.ts`
- `src/cli/argv-invocation.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/command-bootstrap.test.ts`
- `src/cli/command-bootstrap.ts`
- `src/cli/command-catalog.ts`
- `src/cli/command-config-resolution.runtime.ts`
- `src/cli/command-config-resolution.test.ts`
- `src/cli/command-config-resolution.ts`
- `src/cli/command-execution-startup.test.ts`
- `src/cli/command-execution-startup.ts`
- `src/cli/command-path-matches.test.ts`
- `src/cli/command-path-matches.ts`
- `src/cli/command-path-policy.test.ts`
- `src/cli/command-path-policy.ts`
- `src/cli/command-registration-policy.test.ts`
- `src/cli/command-registration-policy.ts`
- `src/cli/command-startup-policy.test.ts`
- `src/cli/command-startup-policy.ts`
- `src/cli/completion-cli.write-state.test.ts`
- `src/cli/completion-runtime.ts`
- `src/cli/debug-timing.test.ts`
- `src/cli/debug-timing.ts`
- `src/cli/deps.types.ts`
- `src/cli/exec-policy-cli.test.ts`
- `src/cli/exec-policy-cli.ts`
- `src/cli/gateway-secret-options.ts`
- `src/cli/logs-cli.runtime.ts`
- `src/cli/native-hook-relay-cli.test.ts`
- … 另有 55 个路径，详见 `leaf-impact.json`。

### 修改

- `src/cli/acp-cli.option-collisions.test.ts`
- `src/cli/acp-cli.ts`
- `src/cli/banner-config-lite.ts`
- `src/cli/banner.test.ts`
- `src/cli/banner.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `src/cli/channel-options.ts`
- `src/cli/channels-cli.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/cli-utils.ts`
- `src/cli/command-format.ts`
- `src/cli/command-options.ts`
- `src/cli/completion-cli.test.ts`
- `src/cli/completion-cli.ts`
- `src/cli/config-cli.integration.test.ts`
- `src/cli/config-cli.test.ts`
- `src/cli/config-cli.ts`
- `src/cli/config-set-input.ts`
- `src/cli/container-target.ts`
- `src/cli/cron-cli.test.ts`
- `src/cli/cron-cli/register.cron-add.ts`
- `src/cli/cron-cli/register.cron-edit.ts`
- `src/cli/cron-cli/register.cron-simple.ts`
- `src/cli/cron-cli/schedule-options.ts`
- `src/cli/cron-cli/shared.test.ts`
- `src/cli/cron-cli/shared.ts`
- `src/cli/daemon-cli-compat.test.ts`
- `src/cli/daemon-cli-compat.ts`
- … 另有 172 个路径，详见 `leaf-impact.json`。

### 删除

- `src/cli/nodes-run.ts`
- `src/cli/prompt.runtime.ts`
- `src/commands/message.default-agent.test.ts`
- `src/commands/onboard-auth.credentials.test.ts`
- `src/commands/onboard-non-interactive.provider-auth.test.ts`
- `src/commands/opencode-go-model-default.ts`
- `src/commands/opencode-zen-model-default.ts`
- `src/commands/self-hosted-provider-setup.ts`
- `src/commands/signal-install.ts`
- `src/commands/vllm-setup.ts`
- `src/commands/zai-endpoint-detect.ts`

### 重命名

- `src/cli/nodes-cli/register.invoke.approval-transport-timeout.test.ts`
- `src/cli/nodes-cli/register.invoke.nodes-run-approval-timeout.test.ts`
- `src/commands/signal-install.test.ts`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/maintenance-commands` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/maintenance-commands/change-to-test.md` 的验证建议。
