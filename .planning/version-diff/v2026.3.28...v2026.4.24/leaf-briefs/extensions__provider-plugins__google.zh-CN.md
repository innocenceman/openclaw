# extensions/provider-plugins/google

## 一句话结论

google 所属的 Model/search/provider plugins and tool surfaces 有 69 个路径变化（新增 39、修改 25、删除 3、重命名 2），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/google`
- Changed path count: `69`
- Status counts: `新增 39、修改 25、删除 3、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `69` files, `+8118` / `-1070`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 39、修改 25、删除 3、重命名 2。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/google/api.test.ts`
- `extensions/google/default-model.test.ts`
- `extensions/google/embedding-provider.test.ts`
- `extensions/google/gemini-auth.ts`
- `extensions/google/generation-provider-metadata.ts`
- `extensions/google/google-genai-runtime.ts`
- `extensions/google/google.live.test.ts`
- `extensions/google/index.test.ts`
- `extensions/google/memory-embedding-adapter.ts`
- `extensions/google/model-id.test.ts`
- `extensions/google/music-generation-provider.test.ts`
- `extensions/google/music-generation-provider.ts`
- `extensions/google/oauth-token-shared.test.ts`
- `extensions/google/oauth-token-shared.ts`
- `extensions/google/oauth.settings.ts`
- `extensions/google/onboard.ts`
- `extensions/google/provider-contract-api.ts`
- `extensions/google/provider-hooks.ts`
- `extensions/google/provider-policy-api.test.ts`
- `extensions/google/provider-policy-api.ts`
- `extensions/google/provider-policy.ts`
- `extensions/google/provider-registration.ts`
- `extensions/google/realtime-voice-provider.test.ts`
- `extensions/google/realtime-voice-provider.ts`
- `extensions/google/setup-api.ts`
- `extensions/google/speech-provider.test.ts`
- `extensions/google/speech-provider.ts`
- `extensions/google/src/gemini-web-search-provider.runtime.ts`
- `extensions/google/src/gemini-web-search-provider.shared.ts`
- `extensions/google/thinking-api.ts`
- … 另有 9 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/google/api.ts`
- `extensions/google/cli-backend.ts`
- `extensions/google/gemini-cli-provider.ts`
- `extensions/google/google-shared.test.ts`
- `extensions/google/image-generation-provider.test.ts`
- `extensions/google/image-generation-provider.ts`
- `extensions/google/index.ts`
- `extensions/google/media-understanding-provider.ts`
- `extensions/google/media-understanding-provider.video.test.ts`
- `extensions/google/oauth.credentials.ts`
- `extensions/google/oauth.flow.ts`
- `extensions/google/oauth.project.ts`
- `extensions/google/oauth.shared.ts`
- `extensions/google/oauth.test.ts`
- `extensions/google/oauth.token.ts`
- `extensions/google/oauth.ts`
- `extensions/google/openclaw.plugin.json`
- `extensions/google/package.json`
- `extensions/google/plugin-registration.contract.test.ts`
- `extensions/google/provider-models.test.ts`
- `extensions/google/provider-models.ts`
- `extensions/google/provider-runtime.contract.test.ts`
- `extensions/google/runtime-api.ts`
- `extensions/google/src/gemini-web-search-provider.ts`
- `extensions/google/test-api.ts`

### 删除

- `extensions/google/bundled-web-search.contract.test.ts`
- `extensions/google/provider.contract.test.ts`
- `extensions/google/web-search-provider.contract.test.ts`

### 重命名

- `extensions/google/embedding-batch.ts`
- `extensions/google/embedding-provider.ts`

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

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/google` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/google/change-to-test.md` 的验证建议。
