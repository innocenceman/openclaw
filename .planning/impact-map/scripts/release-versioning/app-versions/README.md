# App Version Surfaces

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for the multi-file version surfaces that must stay aligned when the CLI/app version changes.

## Observed facts

- Wave 4 inspection confirmed version values live in multiple product and docs locations, not only `package.json`.
- Tracked files: `package.json`, `apps/android/app/build.gradle.kts`, `apps/ios/Sources/Info.plist`, `apps/ios/Tests/Info.plist`, `apps/macos/Sources/OpenClaw/Resources/Info.plist`, `docs/install/updating.md`.
- Repo guidance also calls out additional iOS/macOS Xcode project surfaces and appcast handling as separate release concerns.

## Incoming dependencies

- Release/version bumps start at `package.json` and then propagate into app-specific version files plus docs install guidance.

## Outgoing dependencies

- Release verification eventually flows into npm/macOS release checks; Wave 4 only recorded the path.

## Risk triggers

- Updating one version surface without the others.
- Touching appcast-related release state when only ordinary version alignment was intended.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `18` (修改 15，新增 3).
- Target-existing changed paths listed here: `18`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `appcast.xml`
- `apps/android/app/build.gradle.kts`
- `apps/android/gradle/wrapper/gradle-wrapper.jar`
- `apps/android/gradle/wrapper/gradle-wrapper.properties`
- `apps/android/gradlew`
- `apps/android/gradlew.bat`
- `apps/ios/CHANGELOG.md`
- `apps/ios/LocalSigning.xcconfig.example`
- `apps/ios/Sources/Info.plist`
- `apps/ios/VERSIONING.md`
- `apps/ios/fastlane/Fastfile`
- `apps/ios/fastlane/SETUP.md`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
