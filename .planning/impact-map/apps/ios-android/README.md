# iOS and Android Apps

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Native iOS and Android apps, shared `OpenClawKit`, onboarding and gateway connection surfaces, platform signing/version inputs, and the closest committed mobile test assets.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Leaf coverage

| Leaf | Coverage | Why it matters |
| --- | --- | --- |
| `android-app/` | `exceptioned-deep-partial` | Android runtime, connection UI, permissions, secure persistence. |
| `android-benchmark/` | `exceptioned-deep-partial` | Macrobenchmark harness configuration for startup/perf work. |
| `ios-app/` | `exceptioned-deep-partial` | iOS runtime, gateway trust/state, onboarding, settings, XCTest coverage. |
| `ios-extensions-watch/` | `exceptioned-deep-partial` | Share extension, live activity widget, watch inbox surfaces. |
| `shared-kit/` | `exceptioned-deep-partial` | Shared Swift package for protocol, chat UI, and reusable native helpers. |
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `3` (新增 3).
- Target-existing changed paths listed here: `3`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/macos-mlx-tts/Sources/OpenClawMLXTTSHelper/main.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `38`
- Target-existing changed paths reflected here: `38`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
