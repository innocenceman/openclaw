# ui/web-ui/components

## 1. 功能结论

**新增**：control-ui collapse cron new job panel；**修改**：Control UI explicit action feedback、Refine responsive Control UI chat controls、Fix Control UI i18n tooltip placeholders、ui retry errored talk sessions；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 21、修改 59、删除 1

## 3. 功能级详细差异

### 修复 control-ui contain access settings fields

修复 control-ui：contain access settings fields

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 control-ui dismiss talk startup errors

修复 control-ui：dismiss talk startup errors

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 ui clean archived session state reads

修复 ui：clean archived session state reads

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 ui retry errored talk sessions

修复 ui：retry errored talk sessions

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 ui stop stale talk sessions

修复 ui：stop stale talk sessions

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修改 Control UI explicit action feedback

修改 Control UI explicit action feedback

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修改 Fix Control UI i18n tooltip placeholders

修改 Fix Control UI i18n tooltip placeholders

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修改 Refine responsive Control UI chat controls

修改 Refine responsive Control UI chat controls

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 新增 control-ui collapse cron new job panel

新增 control-ui：collapse cron new job panel

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 测试覆盖 ui remove duplicate archived fixture key

测试覆盖 ui：remove duplicate archived fixture key

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 build chat items，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 app chat regression/contract coverage、app render.assistant avatar regression/contract coverage、app render.helpers.browser regression/contract coverage、app render.helpers.node regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `speech`（`ui/src/ui/chat/speech.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/components`
- Changed path count: `81`
- Status counts: `新增 21、修改 59、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `81` files, `+9812` / `-2255`

### 归纳依据

- 主要落点：implementation、tests/contracts、session/state handling、CLI/command behavior、message delivery、gateway runtime、configuration/schema、speech/TTS。
- 新增或暴露的关键符号包括：`hasAbortableSessionRun`, `confirmChatResetCommand`, `attachmentSubmitSignature`, `chatSubmitKey`, `clearChatAvatarState`, `setChatAvatarMeta`, `createState`, `row`, `renderRefreshButton`, `createChatSessionState`。
- 建议优先验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 相关 commit 主题：Control UI explicit action feedback；Refine responsive Control UI chat controls；Fix Control UI i18n tooltip placeholders；fix(ui): retry errored talk sessions；fix(ui): stop stale talk sessions；feat(control-ui): collapse cron new job panel；test(ui): remove duplicate archived fixture key；fix(ui): clean archived session state reads

### Dimension evidence

- `user-visible-修复-control-ui-contain-access-settings-fields` / 修复 control-ui contain access settings fields:
  - source: `path` [M] `ui/src/ui/controllers/control-ui-bootstrap.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/controllers/control-ui-bootstrap.ts` — semantic cue
- `user-visible-修复-control-ui-dismiss-talk-startup-errors` / 修复 control-ui dismiss talk startup errors:
  - source: `path` [M] `ui/src/ui/chat/realtime-talk-audio.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/chat/realtime-talk-gateway-relay.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/chat/realtime-talk-google-live.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/chat/realtime-talk-shared.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/chat/realtime-talk-webrtc.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/chat/realtime-talk.ts` — semantic cue
- `user-visible-修复-ui-clean-archived-session-state-reads` / 修复 ui clean archived session state reads:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-修复-ui-retry-errored-talk-sessions` / 修复 ui retry errored talk sessions:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-修复-ui-stop-stale-talk-sessions` / 修复 ui stop stale talk sessions:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-修改-Control-UI-explicit-action-feedback` / 修改 Control UI explicit action feedback:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-修改-Fix-Control-UI-i18n-tooltip-placeholders` / 修改 Fix Control UI i18n tooltip placeholders:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-修改-Refine-responsive-Control-UI-chat-controls` / 修改 Refine responsive Control UI chat controls:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `user-visible-新增-control-ui-collapse-cron-new-job-panel` / 新增 control-ui collapse cron new job panel:
  - source: `path` [M] `ui/src/ui/controllers/control-ui-bootstrap.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/controllers/control-ui-bootstrap.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/controllers/cron.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/controllers/cron.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/views/agents-panels-overview.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/views/agents-panels-status-files.ts` — semantic cue
- `user-visible-测试覆盖-ui-remove-duplicate-archived-fixture-key` / 测试覆盖 ui remove duplicate archived fixture key:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-chat.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-render.helpers.ts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `ui/src/ui/chat/build-chat-items.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `ui/src/ui/app-chat.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-render.assistant-avatar.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-render.helpers.browser.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-render.helpers.node.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/chat/slash-commands.browser-import.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/chat/tool-cards.node.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `ui/src/ui/chat/speech.ts`

### 路径证据

- 新增 `ui/src/ui/app-render.assistant-avatar.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/chat/attachment-payload-store.ts`：调整 attachment payload store（session/state handling）。
- 新增 `ui/src/ui/chat/chat-avatar.ts`：调整 chat avatar（implementation）。
- 新增 `ui/src/ui/chat/chat-queue.ts`：调整 chat queue（implementation）。
- 新增 `ui/src/ui/chat/chat-sidebar-raw.ts`：调整 chat sidebar raw（implementation）。
- 新增 `ui/src/ui/chat/chat-welcome.ts`：调整 chat welcome（implementation）。
- 新增 `ui/src/ui/chat/history-limits.ts`：调整 history limits（implementation）。
- 新增 `ui/src/ui/chat/realtime-talk-audio.ts`：调整 realtime talk audio（implementation）。
- 新增 `ui/src/ui/chat/realtime-talk-gateway-relay.ts`：调整 realtime talk gateway relay（gateway runtime）。
- 新增 `ui/src/ui/chat/realtime-talk-google-live.ts`：调整 realtime talk google live（implementation）。
- 新增 `ui/src/ui/chat/realtime-talk-shared.ts`：调整 realtime talk shared（implementation）。
- 新增 `ui/src/ui/chat/realtime-talk-webrtc.ts`：调整 realtime talk webrtc（implementation）。
- 修改 `ui/src/ui/app-chat.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-chat.ts`：调整 app chat（implementation）。
- 修改 `ui/src/ui/app-render.helpers.browser.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-render.helpers.node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-render.helpers.ts`：调整 app render（implementation）。
- 修改 `ui/src/ui/app-render.ts`：调整 app render（implementation）。
- 修改 `ui/src/ui/app.ts`：调整 app（implementation）。
- 修改 `ui/src/ui/chat/attachment-support.ts`：调整 attachment support（implementation）。
- 修改 `ui/src/ui/chat/build-chat-items.ts`：调整 build chat items（implementation）。
- 修改 `ui/src/ui/chat/grouped-render.ts`：调整 grouped render（implementation）。
- 修改 `ui/src/ui/chat/input-history.ts`：调整 input history（implementation）。
- 修改 `ui/src/ui/chat/message-extract.ts`：调整 message extract（message delivery）。
- 删除 `ui/src/ui/chat/speech.ts`：移除旧的 speech/TTS 文件；需要确认没有调用方继续依赖这个路径。
- 其余 56 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/web-ui/components` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/components/change-to-test.md` 的验证建议。
