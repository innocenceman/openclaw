# src/reply-orchestration/runner

## 1. 功能结论

**修改**：discord fail dropped final reply delivery、Surface Codex usage-limit reset details in chat replies、Harden Codex harness control surfaces、model guide runtime allowlist repairs；**迁移/重构**：centralize reply followup drain lifecycle；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large
- 路径状态摘要（降级事实）：新增 14、修改 123

## 3. 功能级详细差异

### 修复 bound trajectory runtime flush

修复 bound trajectory runtime flush

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 channels pass raw progress detail to drafts

修复 channels：pass raw progress detail to drafts

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 discord fail dropped final reply delivery

修复 discord：fail dropped final reply delivery

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway clear reply run before followup drain

修复 gateway：clear reply run before followup drain

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 model guide runtime allowlist repairs

修复 model：guide runtime allowlist repairs

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 telegram stabilize topic dispatch runtime

修复 telegram：stabilize topic dispatch runtime

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Feat/main session durable delivery pr

修改 Feat/main session durable delivery pr

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 Surface Codex usage-limit reset details in chat replies

修改 Surface Codex usage-limit reset details in chat replies

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 centralize reply followup drain lifecycle

迁移/重构 centralize reply followup drain lifecycle

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 command status builders，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 command control regression/contract coverage、dispatch regression/contract coverage、inbound regression/contract coverage、model regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 command control regression/contract coverage、command status builders、dispatch dispatcher、dispatch regression/contract coverage、dispatch、fallback state；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/runner`
- Changed path count: `137`
- Status counts: `新增 14、修改 123`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `137` files, `+10846` / `-1334`

### 归纳依据

- 主要落点：message delivery、session/state handling、configuration/schema、CLI/command behavior。
- 新增或暴露的关键符号包括：`TRANSIENT_FALLBACK_REASONS`, `formatFallbackAttemptReason`, `buildFallbackReasonSummary`, `buildFallbackAttemptSummaries`, `copyReplyPayloadMetadata`, `markReplyPayloadForSourceSuppressionDelivery`, `createProjectorHarness`, `ACP_TAG_VISIBILITY_DEFAULTS`, `GENERIC_RUN_FAILURE_TEXT`, `makeTestModel`。
- 建议优先验证：优先运行 `| pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(discord): fail dropped final reply delivery；Surface Codex usage-limit reset details in chat replies；Harden Codex harness control surfaces；fix(model): guide runtime allowlist repairs；refactor: centralize reply followup drain lifecycle；fix(gateway): clear reply run before followup drain；Feat/main session durable delivery pr；fix: bound trajectory runtime flush

### Dimension evidence

- `runtime-behavior-修复-bound-trajectory-runtime-flush` / 修复 bound trajectory runtime flush:
  - source: `path` [M] `src/auto-reply/inbound.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp.runtime.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-from-config.runtime.ts` — semantic cue
- `maintenance-修复-channels-pass-raw-progress-detail-to-drafts` / 修复 channels pass raw progress detail to drafts:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-status-builders.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch-dispatcher.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/fallback-state.ts` — semantic cue
- `maintenance-修复-discord-fail-dropped-final-reply-delivery` / 修复 discord fail dropped final reply delivery:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-status-builders.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch-dispatcher.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/fallback-state.ts` — semantic cue
- `maintenance-修复-gateway-clear-reply-run-before-followup-drain` / 修复 gateway clear reply run before followup drain:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-status-builders.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch-dispatcher.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/fallback-state.ts` — semantic cue
- `user-visible-修复-model-guide-runtime-allowlist-repairs` / 修复 model guide runtime allowlist repairs:
  - source: `path` [M] `src/auto-reply/model.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp.runtime.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-from-config.runtime.ts` — semantic cue
- `runtime-behavior-修复-telegram-stabilize-topic-dispatch-runtime` / 修复 telegram stabilize topic dispatch runtime:
  - source: `path` [M] `src/auto-reply/dispatch-dispatcher.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp-attachments.ts` — semantic cue
- `maintenance-修改-Feat-main-session-durable-delivery-pr` / 修改 Feat/main session durable delivery pr:
  - source: `path` [M] `src/auto-reply/reply/acp-projector.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/acp-projector.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-session-reset.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp-delivery.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-acp-delivery.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/followup-delivery.test.ts` — semantic cue
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/dispatch-from-config.shared.test-harness.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/stage-sandbox-media.test-harness.ts` — semantic cue
- `maintenance-修改-Surface-Codex-usage-limit-reset-details-in-c` / 修改 Surface Codex usage-limit reset details in chat replies:
  - source: `path` [M] `src/auto-reply/inbound.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/media-understanding.test-fixtures.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/acp-stream-settings.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-reminder-guard.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/agent-runner-session-reset.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/reply/get-reply-run.exec-hint.test.ts` — semantic cue
- `migration-迁移-重构-centralize-reply-followup-drain-lifecycle` / 迁移/重构 centralize reply followup drain lifecycle:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/command-status-builders.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch-dispatcher.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/dispatch.ts` — semantic cue
  - source: `path` [M] `src/auto-reply/fallback-state.ts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/auto-reply/command-status-builders.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/auto-reply/command-control.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/dispatch.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/inbound.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/model.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/acp-projector.test.ts` — test evidence
  - source: `path` [M] `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts` — test evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/auto-reply/reply/agent-runner-run-params.ts`
  - source: `path` [A] `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts`
  - source: `path` [A] `src/auto-reply/reply/get-reply-directives-apply.test.ts`
  - source: `path` [A] `src/auto-reply/reply/pending-tool-task-drain.test.ts`
  - source: `path` [A] `src/auto-reply/reply/pending-tool-task-drain.ts`
  - source: `path` [A] `src/auto-reply/reply/provider-dispatcher.runtime.ts`

### 路径证据

- 新增 `src/auto-reply/reply/agent-runner-run-params.ts`：调整 agent runner run params（message delivery）。
- 新增 `src/auto-reply/reply/dispatch-acp-transcript.runtime.ts`：调整 dispatch acp transcript（message delivery）。
- 新增 `src/auto-reply/reply/get-reply-directives-apply.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/pending-tool-task-drain.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/pending-tool-task-drain.ts`：调整 pending tool task drain（message delivery）。
- 新增 `src/auto-reply/reply/provider-dispatcher.runtime.ts`：调整 provider dispatcher（message delivery）。
- 新增 `src/auto-reply/reply/runtime-plugins.runtime.ts`：调整 runtime plugins（message delivery）。
- 新增 `src/auto-reply/reply/session-fork.runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/session-reset-cleanup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/session-reset-cleanup.ts`：调整 session reset cleanup（session/state handling）。
- 新增 `src/auto-reply/reply/session-transcript-replay.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/auto-reply/reply/session-transcript-replay.ts`：调整 session transcript replay（session/state handling）。
- 修改 `src/auto-reply/command-control.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/command-status-builders.ts`：调整 command status builders（CLI/command behavior）。
- 修改 `src/auto-reply/dispatch-dispatcher.ts`：调整 dispatch dispatcher（message delivery）。
- 修改 `src/auto-reply/dispatch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/dispatch.ts`：调整 dispatch（message delivery）。
- 修改 `src/auto-reply/fallback-state.ts`：调整 fallback state（session/state handling）。
- 修改 `src/auto-reply/get-reply-options.types.ts`：调整 get reply options（message delivery）。
- 修改 `src/auto-reply/inbound.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/media-understanding.test-fixtures.ts`：调整 media understanding.test fixtures（message delivery）。
- 修改 `src/auto-reply/model.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/auto-reply/reply-payload.ts`：调整 reply payload（message delivery）。
- 修改 `src/auto-reply/reply/acp-projector.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 113 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/reply-orchestration/runner` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/runner/change-to-test.md` 的验证建议。
