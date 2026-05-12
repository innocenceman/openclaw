# apps/ios-android/android-app/runtime-gateway-node

## 1. 功能结论

**新增**：add gateway stall diagnostics；**修改**：gateway skip IPv6 loopback binding on Windows、release prune externalized plugin chunks、live scale gateway profile timeout、simplify gateway model startup modes；**迁移/重构**：centralize reply followup drain lifecycle；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 62、修改 264、删除 5、重命名 2

## 3. 功能级详细差异

### 修复 gateway add safe restart coordinator

修复 gateway：add safe restart coordinator

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修复 gateway skip IPv6 loopback binding on Windows

修复 gateway：skip IPv6 loopback binding on Windows

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修复 harden startup readiness and discord replies

修复 harden startup readiness and discord replies

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修复 log gateway model mode defaults

修复 log gateway model mode defaults

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修复 release prune externalized plugin chunks

修复 release：prune externalized plugin chunks

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修复 simplify gateway model startup modes

修复 simplify gateway model startup modes

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 新增 add gateway stall diagnostics

新增 add gateway stall diagnostics

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 测试覆盖 live scale gateway profile timeout

测试覆盖 live：scale gateway profile timeout

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 迁移/重构 centralize reply followup drain lifecycle

迁移/重构 centralize reply followup drain lifecycle

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 android node.capabilities regression/contract coverage、assistant identity regression/contract coverage、chat attachments regression/contract coverage、cli session history regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `config recovery notice regression/contract coverage`（`src/gateway/config-recovery-notice.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `config recovery notice`（`src/gateway/config-recovery-notice.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `server startup`（`src/gateway/server-startup.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `server.legacy migration regression/contract coverage`（`src/gateway/server.legacy-migration.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`Call Log Handler Test` 路径（`apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Sms Manager Test` 路径（`apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 Gateway Bootstrap Auth Test、Node Foreground Service Test、Notification Forwarding Policy Test、Secure Prefs Notification Forwarding Test、Secure Prefs Test、Gateway Session Invoke Test；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node`
- Changed path count: `333`
- Status counts: `新增 62、修改 264、删除 5、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `333` files, `+32302` / `-10629`

### 归纳依据

- 主要落点：gateway runtime、native app runtime、mobile app runtime。
- 建议优先验证：优先运行 `pnpm android:test`；`pnpm android:lint`；`pnpm android:assemble`。
- 相关 commit 主题：fix(gateway): skip IPv6 loopback binding on Windows；fix(release): prune externalized plugin chunks；test(live): scale gateway profile timeout；fix: simplify gateway model startup modes；fix: log gateway model mode defaults；feat: add gateway stall diagnostics；Harden Codex harness control surfaces；fix: harden startup readiness and discord replies

### Dimension evidence

- `maintenance-修复-gateway-add-safe-restart-coordinator` / 修复 gateway add safe restart coordinator:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt` — semantic cue
  - source: `path` [M] `src/gateway/agent-command.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/gateway/agent-list.ts` — semantic cue
  - source: `path` [M] `src/gateway/android-node.capabilities.live.test.ts` — semantic cue
- `maintenance-修复-gateway-skip-IPv6-loopback-binding-on-Windows` / 修复 gateway skip IPv6 loopback binding on Windows:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/node/ContactsHandlerTest.kt` — semantic cue
- `maintenance-修复-harden-startup-readiness-and-discord-replies` / 修复 harden startup readiness and discord replies:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
- `maintenance-修复-log-gateway-model-mode-defaults` / 修复 log gateway model mode defaults:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeConfigParsingTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/voice/TalkModeManagerTest.kt` — semantic cue
- `maintenance-修复-release-prune-externalized-plugin-chunks` / 修复 release prune externalized plugin chunks:
  - source: `path` [M] `src/gateway/node-invoke-plugin-policy.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/node-invoke-plugin-policy.ts` — semantic cue
  - source: `path` [M] `src/gateway/plugin-activation-runtime-config.ts` — semantic cue
  - source: `path` [M] `src/gateway/plugin-channel-reload-targets.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/plugin-channel-reload-targets.ts` — semantic cue
  - source: `path` [M] `src/gateway/server-plugin-bootstrap.browser-plugin.integration.test.ts` — semantic cue
- `maintenance-修复-simplify-gateway-model-startup-modes` / 修复 simplify gateway model startup modes:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt` — semantic cue
  - source: `path` [M] `src/gateway/agent-command.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/gateway/agent-list.ts` — semantic cue
  - source: `path` [M] `src/gateway/android-node.capabilities.live.test.ts` — semantic cue
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `src/gateway/gateway-codex-bind.live.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/gateway-codex-harness.live-helpers.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/gateway-codex-harness.live-helpers.ts` — semantic cue
  - source: `path` [M] `src/gateway/gateway-codex-harness.live.test.ts` — semantic cue
  - source: `path` [M] `src/gateway/server.auth.control-ui.suite.ts` — semantic cue
  - source: `path` [M] `src/gateway/server.preauth-hardening.test.ts` — semantic cue
- `maintenance-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt` — semantic cue
  - source: `path` [M] `src/gateway/agent-command.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/gateway/agent-list.ts` — semantic cue
  - source: `path` [M] `src/gateway/android-node.capabilities.live.test.ts` — semantic cue
- `tests-docs-测试覆盖-live-scale-gateway-profile-timeout` / 测试覆盖 live scale gateway profile timeout:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/ui/GatewayConfigResolverTest.kt` — semantic cue
  - source: `path` [M] `src/gateway/agent-command.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/gateway/agent-list.ts` — semantic cue
- `migration-迁移-重构-centralize-reply-followup-drain-lifecycle` / 迁移/重构 centralize reply followup drain lifecycle:
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt` — semantic cue
  - source: `path` [M] `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/gateway/android-node.capabilities.live.test.ts` — test evidence
  - source: `path` [M] `src/gateway/assistant-identity.test.ts` — test evidence
  - source: `path` [M] `src/gateway/chat-attachments.test.ts` — test evidence
  - source: `path` [M] `src/gateway/cli-session-history.test.ts` — test evidence
  - source: `path` [M] `src/gateway/client-bootstrap.test.ts` — test evidence
  - source: `path` [M] `src/gateway/client-callsites.guard.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/gateway/config-recovery-notice.test.ts`
  - source: `path` [D] `src/gateway/config-recovery-notice.ts`
  - source: `path` [D] `src/gateway/server-startup.ts`
  - source: `path` [D] `src/gateway/server.legacy-migration.test.ts`
  - source: `path` [D] `src/gateway/server.sessions.gateway-server-sessions-a.test.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`
  - source: `path` [R] `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt`
  - source: `path` [A] `src/gateway/agent-command.test-helpers.ts`
  - source: `path` [A] `src/gateway/chat-display-projection.ts`
  - source: `path` [A] `src/gateway/client-start-readiness.test.ts`
  - source: `path` [A] `src/gateway/client-start-readiness.ts`
  - source: `path` [A] `src/gateway/config-diff.ts`

### 路径证据

- 新增 `apps/android/app/src/test/java/ai/openclaw/app/node/NodePresenceAliveBeaconTest.kt`：调整 Node Presence Alive Beacon Test（native app runtime）。
- 新增 `src/gateway/agent-command.test-helpers.ts`：调整 agent command.test helpers（gateway runtime）。
- 新增 `src/gateway/chat-display-projection.ts`：调整 chat display projection（gateway runtime）。
- 新增 `src/gateway/client-start-readiness.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/client-start-readiness.ts`：调整 client start readiness（gateway runtime）。
- 新增 `src/gateway/config-diff.ts`：调整 config diff（gateway runtime）。
- 新增 `src/gateway/config-reload-settings.ts`：调整 config reload settings（gateway runtime）。
- 新增 `src/gateway/env-deprecation.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/env-deprecation.ts`：调整 env deprecation（gateway runtime）。
- 新增 `src/gateway/event-loop-ready.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/gateway/event-loop-ready.ts`：调整 event loop ready（gateway runtime）。
- 新增 `src/gateway/exec-approval-manager.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/GatewayBootstrapAuthTest.kt`：调整 Gateway Bootstrap Auth Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/NodeForegroundServiceTest.kt`：调整 Node Foreground Service Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/NotificationForwardingPolicyTest.kt`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsNotificationForwardingTest.kt`：调整 Secure Prefs Notification Forwarding Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/SecurePrefsTest.kt`：调整 Secure Prefs Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/gateway/GatewaySessionInvokeTest.kt`：调整 Gateway Session Invoke Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/CalendarHandlerTest.kt`：调整 Calendar Handler Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/ConnectionManagerTest.kt`：调整 Connection Manager Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/ContactsHandlerTest.kt`：调整 Contacts Handler Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceHandlerTest.kt`：调整 Device Handler Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/DeviceNotificationListenerServiceTest.kt`：调整 Device Notification Listener Service Test（native app runtime）。
- 修改 `apps/android/app/src/test/java/ai/openclaw/app/node/InvokeCommandRegistryTest.kt`：调整 Invoke Command Registry Test（native app runtime）。
- 删除 `src/gateway/config-recovery-notice.test.ts`：移除旧的 gateway runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/gateway/config-recovery-notice.ts`：移除旧的 gateway runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/gateway/server-startup.ts`：移除旧的 gateway runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/gateway/server.legacy-migration.test.ts`：移除旧的 gateway runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/gateway/server.sessions.gateway-server-sessions-a.test.ts`：移除旧的 gateway runtime 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `apps/android/app/src/test/java/ai/openclaw/app/node/CallLogHandlerTest.kt`：调整 Call Log Handler Test（native app runtime）。
- 重命名 `apps/android/app/src/test/java/ai/openclaw/app/node/SmsManagerTest.kt`：调整 Sms Manager Test（native app runtime）。
- 其余 302 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/android-app/runtime-gateway-node` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/android-app/runtime-gateway-node/change-to-test.md` 的验证建议。
