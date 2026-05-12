# Native Provider and Channel Settings Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| macOS config/channel form path | `apps/macos/Sources/OpenClaw/ConfigSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsSettings.swift` | Schema-driven settings editing, per-channel forms, save/reload behavior. |
| iOS settings to persisted gateway state | `apps/ios/Sources/Settings/SettingsTab.swift` -> `apps/ios/Sources/Gateway/GatewaySettingsStore.swift` | Manual host/port/TLS/auth changes, discovery logs, wake/talk toggles. |
| Android connect/settings to secure persistence | `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt`, `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | Manual endpoint state, QR/setup-code inputs, token/password persistence. |
| Cross-platform parity path | This leaf + `ui/provider-channel-settings/web-settings/` | Provider/channel list drift, config schema drift, docs-sync drift. |

## Trace rule

Check native and web settings leaves together whenever a provider or channel surface changes.
