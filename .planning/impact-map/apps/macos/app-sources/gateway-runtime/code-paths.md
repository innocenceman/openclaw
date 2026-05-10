# macOS Gateway Runtime Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Validation risk |
| --- | --- | --- |
| User-facing entry | `GatewayProcessManager.swift`, `GatewayEnvironment.swift`, `GatewayEndpointStore.swift`, `RemoteTunnelManager.swift`, `NodeMode/**`, `OpenClawDiscovery` | UI state, persisted config, process/runtime state, and platform permission behavior can diverge without macOS test/smoke evidence. |
| Shared protocol/config edge | `apps/shared/OpenClawKit/**` and generated gateway models | Cross-platform protocol drift must be paired with package/protocol checks. |

## Trace rule

Start from the smallest Swift view/store/manager in this leaf, then widen to shared kit or gateway protocol only when the change crosses that boundary.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `10` changed path(s) to this final leaf. `10` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 9, 'A': 1}`.

- `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/CommandResolverTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalCommandDisplaySanitizerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalHelpersTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsStoreRefactorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeRuntimeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeGatewayConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/WideAreaGatewayDiscoveryTests.swift`

<!-- version-diff-refresh:v2026.4.24:end -->
