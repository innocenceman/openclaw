# packages/shared-packages

## 一句话结论

shared packages 所属的 Plugin SDK, plugin registry, plugin loading boundaries 有 85 个路径变化（新增 26、修改 44、删除 7、重命名 8），兼容性判断为行为变化。

## Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages`
- Changed path count: `85`
- Status counts: `新增 26、修改 44、删除 7、重命名 8`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `85` files, `+1587` / `-4182`

## 功能变化摘要

这个 leaf 属于 `Plugin SDK, plugin registry, plugin loading boundaries`。本次版本差异显示它的主要变化是：新增 26、修改 44、删除 7、重命名 8。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `packages/plugin-package-contract/package.json`
- `packages/plugin-package-contract/src/index.test.ts`
- `packages/plugin-package-contract/src/index.ts`
- `packages/plugin-sdk/package.json`
- `packages/plugin-sdk/src/config-runtime.ts`
- `packages/plugin-sdk/src/plugin-entry.ts`
- `packages/plugin-sdk/src/plugin-runtime.ts`
- `packages/plugin-sdk/src/provider-auth-runtime.ts`
- `packages/plugin-sdk/src/provider-auth.ts`
- `packages/plugin-sdk/src/provider-entry.ts`
- `packages/plugin-sdk/src/provider-http.ts`
- `packages/plugin-sdk/src/provider-model-shared.ts`
- `packages/plugin-sdk/src/provider-model-types.ts`
- `packages/plugin-sdk/src/provider-onboard.ts`
- `packages/plugin-sdk/src/provider-stream-shared.ts`
- `packages/plugin-sdk/src/provider-tools.ts`
- `packages/plugin-sdk/src/provider-web-search-config-contract.ts`
- `packages/plugin-sdk/src/provider-web-search.ts`
- `packages/plugin-sdk/src/runtime-doctor.ts`
- `packages/plugin-sdk/src/runtime-env.ts`
- `packages/plugin-sdk/src/secret-input.ts`
- `packages/plugin-sdk/src/security-runtime.ts`
- `packages/plugin-sdk/src/testing.ts`
- `packages/plugin-sdk/src/text-runtime.ts`
- `packages/plugin-sdk/src/video-generation.ts`
- `packages/plugin-sdk/tsconfig.json`

### 修改

- `packages/memory-host-sdk/src/engine-embeddings.ts`
- `packages/memory-host-sdk/src/engine-foundation.ts`
- `packages/memory-host-sdk/src/engine-qmd.ts`
- `packages/memory-host-sdk/src/engine-storage.ts`
- `packages/memory-host-sdk/src/engine.ts`
- `packages/memory-host-sdk/src/host/backend-config.test.ts`
- `packages/memory-host-sdk/src/host/backend-config.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/embedding-model-limits.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- `packages/memory-host-sdk/src/host/internal.test.ts`
- `packages/memory-host-sdk/src/host/internal.ts`
- `packages/memory-host-sdk/src/host/memory-schema.ts`
- `packages/memory-host-sdk/src/host/multimodal.ts`
- `packages/memory-host-sdk/src/host/node-llama.ts`
- `packages/memory-host-sdk/src/host/post-json.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.test.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.test.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.ts`
- `packages/memory-host-sdk/src/host/query-expansion.test.ts`
- `packages/memory-host-sdk/src/host/query-expansion.ts`
- `packages/memory-host-sdk/src/host/read-file.ts`
- `packages/memory-host-sdk/src/host/secret-input.ts`
- … 另有 14 个路径，详见 `leaf-impact.json`。

### 删除

- `packages/memory-host-sdk/src/host/batch-embedding-common.ts`
- `packages/memory-host-sdk/src/host/batch-gemini.test.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.test.ts`

### 重命名

- `packages/memory-host-sdk/src/host/batch-gemini.ts`
- `packages/memory-host-sdk/src/host/batch-openai.ts`
- `packages/memory-host-sdk/src/host/batch-voyage.ts`
- `packages/memory-host-sdk/src/host/embeddings-gemini.ts`
- `packages/memory-host-sdk/src/host/embeddings-mistral.ts`
- `packages/memory-host-sdk/src/host/embeddings-ollama.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-openai.ts`
- `packages/memory-host-sdk/src/host/embeddings-voyage.ts`

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

- 首选验证：Package metadata or export shim changed | Inspect the package leaf docs and run release/package targeted tests such as `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`. | Run pack/install smoke before publishing.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `packages/shared-packages` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/packages/shared-packages/change-to-test.md` 的验证建议。
