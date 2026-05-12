# ui/web-ui/components/app-shell-lifecycle

## 1. 功能结论

**新增**：control-ui collapse cron new job panel；**修改**：repair current main checks、Control UI explicit action feedback、stabilize full crabbox sweep、harden plugin and UI isolation checks；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 20、修改 28、删除 3

## 3. 功能级详细差异

### 修复 control-ui dismiss talk startup errors

修复 control-ui：dismiss talk startup errors

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 修复 ui cap responsiveness event logs

修复 ui：cap responsiveness event logs

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 修复 ui retry errored talk sessions

修复 ui：retry errored talk sessions

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 修改 Control UI explicit action feedback

修改 Control UI explicit action feedback

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 修改 Fix Control UI i18n tooltip placeholders

修改 Fix Control UI i18n tooltip placeholders

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 修改 Refine responsive Control UI chat controls

修改 Refine responsive Control UI chat controls

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 新增 control-ui collapse cron new job panel

新增 control-ui：collapse cron new job panel

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 测试覆盖 harden plugin and UI isolation checks

测试覆盖 harden plugin and UI isolation checks

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 测试覆盖 repair current main checks

测试覆盖 repair current main checks

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 测试覆盖 stabilize full crabbox sweep

测试覆盖 stabilize full crabbox sweep

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 build chat items regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 server regression/contract coverage、app defaults regression/contract coverage、app gateway chat load.node regression/contract coverage、app gateway.node regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `context notice regression/contract coverage`（`ui/src/ui/chat/context-notice.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `session controls regression/contract coverage`（`ui/src/ui/chat/session-controls.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `status indicators regression/contract coverage`（`ui/src/ui/chat/status-indicators.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle`
- Changed path count: `51`
- Status counts: `新增 20、修改 28、删除 3`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `51` files, `+7494` / `-2010`

### 归纳依据

- 主要落点：tests/contracts、implementation、gateway runtime、CLI/command behavior、configuration/schema、session/state handling、message delivery。
- 新增或暴露的关键符号包括：`A2UI_PATH`, `CANVAS_HOST_PATH`, `CANVAS_WS_PATH`, `isA2uiPath`, `injectCanvasLiveReload`, `defaultEquals`, `SIGNAL`, `setActiveConsumer`, `getActiveConsumer`, `isInNotificationPhase`。
- 建议优先验证：优先运行 `pnpm --dir ui test`；`pnpm ui:build`；`pnpm lint:ui:no-raw-window-open`。
- 相关 commit 主题：test: repair current main checks；Control UI explicit action feedback；test: stabilize full crabbox sweep；test: harden plugin and UI isolation checks；Refine responsive Control UI chat controls；Fix Control UI i18n tooltip placeholders；fix(ui): retry errored talk sessions；feat(control-ui): collapse cron new job panel

### Dimension evidence

- `user-visible-修复-control-ui-dismiss-talk-startup-errors` / 修复 control-ui dismiss talk startup errors:
  - source: `path` [M] `ui/src/ui/app.talk.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/control-ui-performance.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/realtime-talk-google-live.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/realtime-talk-webrtc.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/realtime-talk.test.ts` — semantic cue
- `user-visible-修复-ui-cap-responsiveness-event-logs` / 修复 ui cap responsiveness event logs:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `user-visible-修复-ui-retry-errored-talk-sessions` / 修复 ui retry errored talk sessions:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `user-visible-修改-Control-UI-explicit-action-feedback` / 修改 Control UI explicit action feedback:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `user-visible-修改-Fix-Control-UI-i18n-tooltip-placeholders` / 修改 Fix Control UI i18n tooltip placeholders:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `user-visible-修改-Refine-responsive-Control-UI-chat-controls` / 修改 Refine responsive Control UI chat controls:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `user-visible-新增-control-ui-collapse-cron-new-job-panel` / 新增 control-ui collapse cron new job panel:
  - source: `path` [M] `ui/src/ui/control-ui-performance.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/views/cron.test.ts` — semantic cue
- `user-visible-测试覆盖-harden-plugin-and-UI-isolation-checks` / 测试覆盖 harden plugin and UI isolation checks:
  - source: `path` [M] `src/canvas-host/a2ui-shared.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui.ts` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash` — semantic cue
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — semantic cue
- `tests-docs-测试覆盖-repair-current-main-checks` / 测试覆盖 repair current main checks:
  - source: `path` [A] `src/canvas-host/a2ui-shared.ts`
  - source: `path` [A] `ui/src/ui/app-defaults.test.ts`
  - source: `path` [A] `ui/src/ui/app-gateway-chat-load.node.test.ts`
  - source: `path` [M] `src/canvas-host/a2ui.ts`
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash`
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js`
- `tests-docs-测试覆盖-stabilize-full-crabbox-sweep` / 测试覆盖 stabilize full crabbox sweep:
  - source: `path` [A] `src/canvas-host/a2ui-shared.ts`
  - source: `path` [A] `ui/src/ui/app-defaults.test.ts`
  - source: `path` [A] `ui/src/ui/app-gateway-chat-load.node.test.ts`
  - source: `path` [M] `src/canvas-host/a2ui.ts`
  - source: `path` [M] `src/canvas-host/a2ui/.bundle.hash`
  - source: `path` [M] `src/canvas-host/a2ui/a2ui.bundle.js`
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `ui/src/ui/chat/build-chat-items.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/canvas-host/server.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-defaults.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-gateway-chat-load.node.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-gateway.node.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-gateway.sessions.node.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-scroll.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `ui/src/ui/chat/context-notice.test.ts`
  - source: `path` [D] `ui/src/ui/chat/session-controls.test.ts`
  - source: `path` [D] `ui/src/ui/chat/status-indicators.test.ts`

### 路径证据

- 新增 `src/canvas-host/a2ui-shared.ts`：调整 a2ui shared（implementation）。
- 新增 `ui/src/ui/app-defaults.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/app-gateway-chat-load.node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/app.talk.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/assistant-identity.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/chat/chat-avatar.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/chat/chat-responsive.browser.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/chat/history-merge.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/chat/role-normalizer.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/control-ui-performance.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/lazy-view.browser.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/realtime-talk-google-live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/canvas-host/a2ui.ts`：调整 a2ui（implementation）。
- 修改 `src/canvas-host/a2ui/.bundle.hash`：调整 .bundle（implementation）。
- 修改 `src/canvas-host/a2ui/a2ui.bundle.js`：调整 a2ui.bundle（implementation）。
- 修改 `src/canvas-host/server.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/canvas-host/server.ts`：调整 server（implementation）。
- 修改 `ui/src/ui/app-gateway.node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-gateway.sessions.node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-scroll.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/chat-event-reload.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/chat/build-chat-items.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/chat/grouped-render.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/chat/message-normalizer.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `ui/src/ui/chat/context-notice.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `ui/src/ui/chat/session-controls.test.ts`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `ui/src/ui/chat/status-indicators.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 其余 24 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/web-ui/components/app-shell-lifecycle` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/components/app-shell-lifecycle/change-to-test.md` 的验证建议。
