# extensions/provider-plugins/ollama

## 一句话结论

ollama 所属的 Model/search/provider plugins and tool surfaces 有 34 个路径变化（新增 17、修改 13、删除 2、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/ollama`
- Changed path count: `34`
- Status counts: `新增 17、修改 13、删除 2、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `34` files, `+4943` / `-680`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 17、修改 13、删除 2、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.import-guard.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/provider-policy-api.test.ts`
- `extensions/ollama/provider-policy-api.ts`
- `extensions/ollama/src/discovery-shared.ts`
- `extensions/ollama/src/media-understanding-provider.ts`
- `extensions/ollama/src/memory-embedding-adapter.ts`
- `extensions/ollama/src/ollama-json.ts`
- `extensions/ollama/src/provider-models.ssrf.test.ts`
- `extensions/ollama/src/stream.test.ts`
- `extensions/ollama/src/web-search-provider.test.ts`
- `extensions/ollama/src/web-search-provider.ts`
- `extensions/ollama/tsconfig.json`
- `extensions/ollama/web-search-contract-api.ts`
- `extensions/ollama/web-search-provider.ts`

### 修改

- `extensions/ollama/api.ts`
- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/runtime-api.ts`
- `extensions/ollama/src/defaults.ts`
- `extensions/ollama/src/embedding-provider.ts`
- `extensions/ollama/src/provider-models.test.ts`
- `extensions/ollama/src/provider-models.ts`
- `extensions/ollama/src/setup.test.ts`
- `extensions/ollama/src/setup.ts`
- `extensions/ollama/src/stream.ts`

### 删除

- `extensions/ollama/provider-discovery.contract.test.ts`
- `extensions/ollama/provider.contract.test.ts`

### 重命名

- `extensions/ollama/src/embedding-provider.test.ts`
- `extensions/ollama/src/stream-runtime.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Auth/discovery/wizard behavior changed | `pnpm test -- extensions/ollama/index.test.ts` | Add `pnpm test:contracts:plugins` if provider registration or wizard metadata changes across plugin boundaries.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/ollama` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/ollama/change-to-test.md` 的验证建议。
