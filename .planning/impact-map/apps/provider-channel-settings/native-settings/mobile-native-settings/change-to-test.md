# Mobile Native Settings Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run Android settings/unit coverage with `pnpm android:test` and `pnpm android:assemble` when Android settings change.
2. Run macOS settings smoke tests on a Mac when macOS settings change.
3. Run iOS XCTest/build on Xcode simulator or real device when iOS settings change.
4. Run `pnpm --dir ui test` and `pnpm ui:build` when web parity changes.

G007 exception: Android validation passed; iOS simulator/device checks unavailable here.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `8` (新增 3，修改 5).
- Target-existing path refs in active map: `8`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
