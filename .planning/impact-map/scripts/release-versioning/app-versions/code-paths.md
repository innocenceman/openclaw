# App Version Surfaces Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Version fan-out path

1. A release/version bump starts at `package.json`.
2. Platform-specific version files under `apps/android`, `apps/ios`, and `apps/macos` must stay aligned with the package version policy captured in repo guidance.
3. User-facing install/update docs such as `docs/install/updating.md` are the docs-side confirmation that the shipped version changed intentionally.

## Trace rule

Treat version alignment as a multi-surface change: do not assume a single package-version edit is sufficient.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `18` changed path(s) to this final leaf. `18` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 15, 'A': 3}`.

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
- `apps/ios/fastlane/metadata/README.md`
- `apps/ios/fastlane/metadata/en-US/release_notes.txt`
- `apps/ios/project.yml`
- `apps/ios/version.json`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`
- `docs/install/updating.md`

<!-- version-diff-refresh:v2026.4.24:end -->
