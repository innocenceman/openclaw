# Android Build Flavors and Packaging Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/android/app/src/test/**` focused test for the touched file.
2. Run `pnpm android:test` for app unit coverage.
3. Run `pnpm android:lint` for ktlint checks.
4. Run `pnpm android:assemble` for Play debug package compile; use `pnpm android:assemble:third-party` when third-party flavor code changes.

G007 evidence: `pnpm android:lint`, `pnpm android:assemble`, and `pnpm android:test:third-party` when third-party flavor changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1` (修改 1).
- Target-existing path refs in active map: `1`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `apps/android/build.gradle.kts`
<!-- version-diff-refresh:v2026.5.4:end -->
