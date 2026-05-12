# Native Shared Kit

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `apps/shared/OpenClawKit/**`.

## Leaf status

This leaf holds the shared Swift package consumed across native surfaces for protocol types, gateway helpers, reusable chat UI, resources, and package-local tests.

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
- Changed paths in this leaf: `16` (修改 14，新增 2).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/Resources/tool-display.json`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ScreenCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/ToolDisplay.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawKit/WatchCommands.swift`
- `apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatComposerTextViewTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayErrorsTests.swift`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `47`
- Target-existing changed paths reflected here: `47`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
