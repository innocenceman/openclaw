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
