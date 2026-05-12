# src/agent-runtime/skills/plugin-skills

## 1. 功能结论

**修改**：fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths、gate codex acp route hints、scope cold plugin manifests to index、fix plugin skills mock typing；**迁移/重构**：route plugin metadata consumers through snapshots；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、Provider/plugin 调用方、agent runtime 集成方、插件作者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 修复 agents resolve plugin skill metadata cold

修复 agents：resolve plugin skill metadata cold

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 修复 gate codex acp route hints

修复 gate codex acp route hints

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 修复 scope cold plugin manifests to index

修复 scope cold plugin manifests to index

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 修改 fix #77296: [Bug]: Plugin manifest skills field not published to age…

修改 fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 测试覆盖 fix plugin skills mock typing

测试覆盖 fix plugin skills mock typing

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 迁移/重构 route plugin metadata consumers through snapshots

迁移/重构 route plugin metadata consumers through snapshots

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin skills regression/contract coverage、plugin skills，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 plugin skills regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/plugin-skills`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+474` / `-50`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`registerHealthyAcpBackend`, `resolveDefaultPluginSkillsDir`, `collectSkillTargets`, `hasPublishableSkillFile`, `publishPluginSkills`, `isNotFoundError`, `__testing`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/skills/plugin-skills.test.ts`。
- 相关 commit 主题：fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths；refactor: route plugin metadata consumers through snapshots；fix: gate codex acp route hints；fix: scope cold plugin manifests to index；test: fix plugin skills mock typing；fix(agents): resolve plugin skill metadata cold

### Dimension evidence

- `public-contract-修复-agents-resolve-plugin-skill-metadata-cold` / 修复 agents resolve plugin skill metadata cold:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — semantic cue
- `maintenance-修复-gate-codex-acp-route-hints` / 修复 gate codex acp route hints:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts`
  - source: `path` [M] `src/agents/skills/plugin-skills.ts`
- `public-contract-修复-scope-cold-plugin-manifests-to-index` / 修复 scope cold plugin manifests to index:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — semantic cue
- `public-contract-修改-fix-77296-Bug-Plugin-manifest-skills-fi` / 修改 fix #77296: [Bug]: Plugin manifest skills field not published to age…:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — semantic cue
- `tests-docs-测试覆盖-fix-plugin-skills-mock-typing` / 测试覆盖 fix plugin skills mock typing:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — semantic cue
- `public-contract-迁移-重构-route-plugin-metadata-consumers-through-s` / 迁移/重构 route plugin metadata consumers through snapshots:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — contract evidence
  - source: `path` [M] `src/agents/skills/plugin-skills.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/skills/plugin-skills.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/skills/plugin-skills.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills/plugin-skills.ts`：调整 plugin skills（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/skills/plugin-skills` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/skills/plugin-skills/change-to-test.md` 的验证建议。
