# App Version Surfaces Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Version fan-out path

1. A release/version bump starts at `package.json`.
2. Platform-specific version files under `apps/android`, `apps/ios`, and `apps/macos` must stay aligned with the package version policy captured in repo guidance.
3. User-facing install/update docs such as `docs/install/updating.md` are the docs-side confirmation that the shipped version changed intentionally.

## Trace rule

Treat version alignment as a multi-surface change: do not assume a single package-version edit is sufficient.
