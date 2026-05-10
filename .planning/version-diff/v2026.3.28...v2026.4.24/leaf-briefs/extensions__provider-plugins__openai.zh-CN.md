# extensions/provider-plugins/openai

## 一句话结论

openai 所属的 Model/search/provider plugins and tool surfaces 有 60 个路径变化（新增 31、修改 25、删除 1、重命名 3），兼容性判断为行为变化。

## Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openai`
- Changed path count: `60`
- Status counts: `新增 31、修改 25、删除 1、重命名 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `60` files, `+9462` / `-790`

## 功能变化摘要

这个 leaf 属于 `Model/search/provider plugins and tool surfaces`。本次版本差异显示它的主要变化是：新增 31、修改 25、删除 1、重命名 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/openai/auth-choice-copy.ts`
- `extensions/openai/base-url.test.ts`
- `extensions/openai/base-url.ts`
- `extensions/openai/default-models.test.ts`
- `extensions/openai/image-generation-provider.test.ts`
- `extensions/openai/memory-embedding-adapter.ts`
- `extensions/openai/native-web-search.ts`
- `extensions/openai/openai-codex-device-code.test.ts`
- `extensions/openai/openai-codex-device-code.ts`
- `extensions/openai/openai-codex-shared.ts`
- `extensions/openai/openai-provider.live.test.ts`
- `extensions/openai/openai-tts.live.test.ts`
- `extensions/openai/openai.live.test.ts`
- `extensions/openai/openclaw.plugin.test.ts`
- `extensions/openai/prompt-overlay.ts`
- `extensions/openai/provider-contract-api.ts`
- `extensions/openai/provider-policy-api.ts`
- `extensions/openai/realtime-provider-shared.ts`
- `extensions/openai/realtime-transcription-provider.test.ts`
- `extensions/openai/realtime-transcription-provider.ts`
- `extensions/openai/realtime-voice-provider.test.ts`
- `extensions/openai/realtime-voice-provider.ts`
- `extensions/openai/register.runtime.ts`
- `extensions/openai/replay-policy.ts`
- `extensions/openai/setup-api.ts`
- `extensions/openai/speech-provider.test.ts`
- `extensions/openai/transport-policy.test.ts`
- `extensions/openai/transport-policy.ts`
- `extensions/openai/tsconfig.json`
- `extensions/openai/video-generation-provider.test.ts`
- … 另有 1 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/openai/api.ts`
- `extensions/openai/cli-backend.ts`
- `extensions/openai/default-models.ts`
- `extensions/openai/image-generation-provider.ts`
- `extensions/openai/index.test.ts`
- `extensions/openai/index.ts`
- `extensions/openai/media-understanding-provider.test.ts`
- `extensions/openai/media-understanding-provider.ts`
- `extensions/openai/openai-codex-auth-identity.ts`
- `extensions/openai/openai-codex-catalog.ts`
- `extensions/openai/openai-codex-provider.test.ts`
- `extensions/openai/openai-codex-provider.ts`
- `extensions/openai/openai-provider.test.ts`
- `extensions/openai/openai-provider.ts`
- `extensions/openai/openclaw.plugin.json`
- `extensions/openai/package.json`
- `extensions/openai/plugin-registration.contract.test.ts`
- `extensions/openai/provider-auth.contract.test.ts`
- `extensions/openai/provider-catalog.contract.test.ts`
- `extensions/openai/provider-runtime.contract.test.ts`
- `extensions/openai/shared.ts`
- `extensions/openai/speech-provider.ts`
- `extensions/openai/test-api.ts`
- `extensions/openai/tts.test.ts`
- `extensions/openai/tts.ts`

### 删除

- `extensions/openai/provider.contract.test.ts`

### 重命名

- `extensions/openai/embedding-batch.ts`
- `extensions/openai/embedding-provider.ts`
- `extensions/openai/test-support/provider-catalog.contract-test-support.ts`

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

- 首选验证：Manifest/auth/provider registration changed | `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts` | Add `pnpm test:contracts:plugins` if loader/catalog/auth-choice behavior crosses package boundaries.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/provider-plugins/openai` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/openai/change-to-test.md` 的验证建议。
