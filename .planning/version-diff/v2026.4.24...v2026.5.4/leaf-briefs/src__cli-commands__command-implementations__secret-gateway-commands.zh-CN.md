# src/cli-commands/command-implementations/secret-gateway-commands

## 1. 功能结论

**新增**：add gateway stall diagnostics；**修改**：preserve gateway watch trace overrides、gateway add safe restart coordinator、keep config recovery in doctor、gateway expose restart drain controls；**迁移/重构**：unify lazy import loaders、unify lazy module loaders；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 4、修改 14

## 3. 功能级详细差异

### 修复 avoid duplicate gateway config loads

修复 avoid duplicate gateway config loads

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 gateway add safe restart coordinator

修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 gateway expose restart drain controls

修复 gateway：expose restart drain controls

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 gateway surface unreachable status diagnostics

修复 gateway：surface unreachable status diagnostics

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 keep config recovery in doctor

修复 keep config recovery in doctor

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 preserve gateway watch trace overrides

修复 preserve gateway watch trace overrides

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 修复 stop orphaned QA gateway children

修复 stop orphaned QA gateway children

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 新增 add gateway stall diagnostics

新增 add gateway stall diagnostics

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 迁移/重构 unify lazy module loaders

迁移/重构 unify lazy module loaders

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 command secret resolution.coverage regression/contract coverage、qa parent watchdog regression/contract coverage、run loop regression/contract coverage、run.option collisions regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/secret-gateway-commands`
- Changed path count: `18`
- Status counts: `新增 4、修改 14`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+1499` / `-444`

### 归纳依据

- 主要落点：gateway runtime、CLI/command behavior。
- 新增或暴露的关键符号包括：`QA_PARENT_PID_ENV`, `DEFAULT_QA_PARENT_WATCHDOG_INTERVAL_MS`, `resolveQaParentPid`, `installQaParentWatchdog`, `DEFAULT_RESTART_DEFERRAL_TIMEOUT_MS`, `RESTART_DRAIN_STILL_PENDING_WARN_MS`, `UPDATE_RESPAWN_HEALTH_TIMEOUT_MS`, `UPDATE_RESPAWN_HEALTH_POLL_MS`, `createRestartIterationHook`。
- 建议优先验证：优先运行 `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`。
- 相关 commit 主题：fix: preserve gateway watch trace overrides；feat: add gateway stall diagnostics；fix(gateway): add safe restart coordinator；fix: keep config recovery in doctor；fix(gateway): expose restart drain controls；fix(gateway): surface unreachable status diagnostics；fix: avoid duplicate gateway config loads；fix: stop orphaned QA gateway children

### Dimension evidence

- `maintenance-修复-avoid-duplicate-gateway-config-loads` / 修复 avoid duplicate gateway config loads:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-修复-gateway-expose-restart-drain-controls` / 修复 gateway expose restart drain controls:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-修复-gateway-surface-unreachable-status-diagnosti` / 修复 gateway surface unreachable status diagnostics:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-修复-keep-config-recovery-in-doctor` / 修复 keep config recovery in doctor:
  - source: `path` [M] `src/commands/gateway-install-token.persist.runtime.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-install-token.test.ts` — semantic cue
  - source: `path` [M] `src/commands/gateway-install-token.ts` — semantic cue
- `maintenance-修复-preserve-gateway-watch-trace-overrides` / 修复 preserve gateway watch trace overrides:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-修复-stop-orphaned-QA-gateway-children` / 修复 stop orphaned QA gateway children:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `maintenance-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/cli/command-secret-resolution.coverage.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-module-loaders` / 迁移/重构 unify lazy module loaders:
  - source: `path` [M] `src/cli/command-secret-resolution.coverage.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/dev.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/lifecycle.runtime.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.ts` — semantic cue
  - source: `path` [M] `src/cli/gateway-cli/register.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cli/command-secret-resolution.coverage.test.ts` — test evidence
  - source: `path` [M] `src/cli/gateway-cli/qa-parent-watchdog.test.ts` — test evidence
  - source: `path` [M] `src/cli/gateway-cli/run-loop.test.ts` — test evidence
  - source: `path` [M] `src/cli/gateway-cli/run.option-collisions.test.ts` — test evidence
  - source: `path` [M] `src/cli/gateway-cli/run.supervised-lock.test.ts` — test evidence
  - source: `path` [M] `src/commands/gateway-install-token.test.ts` — test evidence

### 路径证据

- 新增 `src/cli/gateway-cli/lifecycle.runtime.ts`：调整 lifecycle（gateway runtime）。
- 新增 `src/cli/gateway-cli/qa-parent-watchdog.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/cli/gateway-cli/qa-parent-watchdog.ts`：调整 qa parent watchdog（gateway runtime）。
- 新增 `src/cli/gateway-cli/run.supervised-lock.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/command-secret-resolution.coverage.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/gateway-cli/dev.ts`：调整 dev（gateway runtime）。
- 修改 `src/cli/gateway-cli/register.ts`：调整 register（gateway runtime）。
- 修改 `src/cli/gateway-cli/run-loop.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/gateway-cli/run-loop.ts`：调整 run loop（gateway runtime）。
- 修改 `src/cli/gateway-cli/run.option-collisions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/gateway-cli/run.ts`：调整 run（gateway runtime）。
- 修改 `src/cli/gateway-cli/shared.ts`：调整 shared（gateway runtime）。
- 修改 `src/commands/gateway-install-token.persist.runtime.ts`：调整 gateway install token.persist（gateway runtime）。
- 修改 `src/commands/gateway-install-token.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/gateway-install-token.ts`：调整 gateway install token（gateway runtime）。
- 修改 `src/commands/gateway-presence.ts`：调整 gateway presence（gateway runtime）。
- 其余 2 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/secret-gateway-commands` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/secret-gateway-commands/change-to-test.md` 的验证建议。
