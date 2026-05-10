# src/cli-commands/command-implementations/auth-provider-commands

## 一句话结论

auth provider commands 所属的 CLI command surface, status output, onboarding and maintenance commands 有 70 个路径变化（新增 16、修改 44、删除 9、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands`
- Changed path count: `70`
- Status counts: `新增 16、修改 44、删除 9、重命名 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `70` files, `+4723` / `-3327`

## 功能变化摘要

这个 leaf 属于 `CLI command surface, status output, onboarding and maintenance commands`。本次版本差异显示它的主要变化是：新增 16、修改 44、删除 9、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.types.ts`
- `src/commands/doctor-auth-legacy-oauth.ts`
- `src/commands/models/alias-name.ts`
- `src/commands/models/list.configured.test.ts`
- `src/commands/models/list.local-url.ts`
- `src/commands/models/list.model-row.test.ts`
- `src/commands/models/list.model-row.ts`
- `src/commands/models/list.provider-catalog.test.ts`
- `src/commands/models/list.provider-catalog.ts`
- `src/commands/models/list.registry-load.ts`
- `src/commands/models/list.row-sources.ts`
- `src/commands/models/list.rows.test.ts`
- `src/commands/models/list.runtime.ts`
- `src/commands/models/list.table.test.ts`
- `src/commands/models/load-config.runtime.ts`

### 修改

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-legacy.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice-options.test.ts`
- `src/commands/auth-choice-options.ts`
- `src/commands/auth-choice-prompt.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.default-model.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.preferred-provider.test.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/auth-token.ts`
- `src/commands/chutes-oauth.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models.set.e2e.test.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/fallbacks-shared.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.configured.ts`
- `src/commands/models/list.format.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`
- `src/commands/models/list.list-command.ts`
- `src/commands/models/list.probe.targets.test.ts`
- … 另有 14 个路径，详见 `leaf-impact.json`。

### 删除

- `src/commands/auth-choice.api-key.ts`
- `src/commands/auth-choice.apply.oauth.ts`
- `src/commands/auth-choice.apply.plugin-provider.runtime.ts`
- `src/commands/auth-choice.apply.plugin-provider.ts`
- `src/commands/auth-choice.moonshot.test.ts`
- `src/commands/model-default.ts`
- `src/commands/models.list.auth-sync.test.ts`
- `src/commands/openai-codex-oauth.test.ts`
- `src/commands/openai-codex-oauth.ts`

### 重命名

- `src/commands/auth-choice.apply-helpers.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/auth-provider-commands` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/auth-provider-commands/change-to-test.md` 的验证建议。
