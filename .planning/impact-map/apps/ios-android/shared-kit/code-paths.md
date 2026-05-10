# Native Shared Kit Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Shared protocol/helper path | `apps/shared/OpenClawKit/Sources/OpenClawKit/**` | Gateway/session helpers, device capability support, shared resources. |
| Shared chat rendering path | `apps/shared/OpenClawKit/Sources/OpenClawChatUI/**` | Native chat UI, markdown rendering, tool-result presentation. |
| Protocol model path | `apps/shared/OpenClawKit/Sources/OpenClawProtocol/**` | Native payload decoding and protocol compatibility. |
| Package test path | `apps/shared/OpenClawKit/Tests/OpenClawKitTests/**` | Closest regression evidence for shared helpers. |

## Trace rule

Treat this leaf as a cross-platform dependency boundary. Pull in the consuming app leaf docs before deciding validation scope.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `16` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 14, 'A': 2}`.

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
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkSystemSpeechSynthesizerTests.swift`
- `apps/shared/OpenClawKit/Tests/OpenClawKitTests/ToolDisplayRegistryTests.swift`
- `apps/shared/OpenClawKit/Tools/CanvasA2UI/bootstrap.js`

<!-- version-diff-refresh:v2026.4.24:end -->
