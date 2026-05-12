# src/cli-commands/command-implementations/agent-command-cli

## 1. 功能结论

**新增**：workspace add skipOptionalBootstrapFiles config option；**修改**：cli keep empty agent replies silent、stabilize current main gates、simplify bundled runtime dependency repair；**迁移/重构**：sessions route cleanup through controlled writers、unify lazy module loaders、streamline plugin cache helpers、trim command helper exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 1、修改 20、删除 1

## 3. 功能级详细差异

### 修复 cli keep empty agent replies silent

修复 cli：keep empty agent replies silent

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 修复 simplify bundled runtime dependency repair

修复 simplify bundled runtime dependency repair

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 修复 stabilize current main gates

修复 stabilize current main gates

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 新增 workspace add skipOptionalBootstrapFiles config option

新增 workspace：add skipOptionalBootstrapFiles config option

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 sessions route cleanup through controlled writers

迁移/重构 sessions：route cleanup through controlled writers

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 streamline plugin cache helpers

迁移/重构 streamline plugin cache helpers

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 trim cli program test exports

迁移/重构 trim cli program test exports

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 trim command helper exports

迁移/重构 trim command helper exports

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 trim command helper type exports

迁移/重构 trim command helper type exports

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 迁移/重构 unify lazy module loaders

迁移/重构 unify lazy module loaders

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 agent.runtime config regression/contract coverage、agents.config，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 agent.acp regression/contract coverage、agent.delivery regression/contract coverage、agent.runtime config regression/contract coverage、agent.session regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `agent command.test support`（`src/commands/agent-command.test-support.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli`
- Changed path count: `22`
- Status counts: `新增 1、修改 20、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `22` files, `+786` / `-250`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`listManifestChannelIds`, `normalizeBindingChannelId`, `getBindingChannelPlugin`, `formatSkippedOAuthProfilesMessage`, `__testing`, `createRuntime`, `createConfig`。
- 建议优先验证：优先运行 `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`。
- 相关 commit 主题：fix(cli): keep empty agent replies silent；refactor(sessions): route cleanup through controlled writers；refactor: unify lazy module loaders；refactor: streamline plugin cache helpers；refactor: trim command helper exports；fix: stabilize current main gates；refactor: trim command helper type exports；refactor: trim cli program test exports

### Dimension evidence

- `maintenance-修复-cli-keep-empty-agent-replies-silent` / 修复 cli keep empty agent replies silent:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `runtime-behavior-修复-simplify-bundled-runtime-dependency-repair` / 修复 simplify bundled runtime dependency repair:
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
- `maintenance-修复-stabilize-current-main-gates` / 修复 stabilize current main gates:
  - source: `path` [A] `src/commands/agents.commands.list.test.ts`
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts`
  - source: `path` [M] `src/commands/agent.acp.test.ts`
  - source: `path` [M] `src/commands/agent.delivery.test.ts`
  - source: `path` [D] `src/commands/agent-command.test-support.ts`
- `maintenance-新增-workspace-add-skipOptionalBootstrapFiles-con` / 新增 workspace add skipOptionalBootstrapFiles config option:
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agents.add.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agents.commands.add.ts` — semantic cue
  - source: `path` [M] `src/commands/agents.config.ts` — semantic cue
- `migration-迁移-重构-sessions-route-cleanup-through-controlled` / 迁移/重构 sessions route cleanup through controlled writers:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-streamline-plugin-cache-helpers` / 迁移/重构 streamline plugin cache helpers:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `migration-迁移-重构-trim-cli-program-test-exports` / 迁移/重构 trim cli program test exports:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `migration-迁移-重构-trim-command-helper-exports` / 迁移/重构 trim command helper exports:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `migration-迁移-重构-trim-command-helper-type-exports` / 迁移/重构 trim command helper type exports:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-module-loaders` / 迁移/重构 unify lazy module loaders:
  - source: `path` [M] `src/commands/agent-command.test-mocks.ts` — semantic cue
  - source: `path` [M] `src/commands/agent-command.test-support.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.acp.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — semantic cue
  - source: `path` [M] `src/commands/agent.session.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — contract evidence
  - source: `path` [M] `src/commands/agents.config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/agent.acp.test.ts` — test evidence
  - source: `path` [M] `src/commands/agent.delivery.test.ts` — test evidence
  - source: `path` [M] `src/commands/agent.runtime-config.test.ts` — test evidence
  - source: `path` [M] `src/commands/agent.session.test.ts` — test evidence
  - source: `path` [M] `src/commands/agent/session.test.ts` — test evidence
  - source: `path` [M] `src/commands/agents.add.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/commands/agent-command.test-support.ts`

### 路径证据

- 新增 `src/commands/agents.commands.list.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent-command.test-mocks.ts`：调整 agent command.test mocks（CLI/command behavior）。
- 修改 `src/commands/agent.acp.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent.delivery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent.runtime-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent.session.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent/session.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agent/session.ts`：调整 session（CLI/command behavior）。
- 修改 `src/commands/agents.add.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agents.bind.commands.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/agents.bind.test-support.ts`：调整 agents.bind.test support（CLI/command behavior）。
- 修改 `src/commands/agents.bindings.ts`：调整 agents.bindings（CLI/command behavior）。
- 修改 `src/commands/agents.command-shared.ts`：调整 agents.command shared（CLI/command behavior）。
- 删除 `src/commands/agent-command.test-support.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/agent-command-cli` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/agent-command-cli/change-to-test.md` 的验证建议。
