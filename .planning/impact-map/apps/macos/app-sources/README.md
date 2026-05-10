# macOS App Sources

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `apps/macos/Sources/**` plus `apps/macos/Package.swift` as the app build entrypoint.

## Leaf status

This is a Wave 3 priority completion unit because it owns the macOS menu bar runtime, gateway coordination, settings UX, onboarding, and node-mode integration.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
