# Android Runtime, Gateway, and Node Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/android/app/src/test/**` focused test for the touched file.
2. Run `pnpm android:test` for app unit coverage.
3. Run `pnpm android:lint` for ktlint checks.
4. Run `pnpm android:assemble` for Play debug package compile; use `pnpm android:assemble:third-party` when third-party flavor code changes.

G007 evidence: `pnpm android:test`, `pnpm android:lint`, and `pnpm android:assemble` all failed immediately because no Java runtime or `JAVA_HOME` is available.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `388` (新增 159，修改 219，重命名/移动 2，删除 8).
- Target-existing path refs in active map: `378`; deleted/renamed-away refs kept only in transition artifacts: `10`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
