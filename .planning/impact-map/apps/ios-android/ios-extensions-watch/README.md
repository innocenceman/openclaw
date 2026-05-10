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
