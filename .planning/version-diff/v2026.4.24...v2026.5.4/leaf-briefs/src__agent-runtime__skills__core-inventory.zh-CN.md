# src/agent-runtime/skills/core-inventory

## 1. 功能结论

**新增**：agent visibility to skills check；**修改**：fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths、reduce root cleanup files、discord preserve slash command localizations、bounded directory scan actionable regression；**迁移/重构**：skills centralize snapshot hydration、simplify plugin cache boundaries；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：新增 1、修改 12、重命名 1

## 3. 功能级详细差异

### 修复 bounded directory scan actionable regression

修复 bounded directory scan actionable regression

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 修复 discord preserve slash command localizations

修复 discord：preserve slash command localizations

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 修复 security avoid duplicate skill package import

修复 security：avoid duplicate skill package import

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 修复 skills bound grouped skill directory scans

修复 skills：bound grouped skill directory scans

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 修复 skills scan grouped skill directories

修复 skills：scan grouped skill directories

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 修改 fix #77296: [Bug]: Plugin manifest skills field not published to age…

修改 fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 新增 agent visibility to skills check

新增 agent visibility to skills check

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 维护调整 reduce root cleanup files

维护调整 reduce root cleanup files

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 迁移/重构 simplify plugin cache boundaries

迁移/重构 simplify plugin cache boundaries

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 迁移/重构 skills centralize snapshot hydration

迁移/重构 skills：centralize snapshot hydration

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 SKILL docs、pyproject、test package skill、skills status regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 skills.build workspace skills prompt.prefers workspace skills managed skills regression/contract coverage、skills.buildworkspaceskillsnapshot regression/contract coverage、skills.buildworkspaceskillstatus regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 SKILL docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 skills status regression/contract coverage、skills.build workspace skills prompt.prefers workspace skills managed skills regression/contract coverage、skills.buildworkspaceskillsnapshot regression/contract coverage、skills.buildworkspaceskillstatus regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 置信度：`medium`

### 迁移/重命名变化

`pyproject` 路径（`skills/pyproject.toml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/core-inventory`
- Changed path count: `14`
- Status counts: `新增 1、修改 12、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `14` files, `+1165` / `-289`

### 归纳依据

- 主要落点：agent runtime、docs、implementation。
- 新增或暴露的关键符号包括：`createEntry`, `isSkillVisibleInAvailableSkillsPrompt`, `isSkillUserInvocable`, `createSkillEntry`, `hydrateResolvedSkills`, `DEFAULT_MIN_RAW_ENTRIES_PER_DIRECTORY_SCAN`, `DEFAULT_MAX_RAW_ENTRIES_PER_DIRECTORY_SCAN`, `listChildDirectories`, `resolveRawEntryScanLimit`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`。
- 相关 commit 主题：fix #77296: [Bug]: Plugin manifest `skills` field not published to agent skill discovery paths；chore: reduce root cleanup files；Add agent visibility to skills check；refactor(skills): centralize snapshot hydration；fix(discord): preserve slash command localizations；fix: bounded directory scan actionable regression；fix(skills): bound grouped skill directory scans；fix(skills): scan grouped skill directories

### Dimension evidence

- `maintenance-修复-bounded-directory-scan-actionable-regression` / 修复 bounded directory scan actionable regression:
  - source: `path` [A] `src/agents/skills/snapshot-hydration.ts`
  - source: `path` [M] `skills/coding-agent/SKILL.md`
  - source: `path` [M] `skills/gifgrep/SKILL.md`
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py`
  - source: `path` [R] `skills/pyproject.toml`
- `maintenance-修复-discord-preserve-slash-command-localizations` / 修复 discord preserve slash command localizations:
  - source: `path` [A] `src/agents/skills/snapshot-hydration.ts`
  - source: `path` [M] `skills/coding-agent/SKILL.md`
  - source: `path` [M] `skills/gifgrep/SKILL.md`
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py`
  - source: `path` [R] `skills/pyproject.toml`
- `integration-build-release-修复-security-avoid-duplicate-skill-package-import` / 修复 security avoid duplicate skill package import:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `maintenance-修复-skills-bound-grouped-skill-directory-scans` / 修复 skills bound grouped skill directory scans:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `maintenance-修复-skills-scan-grouped-skill-directories` / 修复 skills scan grouped skill directories:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `public-contract-修改-fix-77296-Bug-Plugin-manifest-skills-fi` / 修改 fix #77296: [Bug]: Plugin manifest skills field not published to age…:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `maintenance-新增-agent-visibility-to-skills-check` / 新增 agent visibility to skills check:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `maintenance-维护调整-reduce-root-cleanup-files` / 维护调整 reduce root cleanup files:
  - source: `path` [A] `src/agents/skills/snapshot-hydration.ts`
  - source: `path` [M] `skills/coding-agent/SKILL.md`
  - source: `path` [M] `skills/gifgrep/SKILL.md`
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py`
  - source: `path` [R] `skills/pyproject.toml`
- `migration-迁移-重构-simplify-plugin-cache-boundaries` / 迁移/重构 simplify plugin cache boundaries:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `migration-迁移-重构-skills-centralize-snapshot-hydration` / 迁移/重构 skills centralize snapshot hydration:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — semantic cue
  - source: `path` [M] `skills/gifgrep/SKILL.md` — semantic cue
  - source: `path` [M] `skills/pyproject.toml` — semantic cue
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — semantic cue
  - source: `path` [M] `src/agents/skills-status.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-status.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — contract evidence
  - source: `path` [M] `skills/gifgrep/SKILL.md` — contract evidence
  - source: `path` [M] `skills/pyproject.toml` — contract evidence
  - source: `path` [M] `skills/skill-creator/scripts/test_package_skill.py` — contract evidence
  - source: `path` [M] `src/agents/skills-status.test.ts` — contract evidence
  - source: `path` [M] `src/agents/skills-status.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts` — build/release evidence
  - source: `path` [M] `src/agents/skills.buildworkspaceskillsnapshot.test.ts` — build/release evidence
  - source: `path` [M] `src/agents/skills.buildworkspaceskillstatus.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `skills/coding-agent/SKILL.md` — docs evidence
  - source: `path` [M] `skills/gifgrep/SKILL.md` — docs evidence
  - source: `path` [M] `src/agents/skills-status.test.ts` — test evidence
  - source: `path` [M] `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts` — test evidence
  - source: `path` [M] `src/agents/skills.buildworkspaceskillsnapshot.test.ts` — test evidence
  - source: `path` [M] `src/agents/skills.buildworkspaceskillstatus.test.ts` — test evidence
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `skills/pyproject.toml`

### 路径证据

- 新增 `src/agents/skills/snapshot-hydration.ts`：调整 snapshot hydration（agent runtime）。
- 修改 `skills/coding-agent/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `skills/gifgrep/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `skills/skill-creator/scripts/test_package_skill.py`：调整 test package skill（implementation）。
- 修改 `src/agents/skills-status.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills-status.ts`：调整 skills status（agent runtime）。
- 修改 `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills.buildworkspaceskillsnapshot.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills.buildworkspaceskillstatus.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills.loadworkspaceskillentries.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills/types.ts`：调整 skills types（agent runtime）。
- 修改 `src/agents/skills/workspace.ts`：调整 workspace（agent runtime）。
- 重命名 `skills/pyproject.toml`：调整 pyproject（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/skills/core-inventory` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/skills/core-inventory/change-to-test.md` 的验证建议。
