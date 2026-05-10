# extensions/provider-plugins/xai

## 一句话结论

xai 所属的 Model/search/provider plugins and tool surfaces 有 60 个路径变化（新增 35、修改 20、删除 4、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xai`
- Changed path count: `60`
- Status counts: `新增 35、修改 20、删除 4、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `60` files, `+5039` / `-1004`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 35、修改 20、删除 4、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/xai/.boundary-stubs/anthropic-vertex-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-api.d.ts`
- `extensions/xai/.boundary-stubs/ollama-runtime-api.d.ts`
- `extensions/xai/.boundary-stubs/speech-core-runtime-api.d.ts`
- `extensions/xai/api.test.ts`
- `extensions/xai/image-generation-provider.test.ts`
- `extensions/xai/image-generation-provider.ts`
- `extensions/xai/index.test.ts`
- `extensions/xai/provider-contract-api.ts`
- `extensions/xai/realtime-transcription-provider.test.ts`
- `extensions/xai/realtime-transcription-provider.ts`
- `extensions/xai/setup-api.ts`
- `extensions/xai/speech-provider.test.ts`
- `extensions/xai/speech-provider.ts`
- `extensions/xai/src/responses-tool-shared.test.ts`
- `extensions/xai/src/responses-tool-shared.ts`
- `extensions/xai/src/tool-auth-shared.test.ts`
- `extensions/xai/src/tool-auth-shared.ts`
- `extensions/xai/src/tool-config-shared.test.ts`
- `extensions/xai/src/tool-config-shared.ts`
- `extensions/xai/src/web-search-provider.runtime.ts`
- `extensions/xai/src/web-search-response.types.ts`
- `extensions/xai/src/x-search-config.ts`
- `extensions/xai/stt.test.ts`
- `extensions/xai/stt.ts`
- `extensions/xai/test-api.ts`
- `extensions/xai/test-helpers.ts`
- `extensions/xai/tsconfig.json`
- `extensions/xai/tts.test.ts`
- `extensions/xai/tts.ts`
- … 另有 5 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/xai/api.ts`
- `extensions/xai/code-execution.test.ts`
- `extensions/xai/code-execution.ts`
- `extensions/xai/index.ts`
- `extensions/xai/model-definitions.ts`
- `extensions/xai/onboard.test.ts`
- `extensions/xai/openclaw.plugin.json`
- `extensions/xai/package.json`
- `extensions/xai/plugin-registration.contract.test.ts`
- `extensions/xai/provider-models.ts`
- `extensions/xai/src/code-execution-shared.ts`
- `extensions/xai/src/web-search-shared.ts`
- `extensions/xai/src/x-search-shared.ts`
- `extensions/xai/stream.test.ts`
- `extensions/xai/stream.ts`
- `extensions/xai/web-search.test.ts`
- `extensions/xai/web-search.ts`
- `extensions/xai/x-search.live.test.ts`
- `extensions/xai/x-search.test.ts`
- `extensions/xai/x-search.ts`

### 删除

- `extensions/xai/bundled-web-search.contract.test.ts`
- `extensions/xai/provider-runtime.contract.test.ts`
- `extensions/xai/provider.contract.test.ts`
- `extensions/xai/web-search-provider.contract.test.ts`

### 重命名

- `extensions/xai/model-id.test.ts`

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

- 首选验证：Provider manifest/auth metadata changed | `pnpm test:contracts:plugins` plus provider auth/catalog contract tests | Escalate to docs/UI settings sync if user-facing labels or env vars change.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/xai` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/xai/change-to-test.md` 的验证建议。
