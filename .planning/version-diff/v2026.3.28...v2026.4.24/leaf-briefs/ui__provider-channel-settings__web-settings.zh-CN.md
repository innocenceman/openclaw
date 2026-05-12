# ui/provider-channel-settings/web-settings

## 一句话结论

web settings 所属的 Memory, media, web UI and terminal UI surfaces 有 64 个路径变化（新增 20、修改 44），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings`
- Changed path count: `64`
- Status counts: `新增 20、修改 44`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `64` files, `+5350` / `-1359`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 20、修改 44。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/ui-app-settings.agents-files-refresh.test.ts`
- `ui/src/ui/app-last-active-session.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/canvas-url.ts`
- `ui/src/ui/chat-model-ref.types.ts`
- `ui/src/ui/connect-error.node.test.ts`
- `ui/src/ui/connect-error.test.ts`
- `ui/src/ui/control-ui-auth.ts`
- `ui/src/ui/controllers/channels.test.ts`
- `ui/src/ui/custom-theme.test.ts`
- `ui/src/ui/custom-theme.ts`
- `ui/src/ui/embed-sandbox.ts`
- `ui/src/ui/model-auth-helpers.ts`
- `ui/src/ui/plugin-activation.ts`
- `ui/src/ui/select-options.ts`
- `ui/src/ui/session-key.ts`
- `ui/src/ui/sidebar-content.ts`
- `ui/src/ui/string-coerce.ts`
- `ui/src/ui/thinking.ts`
- `ui/src/ui/user-identity.ts`

### 修改

- `ui/package.json`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-polling.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/chat-event-reload.ts`
- `ui/src/ui/chat-model-ref.ts`
- `ui/src/ui/chat-model-select-state.ts`
- `ui/src/ui/chat-model.test-helpers.ts`
- `ui/src/ui/connect-error.ts`
- `ui/src/ui/controllers/channels.ts`
- `ui/src/ui/controllers/config.test.ts`
- `ui/src/ui/controllers/config.ts`
- `ui/src/ui/external-link.ts`
- `ui/src/ui/format.test.ts`
- `ui/src/ui/format.ts`
- `ui/src/ui/gateway.node.test.ts`
- `ui/src/ui/gateway.ts`
- `ui/src/ui/icons.ts`
- `ui/src/ui/markdown.test.ts`
- `ui/src/ui/markdown.ts`
- `ui/src/ui/navigation.browser.test.ts`
- `ui/src/ui/navigation.test.ts`
- `ui/src/ui/navigation.ts`
- `ui/src/ui/open-external-url.ts`
- `ui/src/ui/presenter.ts`
- `ui/src/ui/test-helpers/app-mount.ts`
- … 另有 14 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 消息渠道使用者
- 渠道插件维护者

## 建议验证

- 首选验证：Config form/controller logic changed | `pnpm test:ui` | Escalate to `pnpm ui:build` when schema rendering or published control-ui output changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `ui/provider-channel-settings/web-settings` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/provider-channel-settings/web-settings/change-to-test.md` 的验证建议。
