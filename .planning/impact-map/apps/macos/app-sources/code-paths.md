# macOS App Sources Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Settings shell to gateway run mode | `apps/macos/Sources/OpenClaw/GeneralSettings.swift` | Local/remote mode, launch-at-login, gateway status, tailscale/remote setup UX. |
| Config/channel forms to persisted config | `apps/macos/Sources/OpenClaw/ConfigSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsSettings.swift` | Schema load/save, channel configuration, provider/channel settings parity. |
| Onboarding/menu shell path | `apps/macos/Sources/OpenClaw/Onboarding*.swift`, `apps/macos/Sources/OpenClaw/Menu*.swift` | First-run guidance, session navigation, menu presentation. |
| Gateway process/runtime path | `apps/macos/Sources/OpenClaw/GatewayProcessManager.swift`, `apps/macos/Sources/OpenClaw/GatewayEnvironment.swift`, `apps/macos/Sources/OpenClaw/LaunchAgentManager.swift` | Attach-only/local runtime behavior, restart expectations, health surface. |
| Node mode and voice path | `apps/macos/Sources/OpenClaw/NodeMode/**`, `apps/macos/Sources/OpenClaw/Talk*`, `apps/macos/Sources/OpenClaw/Voice*` | Native node execution, talk mode, push-to-talk, wake forwarding. |

## Trace rule

Start with the user-facing settings/onboarding source file, then follow into the coordinating manager or store file before widening to tests or packaging.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `36` changed path(s) to this final leaf. `36` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 34, 'A': 2}`.

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
- `apps/macos/Sources/OpenClaw/GatewayEnvironment.swift`
- `apps/macos/Sources/OpenClaw/GeneralSettings.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSanitizer.swift`
- `apps/macos/Sources/OpenClaw/HostEnvSecurityPolicy.generated.swift`
- `apps/macos/Sources/OpenClaw/MenuBar.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntime.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntimeMainActorServices.swift`
- `apps/macos/Sources/OpenClaw/NodeMode/MacNodeScreenCommands.swift`
- `apps/macos/Sources/OpenClaw/NodePairingApprovalPrompter.swift`
- `apps/macos/Sources/OpenClaw/OnboardingView+Pages.swift`
- `apps/macos/Sources/OpenClaw/RemoteGatewayProbe.swift`
- `apps/macos/Sources/OpenClaw/RemotePortTunnel.swift`
- `apps/macos/Sources/OpenClaw/ScreenSnapshotService.swift`
- `apps/macos/Sources/OpenClaw/ShellExecutor.swift`
- `apps/macos/Sources/OpenClaw/SystemRunSettingsView.swift`
- `apps/macos/Sources/OpenClaw/TalkMLXSpeechSynthesizer.swift`
- `apps/macos/Sources/OpenClaw/TalkModeController.swift`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
