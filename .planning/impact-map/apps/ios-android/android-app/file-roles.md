# Android App File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/android/app/build.gradle.kts` | Android app module, flavor, signing, version, and packaged shared-resource wiring. | `exceptioned-deep-partial` | Changes affect assemble/install tasks and release gating. |
| `apps/android/app/src/main/java/ai/openclaw/app/NodeRuntime.kt` | Main Android runtime: gateway sessions, capability handlers, and connection orchestration. | `exceptioned-deep-partial` | Touches command availability, status text, and session behavior. |
| `apps/android/app/src/main/java/ai/openclaw/app/ui/ConnectTabScreen.kt` | Manual/setup-code connection surface and trust diagnostics. | `exceptioned-deep-partial` | Drift changes first-run and reconnect UX. |
| `apps/android/app/src/main/java/ai/openclaw/app/ui/OnboardingFlow.kt` | Guided onboarding, QR/setup-code path, permission requests, and verification steps. | `exceptioned-deep-partial` | Touches approval/trust flow and bootstrap hints. |
| `apps/android/app/src/main/java/ai/openclaw/app/ui/SettingsSheet.kt` | Device settings, permission toggles, and operational controls after onboarding. | `exceptioned-deep-partial` | Crosses camera/location/notifications/talk behavior. |
| `apps/android/app/src/main/java/ai/openclaw/app/SecurePrefs.kt` | Persisted manual gateway config, tokens, wake/talk flags, and per-instance state. | `exceptioned-deep-partial` | Security-sensitive because it stores gateway auth material. |

## Update rule

Add more rows when Android ownership splits into independently testable features such as chat-only, voice-only, or node capability subtrees.
