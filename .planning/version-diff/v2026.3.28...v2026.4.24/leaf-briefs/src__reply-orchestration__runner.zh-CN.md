# src/reply-orchestration/runner

## 一句话结论

runner 所属的 Agent loop, ACP, spawning, command control 有 230 个路径变化（新增 69、修改 146、删除 11、重命名 4），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/reply-orchestration/runner`
- Changed path count: `230`
- Status counts: `新增 69、修改 146、删除 11、重命名 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `229` files, `+28938` / `-10753`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 69、修改 146、删除 11、重命名 4。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/auto-reply/command-status-builders.ts`
- `src/auto-reply/dispatch-dispatcher.ts`
- `src/auto-reply/get-reply-options.types.ts`
- `src/auto-reply/inbound.group-require-mention-test-plugins.ts`
- `src/auto-reply/reply-payload.ts`
- `src/auto-reply/reply/abort.runtime-types.ts`
- `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-memory.test.ts`
- `src/auto-reply/reply/agent-runner-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.test.ts`
- `src/auto-reply/reply/agent-runner-session-reset.ts`
- `src/auto-reply/reply/agent-runner-utils.secret-resolution.test.ts`
- `src/auto-reply/reply/agent-runner.test-fixtures.ts`
- `src/auto-reply/reply/before-deliver.test.ts`
- `src/auto-reply/reply/conversation-label-generator.test.ts`
- `src/auto-reply/reply/dispatch-acp-attachments.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.test.ts`
- `src/auto-reply/reply/dispatch-acp-command-bypass.ts`
- `src/auto-reply/reply/dispatch-acp-manager.runtime.ts`
- `src/auto-reply/reply/dispatch-acp-media.runtime.ts`
- `src/auto-reply/reply/dispatch-acp-session.runtime.ts`
- `src/auto-reply/reply/dispatch-acp-tts.runtime.ts`
- `src/auto-reply/reply/dispatch-from-config.acp-abort.test.ts`
- `src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts`
- `src/auto-reply/reply/dispatch-from-config.runtime.ts`
- `src/auto-reply/reply/dispatch-from-config.shared.test-harness.ts`
- `src/auto-reply/reply/dispatch-from-config.types.ts`
- `src/auto-reply/reply/effective-reply-route.test.ts`
- `src/auto-reply/reply/effective-reply-route.ts`
- `src/auto-reply/reply/followup-delivery.test.ts`
- … 另有 39 个路径，详见 `leaf-impact.json`。

### 修改

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.test.ts`
- `src/auto-reply/fallback-state.ts`
- `src/auto-reply/group-activation.ts`
- `src/auto-reply/inbound-debounce.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/media-understanding.test-fixtures.ts`
- `src/auto-reply/model-runtime.ts`
- `src/auto-reply/model.test.ts`
- `src/auto-reply/model.ts`
- `src/auto-reply/reply/abort-cutoff.ts`
- `src/auto-reply/reply/abort-primitives.ts`
- `src/auto-reply/reply/abort.test.ts`
- `src/auto-reply/reply/abort.ts`
- `src/auto-reply/reply/acp-projector.ts`
- `src/auto-reply/reply/acp-reset-target.ts`
- `src/auto-reply/reply/acp-stream-settings.test.ts`
- `src/auto-reply/reply/acp-stream-settings.ts`
- `src/auto-reply/reply/agent-runner-auth-profile.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `src/auto-reply/reply/agent-runner-helpers.test.ts`
- `src/auto-reply/reply/agent-runner-helpers.ts`
- `src/auto-reply/reply/agent-runner-memory.ts`
- `src/auto-reply/reply/agent-runner-payloads.test.ts`
- `src/auto-reply/reply/agent-runner-payloads.ts`
- `src/auto-reply/reply/agent-runner-reminder-guard.ts`
- `src/auto-reply/reply/agent-runner-usage-line.ts`
- … 另有 116 个路径，详见 `leaf-impact.json`。

### 删除

- `src/auto-reply/reply/agent-runner-execution.runtime.ts`
- `src/auto-reply/reply/agent-runner-memory.runtime.ts`
- `src/auto-reply/reply/auto-topic-label.test.ts`
- `src/auto-reply/reply/discord-parent-channel.ts`
- `src/auto-reply/reply/matrix-context.ts`
- `src/auto-reply/reply/reply-payloads.runtime.ts`
- `src/auto-reply/reply/session.imports.test.ts`
- `src/auto-reply/reply/slack-directives.ts`
- `src/auto-reply/reply/telegram-context.test.ts`
- `src/auto-reply/reply/telegram-context.ts`
- `src/auto-reply/reply/usage-cost.runtime.ts`

### 重命名

- `src/auto-reply/reply/auto-topic-label-config.ts`
- `src/auto-reply/reply/auto-topic-label.ts`
- `src/auto-reply/reply/conversation-label-generator.ts`
- `src/auto-reply/reply/line-directives.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：`runner/` | pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/reply-orchestration/runner` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/reply-orchestration/runner/change-to-test.md` 的验证建议。
