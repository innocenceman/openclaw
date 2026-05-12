# src/capability-modules/context-engine

## 1. 功能结论

**修改**：context-engine honor assembled prompt authority in precheck、context-engine: pass runtime context to ContextEngineFactory、Fix compacted session transcript rotation、dedupe memory and context suites；**迁移/重构**：trim context engine prompt cache types；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 修复 context-engine honor assembled prompt authority in precheck

修复 context-engine：honor assembled prompt authority in precheck

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修改 Fix compacted session transcript rotation

修改 Fix compacted session transcript rotation

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修改 context-engine: pass runtime context to ContextEngineFactory

修改 context-engine: pass runtime context to ContextEngineFactory

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试覆盖 dedupe memory and context suites

测试覆盖 dedupe memory and context suites

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim context engine prompt cache types

迁移/重构 trim context engine prompt cache types

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 context engine regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/context-engine`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+308` / `-140`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`uniqueEngineId`。
- 建议优先验证：优先运行 `| pnpm test -- src/context-engine/context-engine.test.ts | Escalate to agents/pi-runner tests when context assembly changes prompt/runtime behavior. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 相关 commit 主题：refactor: trim context engine prompt cache types；fix(context-engine): honor assembled prompt authority in precheck；context-engine: pass runtime context to ContextEngineFactory；Fix compacted session transcript rotation；test: dedupe memory and context suites

### Dimension evidence

- `maintenance-修复-context-engine-honor-assembled-prompt-author` / 修复 context-engine honor assembled prompt authority in precheck:
  - source: `path` [M] `src/context-engine/context-engine.test.ts` — semantic cue
  - source: `path` [M] `src/context-engine/delegate.ts` — semantic cue
  - source: `path` [M] `src/context-engine/registry.ts` — semantic cue
  - source: `path` [M] `src/context-engine/types.ts` — semantic cue
- `maintenance-修改-Fix-compacted-session-transcript-rotation` / 修改 Fix compacted session transcript rotation:
  - source: `path` [M] `src/context-engine/context-engine.test.ts`
  - source: `path` [M] `src/context-engine/delegate.ts`
  - source: `path` [M] `src/context-engine/registry.ts`
- `runtime-behavior-修改-context-engine-pass-runtime-context-to-Cont` / 修改 context-engine: pass runtime context to ContextEngineFactory:
  - source: `path` [M] `src/context-engine/context-engine.test.ts` — semantic cue
  - source: `path` [M] `src/context-engine/delegate.ts` — semantic cue
  - source: `path` [M] `src/context-engine/registry.ts` — semantic cue
  - source: `path` [M] `src/context-engine/types.ts` — semantic cue
- `user-visible-测试覆盖-dedupe-memory-and-context-suites` / 测试覆盖 dedupe memory and context suites:
  - source: `path` [M] `src/context-engine/context-engine.test.ts` — semantic cue
  - source: `path` [M] `src/context-engine/delegate.ts` — semantic cue
  - source: `path` [M] `src/context-engine/registry.ts` — semantic cue
  - source: `path` [M] `src/context-engine/types.ts` — semantic cue
- `migration-迁移-重构-trim-context-engine-prompt-cache-types` / 迁移/重构 trim context engine prompt cache types:
  - source: `path` [M] `src/context-engine/context-engine.test.ts` — semantic cue
  - source: `path` [M] `src/context-engine/delegate.ts` — semantic cue
  - source: `path` [M] `src/context-engine/registry.ts` — semantic cue
  - source: `path` [M] `src/context-engine/types.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/context-engine/context-engine.test.ts` — test evidence

### 路径证据

- 修改 `src/context-engine/context-engine.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/context-engine/delegate.ts`：调整 delegate（implementation）。
- 修改 `src/context-engine/registry.ts`：调整 registry（implementation）。
- 修改 `src/context-engine/types.ts`：调整 context engine types（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/context-engine` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/context-engine/change-to-test.md` 的验证建议。
