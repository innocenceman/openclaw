# src/capability-modules/tts

## 1. 功能结论

**新增**：tts resolve channel account config generically；**修改**：require explicit TTS intent、honor telephony tts directives、stabilize tts fast-lane guard、test route speech provider registry through unit-fast；**迁移/重构**：TTS 迁移到 shared OpenAI-compatible provider、share media provider asset helpers；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 12

## 3. 功能级详细差异

### TTS 迁移到 shared OpenAI-compatible provider Tts 删除 provider-local 配置/请求/响…

TTS 迁移到 shared OpenAI-compatible provider：Tts 删除 provider-local 配置/请求/响应拼装代码，改用 `createOpenAiCompatibleSpeechProvider`。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 优化 test route speech provider registry through unit-fast

优化 test：route speech provider registry through unit-fast

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 honor telephony tts directives

修复 honor telephony tts directives

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 require explicit TTS intent

修复 require explicit TTS intent

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 新增 tts resolve channel account config generically

新增 tts：resolve channel account config generically

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 isolate speech provider registry mocks

测试覆盖 isolate speech provider registry mocks

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 reduce repeated test setup overhead

测试覆盖 reduce repeated test setup overhead

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 speed up focused unit tests

测试覆盖 speed up focused unit tests

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 speed up provider and security tests

测试覆盖 speed up provider and security tests

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 stabilize tts fast-lane guard

测试覆盖 stabilize tts fast-lane guard

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 share media provider asset helpers

迁移/重构 share media provider asset helpers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 status config regression/contract coverage、status config、tts config regression/contract coverage、tts config，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 directives regression/contract coverage、openai compatible speech provider regression/contract coverage、provider registry regression/contract coverage、status config regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/tts`
- Changed path count: `15`
- Status counts: `新增 3、修改 12`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `15` files, `+1723` / `-281`

### 归纳依据

- 主要落点：speech/TTS、configuration/schema。
- 新增或暴露的关键符号包括：`resolveDirectiveProvider`, `normalizeTtsTagBody`, `classifyTtsTag`, `createTtsDirectiveTextStreamCleaner`, `normalizeResponseFormat`, `responseFormatToFileExtension`, `trimTrailingBaseUrl`, `normalizeBaseUrl`, `resolveProviderConfigRecord`, `readModelProviderConfig`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix: require explicit TTS intent；fix: honor telephony tts directives；test: stabilize tts fast-lane guard；refactor: share media provider asset helpers；perf(test): route speech provider registry through unit-fast；test: isolate speech provider registry mocks；test: reduce repeated test setup overhead；test: speed up focused unit tests

### Dimension evidence

- `user-visible-TTS-迁移到-shared-OpenAI-compatible-provider-Tts-删` / TTS 迁移到 shared OpenAI-compatible provider Tts 删除 provider-local 配置/请求/响…:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `user-visible-优化-test-route-speech-provider-registry-through` / 优化 test route speech provider registry through unit-fast:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.ts` — semantic cue
- `user-visible-修复-honor-telephony-tts-directives` / 修复 honor telephony tts directives:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `user-visible-修复-require-explicit-TTS-intent` / 修复 require explicit TTS intent:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `user-visible-新增-tts-resolve-channel-account-config-generical` / 新增 tts resolve channel account config generically:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `user-visible-测试覆盖-isolate-speech-provider-registry-mocks` / 测试覆盖 isolate speech provider registry mocks:
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-types.ts` — semantic cue
- `tests-docs-测试覆盖-reduce-repeated-test-setup-overhead` / 测试覆盖 reduce repeated test setup overhead:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
  - source: `path` [M] `src/tts/status-config.test.ts` — semantic cue
  - source: `path` [M] `src/tts/tts-config.test.ts` — semantic cue
  - source: `path` [M] `src/tts/tts.test.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-focused-unit-tests` / 测试覆盖 speed up focused unit tests:
  - source: `path` [A] `src/tts/openai-compatible-speech-provider.test.ts`
  - source: `path` [A] `src/tts/openai-compatible-speech-provider.ts`
  - source: `path` [A] `src/tts/provider-registry-core.ts`
  - source: `path` [M] `src/tts/directives.test.ts`
  - source: `path` [M] `src/tts/directives.ts`
  - source: `path` [M] `src/tts/provider-registry.test.ts`
- `tests-docs-测试覆盖-speed-up-provider-and-security-tests` / 测试覆盖 speed up provider and security tests:
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-types.ts` — semantic cue
- `user-visible-测试覆盖-stabilize-tts-fast-lane-guard` / 测试覆盖 stabilize tts fast-lane guard:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `migration-迁移-重构-share-media-provider-asset-helpers` / 迁移/重构 share media provider asset helpers:
  - source: `path` [M] `src/tts/directives.test.ts` — semantic cue
  - source: `path` [M] `src/tts/directives.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — semantic cue
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry-core.ts` — semantic cue
  - source: `path` [M] `src/tts/provider-registry.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/tts/status-config.test.ts` — contract evidence
  - source: `path` [M] `src/tts/status-config.ts` — contract evidence
  - source: `path` [M] `src/tts/tts-config.test.ts` — contract evidence
  - source: `path` [M] `src/tts/tts-config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/tts/directives.test.ts` — test evidence
  - source: `path` [M] `src/tts/openai-compatible-speech-provider.test.ts` — test evidence
  - source: `path` [M] `src/tts/provider-registry.test.ts` — test evidence
  - source: `path` [M] `src/tts/status-config.test.ts` — test evidence
  - source: `path` [M] `src/tts/tts-config.test.ts` — test evidence
  - source: `path` [M] `src/tts/tts.test.ts` — test evidence

### 路径证据

- 新增 `src/tts/openai-compatible-speech-provider.test.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `src/tts/openai-compatible-speech-provider.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `src/tts/provider-registry-core.ts`：调整 provider registry core（speech/TTS）。
- 修改 `src/tts/directives.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tts/directives.ts`：调整 directives（speech/TTS）。
- 修改 `src/tts/provider-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tts/provider-registry.ts`：调整 provider registry（speech/TTS）。
- 修改 `src/tts/provider-types.ts`：调整 provider types（speech/TTS）。
- 修改 `src/tts/status-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tts/status-config.ts`：调整 status config（configuration/schema）。
- 修改 `src/tts/tts-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tts/tts-config.ts`：调整 tts config（configuration/schema）。
- 修改 `src/tts/tts-types.ts`：调整 tts types（speech/TTS）。
- 修改 `src/tts/tts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tts/tts.ts`：调整 tts（speech/TTS）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/tts` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/tts/change-to-test.md` 的验证建议。
