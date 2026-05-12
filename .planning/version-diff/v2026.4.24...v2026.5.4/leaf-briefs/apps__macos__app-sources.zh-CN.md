# apps/macos/app-sources

## 1. 功能结论

**新增**：cron surface run diagnostics in status；**修改**：security block workspace env from overriding Windows system root paths、cron clarify no-delivery previews、macos mask sensitive wizard cli prompts、protocol refresh generated Swift models；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 43

## 3. 功能级详细差异

### 修复 cron clarify no-delivery previews

修复 cron：clarify no-delivery previews

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 cron persist manual run ids in history

修复 cron：persist manual run ids in history

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 macos avoid Tailscale hydration config rewrites

修复 macos：avoid Tailscale hydration config rewrites

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 macos mask sensitive wizard cli prompts

修复 macos：mask sensitive wizard cli prompts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 security block workspace env from overriding Windows system root pat…

修复 security：block workspace env from overriding Windows system root paths

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 cron surface run diagnostics in status

新增 cron：surface run diagnostics in status

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 构建/发布调整 protocol refresh Swift gateway models

构建/发布调整 protocol：refresh Swift gateway models

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 构建/发布调整 protocol refresh generated Swift models

构建/发布调整 protocol：refresh generated Swift models

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 stabilize session reset writer coverage

测试覆盖 stabilize session reset writer coverage

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 move swabble into apps

维护调整 move swabble into apps

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 Config Store、Open Claw Config File、Talk Mode Gateway Config，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources`
- Changed path count: `46`
- Status counts: `新增 3、修改 43`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `46` files, `+3118` / `-500`

### 归纳依据

- 主要落点：native app runtime、implementation。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(security): block workspace env from overriding Windows system root paths；feat(cron): surface run diagnostics in status；fix(cron): clarify no-delivery previews；fix(macos): mask sensitive wizard cli prompts；build(protocol): refresh generated Swift models；chore: move swabble into apps；build(protocol): refresh Swift gateway models；fix(cron): persist manual run ids in history

### Dimension evidence

- `maintenance-修复-cron-clarify-no-delivery-previews` / 修复 cron clarify no-delivery previews:
  - source: `path` [A] `apps/macos/Sources/OpenClaw/ContextRootMenuLabelView.swift`
  - source: `path` [A] `apps/macos/Sources/OpenClaw/SpeechAudioBufferNormalizer.swift`
  - source: `path` [A] `apps/macos/Sources/OpenClaw/TalkSpeechInterruptMonitor.swift`
  - source: `path` [M] `apps/macos/Package.resolved`
  - source: `path` [M] `apps/macos/Package.swift`
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift`
- `maintenance-修复-cron-persist-manual-run-ids-in-history` / 修复 cron persist manual run ids in history:
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/DebugSettings.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/Logging/OpenClawLogging.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/TailscaleIntegrationSection.swift` — semantic cue
- `maintenance-修复-macos-avoid-Tailscale-hydration-config-rewri` / 修复 macos avoid Tailscale hydration config rewrites:
  - source: `path` [M] `apps/macos/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos/Package.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasManager.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
- `maintenance-修复-macos-mask-sensitive-wizard-cli-prompts` / 修复 macos mask sensitive wizard cli prompts:
  - source: `path` [M] `apps/macos/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos/Package.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasManager.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
- `maintenance-修复-security-block-workspace-env-from-overriding` / 修复 security block workspace env from overriding Windows system root pat…:
  - source: `path` [M] `apps/macos/Sources/OpenClaw/ContextRootMenuLabelView.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift` — semantic cue
- `maintenance-新增-cron-surface-run-diagnostics-in-status` / 新增 cron surface run diagnostics in status:
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/DebugSettings.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/Logging/OpenClawLogging.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/TailscaleIntegrationSection.swift` — semantic cue
- `integration-build-release-构建-发布调整-protocol-refresh-Swift-gateway-models` / 构建/发布调整 protocol refresh Swift gateway models:
  - source: `path` [M] `apps/macos/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos/Package.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasManager.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
- `integration-build-release-构建-发布调整-protocol-refresh-generated-Swift-models` / 构建/发布调整 protocol refresh generated Swift models:
  - source: `path` [M] `apps/macos/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos/Package.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasManager.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
- `tests-docs-测试覆盖-stabilize-session-reset-writer-coverage` / 测试覆盖 stabilize session reset writer coverage:
  - source: `path` [M] `apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/SessionData.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/VoiceSessionCoordinator.swift` — semantic cue
- `maintenance-维护调整-move-swabble-into-apps` / 维护调整 move swabble into apps:
  - source: `path` [M] `apps/macos/Package.resolved` — semantic cue
  - source: `path` [M] `apps/macos/Package.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/AppState.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasManager.swift` — semantic cue
  - source: `path` [M] `apps/macos/Sources/OpenClaw/CanvasWindowController.swift` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `apps/macos/Sources/OpenClaw/ConfigStore.swift` — contract evidence
  - source: `path` [M] `apps/macos/Sources/OpenClaw/OpenClawConfigFile.swift` — contract evidence
  - source: `path` [M] `apps/macos/Sources/OpenClaw/TalkModeGatewayConfig.swift` — contract evidence

### 路径证据

- 新增 `apps/macos/Sources/OpenClaw/ContextRootMenuLabelView.swift`：调整 Context Root Menu Label View（native app runtime）。
- 新增 `apps/macos/Sources/OpenClaw/SpeechAudioBufferNormalizer.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `apps/macos/Sources/OpenClaw/TalkSpeechInterruptMonitor.swift`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 修改 `apps/macos/Package.resolved`：调整 Package（implementation）。
- 修改 `apps/macos/Package.swift`：调整 Package（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/AppState.swift`：调整 App State（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift`：调整 Canvas File Watcher（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/CanvasManager.swift`：调整 Canvas Manager（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/CanvasWindowController.swift`：调整 Canvas Window Controller（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/ConfigStore.swift`：调整 Config Store（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/Constants.swift`：调整 Constants（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/DebugSettings.swift`：调整 Debug Settings（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/ExecAllowlistMatcher.swift`：调整 Exec Allowlist Matcher（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/ExecApprovals.swift`：调整 Exec Approvals（native app runtime）。
- 修改 `apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift`：调整 Exec Approvals Socket（native app runtime）。
- 其余 31 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/macos/app-sources` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/macos/app-sources/change-to-test.md` 的验证建议。
