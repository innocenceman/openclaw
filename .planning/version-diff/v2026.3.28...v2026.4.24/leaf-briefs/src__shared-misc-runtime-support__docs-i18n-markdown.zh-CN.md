# src/shared-misc-runtime-support/docs-i18n-markdown

## 一句话结论

docs i18n markdown 所属的 Shared runtime primitives, compatibility, logging and startup support 有 19 个路径变化（新增 11、修改 6、删除 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown`
- Changed path count: `19`
- Status counts: `新增 11、修改 6、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `19` files, `+2516` / `-178`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 11、修改 6、删除 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/docs/clawhub-plugin-docs.test.ts`
- `src/docs/install-cloud-secrets.test.ts`
- `src/markdown/ir.table-block.test.ts`
- `src/markdown/render-aware-chunking.test.ts`
- `src/markdown/render-aware-chunking.ts`
- `src/markdown/tables.test.ts`
- `src/scripts/prepare-codex-ci-auth.test.ts`
- `src/scripts/prepare-codex-ci-config.test.ts`
- `src/scripts/sync-plugin-versions.test.ts`
- `src/scripts/test-live-media.test.ts`
- `src/scripts/test-projects.test.ts`

### 修改

- `src/i18n/registry.test.ts`
- `src/markdown/ir.ts`
- `src/markdown/tables.ts`
- `src/scripts/canvas-a2ui-copy.test.ts`
- `src/scripts/ci-changed-scope.test.ts`
- `src/scripts/docs-link-audit.test.ts`

### 删除

- `src/markdown/whatsapp.test.ts`
- `src/markdown/whatsapp.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/docs-i18n-markdown` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown/change-to-test.md` 的验证建议。
