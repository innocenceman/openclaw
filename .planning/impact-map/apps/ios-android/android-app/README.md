# Android App

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Leaf module for `apps/android/app/**`, including Gradle app-module wiring, Android runtime state, gateway connection UI, onboarding UI, and persisted settings/auth state.

## Leaf status

This is a Wave 3 priority completion unit because it owns Android gateway connectivity, permission-sensitive settings, and the primary device runtime.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
