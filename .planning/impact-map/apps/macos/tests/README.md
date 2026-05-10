# macOS App Tests

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `apps/macos/Tests/**`.

## Leaf status

The committed macOS test surface is concentrated under `apps/macos/Tests/OpenClawIPCTests/**`, with a mix of logic tests and SwiftUI smoke tests covering gateway, onboarding, voice, node mode, and settings flows.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
