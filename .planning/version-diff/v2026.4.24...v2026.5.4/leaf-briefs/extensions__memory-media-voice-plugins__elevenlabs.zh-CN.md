# extensions/memory-media-voice-plugins/elevenlabs

## 1. 功能结论

**修改**：log google meet realtime models、honor telephony tts directives、deps trim runtime dependency graph、mark capability plugins startup lazy；**迁移/重构**：插件 SDK test runtime/contracts、trim provider internal exports、expose SDK test helper subpaths、split plugin sdk test helpers；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 8

## 3. 功能级详细差异

### 优化 mark capability plugins startup lazy

优化 mark capability plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 honor telephony tts directives

修复 honor telephony tts directives

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 log google meet realtime models

修复 log google meet realtime models

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 deps trim runtime dependency graph

构建/发布调整 deps：trim runtime dependency graph

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose SDK test helper subpaths

迁移/重构 expose SDK test helper subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk narrow config runtime imports

迁移/重构 plugin-sdk：narrow config runtime imports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider internal exports

迁移/重构 trim provider internal exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 elevenlabs regression/contract coverage、realtime transcription provider regression/contract coverage、speech provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs`
- Changed path count: `8`
- Status counts: `修改 8`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+142` / `-42`

### 归纳依据

- 主要落点：implementation、tests/contracts、manifest/package metadata、speech/TTS。
- 新增或暴露的关键符号包括：`parseRequestBody`, `resolveVoiceSettingsOverride`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/elevenlabs`；`pnpm test:extensions`。
- 相关 commit 主题：fix: log google meet realtime models；fix: honor telephony tts directives；refactor: trim provider internal exports；build(deps): trim runtime dependency graph；perf: mark capability plugins startup lazy；refactor: expose SDK test helper subpaths；refactor: split plugin sdk test helpers；refactor: expose plugin test helpers via sdk

### Dimension evidence

- `maintenance-优化-mark-capability-plugins-startup-lazy` / 优化 mark capability plugins startup lazy:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts`
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts`
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json`
- `user-visible-修复-honor-telephony-tts-directives` / 修复 honor telephony tts directives:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts`
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts`
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json`
- `maintenance-修复-log-google-meet-realtime-models` / 修复 log google meet realtime models:
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `integration-build-release-构建-发布调整-deps-trim-runtime-dependency-graph` / 构建/发布调整 deps trim runtime dependency graph:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/speech-provider.test.ts` — semantic cue
- `migration-迁移-重构-expose-SDK-test-helper-subpaths` / 迁移/重构 expose SDK test helper subpaths:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `runtime-behavior-迁移-重构-plugin-sdk-narrow-config-runtime-imports` / 迁移/重构 plugin-sdk narrow config runtime imports:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `migration-迁移-重构-trim-provider-internal-exports` / 迁移/重构 trim provider internal exports:
  - source: `path` [M] `extensions/elevenlabs/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/package.json` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/elevenlabs/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/elevenlabs/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/elevenlabs/elevenlabs.live.test.ts` — test evidence
  - source: `path` [M] `extensions/elevenlabs/realtime-transcription-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/elevenlabs/speech-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/elevenlabs/doctor-contract.ts`：调整 doctor contract（implementation）。
- 修改 `extensions/elevenlabs/elevenlabs.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/elevenlabs/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、语音 provider contract。
- 修改 `extensions/elevenlabs/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/elevenlabs/realtime-transcription-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/elevenlabs/realtime-transcription-provider.ts`：调整 realtime transcription provider（implementation）。
- 修改 `extensions/elevenlabs/speech-provider.test.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 修改 `extensions/elevenlabs/speech-provider.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/elevenlabs` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs/change-to-test.md` 的验证建议。
