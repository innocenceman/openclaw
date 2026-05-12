# macOS App Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Menu bar/settings to gateway process lifecycle | `apps/macos/Sources/OpenClaw/GeneralSettings.swift`, `apps/macos/Sources/OpenClaw/GatewayProcessManager.swift`, `apps/macos/Sources/OpenClaw/LaunchAgentManager.swift` | Local/remote run mode, autostart, restart, health, and connection UX. |
| Config/channel settings path | `apps/macos/Sources/OpenClaw/ConfigSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsStore*.swift` | Schema-driven config editing, per-channel forms, save/reload behavior. |
| Onboarding/runtime shell path | `apps/macos/Sources/OpenClaw/Onboarding*.swift`, `apps/macos/Sources/OpenClaw/Menu*.swift`, `apps/macos/Sources/OpenClaw/SettingsRootView.swift` | First-run setup, session views, UI shell composition. |
| Packaging/restart path | `scripts/package-mac-app.sh`, `scripts/restart-mac.sh` | Built app contents, signing behavior, relaunch flow, attached gateway expectations. |
| Bundle metadata path | `apps/macos/Sources/OpenClaw/Resources/Info.plist` | Permissions, version display, URL scheme, Sparkle metadata. |

## Trace rule

Start with app sources for behavior changes and the scripts/resources leaves for operational packaging drift.
