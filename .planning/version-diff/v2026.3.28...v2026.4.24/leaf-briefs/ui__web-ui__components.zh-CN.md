# ui/web-ui/components

## 一句话结论

components 所属的 Memory, media, web UI and terminal UI surfaces 有 83 个路径变化（新增 20、修改 63），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components`
- Changed path count: `83`
- Status counts: `新增 20、修改 63`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `83` files, `+15983` / `-2919`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 20、修改 63。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `ui/src/ui/app-render.helpers.browser.test.ts`
- `ui/src/ui/chat/build-chat-items.ts`
- `ui/src/ui/chat/context-notice.ts`
- `ui/src/ui/chat/realtime-talk.ts`
- `ui/src/ui/chat/run-controls.ts`
- `ui/src/ui/chat/session-controls.ts`
- `ui/src/ui/chat/side-result-render.ts`
- `ui/src/ui/chat/side-result.ts`
- `ui/src/ui/chat/status-indicators.ts`
- `ui/src/ui/chat/tool-expansion-state.ts`
- `ui/src/ui/controllers/dreaming.test.ts`
- `ui/src/ui/controllers/dreaming.ts`
- `ui/src/ui/controllers/model-auth-status.ts`
- `ui/src/ui/controllers/skills.test.ts`
- `ui/src/ui/views/agents.types.ts`
- `ui/src/ui/views/config-presets.ts`
- `ui/src/ui/views/config-quick.ts`
- `ui/src/ui/views/cron-quick-create.ts`
- `ui/src/ui/views/dreaming.ts`
- `ui/src/ui/views/nodes.types.ts`

### 修改

- `ui/src/ui/app-chat.test.ts`
- `ui/src/ui/app-chat.ts`
- `ui/src/ui/app-render.helpers.node.test.ts`
- `ui/src/ui/app-render.helpers.ts`
- `ui/src/ui/app-render.ts`
- `ui/src/ui/app.ts`
- `ui/src/ui/chat/grouped-render.ts`
- `ui/src/ui/chat/message-extract.ts`
- `ui/src/ui/chat/message-normalizer.ts`
- `ui/src/ui/chat/search-match.ts`
- `ui/src/ui/chat/slash-command-executor.ts`
- `ui/src/ui/chat/slash-commands.ts`
- `ui/src/ui/chat/tool-cards.ts`
- `ui/src/ui/components/dashboard-header.ts`
- `ui/src/ui/components/resizable-divider.ts`
- `ui/src/ui/controllers/agents.test.ts`
- `ui/src/ui/controllers/agents.ts`
- `ui/src/ui/controllers/chat.test.ts`
- `ui/src/ui/controllers/chat.ts`
- `ui/src/ui/controllers/config/form-utils.node.test.ts`
- `ui/src/ui/controllers/config/form-utils.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.test.ts`
- `ui/src/ui/controllers/control-ui-bootstrap.ts`
- `ui/src/ui/controllers/cron.test.ts`
- `ui/src/ui/controllers/cron.ts`
- `ui/src/ui/controllers/devices.ts`
- `ui/src/ui/controllers/exec-approval.ts`
- `ui/src/ui/controllers/logs.ts`
- `ui/src/ui/controllers/sessions.test.ts`
- `ui/src/ui/controllers/sessions.ts`
- … 另有 33 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Controller or view logic changed | `pnpm test:ui` | Escalate to `pnpm ui:build` when the change affects bundled output or route-wide rendering.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `ui/web-ui/components` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/components/change-to-test.md` 的验证建议。
