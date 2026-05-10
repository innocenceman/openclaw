# macOS Gateway Runtime File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `GatewayProcessManager.swift`, `GatewayEnvironment.swift`, `GatewayEndpointStore.swift`, `RemoteTunnelManager.swift`, `NodeMode/**`, `OpenClawDiscovery` |
| Shared dependencies | `apps/shared/OpenClawKit/**`, gateway protocol/config surfaces, and generated Swift protocol files when touched. |
| Tests | `apps/macos/Tests/OpenClawIPCTests/**` matching the owned feature family. |
