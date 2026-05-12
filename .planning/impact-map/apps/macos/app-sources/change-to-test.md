# macOS App Sources Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Settings, onboarding, or menu shell changed | Run the nearest macOS XCTest or smoke on the Mac | Escalate to `scripts/restart-mac.sh` when the flow crosses gateway lifecycle or packaged app launch behavior. |
| Gateway process/runtime changed | `scripts/restart-mac.sh` on the Mac | Escalate to packaged-app verification when launch agent, attach-only behavior, or restart wiring changes. |
| Node mode or voice surface changed | Run the nearest macOS XCTest/smoke for that surface | Escalate to broader runtime smoke when the change crosses app shell, permissions, or gateway coordination. |

## Validation evidence

No macOS tests or app restarts were run while promoting this leaf. Guidance is grounded in observed source/test layout and the repo-documented restart flow.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `36` (修改 34，新增 2).
- Target-existing path refs in active map: `36`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
