# Android Permissions, Media, and Voice Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/android/app/src/test/**` focused test for the touched file.
2. Run `pnpm android:test` for app unit coverage.
3. Run `pnpm android:lint` for ktlint checks.
4. Run `pnpm android:assemble` for Play debug package compile; use `pnpm android:assemble:third-party` when third-party flavor code changes.

G007 evidence: `pnpm android:test`; device permission smoke remains required for live behavior beyond unit coverage.
