# src/agent-runtime/runtime/context-subagents/subagent-registry

## 1. 功能结论

**新增**：Codex happy path prompt snapshots；**修改**：agents refresh deferred subagent delivery text、Feat/main session durable delivery pr、gateway reuse subagent registry snapshot in session listing、sessions keep list polling lightweight；**迁移/重构**：unify lazy import loaders；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 31

## 3. 功能级详细差异

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 agents refresh deferred subagent delivery text

修复 agents：refresh deferred subagent delivery text

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway reuse subagent registry snapshot in session listing

修复 gateway：reuse subagent registry snapshot in session listing

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 sessions keep list polling lightweight

修复 sessions：keep list polling lightweight

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Feat/main session durable delivery pr

修改 Feat/main session durable delivery pr

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 Codex happy path prompt snapshots

新增 Codex happy path prompt snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align metadata runtime fixtures

测试覆盖 align metadata runtime fixtures

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align plugin install metadata fixtures

测试覆盖 align plugin install metadata fixtures

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align runtime fixture expectations

测试覆盖 align runtime fixture expectations

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 subagent registry lifecycle regression/contract coverage、subagent registry read context regression/contract coverage、subagent registry.announce loop guard regression/contract coverage、subagent registry.archive.e2e regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry`
- Changed path count: `33`
- Status counts: `新增 2、修改 31`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `33` files, `+2020` / `-318`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`MAX_ANNOUNCE_RETRY_DELAY_MS`, `rememberLatestRunEntry`, `rememberLatestRunPair`, `buildSubagentRunReadIndexFromRuns`, `makeRun`, `toRunMap`, `listRunsForController`, `buildSubagentRunReadIndex`, `markSubagentRunPausedAfterYield`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(agents): refresh deferred subagent delivery text；Feat/main session durable delivery pr；fix(gateway): reuse subagent registry snapshot in session listing；Add Codex happy path prompt snapshots；fix(sessions): keep list polling lightweight；perf: route session store writes through writer queue；refactor: unify lazy import loaders；test: align runtime fixture expectations

### Dimension evidence

- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `src/agents/subagent-registry.store.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-spawn.mode-session-diagnostics.test.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-spawn.model-session.test.ts` — semantic cue
- `maintenance-修复-agents-refresh-deferred-subagent-delivery-te` / 修复 agents refresh deferred subagent delivery text:
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-queries.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-read-context.test.ts` — semantic cue
- `maintenance-修复-gateway-reuse-subagent-registry-snapshot-in` / 修复 gateway reuse subagent registry snapshot in session listing:
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-queries.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-read-context.test.ts` — semantic cue
- `maintenance-修复-sessions-keep-list-polling-lightweight` / 修复 sessions keep list polling lightweight:
  - source: `path` [A] `src/agents/subagent-registry-read-context.test.ts`
  - source: `path` [A] `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts`
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts`
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts`
- `maintenance-修改-Feat-main-session-durable-delivery-pr` / 修改 Feat/main session durable delivery pr:
  - source: `path` [M] `src/agents/subagent-spawn.mode-session-diagnostics.test.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-spawn.model-session.test.ts` — semantic cue
- `maintenance-新增-Codex-happy-path-prompt-snapshots` / 新增 Codex happy path prompt snapshots:
  - source: `path` [A] `src/agents/subagent-registry-read-context.test.ts`
  - source: `path` [A] `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts`
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts`
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts`
- `public-contract-测试覆盖-align-metadata-runtime-fixtures` / 测试覆盖 align metadata runtime fixtures:
  - source: `path` [M] `src/agents/subagent-registry-steer-runtime.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-spawn.runtime.ts` — semantic cue
- `public-contract-测试覆盖-align-plugin-install-metadata-fixtures` / 测试覆盖 align plugin install metadata fixtures:
  - source: `path` [A] `src/agents/subagent-registry-read-context.test.ts`
  - source: `path` [A] `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts`
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts`
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts`
- `tests-docs-测试覆盖-align-runtime-fixture-expectations` / 测试覆盖 align runtime fixture expectations:
  - source: `path` [M] `src/agents/subagent-registry-steer-runtime.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-spawn.runtime.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/subagent-registry-cleanup.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-helpers.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-queries.ts` — semantic cue
  - source: `path` [M] `src/agents/subagent-registry-read-context.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/subagent-registry-lifecycle.test.ts` — test evidence
  - source: `path` [M] `src/agents/subagent-registry-read-context.test.ts` — test evidence
  - source: `path` [M] `src/agents/subagent-registry.announce-loop-guard.test.ts` — test evidence
  - source: `path` [M] `src/agents/subagent-registry.archive.e2e.test.ts` — test evidence
  - source: `path` [M] `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts` — test evidence
  - source: `path` [M] `src/agents/subagent-registry.nested.e2e.test.ts` — test evidence

### 路径证据

- 新增 `src/agents/subagent-registry-read-context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/subagent-spawn.mode-session-diagnostics.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/subagent-registry-cleanup.ts`：调整 subagent registry cleanup（agent runtime）。
- 修改 `src/agents/subagent-registry-helpers.ts`：调整 subagent registry helpers（agent runtime）。
- 修改 `src/agents/subagent-registry-lifecycle.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/subagent-registry-lifecycle.ts`：调整 subagent registry lifecycle（agent runtime）。
- 修改 `src/agents/subagent-registry-queries.ts`：调整 subagent registry queries（agent runtime）。
- 修改 `src/agents/subagent-registry-read.ts`：调整 subagent registry read（agent runtime）。
- 修改 `src/agents/subagent-registry-run-manager.ts`：调整 subagent registry run manager（agent runtime）。
- 修改 `src/agents/subagent-registry-steer-runtime.ts`：调整 subagent registry steer runtime（agent runtime）。
- 修改 `src/agents/subagent-registry.announce-loop-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/subagent-registry.archive.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/subagent-registry.nested.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 19 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/context-subagents/subagent-registry` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/context-subagents/subagent-registry/change-to-test.md` 的验证建议。
