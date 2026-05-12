# src/capability-modules/acp/runtime-session-identity

## 1. 功能结论

**修改**：agents harden bootstrap and ACP session routing、route acp runtime tests through fast lane、acp wait for claude results before idle completion、gate acp spawn affordances；**迁移/重构**：trim unused acp exports、trim acp client exports、config migrate plugin config access；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 7

## 3. 功能级详细差异

### 修复 acp pass Codex ACP model thinking overrides

修复 acp：pass Codex ACP model thinking overrides

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 修复 acp wait for claude results before idle completion

修复 acp：wait for claude results before idle completion

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 修复 agents harden bootstrap and ACP session routing

修复 agents：harden bootstrap and ACP session routing

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 修复 gate acp spawn affordances

修复 gate acp spawn affordances

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 测试覆盖 route acp runtime tests through fast lane

测试覆盖 route acp runtime tests through fast lane

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 迁移/重构 trim acp client exports

迁移/重构 trim acp client exports

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 迁移/重构 trim unused acp exports

迁移/重构 trim unused acp exports

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 adapter contract.testkit regression/contract coverage、registry regression/contract coverage、session interaction mode regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/runtime-session-identity`
- Changed path count: `8`
- Status counts: `新增 1、修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+78` / `-32`

### 归纳依据

- 主要落点：session/state handling、implementation、tests/contracts。
- 新增或暴露的关键符号包括：`isAcpRuntimeSpawnAvailable`, `resolveAcpSessionInteractionMode`。
- 建议优先验证：优先运行 `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`。
- 相关 commit 主题：refactor: trim unused acp exports；refactor: trim acp client exports；fix(agents): harden bootstrap and ACP session routing；test: route acp runtime tests through fast lane；refactor(config): migrate plugin config access；fix(acp): wait for claude results before idle completion；fix: gate acp spawn affordances；fix(acp): pass Codex ACP model thinking overrides

### Dimension evidence

- `runtime-behavior-修复-acp-pass-Codex-ACP-model-thinking-overrides` / 修复 acp pass Codex ACP model thinking overrides:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `maintenance-修复-acp-wait-for-claude-results-before-idle-comp` / 修复 acp wait for claude results before idle completion:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `runtime-behavior-修复-agents-harden-bootstrap-and-ACP-session-rout` / 修复 agents harden bootstrap and ACP session routing:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `maintenance-修复-gate-acp-spawn-affordances` / 修复 gate acp spawn affordances:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `tests-docs-测试覆盖-route-acp-runtime-tests-through-fast-lane` / 测试覆盖 route acp runtime tests through fast lane:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `migration-迁移-重构-trim-acp-client-exports` / 迁移/重构 trim acp client exports:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `migration-迁移-重构-trim-unused-acp-exports` / 迁移/重构 trim unused acp exports:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/availability.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/session-meta.ts` — semantic cue
  - source: `path` [M] `src/acp/runtime/types.ts` — semantic cue
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/acp/runtime/adapter-contract.testkit.ts` — test evidence
  - source: `path` [M] `src/acp/runtime/registry.test.ts` — test evidence
  - source: `path` [M] `src/acp/session-interaction-mode.test.ts` — test evidence

### 路径证据

- 新增 `src/acp/runtime/availability.ts`：调整 availability（implementation）。
- 修改 `src/acp/runtime/adapter-contract.testkit.ts`：调整 adapter contract.testkit regression/contract coverage（implementation）。
- 修改 `src/acp/runtime/registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/runtime/session-meta.ts`：调整 session meta（session/state handling）。
- 修改 `src/acp/runtime/types.ts`：调整 runtime types（implementation）。
- 修改 `src/acp/session-interaction-mode.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/session-interaction-mode.ts`：调整 session interaction mode（session/state handling）。
- 修改 `src/acp/session-mapper.ts`：调整 session mapper（session/state handling）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/acp/runtime-session-identity` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/runtime-session-identity/change-to-test.md` 的验证建议。
