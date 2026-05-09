# macOS Resources and Versioning

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `apps/macos/Sources/OpenClaw/Resources/Info.plist` and the app icon metadata under `apps/macos/Icon.icon/**`.

## Leaf status

This leaf is narrower than app sources: it tracks bundle metadata, permissions strings, and app-icon resource inputs that packaging consumes.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
