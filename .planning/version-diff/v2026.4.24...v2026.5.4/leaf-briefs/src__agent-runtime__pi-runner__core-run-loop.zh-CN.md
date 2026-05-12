# src/agent-runtime/pi-runner/core-run-loop

## 1. 功能结论

**新增**：agents wire post-compaction loop guard into pi-embedded-runner；**修改**：honor embedded runtime tool allowlists、agents abort post-compaction loops out-of-band、agents honor scoped post-compaction guard config、agents observe post-compaction guard live；**迁移/重构**：agents use loop detection switch for post-compaction guard、agents thread post-compaction guard observer；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 34、修改 111、删除 7

## 3. 功能级详细差异

### 修复 agents abort post-compaction loops out-of-band

修复 agents：abort post-compaction loops out-of-band

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 修复 agents honor scoped post-compaction guard config

修复 agents：honor scoped post-compaction guard config

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 修复 agents make post-compaction guard config valid + observation trim-re…

修复 agents：make post-compaction guard config valid + observation trim-resilient

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 修复 agents observe matched post-compaction tool outcomes

修复 agents：observe matched post-compaction tool outcomes

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 修复 agents observe post-compaction guard live

修复 agents：observe post-compaction guard live

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 修复 honor embedded runtime tool allowlists

修复 honor embedded runtime tool allowlists

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 新增 agents wire post-compaction loop guard into pi-embedded-runner

新增 agents：wire post-compaction loop guard into pi-embedded-runner

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 测试覆盖 agents avoid redundant guard scope spread

测试覆盖 agents：avoid redundant guard scope spread

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 迁移/重构 agents thread post-compaction guard observer

迁移/重构 agents：thread post-compaction guard observer

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 迁移/重构 agents use loop detection switch for post-compaction guard

迁移/重构 agents：use loop detection switch for post-compaction guard

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 pi embedded runner.anthropic tool replay regression/contract coverage、pi embedded runner.e2e regression/contract coverage、pi embedded runner.get dm history limit from session key.falls back provider default per dm not regression/contract coverage、pi embedded runner.get dm history limit from session key.returns undefined sessionkey is undefined regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `pi embedded runner.get dm history limit from session key.falls back provider default per dm not regression/contract coverage`（`src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `pi embedded runner.get dm history limit from session key.returns undefined sessionkey is undefined regression/contract coverage`（`src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `pi embedded runner.history limit from session key regression/contract coverage`（`src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `transcript prompt rewrite regression/contract coverage`（`src/agents/pi-embedded-runner/run/transcript-prompt-rewrite.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 pi embedded runner.anthropic tool replay regression/contract coverage、pi embedded runner.e2e regression/contract coverage、pi embedded runner.get dm history limit from session key.falls back provider default per dm not regression/contract coverage、pi embedded runner.get dm history limit from session key.returns undefined sessionkey is undefined regression/contract coverage、pi embedded runner.guard regression/contract coverage、pi embedded runner.history limit from session key regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop`
- Changed path count: `152`
- Status counts: `新增 34、修改 111、删除 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `152` files, `+15265` / `-2946`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`makeSnapshotChangedOpenAIReasoningScenario`, `CACHE_TTL_CUSTOM_TYPE`, `MAX_COMPACTION_REASON_DETAIL_CHARS`, `formatUnknownCompactionReasonDetail`, `rotateTranscriptAfterCompactionMock`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts`。
- 相关 commit 主题：fix: honor embedded runtime tool allowlists；fix(agents): abort post-compaction loops out-of-band；refactor(agents): use loop detection switch for post-compaction guard；fix(agents): honor scoped post-compaction guard config；refactor(agents): thread post-compaction guard observer；fix(agents): observe post-compaction guard live；test(agents): avoid redundant guard scope spread；fix(agents): observe matched post-compaction tool outcomes

### Dimension evidence

- `maintenance-修复-agents-abort-post-compaction-loops-out-of-ba` / 修复 agents abort post-compaction loops out-of-band:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `maintenance-修复-agents-honor-scoped-post-compaction-guard-co` / 修复 agents honor scoped post-compaction guard config:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `maintenance-修复-agents-make-post-compaction-guard-config-val` / 修复 agents make post-compaction guard config valid + observation trim-re…:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `maintenance-修复-agents-observe-matched-post-compaction-tool` / 修复 agents observe matched post-compaction tool outcomes:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `maintenance-修复-agents-observe-post-compaction-guard-live` / 修复 agents observe post-compaction guard live:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `runtime-behavior-修复-honor-embedded-runtime-tool-allowlists` / 修复 honor embedded runtime tool allowlists:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `maintenance-新增-agents-wire-post-compaction-loop-guard-into` / 新增 agents wire post-compaction loop guard into pi-embedded-runner:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `tests-docs-测试覆盖-agents-avoid-redundant-guard-scope-spread` / 测试覆盖 agents avoid redundant guard scope spread:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `migration-迁移-重构-agents-thread-post-compaction-guard-obser` / 迁移/重构 agents thread post-compaction guard observer:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `migration-迁移-重构-agents-use-loop-detection-switch-for-post` / 迁移/重构 agents use loop detection switch for post-compaction guard:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner.e2e.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner.guard.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`
  - source: `path` [D] `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`
  - source: `path` [D] `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`
  - source: `path` [D] `src/agents/pi-embedded-runner/run/transcript-prompt-rewrite.test.ts`
  - source: `path` [D] `src/agents/pi-embedded-runner/run/transcript-prompt-rewrite.ts`
  - source: `path` [D] `src/agents/pi-embedded-runner/session-truncation.test.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.test.ts`
  - source: `path` [A] `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.ts`
  - source: `path` [A] `src/agents/pi-embedded-runner/compaction-successor-transcript.test.ts`
  - source: `path` [A] `src/agents/pi-embedded-runner/compaction-successor-transcript.ts`
  - source: `path` [A] `src/agents/pi-embedded-runner/context-truncation-notice.ts`
  - source: `path` [A] `src/agents/pi-embedded-runner/delivery-evidence.ts`

### 路径证据

- 新增 `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.ts`：调整 compaction duplicate user messages（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/compaction-successor-transcript.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-runner/compaction-successor-transcript.ts`：调整 compaction successor transcript（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/context-truncation-notice.ts`：调整 context truncation notice（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/delivery-evidence.ts`：调整 delivery evidence（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/empty-assistant-turn.ts`：调整 empty assistant turn（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/failure-signal.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-runner/failure-signal.ts`：调整 failure signal（agent runtime）。
- 新增 `src/agents/pi-embedded-runner/model.skip-pi-discovery-hooks.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-runner/post-compaction-loop-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-runner/post-compaction-loop-guard.ts`：调整 post compaction loop guard（agent runtime）。
- 修改 `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner.guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`：调整 pi embedded runner.sanitize session history.test harness（agent runtime）。
- 修改 `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner.ts`：调整 pi embedded runner（agent runtime）。
- 修改 `src/agents/pi-embedded-runner/aliases.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner/cache-ttl.ts`：调整 cache ttl（agent runtime）。
- 修改 `src/agents/pi-embedded-runner/compact-reasons.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-runner/compact-reasons.ts`：调整 compact reasons（agent runtime）。
- 修改 `src/agents/pi-embedded-runner/compact.hooks.harness.ts`：调整 compact.hooks.harness（agent runtime）。
- 删除 `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner.history-limit-from-session-key.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner/run/transcript-prompt-rewrite.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner/run/transcript-prompt-rewrite.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner/session-truncation.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/pi-embedded-runner/session-truncation.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 其余 121 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/core-run-loop` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/core-run-loop/change-to-test.md` 的验证建议。
