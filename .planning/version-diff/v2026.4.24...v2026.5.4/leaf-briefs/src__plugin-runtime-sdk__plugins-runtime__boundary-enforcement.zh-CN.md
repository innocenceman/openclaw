# src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement

## 1. 功能结论

**修改**：release resolve staged runtime deps in boundary loaders、speed up plugin activation boundary test、preserve Ollama local marker auth、fix plugin registry CI contracts；**迁移/重构**：simplify plugin module loading、plugins keep bundled runtime boundaries native、simplify plugin dependency handling、remove dead private helpers；行为变化，风险 high。

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

### 修复 preserve Ollama local marker auth

修复 preserve Ollama local marker auth

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 release resolve staged runtime deps in boundary loaders

修复 release：resolve staged runtime deps in boundary loaders

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 fix plugin registry CI contracts

测试覆盖 fix plugin registry CI contracts

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 speed up plugin activation boundary test

测试覆盖 speed up plugin activation boundary test

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 config migrate plugin config access

迁移/重构 config：migrate plugin config access

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 plugins keep bundled runtime boundaries native

迁移/重构 plugins：keep bundled runtime boundaries native

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 simplify plugin cache boundaries

迁移/重构 simplify plugin cache boundaries

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 simplify plugin module loading

迁移/重构 simplify plugin module loading

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin activation boundary regression/contract coverage、runtime plugin boundary，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 plugin activation boundary regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+68` / `-69`

### 归纳依据

- 主要落点：tests/contracts、implementation。
- 新增或暴露的关键符号包括：`getPluginBoundarySourceLoader`, `loadPluginBoundaryModule`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：refactor: simplify plugin module loading；refactor(plugins): keep bundled runtime boundaries native；refactor: simplify plugin dependency handling；fix(release): resolve staged runtime deps in boundary loaders；refactor: remove dead private helpers；refactor: simplify plugin cache boundaries；refactor(config): migrate plugin config access；test: speed up plugin activation boundary test

### Dimension evidence

- `maintenance-修复-preserve-Ollama-local-marker-auth` / 修复 preserve Ollama local marker auth:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts`
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts`
- `runtime-behavior-修复-release-resolve-staged-runtime-deps-in-bound` / 修复 release resolve staged runtime deps in boundary loaders:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `public-contract-测试覆盖-fix-plugin-registry-CI-contracts` / 测试覆盖 fix plugin registry CI contracts:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-plugin-activation-boundary-test` / 测试覆盖 speed up plugin activation boundary test:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `migration-迁移-重构-config-migrate-plugin-config-access` / 迁移/重构 config migrate plugin config access:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugins-keep-bundled-runtime-boundaries-n` / 迁移/重构 plugins keep bundled runtime boundaries native:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-cache-boundaries` / 迁移/重构 simplify plugin cache boundaries:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-module-loading` / 迁移/重构 simplify plugin module loading:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/runtime/runtime-plugin-boundary.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/plugin-activation-boundary.test.ts` — test evidence

### 路径证据

- 修改 `src/plugin-activation-boundary.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/runtime/runtime-plugin-boundary.ts`：调整 runtime plugin boundary（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/boundary-enforcement/change-to-test.md` 的验证建议。
