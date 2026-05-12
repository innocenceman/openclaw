# scripts/packaging/lib

## 一句话结论

lib 所属的 Build, CI, scripts, tests and release automation 有 56 个路径变化（新增 40、修改 15、删除 1），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/lib`
- Changed path count: `56`
- Status counts: `新增 40、修改 15、删除 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `56` files, `+5404` / `-1440`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 40、修改 15、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `scripts/lib/bundled-plugin-build-entries-types.d.ts`
- `scripts/lib/bundled-plugin-paths.mjs`
- `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`
- `scripts/lib/bundled-runtime-sidecar-paths.json`
- `scripts/lib/changed-extensions.mjs`
- `scripts/lib/channel-contract-test-plan.mjs`
- `scripts/lib/check-timing-summary.mjs`
- `scripts/lib/ci-node-test-plan.mjs`
- `scripts/lib/dependency-ownership.json`
- `scripts/lib/docker-e2e-image.sh`
- `scripts/lib/docker-e2e-logs.sh`
- `scripts/lib/error-format.mjs`
- `scripts/lib/extension-import-boundary-checker.mjs`
- `scripts/lib/extension-package-boundary.ts`
- `scripts/lib/extension-source-classifier.d.mts`
- `scripts/lib/extension-source-classifier.mjs`
- `scripts/lib/extension-test-plan.mjs`
- `scripts/lib/import-cycle-graph.ts`
- `scripts/lib/ios-version.ts`
- `scripts/lib/live-docker-stage.sh`
- `scripts/lib/local-heavy-check-runtime.mjs`
- `scripts/lib/managed-child-process.mjs`
- `scripts/lib/mintlify-accordion.mjs`
- `scripts/lib/npm-pack-budget.d.mts`
- `scripts/lib/npm-pack-budget.mjs`
- `scripts/lib/npm-publish-plan.mjs`
- `scripts/lib/official-external-channel-catalog.json`
- `scripts/lib/optional-bundled-clusters-types.d.ts`
- `scripts/lib/package-root-args.mjs`
- `scripts/lib/plugin-clawhub-release.ts`
- … 另有 10 个路径，详见 `leaf-impact.json`。

### 修改

- `scripts/lib/arg-utils.mjs`
- `scripts/lib/bundled-extension-manifest.ts`
- `scripts/lib/bundled-plugin-build-entries.d.mts`
- `scripts/lib/bundled-plugin-build-entries.d.ts`
- `scripts/lib/bundled-plugin-build-entries.mjs`
- `scripts/lib/guard-inventory-utils.mjs`
- `scripts/lib/live-docker-auth.sh`
- `scripts/lib/optional-bundled-clusters.d.mts`
- `scripts/lib/optional-bundled-clusters.d.ts`
- `scripts/lib/plugin-npm-release.ts`
- `scripts/lib/plugin-sdk-doc-metadata.ts`
- `scripts/lib/plugin-sdk-entrypoints.json`
- `scripts/lib/ts-guard-utils.mjs`
- `scripts/lib/ts-topology/analyze.ts`
- `scripts/lib/ts-topology/scope.ts`

### 删除

- `scripts/lib/plugin-sdk-facades.mjs`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `scripts/packaging/lib` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/lib/change-to-test.md` 的验证建议。
