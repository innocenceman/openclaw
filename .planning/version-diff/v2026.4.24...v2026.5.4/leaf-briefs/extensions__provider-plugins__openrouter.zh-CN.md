# extensions/provider-plugins/openrouter

## 1. 功能结论

**新增**：视频生成 provider 注册 OpenRouter `video_generate` 能力、视频生成契约测试 覆盖默认模型、能力声明、提交/轮询/下载流程、跨源 URL 不转发 Authorization、OpenRouter 模型 ID 规范化 helper 统一处理 bare model ref 与 `openrouter/` 前缀、DeepSeek V4 thinking policy / xhigh；**修改**：manifest/control-plane metadata 补全、Hunter Alpha 加 reasoning 禁用兼容 旧配置中的 `openrouter/hunter-alpha` / `openrouter/hunter-alpha:*` 会被识别为不支持 proxy reasoning、DeepSeek V4 replay payload 修正 OpenRouter verified route 上会补 `reasoning_content`、Anthropic reasoning prefill OpenRouter verified route 上；**删除**：旧 runtime register 文件 删除 `register.runtime.ts` 这种 runtime helper re-export 面、Hunter/Healer Alpha bundled catalog；**迁移/重构**：图像生成复用 SDK helper 本地 data URL/base64/文件扩展解析逻辑迁移到 `openclaw/plugin-sdk/image-generation`、TTS 迁移到 shared OpenAI-compatible provider、API barrel 扩展 `api.ts` 新增导出 OpenRouter proxy reasoning 兼容判断、插件 SDK test runtime/contracts；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 5、修改 12、删除 1

## 3. 功能级详细差异

### API barrel 扩展 api.ts 新增导出 OpenRouter proxy reasoning 兼容判断

API barrel 扩展：`api.ts` 新增导出 OpenRouter proxy reasoning 兼容判断，供轻量 API/外部复用而不 deep-import runtime。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### DeepSeek V4 replay payload 修正 OpenRouter verified route 上会补 reasoning_c…

DeepSeek V4 replay payload 修正：OpenRouter verified route 上会补 `reasoning_content`，并把 thinking level 映射为 OpenRouter 支持的 `reasoning_effort`；旧 `max` 映射到 `xhigh`。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### Provider routing wrapper 顺序明确化 extraParams.provider 先进入 compat.openRout…

Provider routing wrapper 顺序明确化：`extraParams.provider` 先进入 `compat.openRouterRouting`，再叠加 shared thinking/deepseek/anthropic wrappers。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### TTS 迁移到 shared OpenAI-compatible provider 删除 provider-local 配置/请求/响应拼装代码

TTS 迁移到 shared OpenAI-compatible provider：删除 provider-local 配置/请求/响应拼装代码，改用 `createOpenAiCompatibleSpeechProvider` 统一处理 OpenRouter `/audio/speech`。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### manifest/control-plane metadata 补全 在 openclaw.plugin.json 增加 activation…

manifest/control-plane metadata 补全：在 `openclaw.plugin.json` 增加 activation、modelId normalization、pricing、endpoint classification、provider request family 和 video contract。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 修复 Anthropic reasoning prefill OpenRouter verified route 上

修复 Anthropic reasoning prefill：OpenRouter verified route 上，Anthropic reasoning enabled 时会删除末尾 assistant prefill，满足 reasoning 对话必须以 user turn 结束的要求。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 修复 openrouter expose DeepSeek V4 xhigh thinking

修复 openrouter：expose DeepSeek V4 xhigh thinking

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 修复 openrouter keep DeepSeek V4 reasoning effort valid

修复 openrouter：keep DeepSeek V4 reasoning effort valid

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 修复 openrouter preserve deepseek v4 reasoning replay

修复 openrouter：preserve deepseek v4 reasoning replay

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 修复 openrouter strip Anthropic reasoning prefill

修复 openrouter：strip Anthropic reasoning prefill

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 图像生成复用 SDK helper 本地 data URL/base64/文件扩展解析逻辑迁移到 openclaw/plugin-sdk/im…

图像生成复用 SDK helper：本地 data URL/base64/文件扩展解析逻辑迁移到 `openclaw/plugin-sdk/image-generation`，保留 OpenRouter chat completions 图像请求语义。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 插件包版本同步到目标版本 @openclaw/openrouter-provider 从旧版本号更新到目标 release 版本

插件包版本同步到目标版本：`@openclaw/openrouter-provider` 从旧版本号更新到目标 release 版本。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 新增 DeepSeek V4 thinking policy / xhigh 识别 deepseek-v4-flash 与 deepseek-…

新增 DeepSeek V4 thinking policy / xhigh：识别 `deepseek-v4-flash` 与 `deepseek-v4-pro`，暴露 off/minimal/low/medium/high/xhigh levels，默认 high。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 新增 OpenRouter 模型 ID 规范化 helper 统一处理 bare model ref 与 openrouter/ 前缀

新增 OpenRouter 模型 ID 规范化 helper：统一处理 bare model ref 与 `openrouter/` 前缀，为 provider policy 和 stream wrapper 复用。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 新增 openrouter add video generation provider

新增 openrouter：add video generation provider

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 新增视频生成 provider 注册 OpenRouter video_generate 能力

新增视频生成 provider：注册 OpenRouter `video_generate` 能力，支持 text-to-video / image-to-video、异步 `/videos` 提交、轮询完成并下载结果。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 新增视频生成契约测试 覆盖默认模型、能力声明、提交/轮询/下载流程、跨源 URL 不转发 Authorization

新增视频生成契约测试：覆盖默认模型、能力声明、提交/轮询/下载流程、跨源 URL 不转发 Authorization，以及不支持 video-to-video 的拒绝路径。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 移除 Hunter/Healer Alpha bundled catalog 内置 OpenRouter 模型列表不再主动展示 openrou…

移除 Hunter/Healer Alpha bundled catalog：内置 OpenRouter 模型列表不再主动展示 `openrouter/hunter-alpha` 与 `openrouter/healer-alpha`。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…

移除旧 runtime register 文件：删除 `register.runtime.ts` 这种 runtime helper re-export 面，避免依赖旧的深层运行时入口。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 给 Hunter Alpha 加 reasoning 禁用兼容 旧配置中的 openrouter/hunter-alpha / openrou…

给 Hunter Alpha 加 reasoning 禁用兼容：旧配置中的 `openrouter/hunter-alpha` / `openrouter/hunter-alpha:*` 会被识别为不支持 proxy reasoning，并把 resolved model 的 `reasoning` 归一为 `false`。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 remove stale openrouter runtime barrel

迁移/重构 remove stale openrouter runtime barrel

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 share media provider asset helpers

迁移/重构 share media provider asset helpers

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 openrouter public API barrel、plugin manifest/control-plane metadata、provider policy api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 openrouter plugin entrypoint、onboard regression/contract coverage、openrouter regression/contract coverage、provider runtime regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `register`（`extensions/openrouter/register.runtime.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openrouter`
- Changed path count: `18`
- Status counts: `新增 5、修改 12、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `18` files, `+1521` / `-403`

### 归纳依据

- 主要落点：tests/contracts、model/thinking policy、plugin entry/API surface、manifest/package metadata、video generation、image generation、provider catalog、implementation。
- 新增或暴露的关键符号包括：`VideoGenerationProvider`, `normalizeOpenRouterModelId`, `isOpenRouterDeepSeekV4ModelId`, `OPENROUTER_PROXY_REASONING_UNSUPPORTED_MODEL_IDS`, `isOpenRouterProxyReasoningUnsupportedModel`, `resolveThinkingProfile`, `readString`, `isOpenRouterAnthropicModelId`, `isVerifiedOpenRouterRoute`, `shouldPatchAnthropicOpenRouterPayload`。
- 建议优先验证：优先运行 `pnpm test -- extensions/openrouter/index.test.ts`；`pnpm test:contracts:plugins`；`pnpm build`。
- 相关 commit 主题：fix(openrouter): keep DeepSeek V4 reasoning effort valid；fix(openrouter): expose DeepSeek V4 xhigh thinking；fix(openrouter): preserve deepseek v4 reasoning replay；fix(openrouter): strip Anthropic reasoning prefill；refactor: remove stale openrouter runtime barrel；feat(openrouter): add video generation provider；perf: mark provider plugins startup lazy；refactor: expose SDK test helper subpaths

### Dimension evidence

- `public-contract-API-barrel-扩展-api-ts-新增导出-OpenRouter-proxy-reas` / API barrel 扩展 api.ts 新增导出 OpenRouter proxy reasoning 兼容判断:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-DeepSeek-V4-replay-payload-修正-OpenRouter-verifi` / DeepSeek V4 replay payload 修正 OpenRouter verified route 上会补 reasoning_c…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-Provider-routing-wrapper-顺序明确化-extraParams-prov` / Provider routing wrapper 顺序明确化 extraParams.provider 先进入 compat.openRout…:
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-policy-api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/speech-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/video-generation-provider.test.ts` — semantic cue
- `user-visible-TTS-迁移到-shared-OpenAI-compatible-provider-删除-pr` / TTS 迁移到 shared OpenAI-compatible provider 删除 provider-local 配置/请求/响应拼装代码:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract-manifest-control-plane-metadata-补全-在-openclaw-p` / manifest/control-plane metadata 补全 在 openclaw.plugin.json 增加 activation…:
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-policy-api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/speech-provider.ts` — semantic cue
- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-policy-api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/speech-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/video-generation-provider.test.ts` — semantic cue
- `runtime-behavior-修复-Anthropic-reasoning-prefill-OpenRouter-verif` / 修复 Anthropic reasoning prefill OpenRouter verified route 上:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-修复-openrouter-expose-DeepSeek-V4-xhigh-thinking` / 修复 openrouter expose DeepSeek V4 xhigh thinking:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-修复-openrouter-keep-DeepSeek-V4-reasoning-effort` / 修复 openrouter keep DeepSeek V4 reasoning effort valid:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-修复-openrouter-preserve-deepseek-v4-reasoning-re` / 修复 openrouter preserve deepseek v4 reasoning replay:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-修复-openrouter-strip-Anthropic-reasoning-prefill` / 修复 openrouter strip Anthropic reasoning prefill:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `user-visible-图像生成复用-SDK-helper-本地-data-URL-base64-文件扩展解析逻辑迁移` / 图像生成复用 SDK helper 本地 data URL/base64/文件扩展解析逻辑迁移到 openclaw/plugin-sdk/im…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `integration-build-release-插件包版本同步到目标版本-openclaw-openrouter-provider-从旧版本` / 插件包版本同步到目标版本 @openclaw/openrouter-provider 从旧版本号更新到目标 release 版本:
  - source: `path` [A] `extensions/openrouter/models.ts`
  - source: `path` [A] `extensions/openrouter/provider-policy-api.ts`
  - source: `path` [A] `extensions/openrouter/thinking-policy.ts`
  - source: `path` [M] `extensions/openrouter/api.ts`
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts`
  - source: `path` [M] `extensions/openrouter/index.test.ts`
- `runtime-behavior-新增-DeepSeek-V4-thinking-policy-xhigh-识别-deeps` / 新增 DeepSeek V4 thinking policy / xhigh 识别 deepseek-v4-flash 与 deepseek-…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract-新增-OpenRouter-模型-ID-规范化-helper-统一处理-bare-model` / 新增 OpenRouter 模型 ID 规范化 helper 统一处理 bare model ref 与 openrouter/ 前缀:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `maintenance-新增-openrouter-add-video-generation-provider` / 新增 openrouter add video generation provider:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `user-visible-新增视频生成-provider-注册-OpenRouter-video-generate-能力` / 新增视频生成 provider 注册 OpenRouter video_generate 能力:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `user-visible-新增视频生成契约测试-覆盖默认模型-能力声明-提交-轮询-下载流程-跨源-URL-不转发-Au` / 新增视频生成契约测试 覆盖默认模型、能力声明、提交/轮询/下载流程、跨源 URL 不转发 Authorization:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `runtime-behavior-移除-Hunter-Healer-Alpha-bundled-catalog-内置-OpenR` / 移除 Hunter/Healer Alpha bundled catalog 内置 OpenRouter 模型列表不再主动展示 openrou…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract-移除旧-runtime-register-文件-删除-register-runtime-ts` / 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…:
  - source: `path` [M] `extensions/openrouter/provider-runtime.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/register.runtime.ts` — semantic cue
- `runtime-behavior-给-Hunter-Alpha-加-reasoning-禁用兼容-旧配置中的-openroute` / 给 Hunter Alpha 加 reasoning 禁用兼容 旧配置中的 openrouter/hunter-alpha / openrou…:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract-迁移-重构-remove-stale-openrouter-runtime-barrel` / 迁移/重构 remove stale openrouter runtime barrel:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `migration-迁移-重构-share-media-provider-asset-helpers` / 迁移/重构 share media provider asset helpers:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/openrouter/api.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/index.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/models.ts` — semantic cue
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/openrouter/api.ts` — contract evidence
  - source: `path` [M] `extensions/openrouter/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/openrouter/provider-policy-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/openrouter/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/openrouter/index.test.ts` — test evidence
  - source: `path` [M] `extensions/openrouter/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/openrouter/openrouter.live.test.ts` — test evidence
  - source: `path` [M] `extensions/openrouter/provider-runtime.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/openrouter/video-generation-provider.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/openrouter/register.runtime.ts`

### 路径证据

- 新增 `extensions/openrouter/models.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/openrouter/provider-policy-api.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/openrouter/thinking-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `extensions/openrouter/video-generation-provider.test.ts`：新增 OpenRouter 视频生成相关实现/测试，扩展 leaf 的媒体能力边界。
- 新增 `extensions/openrouter/video-generation-provider.ts`：新增 OpenRouter 视频生成相关实现/测试，扩展 leaf 的媒体能力边界。
- 修改 `extensions/openrouter/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/openrouter/image-generation-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/openrouter/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openrouter/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/openrouter/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openrouter/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型引用规范化、模型计价/成本归属、provider endpoint 识别、provider request family、视频生成 provider contract。
- 修改 `extensions/openrouter/openrouter.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openrouter/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/openrouter/provider-catalog.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `extensions/openrouter/provider-runtime.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openrouter/speech-provider.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 修改 `extensions/openrouter/stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 删除 `extensions/openrouter/register.runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/openrouter` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/openrouter/change-to-test.md` 的验证建议。
