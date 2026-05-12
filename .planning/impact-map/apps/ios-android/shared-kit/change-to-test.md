# Native Shared Kit Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Shared Swift helper or protocol changed | Run the nearest consuming XCTest target plus the relevant native app build path (`pnpm ios:build` or macOS app smoke) | Escalate to multiple native app leaves when protocol or resource packaging changes cross platforms. |
| Shared chat UI changed | Run the nearest native chat regression/smoke in the consuming app | Escalate to broader app-shell validation when rendering or markdown behavior changes. |
| Package manifest/resources changed | Rebuild the affected native consumer(s) | Escalate to all native consumers when target layout or bundled resources change. |

## Validation evidence

No shared-kit builds or tests were run while promoting this leaf. Validation guidance is grounded in the observed package layout and consuming app boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `16` (修改 14，新增 2).
- Target-existing path refs in active map: `16`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `apps/shared/OpenClawKit/Package.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessions.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTheme.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTransport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/AnyCodable+Helpers.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/AnyCodable.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/BonjourTypes.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/CaptureRateLimits.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeepLinks.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceAuthPayload.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceAuthStore.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceIdentity.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectChallengeSupport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayDiscoveryStatusText.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayPayloadDecoding.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GenericPasswordKeychainStore.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/InstanceIdentity.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/LocationCurrentRequest.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/LocationServiceSupport.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/OpenClawKitResources.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/PhotoCapture.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ShareToAgentDeepLink.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkConfigParsing.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkPromptBuilder.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkSystemSpeechSynthesizer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/AnyCodable.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- … plus 7 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
