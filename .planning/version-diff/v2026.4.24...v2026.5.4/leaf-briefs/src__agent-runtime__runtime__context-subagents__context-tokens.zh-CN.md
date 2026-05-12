# src/agent-runtime/runtime/context-subagents/context-tokens

## 1. 功能结论

**修改**：cli avoid model warmup for message actions、agents skip model normalization in context warmup、derive dynamic context-window guard thresholds、cli skip memory eager context warmup；**迁移/重构**：unify lazy import loaders、trim agent type exports、trim guard helper exports、expose SDK test helper subpaths；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 修复 agents skip model normalization in context warmup

修复 agents：skip model normalization in context warmup

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 修复 cli avoid model warmup for message actions

修复 cli：avoid model warmup for message actions

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 修复 cli skip memory eager context warmup

修复 cli：skip memory eager context warmup

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 修复 derive dynamic context-window guard thresholds

修复 derive dynamic context-window guard thresholds

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 修复 models honor provider context defaults

修复 models：honor provider context defaults

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 迁移/重构 trim agent type exports

迁移/重构 trim agent type exports

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 迁移/重构 trim guard helper exports

迁移/重构 trim guard helper exports

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 context window guard regression/contract coverage、context.eager warmup regression/contract coverage、context.lookup regression/contract coverage、context regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/context-tokens`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+372` / `-77`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`CONTEXT_WINDOW_HARD_MIN_TOKENS`, `CONTEXT_WINDOW_WARN_BELOW_TOKENS`, `CONTEXT_WINDOW_HARD_MIN_RATIO`, `CONTEXT_WINDOW_WARN_BELOW_RATIO`, `resolveContextWindowGuardHint`, `resolveContextWindowGuardThresholds`, `shouldUseDiscoveredAnthropicOpus47ContextWindow`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`。
- 相关 commit 主题：fix(cli): avoid model warmup for message actions；fix(agents): skip model normalization in context warmup；refactor: unify lazy import loaders；refactor: trim agent type exports；refactor: trim guard helper exports；fix: derive dynamic context-window guard thresholds；refactor: expose SDK test helper subpaths；fix(cli): skip memory eager context warmup

### Dimension evidence

- `maintenance-修复-agents-skip-model-normalization-in-context-w` / 修复 agents skip model normalization in context warmup:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `maintenance-修复-cli-avoid-model-warmup-for-message-actions` / 修复 cli avoid model warmup for message actions:
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
- `maintenance-修复-cli-skip-memory-eager-context-warmup` / 修复 cli skip memory eager context warmup:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `maintenance-修复-derive-dynamic-context-window-guard-threshol` / 修复 derive dynamic context-window guard thresholds:
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
- `maintenance-修复-models-honor-provider-context-defaults` / 修复 models honor provider context defaults:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `migration-迁移-重构-trim-agent-type-exports` / 迁移/重构 trim agent type exports:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `migration-迁移-重构-trim-guard-helper-exports` / 迁移/重构 trim guard helper exports:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/context-runtime-state.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context-window-guard.ts` — semantic cue
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/context.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/context-window-guard.test.ts` — test evidence
  - source: `path` [M] `src/agents/context.eager-warmup.test.ts` — test evidence
  - source: `path` [M] `src/agents/context.lookup.test.ts` — test evidence
  - source: `path` [M] `src/agents/context.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/context-runtime-state.ts`：调整 context runtime state（agent runtime）。
- 修改 `src/agents/context-window-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/context-window-guard.ts`：调整 context window guard（agent runtime）。
- 修改 `src/agents/context.eager-warmup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/context.lookup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/context.ts`：调整 context（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/context-subagents/context-tokens` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/context-subagents/context-tokens/change-to-test.md` 的验证建议。
