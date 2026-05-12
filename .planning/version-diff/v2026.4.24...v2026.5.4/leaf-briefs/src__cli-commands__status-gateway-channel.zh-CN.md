# src/cli-commands/status-gateway-channel

## 1. 功能结论

**修改**：update authenticate restart health probes、gateway add safe restart coordinator、cron clarify no-delivery previews、status tolerate malformed session model refs；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：消息渠道使用者、渠道插件维护者
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 63

## 3. 功能级详细差异

### 修复 ci satisfy lint after restart controls

修复 ci：satisfy lint after restart controls

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 cron clarify no-delivery previews

修复 cron：clarify no-delivery previews

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 discord surface stalled transport health

修复 discord：surface stalled transport health

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway add safe restart coordinator

修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway expose restart drain controls

修复 gateway：expose restart drain controls

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 memory split vector store readiness

修复 memory：split vector store readiness

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 status tolerate malformed session model refs

修复 status：tolerate malformed session model refs

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 status trust live channel credential state

修复 status：trust live channel credential state

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 update authenticate restart health probes

修复 update：authenticate restart health probes

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 tolerate prerelease channel metadata

测试覆盖 tolerate prerelease channel metadata

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 install.integration regression/contract coverage、install regression/contract coverage、lifecycle core.config guard regression/contract coverage、lifecycle core regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/status-gateway-channel`
- Changed path count: `66`
- Status counts: `新增 3、修改 63`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `66` files, `+3573` / `-445`

### 归纳依据

- 主要落点：CLI/command behavior、gateway runtime。
- 新增或暴露的关键符号包括：`mergeInstallInvocationEnv`。
- 建议优先验证：优先运行 `| pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(update): authenticate restart health probes；fix(gateway): add safe restart coordinator；fix(cron): clarify no-delivery previews；fix(status): tolerate malformed session model refs；fix(memory): split vector store readiness；test: tolerate prerelease channel metadata；fix(discord): surface stalled transport health；fix(ci): satisfy lint after restart controls

### Dimension evidence

- `maintenance-修复-ci-satisfy-lint-after-restart-controls` / 修复 ci satisfy lint after restart controls:
  - source: `path` [M] `src/cli/daemon-cli/restart-health.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/restart-health.ts` — semantic cue
- `maintenance-修复-cron-clarify-no-delivery-previews` / 修复 cron clarify no-delivery previews:
  - source: `path` [A] `src/cli/daemon-cli/start-repair.ts`
  - source: `path` [A] `src/commands/status-all/channels.test.ts`
  - source: `path` [A] `src/commands/status.daemon.test.ts`
  - source: `path` [M] `src/cli/daemon-cli/install.integration.test.ts`
  - source: `path` [M] `src/cli/daemon-cli/install.test.ts`
  - source: `path` [M] `src/cli/daemon-cli/install.ts`
- `maintenance-修复-discord-surface-stalled-transport-health` / 修复 discord surface stalled transport health:
  - source: `path` [M] `src/cli/daemon-cli/restart-health.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/restart-health.ts` — semantic cue
- `maintenance-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [M] `src/cli/daemon-cli/restart-health.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/restart-health.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/output.test.ts` — semantic cue
- `maintenance-修复-gateway-expose-restart-drain-controls` / 修复 gateway expose restart drain controls:
  - source: `path` [M] `src/cli/daemon-cli/restart-health.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/restart-health.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/output.test.ts` — semantic cue
- `maintenance-修复-memory-split-vector-store-readiness` / 修复 memory split vector store readiness:
  - source: `path` [M] `src/commands/status.scan-memory.ts` — semantic cue
- `maintenance-修复-status-tolerate-malformed-session-model-refs` / 修复 status tolerate malformed session model refs:
  - source: `path` [M] `src/cli/daemon-cli/status.gather.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.gather.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.print.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.print.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.test.ts` — semantic cue
- `maintenance-修复-status-trust-live-channel-credential-state` / 修复 status trust live channel credential state:
  - source: `path` [M] `src/cli/daemon-cli/status.gather.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.gather.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.print.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/status.print.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/discovery.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-status/helpers.test.ts` — semantic cue
- `maintenance-修复-update-authenticate-restart-health-probes` / 修复 update authenticate restart health probes:
  - source: `path` [M] `src/cli/daemon-cli/restart-health.test.ts` — semantic cue
  - source: `path` [M] `src/cli/daemon-cli/restart-health.ts` — semantic cue
  - source: `path` [M] `src/commands/status.update.test.ts` — semantic cue
  - source: `path` [M] `src/commands/status.update.ts` — semantic cue
- `public-contract-测试覆盖-tolerate-prerelease-channel-metadata` / 测试覆盖 tolerate prerelease channel metadata:
  - source: `path` [M] `src/commands/status-all/channels.test.ts` — semantic cue
  - source: `path` [M] `src/commands/status-all/channels.ts` — semantic cue
  - source: `path` [M] `src/commands/status.link-channel.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cli/daemon-cli/install.integration.test.ts` — test evidence
  - source: `path` [M] `src/cli/daemon-cli/install.test.ts` — test evidence
  - source: `path` [M] `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts` — test evidence
  - source: `path` [M] `src/cli/daemon-cli/lifecycle-core.test.ts` — test evidence
  - source: `path` [M] `src/cli/daemon-cli/lifecycle.test.ts` — test evidence
  - source: `path` [M] `src/cli/daemon-cli/probe.test.ts` — test evidence

### 路径证据

- 新增 `src/cli/daemon-cli/start-repair.ts`：调整 start repair（CLI/command behavior）。
- 新增 `src/commands/status-all/channels.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/status.daemon.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/install.integration.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/install.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/install.ts`：调整 install（CLI/command behavior）。
- 修改 `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/lifecycle-core.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/lifecycle-core.ts`：调整 lifecycle core（CLI/command behavior）。
- 修改 `src/cli/daemon-cli/lifecycle.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/lifecycle.ts`：调整 lifecycle（CLI/command behavior）。
- 修改 `src/cli/daemon-cli/probe.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/probe.ts`：调整 probe（CLI/command behavior）。
- 修改 `src/cli/daemon-cli/register-service-commands.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/daemon-cli/register-service-commands.ts`：调整 register service commands（CLI/command behavior）。
- 其余 51 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/status-gateway-channel` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/status-gateway-channel/change-to-test.md` 的验证建议。
