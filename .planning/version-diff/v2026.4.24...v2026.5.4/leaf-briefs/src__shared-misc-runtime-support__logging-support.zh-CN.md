# src/shared-misc-runtime-support/logging-support

## 1. 功能结论

**新增**：add gateway stall diagnostics；**修改**：agents observe post-compaction guard live、agents observe matched post-compaction tool outcomes、agents make post-compaction guard config valid + observation trim-resilient、lint cover diagnostic phase events；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 10、修改 32

## 3. 功能级详细差异

### 修复 agents make post-compaction guard config valid + observation trim-re…

修复 agents：make post-compaction guard config valid + observation trim-resilient

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 agents observe matched post-compaction tool outcomes

修复 agents：observe matched post-compaction tool outcomes

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 agents observe post-compaction guard live

修复 agents：observe post-compaction guard live

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 enrich stalled session recovery logs

修复 enrich stalled session recovery logs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 harden gateway install recovery paths

修复 harden gateway install recovery paths

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 lint cover diagnostic phase events

修复 lint：cover diagnostic phase events

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 narrow diagnostic session tail

修复 narrow diagnostic session tail

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 quiet nonblocking diagnostic logs

修复 quiet nonblocking diagnostic logs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 tests restore progress draft changed gate

修复 tests：restore progress draft changed gate

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 add gateway stall diagnostics

新增 add gateway stall diagnostics

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 config regression/contract coverage、logging config，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 logger regression/contract coverage、config regression/contract coverage、console capture regression/contract coverage、diagnostic log events regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/logging-support`
- Changed path count: `42`
- Status counts: `新增 10、修改 32`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `42` files, `+4163` / `-302`

### 归纳依据

- 主要落点：tests/contracts、implementation、session/state handling、configuration/schema。
- 新增或暴露的关键符号包括：`writeConfig`, `isObjectRecord`, `RECENT_PHASE_CAPACITY`, `roundMetric`, `pushRecentPhase`, `getCurrentDiagnosticPhase`, `getRecentDiagnosticPhases`, `recordDiagnosticPhase`, `resetDiagnosticPhasesForTest`, `sessionRefs`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(agents): observe post-compaction guard live；fix(agents): observe matched post-compaction tool outcomes；fix(agents): make post-compaction guard config valid + observation trim-resilient；fix(lint): cover diagnostic phase events；feat: add gateway stall diagnostics；fix(tests): restore progress draft changed gate；fix: narrow diagnostic session tail；fix: enrich stalled session recovery logs

### Dimension evidence

- `maintenance-修复-agents-make-post-compaction-guard-config-val` / 修复 agents make post-compaction guard config valid + observation trim-re…:
  - source: `path` [M] `src/logging/config.test.ts` — semantic cue
  - source: `path` [M] `src/logging/config.ts` — semantic cue
- `maintenance-修复-agents-observe-matched-post-compaction-tool` / 修复 agents observe matched post-compaction tool outcomes:
  - source: `path` [A] `src/logging/diagnostic-phase.ts`
  - source: `path` [A] `src/logging/diagnostic-run-activity.ts`
  - source: `path` [A] `src/logging/diagnostic-session-attention.test.ts`
  - source: `path` [M] `src/logger.test.ts`
  - source: `path` [M] `src/logging/config.test.ts`
  - source: `path` [M] `src/logging/config.ts`
- `maintenance-修复-agents-observe-post-compaction-guard-live` / 修复 agents observe post-compaction guard live:
  - source: `path` [A] `src/logging/diagnostic-phase.ts`
  - source: `path` [A] `src/logging/diagnostic-run-activity.ts`
  - source: `path` [A] `src/logging/diagnostic-session-attention.test.ts`
  - source: `path` [M] `src/logger.test.ts`
  - source: `path` [M] `src/logging/config.test.ts`
  - source: `path` [M] `src/logging/config.ts`
- `maintenance-修复-enrich-stalled-session-recovery-logs` / 修复 enrich stalled session recovery logs:
  - source: `path` [M] `src/logging/diagnostic-session-attention.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-context.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-context.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-state.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-stuck-session-recovery.integration.test.ts` — semantic cue
- `maintenance-修复-harden-gateway-install-recovery-paths` / 修复 harden gateway install recovery paths:
  - source: `path` [M] `src/logging/diagnostic-stuck-session-recovery.integration.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-stuck-session-recovery.runtime.ts` — semantic cue
- `maintenance-修复-lint-cover-diagnostic-phase-events` / 修复 lint cover diagnostic phase events:
  - source: `path` [M] `src/logging/diagnostic-log-events.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-memory.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-phase.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-run-activity.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.ts` — semantic cue
- `maintenance-修复-narrow-diagnostic-session-tail` / 修复 narrow diagnostic session tail:
  - source: `path` [M] `src/logging/diagnostic-log-events.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-memory.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-phase.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-run-activity.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.ts` — semantic cue
- `user-visible-修复-quiet-nonblocking-diagnostic-logs` / 修复 quiet nonblocking diagnostic logs:
  - source: `path` [M] `src/logging/diagnostic-log-events.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-memory.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-phase.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-run-activity.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.test.ts` — semantic cue
  - source: `path` [M] `src/logging/diagnostic-session-attention.ts` — semantic cue
- `maintenance-修复-tests-restore-progress-draft-changed-gate` / 修复 tests restore progress draft changed gate:
  - source: `path` [A] `src/logging/diagnostic-phase.ts`
  - source: `path` [A] `src/logging/diagnostic-run-activity.ts`
  - source: `path` [A] `src/logging/diagnostic-session-attention.test.ts`
  - source: `path` [M] `src/logger.test.ts`
  - source: `path` [M] `src/logging/config.test.ts`
  - source: `path` [M] `src/logging/config.ts`
- `maintenance-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [A] `src/logging/diagnostic-phase.ts`
  - source: `path` [A] `src/logging/diagnostic-run-activity.ts`
  - source: `path` [A] `src/logging/diagnostic-session-attention.test.ts`
  - source: `path` [M] `src/logger.test.ts`
  - source: `path` [M] `src/logging/config.test.ts`
  - source: `path` [M] `src/logging/config.ts`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/logging/config.test.ts` — contract evidence
  - source: `path` [M] `src/logging/config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/logger.test.ts` — test evidence
  - source: `path` [M] `src/logging/config.test.ts` — test evidence
  - source: `path` [M] `src/logging/console-capture.test.ts` — test evidence
  - source: `path` [M] `src/logging/diagnostic-log-events.test.ts` — test evidence
  - source: `path` [M] `src/logging/diagnostic-session-attention.test.ts` — test evidence
  - source: `path` [M] `src/logging/diagnostic-session-context.test.ts` — test evidence

### 路径证据

- 新增 `src/logging/diagnostic-phase.ts`：调整 diagnostic phase（implementation）。
- 新增 `src/logging/diagnostic-run-activity.ts`：调整 diagnostic run activity（implementation）。
- 新增 `src/logging/diagnostic-session-attention.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/logging/diagnostic-session-attention.ts`：调整 diagnostic session attention（session/state handling）。
- 新增 `src/logging/diagnostic-session-context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/logging/diagnostic-session-context.ts`：调整 diagnostic session context（session/state handling）。
- 新增 `src/logging/diagnostic-stuck-session-recovery.integration.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/logging/diagnostic-stuck-session-recovery.runtime.ts`：调整 diagnostic stuck session recovery（session/state handling）。
- 新增 `src/logging/logger-redaction-behavior.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logger.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/config.ts`：调整 logging config（configuration/schema）。
- 修改 `src/logging/console-capture.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/console.ts`：调整 console（implementation）。
- 修改 `src/logging/diagnostic-log-events.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/diagnostic-memory.ts`：调整 diagnostic memory（implementation）。
- 修改 `src/logging/diagnostic-session-state.ts`：调整 diagnostic session state（session/state handling）。
- 修改 `src/logging/diagnostic-stability-bundle.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/diagnostic-stability-bundle.ts`：调整 diagnostic stability bundle（implementation）。
- 修改 `src/logging/diagnostic-stability.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/logging/diagnostic-stability.ts`：调整 diagnostic stability（implementation）。
- 其余 20 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/logging-support` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/logging-support/change-to-test.md` 的验证建议。
