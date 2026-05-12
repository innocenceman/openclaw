# ui/provider-channel-settings/web-settings

## 1. 功能结论

**新增**：control-ui collapse cron new job panel、add control UI responsiveness diagnostics；**修改**：Control UI explicit action feedback、harden plugin and UI isolation checks、Refine responsive Control UI chat controls、ui cap responsiveness event logs；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：消息渠道使用者、渠道插件维护者
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 7、修改 38

## 3. 功能级详细差异

### 修复 control-ui filter archived sessions

修复 control-ui：filter archived sessions

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 cron clarify no-delivery previews

修复 cron：clarify no-delivery previews

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 ui cap responsiveness event logs

修复 ui：cap responsiveness event logs

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 ui update tweakcn appearance link

修复 ui：update tweakcn appearance link

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修复 usage serve usage from durable transcript aggregate cache

修复 usage：serve usage from durable transcript aggregate cache

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修改 Control UI explicit action feedback

修改 Control UI explicit action feedback

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 修改 Refine responsive Control UI chat controls

修改 Refine responsive Control UI chat controls

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 新增 add control UI responsiveness diagnostics

新增 add control UI responsiveness diagnostics

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 新增 control-ui collapse cron new job panel

新增 control-ui：collapse cron new job panel

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 测试覆盖 harden plugin and UI isolation checks

测试覆盖 harden plugin and UI isolation checks

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 app channels regression/contract coverage、app settings.refresh active tab.node regression/contract coverage、config regression/contract coverage、custom theme regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/provider-channel-settings/web-settings`
- Changed path count: `45`
- Status counts: `新增 7、修改 38`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `45` files, `+3819` / `-351`

### 归纳依据

- 主要落点：implementation、configuration/schema、tests/contracts、gateway runtime、session/state handling、manifest/package metadata、streaming/reasoning、model/thinking policy。
- 新增或暴露的关键符号包括：`createChannelsSnapshot`, `createHost`, `DEFAULT_SESSIONS_FILTERS`, `isChatTurnSessionChangedPayload`, `resolveUpdateVerificationBanner`, `resolvePostRestartUpdateBanner`, `isSameControlUiVersionEndpoint`, `isLoopbackHostname`, `resolveUrlEffectivePort`, `isEventForDifferentActiveRun`。
- 建议优先验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 相关 commit 主题：Control UI explicit action feedback；test: harden plugin and UI isolation checks；Refine responsive Control UI chat controls；feat(control-ui): collapse cron new job panel；fix(ui): cap responsiveness event logs；fix(control-ui): filter archived sessions；feat: add control UI responsiveness diagnostics；fix(ui): update tweakcn appearance link

### Dimension evidence

- `user-visible-修复-control-ui-filter-archived-sessions` / 修复 control-ui filter archived sessions:
  - source: `path` [M] `ui/src/ui/control-ui-performance.ts` — semantic cue
- `maintenance-修复-cron-clarify-no-delivery-previews` / 修复 cron clarify no-delivery previews:
  - source: `path` [M] `ui/src/ui/cron-payload.ts` — semantic cue
- `user-visible-修复-ui-cap-responsiveness-event-logs` / 修复 ui cap responsiveness event logs:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `user-visible-修复-ui-update-tweakcn-appearance-link` / 修复 ui update tweakcn appearance link:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `maintenance-修复-usage-serve-usage-from-durable-transcript-ag` / 修复 usage serve usage from durable transcript aggregate cache:
  - source: `path` [M] `ui/src/ui/app-render-usage-tab.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/usage-cache-status.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/usage-helpers.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/usage-types.ts` — semantic cue
- `user-visible-修改-Control-UI-explicit-action-feedback` / 修改 Control UI explicit action feedback:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `user-visible-修改-Refine-responsive-Control-UI-chat-controls` / 修改 Refine responsive Control UI chat controls:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `user-visible-新增-add-control-UI-responsiveness-diagnostics` / 新增 add control UI responsiveness diagnostics:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `user-visible-新增-control-ui-collapse-cron-new-job-panel` / 新增 control-ui collapse cron new job panel:
  - source: `path` [M] `ui/src/ui/control-ui-performance.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/cron-payload.ts` — semantic cue
- `user-visible-测试覆盖-harden-plugin-and-UI-isolation-checks` / 测试覆盖 harden plugin and UI isolation checks:
  - source: `path` [M] `ui/package.json` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-channels.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-defaults.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-gateway.ts` — semantic cue
  - source: `path` [M] `ui/src/ui/app-lifecycle.ts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `ui/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `ui/src/ui/app-channels.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/app-settings.refresh-active-tab.node.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/controllers/config.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/custom-theme.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/format.test.ts` — test evidence
  - source: `path` [M] `ui/src/ui/navigation.browser.test.ts` — test evidence

### 路径证据

- 新增 `ui/src/ui/app-channels.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `ui/src/ui/control-ui-performance.ts`：调整 control ui performance（implementation）。
- 新增 `ui/src/ui/cron-payload.ts`：调整 cron payload（implementation）。
- 新增 `ui/src/ui/lazy-view.ts`：调整 lazy view（implementation）。
- 新增 `ui/src/ui/push-subscription.ts`：调整 push subscription（implementation）。
- 新增 `ui/src/ui/strip-thinking-tags.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `ui/src/ui/usage-cache-status.ts`：调整 usage cache status（implementation）。
- 修改 `ui/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `ui/src/ui/app-channels.ts`：调整 app channels（implementation）。
- 修改 `ui/src/ui/app-defaults.ts`：调整 app defaults（implementation）。
- 修改 `ui/src/ui/app-gateway.ts`：调整 app gateway（gateway runtime）。
- 修改 `ui/src/ui/app-lifecycle.ts`：调整 app lifecycle（implementation）。
- 修改 `ui/src/ui/app-render-usage-tab.ts`：调整 app render usage tab（implementation）。
- 修改 `ui/src/ui/app-scroll.ts`：调整 app scroll（implementation）。
- 修改 `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/ui/app-settings.ts`：调整 app settings（implementation）。
- 修改 `ui/src/ui/app-tool-stream.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `ui/src/ui/app-view-state.ts`：调整 app view state（session/state handling）。
- 修改 `ui/src/ui/assistant-identity.ts`：调整 assistant identity（implementation）。
- 其余 26 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/provider-channel-settings/web-settings` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/provider-channel-settings/web-settings/change-to-test.md` 的验证建议。
