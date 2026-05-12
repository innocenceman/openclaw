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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `3` changed path(s) to this final leaf. `3` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 3}`.

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/macos-mlx-tts/Sources/OpenClawMLXTTSHelper/main.swift`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/swabble/.github/workflows/ci.yml`
- `apps/swabble/.gitignore`
- `apps/swabble/.swiftformat`
- `apps/swabble/.swiftlint.yml`
- `apps/swabble/CHANGELOG.md`
- `apps/swabble/LICENSE`
- `apps/swabble/Package.resolved`
- `apps/swabble/Package.swift`
- `apps/swabble/README.md`
- `apps/swabble/Sources/SwabbleCore/Config/Config.swift`
- `apps/swabble/Sources/SwabbleCore/Hooks/HookExecutor.swift`
- `apps/swabble/Sources/SwabbleCore/Speech/BufferConverter.swift`
- `apps/swabble/Sources/SwabbleCore/Speech/SpeechPipeline.swift`
- `apps/swabble/Sources/SwabbleCore/Support/AttributedString+Sentences.swift`
- `apps/swabble/Sources/SwabbleCore/Support/Logging.swift`
- `apps/swabble/Sources/SwabbleCore/Support/OutputFormat.swift`
- `apps/swabble/Sources/SwabbleCore/Support/TranscriptsStore.swift`
- `apps/swabble/Sources/SwabbleKit/WakeWordGate.swift`
- `apps/swabble/Sources/swabble/CLI/CLIRegistry.swift`
- `apps/swabble/Sources/swabble/Commands/DoctorCommand.swift`
- `apps/swabble/Sources/swabble/Commands/HealthCommand.swift`
- `apps/swabble/Sources/swabble/Commands/MicCommands.swift`
- `apps/swabble/Sources/swabble/Commands/ServeCommand.swift`
- `apps/swabble/Sources/swabble/Commands/ServiceCommands.swift`
- `apps/swabble/Sources/swabble/Commands/SetupCommand.swift`
- `apps/swabble/Sources/swabble/Commands/StartStopCommands.swift`
- `apps/swabble/Sources/swabble/Commands/StatusCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TailLogCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TestHookCommand.swift`
- `apps/swabble/Sources/swabble/Commands/TranscribeCommand.swift`
- `apps/swabble/Sources/swabble/main.swift`
- `apps/swabble/Tests/SwabbleKitTests/WakeWordGateTests.swift`
- `apps/swabble/Tests/swabbleTests/ConfigTests.swift`
- `apps/swabble/docs/spec.md`
- `apps/swabble/scripts/format.sh`
- `apps/swabble/scripts/lint.sh`
<!-- version-diff-refresh:v2026.5.4:end -->
