# src/agent-runtime/skills/install-refresh

## 1. 功能结论

**修改**：infra block ambient Homebrew env vars from brew resolution、repair skills and memory watcher refresh paths、runtime harden dependency install surfaces；**迁移/重构**：unify lazy import loaders、trim agent core helper exports、remove unused test helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 8

## 3. 功能级详细差异

### 修复 infra block ambient Homebrew env vars from brew resolution

修复 infra：block ambient Homebrew env vars from brew resolution

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 repair skills and memory watcher refresh paths

修复 repair skills and memory watcher refresh paths

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 runtime harden dependency install surfaces

修复 runtime：harden dependency install surfaces

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 remove unused test helpers

迁移/重构 remove unused test helpers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim agent core helper exports

迁移/重构 trim agent core helper exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify lazy import loaders

迁移/重构 unify lazy import loaders

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 skills install fallback regression/contract coverage、skills install regression/contract coverage、refresh regression/contract coverage，用于约束本 leaf 的回归边界。

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
- Impact-map dir: `.planning/impact-map/src/agent-runtime/skills/install-refresh`
- Changed path count: `8`
- Status counts: `修改 8`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+263` / `-120`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`resolveDefaultNodeInstallStateDir`, `createMockWatcher`, `toWatchRoot`, `shouldIgnoreSkillsWatchPath`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：refactor: unify lazy import loaders；refactor: trim agent core helper exports；fix(infra): block ambient Homebrew env vars from brew resolution；refactor: remove unused test helpers；fix: repair skills and memory watcher refresh paths；fix(runtime): harden dependency install surfaces

### Dimension evidence

- `maintenance-修复-infra-block-ambient-Homebrew-env-vars-from-b` / 修复 infra block ambient Homebrew env vars from brew resolution:
  - source: `path` [M] `src/agents/skills-install-download.ts`
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts`
  - source: `path` [M] `src/agents/skills-install-output.ts`
- `maintenance-修复-repair-skills-and-memory-watcher-refresh-pat` / 修复 repair skills and memory watcher refresh paths:
  - source: `path` [M] `src/agents/skills-install-download.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-output.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.download-test-utils.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.ts` — semantic cue
- `runtime-behavior-修复-runtime-harden-dependency-install-surfaces` / 修复 runtime harden dependency install surfaces:
  - source: `path` [M] `src/agents/skills-install-download.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-output.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.download-test-utils.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.ts` — semantic cue
- `migration-迁移-重构-remove-unused-test-helpers` / 迁移/重构 remove unused test helpers:
  - source: `path` [M] `src/agents/skills-install-download.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-output.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.download-test-utils.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.ts` — semantic cue
- `migration-迁移-重构-trim-agent-core-helper-exports` / 迁移/重构 trim agent core helper exports:
  - source: `path` [M] `src/agents/skills-install-download.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-output.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.download-test-utils.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-import-loaders` / 迁移/重构 unify lazy import loaders:
  - source: `path` [M] `src/agents/skills-install-download.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install-output.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.download-test-utils.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.test.ts` — semantic cue
  - source: `path` [M] `src/agents/skills-install.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/skills-install-fallback.test.ts` — test evidence
  - source: `path` [M] `src/agents/skills-install.test.ts` — test evidence
  - source: `path` [M] `src/agents/skills/refresh.test.ts` — test evidence

### 路径证据

- 修改 `src/agents/skills-install-download.ts`：调整 skills install download（agent runtime）。
- 修改 `src/agents/skills-install-fallback.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills-install-output.ts`：调整 skills install output（agent runtime）。
- 修改 `src/agents/skills-install.download-test-utils.ts`：调整 skills install.download test utils（agent runtime）。
- 修改 `src/agents/skills-install.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills-install.ts`：调整 skills install（agent runtime）。
- 修改 `src/agents/skills/refresh.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/skills/refresh.ts`：调整 refresh（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/skills/install-refresh` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/skills/install-refresh/change-to-test.md` 的验证建议。
