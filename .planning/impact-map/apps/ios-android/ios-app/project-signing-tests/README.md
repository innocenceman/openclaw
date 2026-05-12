# iOS Project, Signing, and Tests

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus repo-native inspection

## Scope

XcodeGen project, signing/version xcconfig files, app entitlements, Info.plist, and XCTest harness.

## Leaf status

Split from the former broad `apps/ios-android/ios-app/` leaf during G007. The boundary is mapped, but verified promotion requires Xcode/iOS simulator or real-device validation unavailable on this Linux host.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder and exception rules.
