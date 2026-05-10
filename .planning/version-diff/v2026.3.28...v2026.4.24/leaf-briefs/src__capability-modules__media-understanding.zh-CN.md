# src/capability-modules/media-understanding

## 一句话结论

media understanding 所属的 Memory, media, web UI and terminal UI surfaces 有 69 个路径变化（新增 22、修改 46、删除 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media-understanding`
- Changed path count: `69`
- Status counts: `新增 22、修改 46、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `69` files, `+5594` / `-1360`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 22、修改 46、删除 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/image-generation/normalization.ts`
- `src/image-generation/provider-registry.allowlist.test.ts`
- `src/image-generation/runtime-types.ts`
- `src/media-understanding/active-model.types.ts`
- `src/media-understanding/audio-preflight.test.ts`
- `src/media-understanding/config-provider-models.ts`
- `src/media-understanding/echo-transcript.test.ts`
- `src/media-understanding/entry-capabilities.ts`
- `src/media-understanding/manifest-metadata.ts`
- `src/media-understanding/media-understanding-url-fallback.test.ts`
- `src/media-understanding/openai-compatible-audio.pin-dns.test.ts`
- `src/media-understanding/openai-compatible-audio.test.ts`
- `src/media-understanding/openai-compatible-video.ts`
- `src/media-understanding/provider-capability-registry.test.ts`
- `src/media-understanding/provider-capability-registry.ts`
- `src/media-understanding/provider-registry.allowlist.test.ts`
- `src/media-understanding/provider-supports.ts`
- `src/media-understanding/runner.attachments.ts`
- `src/media-understanding/runner.cli-audio.test.ts`
- `src/media-understanding/runner.test-mocks.ts`
- `src/media-understanding/runtime-types.ts`
- `src/media-understanding/shared.test.ts`

### 修改

- `src/image-generation/live-test-helpers.test.ts`
- `src/image-generation/live-test-helpers.ts`
- `src/image-generation/model-ref.ts`
- `src/image-generation/provider-registry.test.ts`
- `src/image-generation/provider-registry.ts`
- `src/image-generation/runtime.test.ts`
- `src/image-generation/runtime.ts`
- `src/image-generation/types.ts`
- `src/link-understanding/apply.ts`
- `src/link-understanding/runner.ts`
- `src/media-understanding/apply.echo-transcript.test.ts`
- `src/media-understanding/apply.test.ts`
- `src/media-understanding/apply.ts`
- `src/media-understanding/attachments.cache.ts`
- `src/media-understanding/attachments.normalize.ts`
- `src/media-understanding/audio-preflight.ts`
- `src/media-understanding/audio-transcription-runner.ts`
- `src/media-understanding/defaults.test.ts`
- `src/media-understanding/defaults.ts`
- `src/media-understanding/echo-transcript.ts`
- `src/media-understanding/errors.ts`
- `src/media-understanding/image-runtime.ts`
- `src/media-understanding/image.test.ts`
- `src/media-understanding/image.ts`
- `src/media-understanding/media-understanding-misc.test.ts`
- `src/media-understanding/openai-compatible-audio.ts`
- `src/media-understanding/provider-id.ts`
- `src/media-understanding/provider-registry.test.ts`
- `src/media-understanding/provider-registry.ts`
- `src/media-understanding/resolve.test.ts`
- … 另有 16 个路径，详见 `leaf-impact.json`。

### 删除

- `src/image-generation/runtime.live.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`media-understanding/` | pnpm test -- src/media-understanding/runtime.test.ts src/media-understanding/provider-registry.test.ts src/media-understanding/runner.video.test.ts src/media-understanding/transcribe-audio.test.ts | Escalate to provider/media tests when model/provider or attachment handling changes. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/capability-modules/media-understanding` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/media-understanding/change-to-test.md` 的验证建议。
