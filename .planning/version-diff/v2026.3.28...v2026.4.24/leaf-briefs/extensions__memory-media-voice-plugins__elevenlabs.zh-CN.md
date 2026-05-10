# extensions/memory-media-voice-plugins/elevenlabs

## 一句话结论

elevenlabs 所属的 Memory, media, web UI and terminal UI surfaces 有 22 个路径变化（新增 13、修改 7、删除 1、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs`
- Changed path count: `22`
- Status counts: `新增 13、修改 7、删除 1、重命名 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `22` files, `+1200` / `-155`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 13、修改 7、删除 1、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/elevenlabs/config-api.ts`
- `extensions/elevenlabs/config-compat.ts`
- `extensions/elevenlabs/contract-api.ts`
- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/media-understanding-provider.test.ts`
- `extensions/elevenlabs/media-understanding-provider.ts`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.ts`
- `extensions/elevenlabs/setup-api.ts`
- `extensions/elevenlabs/shared.ts`
- `extensions/elevenlabs/tsconfig.json`
- `extensions/elevenlabs/tts.test.ts`

### 修改

- `extensions/elevenlabs/index.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`
- `extensions/elevenlabs/test-api.ts`
- `extensions/elevenlabs/tts.ts`

### 删除

- `extensions/elevenlabs/plugin-registration.contract.test.ts`

### 重命名

- `extensions/elevenlabs/config-compat.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/elevenlabs` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/elevenlabs/change-to-test.md` 的验证建议。
