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
