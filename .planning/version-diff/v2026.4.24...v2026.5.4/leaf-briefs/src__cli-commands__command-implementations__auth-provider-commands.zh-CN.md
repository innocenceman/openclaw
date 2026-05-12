# src/cli-commands/command-implementations/auth-provider-commands

## 1. 功能结论

**新增**：models list auth profiles；**修改**：refresh stale codex auth profile routing、types wire plugin package metadata、keep legacy config repair in doctor、models restore provider catalog listing；**迁移/重构**：unify lazy module loaders、route plugin metadata consumers through snapshots、trim web fetch facade；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 12、修改 39、删除 6

## 3. 功能级详细差异

### 修复 keep legacy config repair in doctor

修复 keep legacy config repair in doctor

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 models restore provider catalog listing

修复 models：restore provider catalog listing

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 refresh stale codex auth profile routing

修复 refresh stale codex auth profile routing

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 tolerate sparse plugin metadata snapshots

修复 tolerate sparse plugin metadata snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 typecheck sparse plugin metadata handling

修复 typecheck sparse plugin metadata handling

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 types wire plugin package metadata

修复 types：wire plugin package metadata

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 models list auth profiles

新增 models：list auth profiles

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 route plugin metadata consumers through snapshots

迁移/重构 route plugin metadata consumers through snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim web fetch facade

迁移/重构 trim web fetch facade

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify lazy module loaders

迁移/重构 unify lazy module loaders

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 list.manifest catalog regression/contract coverage、list.manifest catalog、load config、load config regression/contract coverage，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 auth choice legacy regression/contract coverage、auth choice.apply.api providers regression/contract coverage、auth choice.apply.plugin provider regression/contract coverage、auth choice.model check regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `auth choice.default model`（`src/commands/auth-choice.default-model.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `model allowlist`（`src/commands/model-allowlist.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `models`（`src/commands/models.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `list`（`src/commands/models/list.runtime.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands`
- Changed path count: `57`
- Status counts: `新增 12、修改 39、删除 6`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `57` files, `+5408` / `-802`

### 归纳依据

- 主要落点：CLI/command behavior。
- 新增或暴露的关键符号包括：`authChoiceManifestEnv`, `EXISTING_DEFAULT_MODEL`, `buildProviderWithDefaultModelPatch`, `normalizeProviderId`, `resolveProviderPluginChoice`, `configuredTextModel`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix: refresh stale codex auth profile routing；fix(types): wire plugin package metadata；feat(models): list auth profiles；fix: keep legacy config repair in doctor；fix(models): restore provider catalog listing；refactor: unify lazy module loaders；refactor: route plugin metadata consumers through snapshots；refactor: trim web fetch facade

### Dimension evidence

- `maintenance-修复-keep-legacy-config-repair-in-doctor` / 修复 keep legacy config repair in doctor:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models/list.auth-index.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models/list.auth-index.ts` — semantic cue
  - source: `path` [M] `src/commands/models/list.provider-index-catalog.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models/list.provider-index-catalog.ts` — semantic cue
- `runtime-behavior-修复-models-restore-provider-catalog-listing` / 修复 models restore provider catalog listing:
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models.list.e2e.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models.ts` — semantic cue
  - source: `path` [M] `src/commands/models/auth-list.test.ts` — semantic cue
  - source: `path` [M] `src/commands/models/auth-list.ts` — semantic cue
- `runtime-behavior-修复-refresh-stale-codex-auth-profile-routing` / 修复 refresh stale codex auth profile routing:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice-options.static.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.ts` — semantic cue
- `public-contract-修复-tolerate-sparse-plugin-metadata-snapshots` / 修复 tolerate sparse plugin metadata snapshots:
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
- `public-contract-修复-typecheck-sparse-plugin-metadata-handling` / 修复 typecheck sparse plugin metadata handling:
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
- `public-contract-修复-types-wire-plugin-package-metadata` / 修复 types wire plugin package metadata:
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
- `maintenance-新增-models-list-auth-profiles` / 新增 models list auth profiles:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice-options.static.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.ts` — semantic cue
- `public-contract-迁移-重构-route-plugin-metadata-consumers-through-s` / 迁移/重构 route plugin metadata consumers through snapshots:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice-options.static.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.ts` — semantic cue
- `migration-迁移-重构-trim-web-fetch-facade` / 迁移/重构 trim web fetch facade:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice-options.static.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.ts` — semantic cue
- `migration-迁移-重构-unify-lazy-module-loaders` / 迁移/重构 unify lazy module loaders:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice-options.static.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — semantic cue
  - source: `path` [M] `src/commands/auth-choice.apply.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/commands/models/list.manifest-catalog.test.ts` — contract evidence
  - source: `path` [M] `src/commands/models/list.manifest-catalog.ts` — contract evidence
  - source: `path` [M] `src/commands/models/load-config.runtime.ts` — contract evidence
  - source: `path` [M] `src/commands/models/load-config.test.ts` — contract evidence
  - source: `path` [M] `src/commands/models/load-config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/auth-choice-legacy.test.ts` — test evidence
  - source: `path` [M] `src/commands/auth-choice.apply.api-providers.test.ts` — test evidence
  - source: `path` [M] `src/commands/auth-choice.apply.plugin-provider.test.ts` — test evidence
  - source: `path` [M] `src/commands/auth-choice.model-check.test.ts` — test evidence
  - source: `path` [M] `src/commands/auth-choice.test.ts` — test evidence
  - source: `path` [M] `src/commands/model-picker.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/commands/auth-choice.default-model.ts`
  - source: `path` [D] `src/commands/model-allowlist.ts`
  - source: `path` [D] `src/commands/models.ts`
  - source: `path` [D] `src/commands/models/list.runtime.ts`
  - source: `path` [D] `src/commands/models/list.ts`
  - source: `path` [D] `src/commands/oauth-flow.ts`

### 路径证据

- 新增 `src/commands/auth-choice.model-check.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/models/auth-list.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/models/auth-list.ts`：调整 auth list（CLI/command behavior）。
- 新增 `src/commands/models/list.auth-index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/models/list.auth-index.ts`：调整 list.auth index（CLI/command behavior）。
- 新增 `src/commands/models/list.manifest-catalog.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/commands/models/list.manifest-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/commands/models/list.provider-index-catalog.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/commands/models/list.provider-index-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `src/commands/models/list.source-plan.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/models/list.source-plan.ts`：调整 list.source plan（CLI/command behavior）。
- 新增 `src/commands/models/scan.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/auth-choice-legacy.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/auth-choice-options.static.ts`：调整 auth choice options.static（CLI/command behavior）。
- 修改 `src/commands/auth-choice.apply-helpers.ts`：调整 auth choice.apply helpers（CLI/command behavior）。
- 修改 `src/commands/auth-choice.apply.api-providers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/auth-choice.apply.plugin-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/auth-choice.apply.ts`：调整 auth choice.apply（CLI/command behavior）。
- 修改 `src/commands/auth-choice.model-check.ts`：调整 auth choice.model check（CLI/command behavior）。
- 修改 `src/commands/auth-choice.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/model-picker.runtime.ts`：调整 model picker（CLI/command behavior）。
- 修改 `src/commands/model-picker.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/models.list.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/models/auth-order.ts`：调整 auth order（CLI/command behavior）。
- 删除 `src/commands/auth-choice.default-model.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/model-allowlist.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/models.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/models/list.runtime.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/models/list.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/oauth-flow.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 其余 27 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/auth-provider-commands` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands/change-to-test.md` 的验证建议。
