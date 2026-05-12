# extensions/provider-plugins/google

## 1. 功能结论

**新增**：Google 视频生成 provider 增加 video generation runtime/contract 路径、Google 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约、Codex happy path prompt snapshots；**修改**：manifest/control-plane metadata 补全、tts honor telephony voice overrides、log google meet realtime models、voice-call trim realtime audio copies；**迁移/重构**：插件 SDK test runtime/contracts、trim bundled channel contract loader；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 35

## 3. 功能级详细差异

### manifest/control-plane metadata 补全 在 openclaw.plugin.json 增加 activation…

manifest/control-plane metadata 补全：在 `openclaw.plugin.json` 增加 activation、modelId normalization、pricing、endpoint classification、provider request family 和 video contract。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 优化 voice-call trim realtime audio copies

优化 voice-call：trim realtime audio copies

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 google handle thoughtSignature-only parts to prevent Gemini stream h…

修复 google：handle thoughtSignature-only parts to prevent Gemini stream hang

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 google narrow Gemini 2.5 minimal budget floor

修复 google：narrow Gemini 2.5 minimal budget floor

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 keep Gemini thinking streams active

修复 keep Gemini thinking streams active

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 log google meet realtime models

修复 log google meet realtime models

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 tts honor telephony voice overrides

修复 tts：honor telephony voice overrides

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 voice-call pace realtime Twilio audio

修复 voice-call：pace realtime Twilio audio

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 web-search honor provider abort signals

修复 web-search：honor provider abort signals

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 Codex happy path prompt snapshots

新增 Codex happy path prompt snapshots

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 Google 视频生成 provider 增加 video generation runtime/contract 路径

新增 Google 视频生成 provider：增加 video generation runtime/contract 路径，扩展该 provider 的媒体生成能力。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 Google 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Google 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim bundled channel contract loader

迁移/重构 trim bundled channel contract loader

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、provider contract api、setup api，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 google shared regression/contract coverage、google regression/contract coverage、google plugin entrypoint、media understanding provider.video regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/google`
- Changed path count: `37`
- Status counts: `新增 2、修改 35`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `37` files, `+3981` / `-307`

### 归纳依据

- 主要落点：implementation、tests/contracts、video generation、auth/pairing/security behavior、manifest/package metadata、speech/TTS、streaming/reasoning、plugin entry/API surface。
- 新增或暴露的关键符号包括：`isTransientGeminiSearchError`, `resolveGoogleRealtimeProviderConfig`, `resolveGoogleRealtimeEnvApiKey`, `createLazyGoogleRealtimeVoiceBridge`, `createLazyGoogleRealtimeVoiceProvider`, `RealtimeVoiceProvider`, `CODE_ASSIST_ENDPOINT_DAILY`, `CODE_ASSIST_ENDPOINT_AUTOPUSH`, `createGoogleVertexProvider`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(tts): honor telephony voice overrides；fix: log google meet realtime models；perf(voice-call): trim realtime audio copies；fix(voice-call): pace realtime Twilio audio；Add Codex happy path prompt snapshots；fix: keep Gemini thinking streams active；fix(google): handle thoughtSignature-only parts to prevent Gemini stream hang；fix(google): narrow Gemini 2.5 minimal budget floor

### Dimension evidence

- `public-contract-manifest-control-plane-metadata-补全-在-openclaw-p` / manifest/control-plane metadata 补全 在 openclaw.plugin.json 增加 activation…:
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/media-understanding-provider.video.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/music-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/music-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/openclaw.plugin.json` — semantic cue
- `maintenance-优化-voice-call-trim-realtime-audio-copies` / 优化 voice-call trim realtime audio copies:
  - source: `path` [M] `extensions/google/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/realtime-voice-provider.ts` — semantic cue
- `runtime-behavior-修复-google-handle-thoughtSignature-only-parts-to` / 修复 google handle thoughtSignature-only parts to prevent Gemini stream h…:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `maintenance-修复-google-narrow-Gemini-2-5-minimal-budget-floor` / 修复 google narrow Gemini 2.5 minimal budget floor:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `runtime-behavior-修复-keep-Gemini-thinking-streams-active` / 修复 keep Gemini thinking streams active:
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/src/gemini-web-search-provider.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/src/gemini-web-search-provider.shared.ts` — semantic cue
  - source: `path` [M] `extensions/google/src/gemini-web-search-provider.ts` — semantic cue
- `maintenance-修复-log-google-meet-realtime-models` / 修复 log google meet realtime models:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `user-visible-修复-tts-honor-telephony-voice-overrides` / 修复 tts honor telephony voice overrides:
  - source: `path` [M] `extensions/google/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/realtime-voice-provider.ts` — semantic cue
- `maintenance-修复-voice-call-pace-realtime-Twilio-audio` / 修复 voice-call pace realtime Twilio audio:
  - source: `path` [M] `extensions/google/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/realtime-voice-provider.ts` — semantic cue
- `maintenance-修复-web-search-honor-provider-abort-signals` / 修复 web-search honor provider abort signals:
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/media-understanding-provider.video.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/music-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/music-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/provider-contract-api.ts` — semantic cue
- `maintenance-新增-Codex-happy-path-prompt-snapshots` / 新增 Codex happy path prompt snapshots:
  - source: `path` [A] `extensions/google/setup-api.test.ts`
  - source: `path` [A] `extensions/google/vertex-adc.ts`
  - source: `path` [M] `extensions/google/cli-backend.ts`
  - source: `path` [M] `extensions/google/embedding-batch.ts`
  - source: `path` [M] `extensions/google/embedding-provider.ts`
- `user-visible-新增-Google-视频生成-provider-增加-video-generation-run` / 新增 Google 视频生成 provider 增加 video generation runtime/contract 路径:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `user-visible-新增-Google-视频生成测试-覆盖-video-generation-provider-的` / 新增 Google 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/google.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/media-understanding-provider.video.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/model-id.test.ts` — semantic cue
  - source: `path` [M] `extensions/google/music-generation-provider.test.ts` — semantic cue
- `public-contract-迁移-重构-trim-bundled-channel-contract-loader` / 迁移/重构 trim bundled channel contract loader:
  - source: `path` [M] `extensions/google/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/google/embedding-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/gemini-cli-provider.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-genai-runtime.ts` — semantic cue
  - source: `path` [M] `extensions/google/google-shared.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/google/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/google/provider-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/google/setup-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/google/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/google/google-shared.test.ts` — test evidence
  - source: `path` [M] `extensions/google/google.live.test.ts` — test evidence
  - source: `path` [M] `extensions/google/index.test.ts` — test evidence
  - source: `path` [M] `extensions/google/media-understanding-provider.video.test.ts` — test evidence
  - source: `path` [M] `extensions/google/model-id.test.ts` — test evidence
  - source: `path` [M] `extensions/google/music-generation-provider.test.ts` — test evidence

### 路径证据

- 新增 `extensions/google/setup-api.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/google/vertex-adc.ts`：调整 vertex adc（implementation）。
- 修改 `extensions/google/cli-backend.ts`：调整 cli backend（implementation）。
- 修改 `extensions/google/embedding-batch.ts`：调整 embedding batch（implementation）。
- 修改 `extensions/google/embedding-provider.ts`：调整 embedding provider（implementation）。
- 修改 `extensions/google/gemini-cli-provider.ts`：调整 gemini cli provider（implementation）。
- 修改 `extensions/google/google-genai-runtime.ts`：调整 google genai runtime（implementation）。
- 修改 `extensions/google/google-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/google/google.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/google/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/google/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/google/media-understanding-provider.video.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/google/model-id.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/google/model-id.ts`：调整 model id（implementation）。
- 其余 23 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/google` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/google/change-to-test.md` 的验证建议。
