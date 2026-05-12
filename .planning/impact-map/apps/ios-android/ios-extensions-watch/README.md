# iOS Extensions and Watch

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `apps/ios/ShareExtension/**`, `apps/ios/WatchApp/**`, `apps/ios/WatchExtension/**`, and `apps/ios/ActivityWidget/**`.

## Leaf status

This leaf groups the non-main-app iOS surfaces that forward content into OpenClaw or surface live/watch state outside the primary app shell.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `4` (修改 4).
- Target-existing changed paths listed here: `4`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/ios/WatchExtension/Sources/OpenClawWatchApp.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `5`
- Target-existing changed paths reflected here: `5`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `apps/ios/ActivityWidget/OpenClawLiveActivity.swift`
- `apps/ios/ShareExtension/ShareViewController.swift`
- `apps/ios/WatchExtension/Sources/WatchConnectivityReceiver.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxStore.swift`
- `apps/ios/WatchExtension/Sources/WatchInboxView.swift`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
