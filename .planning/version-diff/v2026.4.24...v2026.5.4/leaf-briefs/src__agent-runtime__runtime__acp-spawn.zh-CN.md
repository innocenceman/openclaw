# src/agent-runtime/runtime/acp-spawn

## 1. 功能结论

**新增**：simplify thread-bound session spawning；**修改**：heartbeat type wake scheduling intent、acp avoid duplicate Discord thread announces、sessions_spawn tolerate ACP-only fields for subagent runtime、subagents enforce explicit spawn allowlists；**迁移/重构**：unify lazy import loaders、config migrate plugin config access；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 6

## 3. 功能级详细差异

### 修复 acp allow manual spawn with dispatch paused

修复 acp：allow manual spawn with dispatch paused

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 修复 acp avoid duplicate Discord thread announces

修复 acp：avoid duplicate Discord thread announces

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 修复 break plugin command spec import cycle

修复 break plugin command spec import cycle

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 修复 heartbeat type wake scheduling intent

修复 heartbeat：type wake scheduling intent

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 修复 sessions_spawn tolerate ACP-only fields for subagent runtime

修复 sessions_spawn：tolerate ACP-only fields for subagent runtime

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 修复 subagents enforce explicit spawn allowlists

修复 subagents：enforce explicit spawn allowlists

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 新增 simplify thread-bound session spawning

新增 simplify thread-bound session spawning

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 测试覆盖 add Droid ACP bind Docker lane

测试覆盖 add Droid ACP bind Docker lane

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 acp spawn parent stream regression/contract coverage、acp spawn parent stream、acp spawn regression/contract coverage、acp spawn，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 acp spawn parent stream regression/contract coverage、acp spawn regression/contract coverage、sessions spawn tool regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/runtime/acp-spawn`
- Changed path count: `6`
- Status counts: `修改 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+862` / `-128`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`isExplicitlyAllowedAcpAgent`, `sessionEntryMatchesAcpResumeSessionId`, `sessionEntryIsOwnedByRequester`, `validateAcpResumeSessionOwnership`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`；`pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`。
- 相关 commit 主题：fix(heartbeat): type wake scheduling intent；refactor: unify lazy import loaders；feat: simplify thread-bound session spawning；fix(acp): avoid duplicate Discord thread announces；fix(sessions_spawn): tolerate ACP-only fields for subagent runtime；fix(subagents): enforce explicit spawn allowlists；fix(acp): allow manual spawn with dispatch paused；refactor(config): migrate plugin config access

### Dimension evidence

- `maintenance-修复-acp-allow-manual-spawn-with-dispatch-paused` / 修复 acp allow manual spawn with dispatch paused:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — semantic cue
- `maintenance-修复-acp-avoid-duplicate-Discord-thread-announces` / 修复 acp avoid duplicate Discord thread announces:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
- `maintenance-修复-break-plugin-command-spec-import-cycle` / 修复 break plugin command spec import cycle:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts`
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts`
  - source: `path` [M] `src/agents/acp-spawn.test.ts`
- `maintenance-修复-heartbeat-type-wake-scheduling-intent` / 修复 heartbeat type wake scheduling intent:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts`
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts`
  - source: `path` [M] `src/agents/acp-spawn.test.ts`
- `runtime-behavior-修复-sessions-spawn-tolerate-ACP-only-fields-for` / 修复 sessions_spawn tolerate ACP-only fields for subagent runtime:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts`
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts`
  - source: `path` [M] `src/agents/acp-spawn.test.ts`
- `maintenance-修复-subagents-enforce-explicit-spawn-allowlists` / 修复 subagents enforce explicit spawn allowlists:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — semantic cue
- `maintenance-新增-simplify-thread-bound-session-spawning` / 新增 simplify thread-bound session spawning:
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — semantic cue
- `tests-docs-测试覆盖-add-Droid-ACP-bind-Docker-lane` / 测试覆盖 add Droid ACP bind Docker lane:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — semantic cue
  - source: `path` [M] `src/agents/acp-spawn.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — contract evidence
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.ts` — contract evidence
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — contract evidence
  - source: `path` [M] `src/agents/acp-spawn.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — contract evidence
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/acp-spawn-parent-stream.test.ts` — test evidence
  - source: `path` [M] `src/agents/acp-spawn.test.ts` — test evidence
  - source: `path` [M] `src/agents/tools/sessions-spawn-tool.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/acp-spawn-parent-stream.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/acp-spawn-parent-stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/agents/acp-spawn.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/acp-spawn.ts`：调整 acp spawn（agent runtime）。
- 修改 `src/agents/tools/sessions-spawn-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/tools/sessions-spawn-tool.ts`：调整 sessions spawn tool（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/runtime/acp-spawn` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/runtime/acp-spawn/change-to-test.md` 的验证建议。
