# src/channel-abstraction/core-abstractions

## 一句话结论

core abstractions 所属的 Bundled messaging channel plugins 有 59 个路径变化（新增 13、修改 42、删除 3、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/core-abstractions`
- Changed path count: `59`
- Status counts: `新增 13、修改 42、删除 3、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `59` files, `+3197` / `-1004`

## 功能变化摘要

这个 leaf 属于 `Bundled messaging channel plugins`。本次版本差异显示它的主要变化是：新增 13、修改 42、删除 3、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/channels/account-inspection.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/chat-meta-shared.ts`
- `src/channels/conversation-binding-context.test.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/draft-preview-finalizer.test.ts`
- `src/channels/draft-preview-finalizer.ts`
- `src/channels/ids.test.ts`
- `src/channels/registry-normalize.ts`
- `src/channels/session.types.ts`
- `src/channels/status-reactions.slack-lifecycle.test.ts`

### 修改

- `src/channels/AGENTS.md`
- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/account-summary.ts`
- `src/channels/allow-from.test.ts`
- `src/channels/allow-from.ts`
- `src/channels/channel-config.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/chat-meta.ts`
- `src/channels/chat-type.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-label.test.ts`
- `src/channels/conversation-label.ts`
- `src/channels/draft-stream-controls.test.ts`
- `src/channels/draft-stream-controls.ts`
- `src/channels/ids.ts`
- `src/channels/inbound-debounce-policy.ts`
- `src/channels/location.test.ts`
- `src/channels/location.ts`
- `src/channels/mention-gating.test.ts`
- `src/channels/mention-gating.ts`
- `src/channels/model-overrides.test.ts`
- `src/channels/model-overrides.ts`
- `src/channels/native-command-session-targets.ts`
- `src/channels/read-only-account-inspect.ts`
- `src/channels/registry.helpers.test.ts`
- `src/channels/registry.ts`
- `src/channels/reply-prefix.ts`
- … 另有 12 个路径，详见 `leaf-impact.json`。

### 删除

- `src/channels/read-only-account-inspect.discord.runtime.ts`
- `src/channels/read-only-account-inspect.slack.runtime.ts`
- `src/channels/read-only-account-inspect.telegram.runtime.ts`

### 重命名

- `src/infra/matrix.test-helpers.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：`core-abstractions/` | pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/channel-abstraction/core-abstractions` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/core-abstractions/change-to-test.md` 的验证建议。
