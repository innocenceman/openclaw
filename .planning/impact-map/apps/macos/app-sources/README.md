# macOS App Sources

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `apps/macos/Sources/**` plus `apps/macos/Package.swift` as the app build entrypoint.

## Leaf status

This is a Wave 3 priority completion unit because it owns the macOS menu bar runtime, gateway coordination, settings UX, onboarding, and node-mode integration.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `36` (修改 34，新增 2).
- Target-existing changed paths listed here: `36`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/macos/Package.resolved`
- `apps/macos/Package.swift`
- `apps/macos/Sources/OpenClaw/AppState.swift`
- `apps/macos/Sources/OpenClaw/ChannelsStore+Lifecycle.swift`
- `apps/macos/Sources/OpenClaw/ChannelsStore.swift`
- `apps/macos/Sources/OpenClaw/CommandResolver.swift`
- `apps/macos/Sources/OpenClaw/Constants.swift`
- `apps/macos/Sources/OpenClaw/ExecAllowlistMatcher.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalCommandDisplaySanitizer.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovals.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift`
- `apps/macos/Sources/OpenClaw/GatewayConnection.swift`
- `... 另有 24 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `46`
- Target-existing changed paths reflected here: `46`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `apps/macos/Package.resolved`
- `apps/macos/Package.swift`
- `apps/macos/Sources/OpenClaw/AppState.swift`
- `apps/macos/Sources/OpenClaw/CanvasFileWatcher.swift`
- `apps/macos/Sources/OpenClaw/CanvasManager.swift`
- `apps/macos/Sources/OpenClaw/CanvasWindowController.swift`
- `apps/macos/Sources/OpenClaw/ConfigStore.swift`
- `apps/macos/Sources/OpenClaw/Constants.swift`
- `apps/macos/Sources/OpenClaw/ContextRootMenuLabelView.swift`
- `apps/macos/Sources/OpenClaw/DebugSettings.swift`
- `apps/macos/Sources/OpenClaw/ExecAllowlistMatcher.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovals.swift`
- `apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift`
- `apps/macos/Sources/OpenClaw/GatewayConnection.swift`
- `apps/macos/Sources/OpenClaw/GatewayDiscoverySelectionSupport.swift`
- `apps/macos/Sources/OpenClaw/GatewayLaunchAgentManager.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift`
- `apps/macos/Sources/OpenClaw/Logging/OpenClawLogging.swift`
- `apps/macos/Sources/OpenClaw/MenuBar.swift`
- `apps/macos/Sources/OpenClaw/MenuContentView.swift`
- `apps/macos/Sources/OpenClaw/MenuSessionsInjector.swift`
- `apps/macos/Sources/OpenClaw/ModelCatalogLoader.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeBrowserProxy.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift`
- `apps/macos/Sources/OpenClaw/NodesMenu.swift`
- `apps/macos/Sources/OpenClaw/OpenClawConfigFile.swift`
- `apps/macos/Sources/OpenClaw/RemotePortTunnel.swift`
- `apps/macos/Sources/OpenClaw/SessionData.swift`
- `apps/macos/Sources/OpenClaw/SpeechAudioBufferNormalizer.swift`
- `apps/macos/Sources/OpenClaw/TailscaleIntegrationSection.swift`
- `apps/macos/Sources/OpenClaw/TalkModeController.swift`
- `apps/macos/Sources/OpenClaw/TalkModeGatewayConfig.swift`
- `apps/macos/Sources/OpenClaw/TalkModeRuntime.swift`
- `apps/macos/Sources/OpenClaw/TalkSpeechInterruptMonitor.swift`
- `apps/macos/Sources/OpenClaw/VoicePushToTalk.swift`
- `apps/macos/Sources/OpenClaw/VoiceSessionCoordinator.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeForwarder.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeRecognitionDebugSupport.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeRuntime.swift`
- `apps/macos/Sources/OpenClaw/VoiceWakeSettings.swift`
- … plus 6 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
