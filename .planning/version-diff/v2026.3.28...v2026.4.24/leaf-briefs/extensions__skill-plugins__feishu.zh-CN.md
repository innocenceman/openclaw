# extensions/skill-plugins/feishu

## 一句话结论

feishu 所属的 Bundled skill plugins and skill runtime surfaces 有 86 个路径变化（新增 40、修改 41、删除 4、重命名 1），兼容性判断为行为变化。

## Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/feishu`
- Changed path count: `86`
- Status counts: `新增 40、修改 41、删除 4、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `86` files, `+7188` / `-921`

## 功能变化摘要

这个 leaf 属于 `Bundled skill plugins and skill runtime surfaces`。本次版本差异显示它的主要变化是：新增 40、修改 41、删除 4、重命名 1。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/feishu/src/app-registration.ts`
- `extensions/feishu/src/approval-auth.test.ts`
- `extensions/feishu/src/approval-auth.ts`
- `extensions/feishu/src/bot-runtime-api.ts`
- `extensions/feishu/src/channel-runtime-api.ts`
- `extensions/feishu/src/comment-dispatcher-runtime-api.ts`
- `extensions/feishu/src/comment-dispatcher.test.ts`
- `extensions/feishu/src/comment-dispatcher.ts`
- `extensions/feishu/src/comment-handler-runtime-api.ts`
- `extensions/feishu/src/comment-handler.test.ts`
- `extensions/feishu/src/comment-handler.ts`
- `extensions/feishu/src/comment-reaction.test.ts`
- `extensions/feishu/src/comment-reaction.ts`
- `extensions/feishu/src/comment-shared.test.ts`
- `extensions/feishu/src/comment-shared.ts`
- `extensions/feishu/src/comment-target.ts`
- `extensions/feishu/src/conversation-id.test.ts`
- `extensions/feishu/src/dedup-runtime-api.ts`
- `extensions/feishu/src/drive.test.ts`
- `extensions/feishu/src/event-types.ts`
- `extensions/feishu/src/mention-target.types.ts`
- `extensions/feishu/src/message-action-contract.ts`
- `extensions/feishu/src/monitor-state-runtime-api.ts`
- `extensions/feishu/src/monitor-transport-runtime-api.ts`
- `extensions/feishu/src/outbound-runtime-api.ts`
- `extensions/feishu/src/processing-claims.ts`
- `extensions/feishu/src/qr-terminal.ts`
- `extensions/feishu/src/reasoning-preview.test.ts`
- `extensions/feishu/src/reasoning-preview.ts`
- `extensions/feishu/src/reply-dispatcher-runtime-api.ts`
- … 另有 10 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-sender-name.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/chat.ts`
- `extensions/feishu/src/conversation-id.ts`
- `extensions/feishu/src/dedup.ts`
- `extensions/feishu/src/directory.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/external-keys.ts`
- `extensions/feishu/src/lifecycle.test-support.ts`
- `extensions/feishu/src/media.test.ts`
- `extensions/feishu/src/media.ts`
- `extensions/feishu/src/mention.ts`
- `extensions/feishu/src/outbound.test.ts`
- `extensions/feishu/src/outbound.ts`
- `extensions/feishu/src/perm.ts`
- `extensions/feishu/src/policy.test.ts`
- `extensions/feishu/src/policy.ts`
- `extensions/feishu/src/post.ts`
- `extensions/feishu/src/probe.test.ts`
- `extensions/feishu/src/probe.ts`
- `extensions/feishu/src/reply-dispatcher.test.ts`
- `extensions/feishu/src/reply-dispatcher.ts`
- `extensions/feishu/src/runtime.ts`
- `extensions/feishu/src/send-target.test.ts`
- `extensions/feishu/src/send-target.ts`
- `extensions/feishu/src/session-route.ts`
- `extensions/feishu/src/setup-core.ts`
- `extensions/feishu/src/setup-surface.test.ts`
- … 另有 11 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/feishu/src/feishu-command-handler.ts`
- `extensions/feishu/src/registry-backed.contract.test.ts`
- `extensions/feishu/src/send-message.ts`
- `extensions/feishu/src/session-binding.contract.test.ts`

### 重命名

- `extensions/feishu/src/test-support/lifecycle-test-support.ts`

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

## 建议验证

- 首选验证：Manifest/config changed | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `extensions/skill-plugins/feishu` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/feishu/change-to-test.md` 的验证建议。
