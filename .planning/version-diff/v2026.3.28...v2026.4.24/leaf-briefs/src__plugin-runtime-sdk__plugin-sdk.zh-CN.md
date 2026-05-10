# src/plugin-runtime-sdk/plugin-sdk

## 一句话结论

plugin sdk 所属的 Plugin SDK, plugin registry, plugin loading boundaries 有 131 个路径变化（新增 58、修改 62、删除 6、重命名 5），兼容性判断为行为变化。

## Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk`
- Changed path count: `131`
- Status counts: `新增 58、修改 62、删除 6、重命名 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `131` files, `+6595` / `-2871`

## 功能变化摘要

这个 leaf 属于 `Plugin SDK, plugin registry, plugin loading boundaries`。本次版本差异显示它的主要变化是：新增 58、修改 62、删除 6、重命名 5。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/plugin-sdk/channel-contract-testing.ts`
- `src/plugin-sdk/channel-core.ts`
- `src/plugin-sdk/channel-entry-contract.test.ts`
- `src/plugin-sdk/channel-entry-contract.ts`
- `src/plugin-sdk/channel-envelope.ts`
- `src/plugin-sdk/channel-inbound-debounce.ts`
- `src/plugin-sdk/channel-inbound-roots.ts`
- `src/plugin-sdk/channel-lifecycle.core.ts`
- `src/plugin-sdk/channel-location.ts`
- `src/plugin-sdk/channel-logging.ts`
- `src/plugin-sdk/channel-mention-gating.ts`
- `src/plugin-sdk/channel-pairing-paths.ts`
- `src/plugin-sdk/channel-reply-options-runtime.ts`
- `src/plugin-sdk/channel-runtime-context.ts`
- `src/plugin-sdk/channel-secret-basic-runtime.ts`
- `src/plugin-sdk/channel-secret-runtime.ts`
- `src/plugin-sdk/channel-secret-tts-runtime.ts`
- `src/plugin-sdk/channel-streaming.test.ts`
- `src/plugin-sdk/channel-streaming.ts`
- `src/plugin-sdk/media-generation-runtime-shared.ts`
- `src/plugin-sdk/media-generation-runtime.ts`
- `src/plugin-sdk/media-mime.ts`
- `src/plugin-sdk/media-store.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.test.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.ts`
- `src/plugin-sdk/memory-core-host-events.ts`
- `src/plugin-sdk/memory-host-core.test.ts`
- `src/plugin-sdk/memory-host-core.ts`
- `src/plugin-sdk/memory-host-events.test.ts`
- `src/plugin-sdk/memory-host-events.ts`
- … 另有 28 个路径，详见 `leaf-impact.json`。

### 修改

- `src/plugin-sdk/allow-from.test.ts`
- `src/plugin-sdk/allow-from.ts`
- `src/plugin-sdk/channel-actions.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-feedback.ts`
- `src/plugin-sdk/channel-inbound.ts`
- `src/plugin-sdk/channel-lifecycle.test.ts`
- `src/plugin-sdk/channel-lifecycle.ts`
- `src/plugin-sdk/channel-pairing.test.ts`
- `src/plugin-sdk/channel-pairing.ts`
- `src/plugin-sdk/channel-plugin-common.ts`
- `src/plugin-sdk/channel-policy.test.ts`
- `src/plugin-sdk/channel-policy.ts`
- `src/plugin-sdk/channel-reply-pipeline.test.ts`
- `src/plugin-sdk/channel-reply-pipeline.ts`
- `src/plugin-sdk/channel-runtime.ts`
- `src/plugin-sdk/channel-send-result.test.ts`
- `src/plugin-sdk/channel-send-result.ts`
- `src/plugin-sdk/channel-setup.test.ts`
- `src/plugin-sdk/channel-setup.ts`
- `src/plugin-sdk/channel-status.ts`
- `src/plugin-sdk/channel-targets.ts`
- `src/plugin-sdk/group-access.ts`
- `src/plugin-sdk/index.ts`
- `src/plugin-sdk/media-runtime.ts`
- `src/plugin-sdk/media-understanding-runtime.ts`
- `src/plugin-sdk/media-understanding.ts`
- … 另有 32 个路径，详见 `leaf-impact.json`。

### 删除

- `src/plugin-sdk/provider-catalog.ts`
- `src/plugin-sdk/provider-google.ts`
- `src/plugin-sdk/provider-models.ts`
- `src/plugin-sdk/provider-moonshot.ts`
- `src/plugin-sdk/provider-reasoning.ts`
- `src/plugin-sdk/speech-runtime.ts`

### 重命名

- `src/plugin-sdk/channel-import-guardrails.test.ts`
- `src/plugin-sdk/index.bundle.test.ts`
- `src/plugin-sdk/index.test.ts`
- `src/plugin-sdk/root-alias.test.ts`
- `src/plugin-sdk/subpaths.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- Provider/plugin 调用方
- agent runtime 集成方
- 插件作者

## 建议验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugin-sdk` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugin-sdk/change-to-test.md` 的验证建议。
