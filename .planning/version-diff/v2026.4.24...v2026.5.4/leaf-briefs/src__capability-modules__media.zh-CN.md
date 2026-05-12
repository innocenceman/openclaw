# src/capability-modules/media

## 1. 功能结论

**修改**：media use r+ for Windows media fsync、harden plugin and UI isolation checks、speed up import-heavy suites、fork google meet agent context；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 5、修改 53、删除 7

## 3. 功能级详细差异

### 修复 fork google meet agent context

修复 fork google meet agent context

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 media ignore EPERM during best-effort fsync

修复 media：ignore EPERM during best-effort fsync

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 media require HEIC conversion fallback

修复 media：require HEIC conversion fallback

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 media tolerate missing image optimizer for in-limit images

修复 media：tolerate missing image optimizer for in-limit images

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 media use r+ for Windows media fsync

修复 media：use r+ for Windows media fsync

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 realtime label pre-ready transcription closes

修复 realtime：label pre-ready transcription closes

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 stabilize Google Meet realtime audio

修复 stabilize Google Meet realtime audio

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 stabilize Google Meet realtime talkback

修复 stabilize Google Meet realtime talkback

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

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 configured max bytes，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 provider capabilities regression/contract coverage、runtime shared regression/contract coverage、audio transcode regression/contract coverage、channel inbound roots.fast path regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `host regression/contract coverage`（`src/media/host.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `host`（`src/media/host.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `server.outside workspace regression/contract coverage`（`src/media/server.outside-workspace.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `server`（`src/media/server.runtime.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

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
- Impact-map dir: `.planning/impact-map/src/capability-modules/media`
- Changed path count: `65`
- Status counts: `新增 5、修改 53、删除 7`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `65` files, `+2568` / `-1484`

### 归纳依据

- 主要落点：implementation、tests/contracts、video generation、session/state handling、image generation、configuration/schema。
- 新增或暴露的关键符号包括：`EXPECTED_BUNDLED_VIDEO_PROVIDER_IDS_BY_PLUGIN`, `EXPECTED_BUNDLED_MUSIC_PROVIDER_IDS_BY_PLUGIN`, `formatCapabilityFailureAttempts`, `formatCapabilityFailureAttempt`, `formatCapabilityAttemptRef`, `isAbortLikeFallbackAttempt`, `DEFAULT_OPUS_SAMPLE_RATE_HZ`, `DEFAULT_OPUS_BITRATE`, `DEFAULT_OPUS_CHANNELS`, `DEFAULT_TEMP_PREFIX`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(media): use r+ for Windows media fsync；test: harden plugin and UI isolation checks；test: speed up import-heavy suites；fix: fork google meet agent context；fix(media): require HEIC conversion fallback；fix(media): tolerate missing image optimizer for in-limit images；fix(media): ignore EPERM during best-effort fsync；fix: stabilize Google Meet realtime talkback

### Dimension evidence

- `maintenance-修复-fork-google-meet-agent-context` / 修复 fork google meet agent context:
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-tool.ts` — semantic cue
- `maintenance-修复-media-ignore-EPERM-during-best-effort-fsync` / 修复 media ignore EPERM during best-effort fsync:
  - source: `path` [M] `src/media-generation/model-ref.ts` — semantic cue
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.test.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.ts` — semantic cue
- `user-visible-修复-media-require-HEIC-conversion-fallback` / 修复 media require HEIC conversion fallback:
  - source: `path` [M] `src/media-generation/model-ref.ts` — semantic cue
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.test.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.ts` — semantic cue
- `maintenance-修复-media-tolerate-missing-image-optimizer-for-i` / 修复 media tolerate missing image optimizer for in-limit images:
  - source: `path` [M] `src/media-generation/model-ref.ts` — semantic cue
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.test.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.ts` — semantic cue
- `maintenance-修复-media-use-r-for-Windows-media-fsync` / 修复 media use r+ for Windows media fsync:
  - source: `path` [M] `src/media-generation/model-ref.ts` — semantic cue
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts` — semantic cue
  - source: `path` [M] `src/media-generation/runtime-shared.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.test.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.ts` — semantic cue
- `maintenance-修复-realtime-label-pre-ready-transcription-closes` / 修复 realtime label pre-ready transcription closes:
  - source: `path` [M] `src/realtime-transcription/websocket-session.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-transcription/websocket-session.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-tool.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/provider-types.ts` — semantic cue
- `maintenance-修复-stabilize-Google-Meet-realtime-audio` / 修复 stabilize Google Meet realtime audio:
  - source: `path` [M] `src/media/audio-transcode.test.ts` — semantic cue
  - source: `path` [M] `src/media/audio-transcode.ts` — semantic cue
  - source: `path` [M] `src/realtime-transcription/websocket-session.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-transcription/websocket-session.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.ts` — semantic cue
- `maintenance-修复-stabilize-Google-Meet-realtime-talkback` / 修复 stabilize Google Meet realtime talkback:
  - source: `path` [M] `src/realtime-transcription/websocket-session.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-transcription/websocket-session.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-runtime.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/agent-consult-tool.ts` — semantic cue
  - source: `path` [M] `src/realtime-voice/provider-types.ts` — semantic cue
- `user-visible-测试覆盖-harden-plugin-and-UI-isolation-checks` / 测试覆盖 harden plugin and UI isolation checks:
  - source: `path` [A] `src/media/audio-transcode.test.ts`
  - source: `path` [A] `src/media/audio-transcode.ts`
  - source: `path` [A] `src/media/qr-terminal.test.ts`
  - source: `path` [M] `src/media-generation/model-ref.ts`
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts`
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts`
- `user-visible-测试覆盖-speed-up-import-heavy-suites` / 测试覆盖 speed up import-heavy suites:
  - source: `path` [M] `src/media/server.test-support.ts` — semantic cue
  - source: `path` [M] `src/video-generation/duration-support.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/media/configured-max-bytes.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/media-generation/provider-capabilities.contract.test.ts` — test evidence
  - source: `path` [M] `src/media-generation/runtime-shared.test.ts` — test evidence
  - source: `path` [M] `src/media/audio-transcode.test.ts` — test evidence
  - source: `path` [M] `src/media/channel-inbound-roots.fast-path.test.ts` — test evidence
  - source: `path` [M] `src/media/fetch.test.ts` — test evidence
  - source: `path` [M] `src/media/ffmpeg-exec.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/media/host.test.ts`
  - source: `path` [D] `src/media/host.ts`
  - source: `path` [D] `src/media/server.outside-workspace.test.ts`
  - source: `path` [D] `src/media/server.runtime.ts`
  - source: `path` [D] `src/media/server.test-support.ts`
  - source: `path` [D] `src/media/server.test.ts`

### 路径证据

- 新增 `src/media/audio-transcode.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/media/audio-transcode.ts`：调整 audio transcode（implementation）。
- 新增 `src/media/qr-terminal.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/media/video-dimensions.test.ts`：新增 OpenRouter 视频生成相关实现/测试，扩展 leaf 的媒体能力边界。
- 新增 `src/media/video-dimensions.ts`：新增 OpenRouter 视频生成相关实现/测试，扩展 leaf 的媒体能力边界。
- 修改 `src/media-generation/model-ref.ts`：调整 model ref（implementation）。
- 修改 `src/media-generation/provider-capabilities.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media-generation/runtime-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media-generation/runtime-shared.ts`：调整 runtime shared（implementation）。
- 修改 `src/media/channel-inbound-roots.fast-path.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media/channel-inbound-roots.ts`：调整 channel inbound roots（implementation）。
- 修改 `src/media/configured-max-bytes.ts`：调整 configured max bytes（configuration/schema）。
- 修改 `src/media/document-extractors.runtime.ts`：调整 document extractors（implementation）。
- 修改 `src/media/fetch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media/fetch.ts`：调整 fetch（implementation）。
- 修改 `src/media/ffmpeg-exec.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/media/ffmpeg-exec.ts`：调整 ffmpeg exec（implementation）。
- 删除 `src/media/host.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/host.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/server.outside-workspace.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/server.runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/server.test-support.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/server.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/media/server.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 41 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/media` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/media/change-to-test.md` 的验证建议。
