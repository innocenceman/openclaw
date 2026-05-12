# Native Shared Kit File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/shared/OpenClawKit/Package.swift` | Swift package manifest and target layout. | `exceptioned-deep-partial` | Defines how native consumers import shared code and resources. |
| `apps/shared/OpenClawKit/Sources/OpenClawKit/**` | Core shared runtime helpers, protocol-adjacent utilities, and resources. | `exceptioned-deep-partial` | Changes can affect iOS, macOS, and Android packaged resources. |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/**` | Reusable chat UI and message formatting primitives. | `exceptioned-deep-partial` | Shared rendering drift can surface across native app chat surfaces. |
| `apps/shared/OpenClawKit/Sources/OpenClawProtocol/**` | Shared protocol/data-model layer. | `exceptioned-deep-partial` | Contract drift affects gateway payload decoding and compatibility. |
| `apps/shared/OpenClawKit/Tests/OpenClawKitTests/**` | Package-local XCTest coverage. | `exceptioned-deep-partial` | Closest regression surface for shared Swift helpers. |
| `apps/shared/OpenClawKit/Tools/CanvasA2UI/**` | Package-adjacent canvas tooling bootstrap/config. | `exceptioned-deep-partial` | Relevant when Canvas resource packaging changes. |

## Update rule

If a change lands in this leaf, cross-check all consuming native app leaves before assuming the impact is isolated.
