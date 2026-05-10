# Native Provider and Channel Settings File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/macos/Sources/OpenClaw/ConfigSettings.swift` | Schema-driven config form for the macOS app. | `exceptioned-deep-partial` | Native config editor parity anchor. |
| `apps/macos/Sources/OpenClaw/ChannelsSettings.swift`, `apps/macos/Sources/OpenClaw/ChannelsStore*.swift` | macOS per-channel settings UI and backing store. | `exceptioned-deep-partial` | High drift risk with provider/channel additions. |
| `apps/macos/Sources/OpenClaw/GeneralSettings.swift` | macOS connection-mode and operational settings shell. | `exceptioned-deep-partial` | Touches local/remote gateway configuration. |
| `apps/ios/Sources/Settings/SettingsTab.swift`, `apps/ios/Sources/Gateway/GatewaySettingsStore.swift` | iOS settings UI and persisted gateway/auth settings. | `exceptioned-deep-partial` | Native mobile side of manual endpoint and token/password persistence. |
| `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt`, `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt`, `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt` | Android connect/onboarding/settings UI. | `exceptioned-deep-partial` | Covers setup-code/manual flows and post-onboarding settings. |
| `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | Android persisted gateway/config/auth state. | `exceptioned-deep-partial` | Security-sensitive settings storage boundary. |

## Update rule

Whenever provider/channel choices change, update this leaf alongside `ui/provider-channel-settings/web-settings/` and the docs-sync subtree.
