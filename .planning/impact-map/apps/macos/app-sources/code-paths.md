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
