# src/capability-modules/media-understanding

## 1. 功能结论

**修改**：openai route Codex audio to transcription model、harden plugin and UI isolation checks、speed up import-heavy suites、reduce WebUI session latency churn thanks @BunsDev；**迁移/重构**：图像生成复用 SDK helper Media Understanding 本地 data URL/base64/文件扩展解析逻辑迁移到 `openclaw/plugin-sdk/image-generation`、unify plugin metadata consumers、trim media understanding helper types；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 6、修改 43、删除 4

## 3. 功能级详细差异

### 优化 use plugin metadata snapshot for media tool lookups

优化 use plugin metadata snapshot for media tool lookups

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 cli report missing infer media providers

修复 cli：report missing infer media providers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 openai route Codex audio to transcription model

修复 openai：route Codex audio to transcription model

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 图像生成复用 SDK helper Media Understanding 本地 data URL/base64/文件扩展解析逻辑迁移到 op…

图像生成复用 SDK helper：Media Understanding 本地 data URL/base64/文件扩展解析逻辑迁移到 `openclaw/plugin-sdk/image-generation`。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align media defaults metadata fixture

测试覆盖 align media defaults metadata fixture

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 harden plugin and UI isolation checks

测试覆盖 harden plugin and UI isolation checks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 speed up import-heavy suites

测试覆盖 speed up import-heavy suites

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 stabilize full test suite

测试覆盖 stabilize full test suite

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim media understanding helper types

迁移/重构 trim media understanding helper types

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify plugin metadata consumers

迁移/重构 unify plugin metadata consumers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 manifest metadata，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 image assets regression/contract coverage、openai compatible image provider regression/contract coverage、provider registry.allowlist regression/contract coverage、provider registry regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `provider registry.allowlist regression/contract coverage`（`src/image-generation/provider-registry.allowlist.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `provider registry.allowlist regression/contract coverage`（`src/media-understanding/provider-registry.allowlist.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `transcribe audio regression/contract coverage`（`src/media-understanding/transcribe-audio.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `transcribe audio`（`src/media-understanding/transcribe-audio.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media-understanding`
- Changed path count: `53`
- Status counts: `新增 6、修改 43、删除 4`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `53` files, `+2711` / `-629`

### 归纳依据

- 主要落点：implementation、image generation、tests/contracts、video generation。
- 新增或暴露的关键符号包括：`DEFAULT_IMAGE_MIME_TYPE`, `DEFAULT_IMAGE_FILE_PREFIX`, `imageFileExtensionForMimeType`, `sniffImageMimeType`, `toImageDataUrl`, `parseImageDataUrl`, `generatedImageAssetFromBase64`, `generatedImageAssetFromDataUrl`, `generatedImageAssetFromOpenAiCompatibleEntry`, `parseOpenAiCompatibleImageResponse`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(openai): route Codex audio to transcription model；test: harden plugin and UI isolation checks；test: speed up import-heavy suites；fix: reduce WebUI session latency churn thanks @BunsDev；test: stabilize full test suite；test: align media defaults metadata fixture；refactor: unify plugin metadata consumers；fix(cli): report missing infer media providers

### Dimension evidence

- `public-contract-优化-use-plugin-metadata-snapshot-for-media-tool` / 优化 use plugin metadata snapshot for media tool lookups:
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.cache.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.normalize.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.ts` — semantic cue
- `maintenance-修复-cli-report-missing-infer-media-providers` / 修复 cli report missing infer media providers:
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.cache.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.normalize.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.ts` — semantic cue
- `maintenance-修复-openai-route-Codex-audio-to-transcription-mo` / 修复 openai route Codex audio to transcription model:
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/audio-preflight.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/audio-preflight.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/audio.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/runner.auto-audio.test.ts` — semantic cue
- `user-visible-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [A] `src/image-generation/image-assets.test.ts`
  - source: `path` [A] `src/image-generation/image-assets.ts`
  - source: `path` [A] `src/image-generation/openai-compatible-image-provider.test.ts`
  - source: `path` [M] `src/image-generation/live-test-helpers.ts`
  - source: `path` [M] `src/image-generation/normalization.ts`
  - source: `path` [M] `src/image-generation/provider-registry.test.ts`
- `user-visible-图像生成复用-SDK-helper-Media-Understanding-本地-data-U` / 图像生成复用 SDK helper Media Understanding 本地 data URL/base64/文件扩展解析逻辑迁移到 op…:
  - source: `path` [M] `src/image-generation/live-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/link-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/link-understanding/runner.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.ts` — semantic cue
- `public-contract-测试覆盖-align-media-defaults-metadata-fixture` / 测试覆盖 align media defaults metadata fixture:
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.cache.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.normalize.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.ts` — semantic cue
- `user-visible-测试覆盖-harden-plugin-and-UI-isolation-checks` / 测试覆盖 harden plugin and UI isolation checks:
  - source: `path` [M] `src/link-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/link-understanding/runner.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.test.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/apply.ts` — semantic cue
  - source: `path` [M] `src/media-understanding/attachments.cache.ts` — semantic cue
- `user-visible-测试覆盖-speed-up-import-heavy-suites` / 测试覆盖 speed up import-heavy suites:
  - source: `path` [A] `src/image-generation/image-assets.test.ts`
  - source: `path` [A] `src/image-generation/image-assets.ts`
  - source: `path` [A] `src/image-generation/openai-compatible-image-provider.test.ts`
  - source: `path` [M] `src/image-generation/live-test-helpers.ts`
  - source: `path` [M] `src/image-generation/normalization.ts`
  - source: `path` [M] `src/image-generation/provider-registry.test.ts`
- `user-visible-测试覆盖-stabilize-full-test-suite` / 测试覆盖 stabilize full test suite:
  - source: `path` [M] `src/image-generation/image-assets.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/live-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/provider-registry.allowlist.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/provider-registry.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/runtime.test.ts` — semantic cue
- `migration-迁移-重构-trim-media-understanding-helper-types` / 迁移/重构 trim media understanding helper types:
  - source: `path` [M] `src/image-generation/image-assets.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/image-assets.ts` — semantic cue
  - source: `path` [M] `src/image-generation/live-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/image-generation/normalization.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.ts` — semantic cue
- `public-contract-迁移-重构-unify-plugin-metadata-consumers` / 迁移/重构 unify plugin metadata consumers:
  - source: `path` [M] `src/image-generation/image-assets.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/image-assets.ts` — semantic cue
  - source: `path` [M] `src/image-generation/live-test-helpers.ts` — semantic cue
  - source: `path` [M] `src/image-generation/normalization.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.test.ts` — semantic cue
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/media-understanding/manifest-metadata.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/image-generation/image-assets.test.ts` — test evidence
  - source: `path` [M] `src/image-generation/openai-compatible-image-provider.test.ts` — test evidence
  - source: `path` [M] `src/image-generation/provider-registry.allowlist.test.ts` — test evidence
  - source: `path` [M] `src/image-generation/provider-registry.test.ts` — test evidence
  - source: `path` [M] `src/image-generation/runtime.test.ts` — test evidence
  - source: `path` [M] `src/media-understanding/apply.sanitize-mime.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/image-generation/provider-registry.allowlist.test.ts`
  - source: `path` [D] `src/media-understanding/provider-registry.allowlist.test.ts`
  - source: `path` [D] `src/media-understanding/transcribe-audio.test.ts`
  - source: `path` [D] `src/media-understanding/transcribe-audio.ts`

### 路径证据

- 新增 `src/image-generation/image-assets.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 新增 `src/image-generation/image-assets.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 新增 `src/image-generation/openai-compatible-image-provider.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 新增 `src/image-generation/openai-compatible-image-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 新增 `src/media-understanding/apply.sanitize-mime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/media-understanding/defaults.constants.ts`：调整 defaults.constants（implementation）。
- 修改 `src/image-generation/live-test-helpers.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/normalization.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/provider-registry.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/runtime-types.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/runtime.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/runtime.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/image-generation/types.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/link-understanding/apply.ts`：调整 apply（implementation）。
- 修改 `src/link-understanding/runner.ts`：调整 runner（implementation）。
- 修改 `src/media-understanding/apply.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media-understanding/apply.ts`：调整 apply（implementation）。
- 修改 `src/media-understanding/attachments.cache.ts`：调整 attachments.cache（implementation）。
- 删除 `src/image-generation/provider-registry.allowlist.test.ts`：移除旧的 image generation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media-understanding/provider-registry.allowlist.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media-understanding/transcribe-audio.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media-understanding/transcribe-audio.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 31 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/media-understanding` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/media-understanding/change-to-test.md` 的验证建议。
