# src/agent-runtime/runtime

## 1. 功能结论

**修改**：Harden Codex harness control surfaces、Feat/main session durable delivery pr、control-ui filter archived sessions、agents suppress duplicate user persistence on fallback retries；**迁移/重构**：skills centralize snapshot hydration、unify lazy import loaders；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 agents preserve session model after heartbeat runs

修复 agents：preserve session model after heartbeat runs

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 agents suppress duplicate user persistence on fallback retries

修复 agents：suppress duplicate user persistence on fallback retries

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 control-ui filter archived sessions

修复 control-ui：filter archived sessions

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 report model run fallback metadata

修复 report model run fallback metadata

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 sessions hydrate agent-command skill snapshots

修复 sessions：hydrate agent-command skill snapshots

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 thread session write-lock timeout config

修复 thread session write-lock timeout config

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 Feat/main session durable delivery pr

修改 Feat/main session durable delivery pr

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 skills centralize snapshot hydration

迁移/重构 skills：centralize snapshot hydration

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 agent command.live model switch regression/contract coverage、agent command，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 agent command.live model switch regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+962` / `-164`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`makeEmptyResult`, `loadCliCompactionRuntime`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：Harden Codex harness control surfaces；Feat/main session durable delivery pr；fix(control-ui): filter archived sessions；fix(agents): suppress duplicate user persistence on fallback retries；fix(agents): preserve session model after heartbeat runs；fix: thread session write-lock timeout config；refactor(skills): centralize snapshot hydration；fix(sessions): hydrate agent-command skill snapshots

### Dimension evidence

- `maintenance-修复-agents-preserve-session-model-after-heartbea` / 修复 agents preserve session model after heartbeat runs:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-command.ts` — semantic cue
- `maintenance-修复-agents-suppress-duplicate-user-persistence-o` / 修复 agents suppress duplicate user persistence on fallback retries:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-command.ts` — semantic cue
- `user-visible-修复-control-ui-filter-archived-sessions` / 修复 control-ui filter archived sessions:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts`
  - source: `path` [M] `src/agents/agent-command.ts`
- `public-contract-修复-report-model-run-fallback-metadata` / 修复 report model run fallback metadata:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
- `maintenance-修复-sessions-hydrate-agent-command-skill-snapsho` / 修复 sessions hydrate agent-command skill snapshots:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-command.ts` — semantic cue
- `maintenance-修复-thread-session-write-lock-timeout-config` / 修复 thread session write-lock timeout config:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts`
  - source: `path` [M] `src/agents/agent-command.ts`
- `maintenance-修改-Feat-main-session-durable-delivery-pr` / 修改 Feat/main session durable delivery pr:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts`
  - source: `path` [M] `src/agents/agent-command.ts`
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts`
  - source: `path` [M] `src/agents/agent-command.ts`
- `migration-迁移-重构-skills-centralize-snapshot-hydration` / 迁移/重构 skills centralize snapshot hydration:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-command.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — semantic cue
  - source: `path` [M] `src/agents/agent-command.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — contract evidence
  - source: `path` [M] `src/agents/agent-command.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/agent-command.live-model-switch.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/agent-command.live-model-switch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/agent-command.ts`：调整 agent command（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/change-to-test.md` 的验证建议。
