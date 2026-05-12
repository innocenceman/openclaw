# extensions/provider-plugins/xai

## 1. 功能结论

**新增**：Xai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约、xai add Grok 4.3 default model；**修改**：tts honor telephony voice overrides、realtime label pre-ready transcription closes、xai allow slower image edits、gate plugin tools from manifest availability；**迁移/重构**：插件 SDK test runtime/contracts、trim extension helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 33

## 3. 功能级详细差异

### 修复 gate plugin tools from manifest availability

修复 gate plugin tools from manifest availability

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 realtime label pre-ready transcription closes

修复 realtime：label pre-ready transcription closes

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 tts honor telephony voice overrides

修复 tts：honor telephony voice overrides

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search improve missing key guidance

修复 web-search：improve missing key guidance

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search support provider base url overrides

修复 web-search：support provider base url overrides

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 xai allow slower image edits

修复 xai：allow slower image edits

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 xai harden Grok web search timeouts

修复 xai：harden Grok web search timeouts

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 xai satisfy spread fallback lint

修复 xai：satisfy spread fallback lint

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 Xai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Xai 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 xai add Grok 4.3 default model

新增 xai：add Grok 4.3 default model

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim extension helper exports

迁移/重构 trim extension helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、x search config、tsconfig，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 code execution regression/contract coverage、image generation provider regression/contract coverage、xai plugin entrypoint、onboard regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/xai`
- Changed path count: `34`
- Status counts: `新增 1、修改 33`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `34` files, `+1111` / `-499`

### 归纳依据

- 主要落点：implementation、tests/contracts、image generation、manifest/package metadata、speech/TTS、configuration/schema、video generation、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`DEFAULT_TIMEOUT_MS`, `buildBody`, `XAI_DEFAULT_CONTEXT_WINDOW`, `XAI_LARGE_CONTEXT_WINDOW`, `XAI_GROK_4_CONTEXT_WINDOW`, `XAI_CODE_CONTEXT_WINDOW`, `XAI_LEGACY_CONTEXT_WINDOW`, `XAI_LEGACY_MAX_TOKENS`, `XAI_DEFAULT_MODEL_ID`, `XAI_GROK_43_COST`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/xai`；`pnpm test:extensions`。
- 相关 commit 主题：fix(tts): honor telephony voice overrides；fix(realtime): label pre-ready transcription closes；fix(xai): allow slower image edits；refactor: trim extension helper exports；fix: gate plugin tools from manifest availability；fix(xai): satisfy spread fallback lint；fix(web-search): support provider base url overrides；fix(web-search): improve missing key guidance

### Dimension evidence

- `public-contract-修复-gate-plugin-tools-from-manifest-availability` / 修复 gate plugin tools from manifest availability:
  - source: `path` [M] `extensions/xai/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/xai/plugin-registration.contract.test.ts` — semantic cue
- `maintenance-修复-realtime-label-pre-ready-transcription-closes` / 修复 realtime label pre-ready transcription closes:
  - source: `path` [M] `extensions/xai/realtime-transcription-provider.ts` — semantic cue
- `user-visible-修复-tts-honor-telephony-voice-overrides` / 修复 tts honor telephony voice overrides:
  - source: `path` [A] `extensions/xai/provider-discovery.ts`
  - source: `path` [M] `extensions/xai/code-execution.test.ts`
  - source: `path` [M] `extensions/xai/code-execution.ts`
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts`
- `user-visible-修复-web-search-improve-missing-key-guidance` / 修复 web-search improve missing key guidance:
  - source: `path` [M] `extensions/xai/src/web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/xai/src/web-search-response.types.ts` — semantic cue
  - source: `path` [M] `extensions/xai/src/web-search-shared.ts` — semantic cue
  - source: `path` [M] `extensions/xai/web-search.test.ts` — semantic cue
- `maintenance-修复-web-search-support-provider-base-url-overrid` / 修复 web-search support provider base url overrides:
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/provider-discovery.ts` — semantic cue
  - source: `path` [M] `extensions/xai/realtime-transcription-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/speech-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/speech-provider.ts` — semantic cue
- `maintenance-修复-xai-allow-slower-image-edits` / 修复 xai allow slower image edits:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `maintenance-修复-xai-harden-Grok-web-search-timeouts` / 修复 xai harden Grok web search timeouts:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `maintenance-修复-xai-satisfy-spread-fallback-lint` / 修复 xai satisfy spread fallback lint:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `user-visible-新增-Xai-视频生成测试-覆盖-video-generation-provider-的默认模` / 新增 Xai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `maintenance-新增-xai-add-Grok-4-3-default-model` / 新增 xai add Grok 4.3 default model:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/speech-provider.test.ts` — semantic cue
- `migration-迁移-重构-trim-extension-helper-exports` / 迁移/重构 trim extension helper exports:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/code-execution.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/xai/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/xai/model-definitions.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/xai/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/xai/src/x-search-config.ts` — contract evidence
  - source: `path` [M] `extensions/xai/tsconfig.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/xai/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/xai/code-execution.test.ts` — test evidence
  - source: `path` [M] `extensions/xai/image-generation-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/xai/index.test.ts` — test evidence
  - source: `path` [M] `extensions/xai/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/xai/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/xai/speech-provider.test.ts` — test evidence

### 路径证据

- 新增 `extensions/xai/provider-discovery.ts`：调整 provider discovery（implementation）。
- 修改 `extensions/xai/code-execution.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/xai/code-execution.ts`：调整 code execution（implementation）。
- 修改 `extensions/xai/image-generation-provider.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/xai/image-generation-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/xai/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/xai/model-definitions.ts`：调整 model definitions（implementation）。
- 修改 `extensions/xai/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/xai/onboard.ts`：调整 onboard（implementation）。
- 修改 `extensions/xai/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、模型引用规范化、provider endpoint 识别、provider request family、视频生成 provider contract、图像生成 provider contract。
- 修改 `extensions/xai/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/xai/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/xai/realtime-transcription-provider.ts`：调整 realtime transcription provider（implementation）。
- 其余 21 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/xai` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/xai/change-to-test.md` 的验证建议。
