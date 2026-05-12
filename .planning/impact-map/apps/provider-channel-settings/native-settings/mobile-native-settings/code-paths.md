# Mobile Native Settings Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Risk |
| --- | --- | --- |
| Native settings flow | `apps/ios/Sources/*Gateway*`, `apps/ios/Tests/*Gateway*`, `apps/android/app/src/main/java/ai/openclaw/app/ui/*Settings*`, `ConnectTabScreen.kt` | Provider/channel list drift, persisted auth/config state drift, platform-specific form behavior. |
| Parity edge | `ui/provider-channel-settings/web-settings/` and docs sync | Web/native/docs provider and channel surfaces can diverge. |
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 3, 'M': 5}`.

- `apps/ios/Sources/Gateway/ExecApprovalPromptDialog.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`
- `apps/ios/Sources/Gateway/GatewayProblemView.swift`
- `apps/ios/Sources/Gateway/GatewayQuickSetupSheet.swift`
- `apps/ios/Sources/Status/GatewayStatusBuilder.swift`
- `apps/ios/Tests/GatewayConnectionControllerTests.swift`
- `apps/ios/Tests/GatewayConnectionSecurityTests.swift`
- `apps/ios/Tests/GatewayStatusBuilderTests.swift`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `apps/ios/Sources/Chat/IOSGatewayChatTransport.swift`
- `apps/ios/Sources/Gateway/GatewayConnectConfig.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`
- `apps/ios/Sources/Gateway/GatewayHealthMonitor.swift`
- `apps/ios/Sources/Gateway/GatewayProblemView.swift`
- `apps/ios/Sources/Gateway/GatewayServiceResolver.swift`
- `apps/ios/Sources/Gateway/TCPProbe.swift`
- `apps/ios/Sources/Voice/TalkModeGatewayConfig.swift`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.
<!-- version-diff-refresh:v2026.5.4:end -->
