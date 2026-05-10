# Android App Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Runtime or settings logic changed | `pnpm android:test` | Escalate to `pnpm android:assemble` and `pnpm android:install` when the change affects Compose UI, permissions, or device-only flows. |
| Connection/onboarding UI changed | `pnpm android:assemble` plus device install/relaunch via `pnpm android:install` | Escalate to `pnpm android:run` on a connected phone when QR/manual connect or trust prompts change. |
| Gradle/flavor/version wiring changed | `pnpm android:assemble` | Escalate to `pnpm android:lint` and flavor-specific build/install when signing, product flavors, or permissions change. |

## Validation evidence

No Android tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `apps/android/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `40` (修改 32，新增 8).
- Target-existing path refs in active map: `40`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
