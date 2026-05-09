# macOS App Sources File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/macos/Package.swift` | Swift package manifest for the macOS app target graph. | `exceptioned-deep-partial` | Build entrypoint for the app bundle. |
| `apps/macos/Sources/OpenClaw/GeneralSettings.swift`, `apps/macos/Sources/OpenClaw/SettingsRootView.swift` | Core settings shell, local/remote run mode, and top-level operational controls. | `exceptioned-deep-partial` | Crosses gateway lifecycle and end-user config behavior. |
| `apps/macos/Sources/OpenClaw/ConfigSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsStore*.swift` | Schema-driven config editing and per-channel settings forms. | `exceptioned-deep-partial` | High drift risk with provider/channel settings work. |
| `apps/macos/Sources/OpenClaw/Onboarding*.swift`, `apps/macos/Sources/OpenClaw/Menu*.swift` | Onboarding and menu-bar presentation shell. | `exceptioned-deep-partial` | Touches first-run and daily interaction flow. |
| `apps/macos/Sources/OpenClaw/GatewayProcessManager.swift`, `apps/macos/Sources/OpenClaw/GatewayEnvironment.swift`, `apps/macos/Sources/OpenClaw/LaunchAgentManager.swift` | Gateway process lifecycle and run-state coordination. | `exceptioned-deep-partial` | Impacts autostart, restart, and health UX. |
| `apps/macos/Sources/OpenClaw/NodeMode/**`, `apps/macos/Sources/OpenClaw/Voice*`, `apps/macos/Sources/OpenClaw/Talk*` | Device-node and voice-related runtime surfaces. | `exceptioned-deep-partial` | Shared operational impact when node/voice workflows drift. |

## Update rule

If a future wave splits settings, node mode, or voice into separate maintained slices, narrow this leaf instead of keeping one giant catch-all boundary.
