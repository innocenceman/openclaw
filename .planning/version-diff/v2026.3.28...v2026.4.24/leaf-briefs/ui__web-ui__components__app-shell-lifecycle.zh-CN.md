# ui/web-ui/components/app-shell-lifecycle

## 一句话结论

app shell lifecycle 所属的 Memory, media, web UI and terminal UI surfaces 有 53 个路径变化（新增 17、修改 31、删除 5），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle`
- Changed path count: `53`
- Status counts: `新增 17、修改 31、删除 5`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `53` files, `+22625` / `-2357`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 17、修改 31、删除 5。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/canvas-host/a2ui/.bundle.hash`
- `src/canvas-host/a2ui/a2ui.bundle.js`
- `ui/src/ui/canvas-url.test.ts`
- `ui/src/ui/chat/build-chat-items.test.ts`
- `ui/src/ui/chat/context-notice.test.ts`
- `ui/src/ui/chat/grouped-render.test.ts`
- `ui/src/ui/chat/run-controls.test.ts`
- `ui/src/ui/chat/session-controls.test.ts`
- `ui/src/ui/chat/status-indicators.test.ts`
- `ui/src/ui/chat/tool-expansion-state.test.ts`
- `ui/src/ui/plugin-activation.test.ts`
- `ui/src/ui/user-identity.test.ts`
- `ui/src/ui/views/command-palette.test.ts`
- `ui/src/ui/views/config-quick.test.ts`
- `ui/src/ui/views/cron-quick-create.node.test.ts`
- `ui/src/ui/views/dreaming.test.ts`
- `ui/src/ui/views/overview.render.test.ts`

### 修改

- `src/canvas-host/a2ui.ts`
- `src/canvas-host/a2ui/index.html`
- `src/canvas-host/server.test.ts`
- `src/canvas-host/server.ts`
- `ui/src/ui/app-gateway.node.test.ts`
- `ui/src/ui/app-gateway.sessions.node.test.ts`
- `ui/src/ui/app-lifecycle-connect.node.test.ts`
- `ui/src/ui/app-lifecycle.node.test.ts`
- `ui/src/ui/app-tool-stream.node.test.ts`
- `ui/src/ui/chat-event-reload.test.ts`
- `ui/src/ui/chat-model-ref.test.ts`
- `ui/src/ui/chat-model-select-state.test.ts`
- `ui/src/ui/chat/export.node.test.ts`
- `ui/src/ui/chat/message-extract.test.ts`
- `ui/src/ui/chat/message-normalizer.test.ts`
- `ui/src/ui/chat/slash-command-executor.node.test.ts`
- `ui/src/ui/chat/slash-commands.node.test.ts`
- `ui/src/ui/chat/tool-cards.test.ts`
- `ui/src/ui/config-form.browser.test.ts`
- `ui/src/ui/navigation-groups.test.ts`
- `ui/src/ui/usage-helpers.node.test.ts`
- `ui/src/ui/uuid.test.ts`
- `ui/src/ui/views/agents-panels-tools-skills.browser.test.ts`
- `ui/src/ui/views/agents-utils.test.ts`
- `ui/src/ui/views/agents.test.ts`
- `ui/src/ui/views/chat.test.ts`
- `ui/src/ui/views/cron.test.ts`
- `ui/src/ui/views/nodes.devices.test.ts`
- `ui/src/ui/views/overview.node.test.ts`
- `ui/src/ui/views/sessions.test.ts`
- … 另有 1 个路径，详见 `leaf-impact.json`。

### 删除

- `ui/src/ui/chat-markdown.browser.test.ts`
- `ui/src/ui/focus-mode.browser.test.ts`
- `ui/src/ui/sidebar-status.browser.test.ts`
- `ui/src/ui/views/chat-image-open.browser.test.ts`
- `ui/src/ui/views/chat.browser.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：2. Run `pnpm --dir ui test` for unit/browser/node coverage.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `ui/web-ui/components/app-shell-lifecycle` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle/change-to-test.md` 的验证建议。
