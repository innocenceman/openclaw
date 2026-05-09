# iOS and Android Apps Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Gateway connection and trust | `apps/ios/Sources/Gateway/**`, `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt`, `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Pairing UX, TLS trust prompts, persisted endpoint/auth state, status surfaces. |
| Onboarding to steady-state | `apps/ios/Sources/Onboarding/**`, `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt` | First-run connection flow, permission prompts, gateway bootstrap tokens. |
| Settings persistence | `apps/ios/Sources/Settings/**`, `apps/ios/Sources/Gateway/GatewaySettingsStore.swift`, `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | Manual endpoint settings, wake/talk toggles, token/password storage. |
| Shared native contracts | `apps/shared/OpenClawKit/Sources/**` | Protocol drift across iOS, macOS, Android resource packaging, and widget/share/watch helpers. |
| Platform packaging/versioning | `apps/ios/Config/**`, `apps/android/app/build.gradle.kts` | Version bumps, signing, flavor differences, release packaging expectations. |

## Trace rule

Start with repo-native `find`, `rg`, and file inspection. Escalate to subtree-specific leaf docs before using broader repo controllers.
