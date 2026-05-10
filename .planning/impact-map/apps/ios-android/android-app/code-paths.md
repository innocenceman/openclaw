# Android App Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Connect UI to runtime session | `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Manual/setup-code connect flow, disconnect/reconnect behavior, gateway diagnostics. |
| Onboarding to persisted gateway state | `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | QR parsing, bootstrap token storage, manual endpoint defaults. |
| Settings toggles to capability availability | `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt` -> `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Camera/location/talk/wake behavior and permission-gated tools. |
| Gradle flavor/build path | `apps/android/app/build.gradle.kts` | Play vs third-party behavior, signing requirements, version naming, packaged assets. |

## Trace rule

Start with these files before widening to shared Android helpers. Follow into `apps/shared/OpenClawKit/**` only when resource or protocol boundaries are touched.
