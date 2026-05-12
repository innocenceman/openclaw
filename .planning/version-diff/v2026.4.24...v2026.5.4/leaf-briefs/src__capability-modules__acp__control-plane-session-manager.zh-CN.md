# src/capability-modules/acp/control-plane-session-manager

## 1. 功能结论

**修改**：restore verbose command and ACP cleanup controls、route acp runtime tests through fast lane、speed up focused test setup、acp wait for claude results before idle completion；**迁移/重构**：hide acp auth internals；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 5

## 3. 功能级详细差异

### 优化 lazy-load heavy test imports

优化 lazy-load heavy test imports

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 修复 acp pass Codex ACP model thinking overrides

修复 acp：pass Codex ACP model thinking overrides

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 修复 acp wait for claude results before idle completion

修复 acp：wait for claude results before idle completion

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 修复 resolve oneshot ACP identities before close

修复 resolve oneshot ACP identities before close

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 修复 restore verbose command and ACP cleanup controls

修复 restore verbose command and ACP cleanup controls

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 测试覆盖 route acp runtime tests through fast lane

测试覆盖 route acp runtime tests through fast lane

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 测试覆盖 speed up focused test setup

测试覆盖 speed up focused test setup

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 迁移/重构 hide acp auth internals

迁移/重构 hide acp auth internals

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 manager regression/contract coverage、runtime cache regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/control-plane-session-manager`
- Changed path count: `6`
- Status counts: `新增 1、修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+421` / `-97`

### 归纳依据

- 主要落点：implementation、tests/contracts、streaming/reasoning。
- 新增或暴露的关键符号包括：`normalizeSessionKey`, `MAX_THINKING_LENGTH`, `validateRuntimeThinkingInput`, `validateRuntimeTimeoutSecondsInput`。
- 建议优先验证：优先运行 `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`。
- 相关 commit 主题：refactor: hide acp auth internals；fix: restore verbose command and ACP cleanup controls；test: route acp runtime tests through fast lane；test: speed up focused test setup；fix(acp): wait for claude results before idle completion；fix: resolve oneshot ACP identities before close；fix(acp): pass Codex ACP model thinking overrides；perf: lazy-load heavy test imports

### Dimension evidence

- `maintenance-优化-lazy-load-heavy-test-imports` / 优化 lazy-load heavy test imports:
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
- `runtime-behavior-修复-acp-pass-Codex-ACP-model-thinking-overrides` / 修复 acp pass Codex ACP model thinking overrides:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `maintenance-修复-acp-wait-for-claude-results-before-idle-comp` / 修复 acp wait for claude results before idle completion:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `maintenance-修复-resolve-oneshot-ACP-identities-before-close` / 修复 resolve oneshot ACP identities before close:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `maintenance-修复-restore-verbose-command-and-ACP-cleanup-cont` / 修复 restore verbose command and ACP cleanup controls:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `tests-docs-测试覆盖-route-acp-runtime-tests-through-fast-lane` / 测试覆盖 route acp runtime tests through fast lane:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-focused-test-setup` / 测试覆盖 speed up focused test setup:
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
- `migration-迁移-重构-hide-acp-auth-internals` / 迁移/重构 hide acp auth internals:
  - source: `path` [M] `src/acp/control-plane/manager.core.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.turn-stream.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/manager.utils.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — semantic cue
  - source: `path` [M] `src/acp/control-plane/runtime-options.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/acp/control-plane/manager.test.ts` — test evidence
  - source: `path` [M] `src/acp/control-plane/runtime-cache.test.ts` — test evidence

### 路径证据

- 新增 `src/acp/control-plane/manager.turn-stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/acp/control-plane/manager.core.ts`：调整 manager.core（implementation）。
- 修改 `src/acp/control-plane/manager.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/control-plane/manager.utils.ts`：调整 manager.utils（implementation）。
- 修改 `src/acp/control-plane/runtime-cache.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/control-plane/runtime-options.ts`：调整 runtime options（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/acp/control-plane-session-manager` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/control-plane-session-manager/change-to-test.md` 的验证建议。
