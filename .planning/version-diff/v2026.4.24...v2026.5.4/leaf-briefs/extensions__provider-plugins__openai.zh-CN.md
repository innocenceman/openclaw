# extensions/provider-plugins/openai

## 1. 功能结论

**新增**：Openai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约；**修改**：openai route Codex audio to transcription model、openai-codex match codex replay identity、openai-codex avoid stale Responses replay state、openai default direct responses to sse；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 48

## 3. 功能级详细差异

### 修复 log google meet realtime models

修复 log google meet realtime models

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai default direct responses to sse

修复 openai：default direct responses to sse

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai fail realtime voice pre-ready closes

修复 openai：fail realtime voice pre-ready closes

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai flatten realtime transcription session update

修复 openai：flatten realtime transcription session update

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai omit realtime transcription session type

修复 openai：omit realtime transcription session type

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai route Codex audio to transcription model

修复 openai：route Codex audio to transcription model

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai-codex avoid stale Responses replay state

修复 openai-codex：avoid stale Responses replay state

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 openai-codex match codex replay identity

修复 openai-codex：match codex replay identity

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 realtime label pre-ready transcription closes

修复 realtime：label pre-ready transcription closes

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 修复 stabilize Google Meet realtime talkback

修复 stabilize Google Meet realtime talkback

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 新增 Openai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Openai 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、provider policy api、setup api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 base url regression/contract coverage、embedding provider regression/contract coverage、image generation provider regression/contract coverage、openai plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/openai`
- Changed path count: `51`
- Status counts: `新增 3、修改 48`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `51` files, `+3665` / `-438`

### 归纳依据

- 主要落点：implementation、tests/contracts、speech/TTS、auth/pairing/security behavior、model/thinking policy、image generation、provider catalog、manifest/package metadata。
- 新增或暴露的关键符号包括：`OPENAI_CODEX_RESPONSES_BASE_URL`, `canonicalizeCodexResponsesBaseUrl`, `createOptions`, `normalizeOpenAiModel`, `DEFAULT_OPENAI_CODEX_IMAGE_BASE_URL`, `DEFAULT_OPENAI_CODEX_IMAGE_RESPONSES_MODEL`, `OPENAI_TRANSPARENT_BACKGROUND_IMAGE_MODEL`, `DEFAULT_AZURE_OPENAI_IMAGE_TIMEOUT_MS`, `OPENAI_LEGACY_IMAGE_SIZES`, `OPENAI_BACKGROUNDS`。
- 建议优先验证：优先运行 `pnpm test -- extensions/openai/index.test.ts extensions/openai/openai-provider.test.ts extensions/openai/openai-codex-auth-identity.test.ts`；`pnpm test:contracts:plugins`；`pnpm test -- extensions/openai/index.test.ts`。
- 相关 commit 主题：fix(openai): route Codex audio to transcription model；fix(openai-codex): match codex replay identity；fix(openai-codex): avoid stale Responses replay state；fix(openai): default direct responses to sse；fix: log google meet realtime models；fix: stabilize Google Meet realtime talkback；fix(openai): flatten realtime transcription session update；fix(realtime): label pre-ready transcription closes

### Dimension evidence

- `maintenance-修复-log-google-meet-realtime-models` / 修复 log google meet realtime models:
  - source: `path` [M] `extensions/openai/openai-codex-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openai/test-support/provider-catalog.contract-test-support.ts` — semantic cue
- `maintenance-修复-openai-default-direct-responses-to-sse` / 修复 openai default direct responses to sse:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `maintenance-修复-openai-fail-realtime-voice-pre-ready-closes` / 修复 openai fail realtime voice pre-ready closes:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `maintenance-修复-openai-flatten-realtime-transcription-sessio` / 修复 openai flatten realtime transcription session update:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `maintenance-修复-openai-omit-realtime-transcription-session-t` / 修复 openai omit realtime transcription session type:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `maintenance-修复-openai-route-Codex-audio-to-transcription-mo` / 修复 openai route Codex audio to transcription model:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `runtime-behavior-修复-openai-codex-avoid-stale-Responses-replay-st` / 修复 openai-codex avoid stale Responses replay state:
  - source: `path` [M] `extensions/openai/openai-codex-auth-identity.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-auth-identity.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-device-code.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-device-code.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-provider.runtime.ts` — semantic cue
- `runtime-behavior-修复-openai-codex-match-codex-replay-identity` / 修复 openai-codex match codex replay identity:
  - source: `path` [M] `extensions/openai/openai-codex-auth-identity.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-auth-identity.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-catalog.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-device-code.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-device-code.ts` — semantic cue
  - source: `path` [M] `extensions/openai/openai-codex-provider.runtime.ts` — semantic cue
- `maintenance-修复-realtime-label-pre-ready-transcription-closes` / 修复 realtime label pre-ready transcription closes:
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.ts` — semantic cue
- `maintenance-修复-stabilize-Google-Meet-realtime-talkback` / 修复 stabilize Google Meet realtime talkback:
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-transcription-provider.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/realtime-voice-provider.ts` — semantic cue
- `user-visible-新增-Openai-视频生成测试-覆盖-video-generation-provider-的` / 新增 Openai 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/base-url.ts` — semantic cue
  - source: `path` [M] `extensions/openai/cli-backend.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-batch.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/openai/embedding-provider.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/openai/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/openai/provider-policy-api.ts` — contract evidence
  - source: `path` [M] `extensions/openai/setup-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/openai/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/openai/base-url.test.ts` — test evidence
  - source: `path` [M] `extensions/openai/embedding-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/openai/image-generation-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/openai/index.test.ts` — test evidence
  - source: `path` [M] `extensions/openai/media-understanding-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/openai/memory-embedding-adapter.test.ts` — test evidence

### 路径证据

- 新增 `extensions/openai/embedding-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/openai/memory-embedding-adapter.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/openai/thinking-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `extensions/openai/base-url.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openai/base-url.ts`：调整 base url（implementation）。
- 修改 `extensions/openai/cli-backend.ts`：调整 cli backend（implementation）。
- 修改 `extensions/openai/embedding-batch.ts`：调整 embedding batch（implementation）。
- 修改 `extensions/openai/embedding-provider.ts`：调整 embedding provider（implementation）。
- 修改 `extensions/openai/image-generation-provider.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/openai/image-generation-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/openai/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openai/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/openai/media-understanding-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/openai/media-understanding-provider.ts`：调整 media understanding provider（implementation）。
- 修改 `extensions/openai/memory-embedding-adapter.ts`：调整 memory embedding adapter（implementation）。
- 其余 36 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/openai` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/openai/change-to-test.md` 的验证建议。
