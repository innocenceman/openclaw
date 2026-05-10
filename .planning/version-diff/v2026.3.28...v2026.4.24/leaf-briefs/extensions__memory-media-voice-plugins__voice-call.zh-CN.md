# extensions/memory-media-voice-plugins/voice-call

## 一句话结论

voice call 所属的 Memory, media, web UI and terminal UI surfaces 有 80 个路径变化（新增 19、修改 55、删除 6），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call`
- Changed path count: `80`
- Status counts: `新增 19、修改 55、删除 6`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `80` files, `+5898` / `-1810`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 19、修改 55、删除 6。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/voice-call/cli-metadata.ts`
- `extensions/voice-call/config-api.ts`
- `extensions/voice-call/setup-api.ts`
- `extensions/voice-call/src/config-compat.test.ts`
- `extensions/voice-call/src/config-compat.ts`
- `extensions/voice-call/src/providers/twilio.types.ts`
- `extensions/voice-call/src/realtime-defaults.ts`
- `extensions/voice-call/src/realtime-transcription.runtime.ts`
- `extensions/voice-call/src/realtime-voice.runtime.ts`
- `extensions/voice-call/src/response-model.test.ts`
- `extensions/voice-call/src/response-model.ts`
- `extensions/voice-call/src/tts-provider-voice.test.ts`
- `extensions/voice-call/src/tts-provider-voice.ts`
- `extensions/voice-call/src/tunnel.test.ts`
- `extensions/voice-call/src/webhook.types.ts`
- `extensions/voice-call/src/webhook/realtime-handler.test.ts`
- `extensions/voice-call/src/webhook/realtime-handler.ts`
- `extensions/voice-call/src/websocket-test-support.ts`
- `extensions/voice-call/tsconfig.json`

### 修改

- `extensions/voice-call/README.md`
- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/openclaw.plugin.json`
- `extensions/voice-call/package.json`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/http-headers.ts`
- `extensions/voice-call/src/manager.closed-loop.test.ts`
- `extensions/voice-call/src/manager.inbound-allowlist.test.ts`
- `extensions/voice-call/src/manager.notify.test.ts`
- `extensions/voice-call/src/manager.restore.test.ts`
- `extensions/voice-call/src/manager.test-harness.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/events.test.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/store.ts`
- `extensions/voice-call/src/manager/timers.ts`
- `extensions/voice-call/src/media-stream.test.ts`
- `extensions/voice-call/src/media-stream.ts`
- `extensions/voice-call/src/providers/base.ts`
- `extensions/voice-call/src/providers/index.ts`
- `extensions/voice-call/src/providers/mock.ts`
- `extensions/voice-call/src/providers/plivo.test.ts`
- `extensions/voice-call/src/providers/plivo.ts`
- `extensions/voice-call/src/providers/shared/call-status.ts`
- `extensions/voice-call/src/providers/telnyx.test.ts`
- … 另有 25 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/voice-call/CHANGELOG.md`
- `extensions/voice-call/package-manifest.contract.test.ts`
- `extensions/voice-call/src/providers/stt-openai-realtime.test.ts`
- `extensions/voice-call/src/providers/stt-openai-realtime.ts`
- `extensions/voice-call/src/providers/tts-openai.test.ts`
- `extensions/voice-call/src/providers/tts-openai.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者

## 建议验证

- 首选验证：Manifest/config changed | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/voice-call` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call/change-to-test.md` 的验证建议。
