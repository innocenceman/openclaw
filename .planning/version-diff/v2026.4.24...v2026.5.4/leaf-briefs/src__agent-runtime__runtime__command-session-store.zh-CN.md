# src/agent-runtime/runtime/command-session-store

## 1. 功能结论

**修改**：gateway add safe restart coordinator、Feat/main session durable delivery pr、bound trajectory runtime flush、agents suppress duplicate user persistence on fallback retries；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 7、修改 46

## 3. 功能级详细差异

### 修复 agents suppress duplicate user persistence on fallback retries

修复 agents：suppress duplicate user persistence on fallback retries

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 bound trajectory runtime flush

修复 bound trajectory runtime flush

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 ci narrow active task restart blockers

修复 ci：narrow active task restart blockers

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 ci satisfy lint after restart controls

修复 ci：satisfy lint after restart controls

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 cli keep empty agent replies silent

修复 cli：keep empty agent replies silent

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 gateway add safe restart coordinator

修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 gateway expose restart drain controls

修复 gateway：expose restart drain controls

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修改 Feat/main session durable delivery pr

修改 Feat/main session durable delivery pr

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 attempt execution.cli regression/contract coverage、attempt execution.shared regression/contract coverage、attempt execution regression/contract coverage、cli compaction regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/command`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/command`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/command-session-store`
- Changed path count: `53`
- Status counts: `新增 7、修改 46`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `53` files, `+5870` / `-564`

### 归纳依据

- 主要落点：implementation、agent runtime、tests/contracts、session/state handling、CLI/command behavior。
- 新增或暴露的关键符号包括：`CLAUDE_CLI_FALLBACK_PRELUDE_DEFAULT_CHAR_BUDGET`, `CLAUDE_CLI_FALLBACK_PRELUDE_MIN_TURN_CHARS`, `extractFallbackTurnText`, `formatFallbackTurns`, `formatClaudeCliFallbackPrelude`, `buildClaudeCliFallbackContextPrelude`, `makeTaskCompletionEvents`, `resolvePlainInternalEventBody`, `resolveAcpPromptBody`, `resolveInternalEventTranscriptBody`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/command`。
- 相关 commit 主题：fix(gateway): add safe restart coordinator；Feat/main session durable delivery pr；fix: bound trajectory runtime flush；fix(agents): suppress duplicate user persistence on fallback retries；fix(cli): keep empty agent replies silent；Stop heartbeat tool turns from asking for HEARTBEAT_OK；fix: reduce WebUI session latency churn thanks @BunsDev；fix(ci): narrow active task restart blockers

### Dimension evidence

- `maintenance-修复-agents-suppress-duplicate-user-persistence-o` / 修复 agents suppress duplicate user persistence on fallback retries:
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.shared.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.shared.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.ts` — semantic cue
- `runtime-behavior-修复-bound-trajectory-runtime-flush` / 修复 bound trajectory runtime flush:
  - source: `path` [M] `src/tasks/detached-task-runtime-contract.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime.ts` — semantic cue
  - source: `path` [M] `src/tasks/import-boundary.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/tasks/runtime-internal.ts` — semantic cue
- `maintenance-修复-ci-narrow-active-task-restart-blockers` / 修复 ci narrow active task restart blockers:
  - source: `path` [M] `src/tasks/detached-task-runtime-contract.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/tasks/detached-task-runtime.ts` — semantic cue
  - source: `path` [M] `src/tasks/import-boundary.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/tasks/runtime-internal.ts` — semantic cue
- `maintenance-修复-ci-satisfy-lint-after-restart-controls` / 修复 ci satisfy lint after restart controls:
  - source: `path` [M] `src/tasks/task-registry.reconcile.ts` — semantic cue
- `maintenance-修复-cli-keep-empty-agent-replies-silent` / 修复 cli keep empty agent replies silent:
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.shared.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.shared.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/attempt-execution.ts` — semantic cue
- `maintenance-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [A] `src/agents/command/attempt-execution.shared.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.helpers.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.shared.ts`
- `maintenance-修复-gateway-expose-restart-drain-controls` / 修复 gateway expose restart drain controls:
  - source: `path` [A] `src/agents/command/attempt-execution.shared.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.helpers.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.shared.ts`
- `user-visible-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [M] `src/agents/command/session-store.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session-store.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session.resolve-session-key.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session.ts` — semantic cue
- `maintenance-修改-Feat-main-session-durable-delivery-pr` / 修改 Feat/main session durable delivery pr:
  - source: `path` [M] `src/agents/command/delivery.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/delivery.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session-store.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session-store.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session.resolve-session-key.test.ts` — semantic cue
  - source: `path` [M] `src/agents/command/session.ts` — semantic cue
- `maintenance-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [A] `src/agents/command/attempt-execution.shared.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.test.ts`
  - source: `path` [A] `src/agents/command/cli-compaction.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.helpers.ts`
  - source: `path` [M] `src/agents/command/attempt-execution.shared.ts`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/command/attempt-execution.cli.test.ts` — test evidence
  - source: `path` [M] `src/agents/command/attempt-execution.shared.test.ts` — test evidence
  - source: `path` [M] `src/agents/command/attempt-execution.test.ts` — test evidence
  - source: `path` [M] `src/agents/command/cli-compaction.test.ts` — test evidence
  - source: `path` [M] `src/agents/command/delivery.test.ts` — test evidence
  - source: `path` [M] `src/agents/command/session-store.test.ts` — test evidence

### 路径证据

- 新增 `src/agents/command/attempt-execution.shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/command/cli-compaction.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/command/cli-compaction.ts`：调整 cli compaction（agent runtime）。
- 新增 `src/trajectory/cleanup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/trajectory/cleanup.ts`：调整 cleanup（implementation）。
- 新增 `src/trajectory/command-export.ts`：调整 command export（CLI/command behavior）。
- 新增 `src/trajectory/paths.ts`：调整 paths（implementation）。
- 修改 `src/agents/command/attempt-execution.cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/command/attempt-execution.helpers.ts`：调整 attempt execution（agent runtime）。
- 修改 `src/agents/command/attempt-execution.shared.ts`：调整 attempt execution.shared（agent runtime）。
- 修改 `src/agents/command/attempt-execution.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/command/attempt-execution.ts`：调整 attempt execution（agent runtime）。
- 修改 `src/agents/command/delivery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/command/delivery.ts`：调整 delivery（agent runtime）。
- 修改 `src/agents/command/run-context.ts`：调整 run context（agent runtime）。
- 修改 `src/agents/command/session-store.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/command/session-store.ts`：调整 session store（agent runtime）。
- 修改 `src/agents/command/session.resolve-session-key.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/command/session.ts`：调整 session（agent runtime）。
- 其余 34 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/command-session-store` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/command-session-store/change-to-test.md` 的验证建议。
