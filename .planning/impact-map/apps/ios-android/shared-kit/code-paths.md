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
