# iOS and Android Apps Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| iOS app runtime/settings changed | `pnpm ios:gen`, then run the nearest XCTest or device smoke from Xcode on a connected iPhone first | Escalate to broader iOS rebuild/relaunch when onboarding, gateway, or permission state changes cross multiple tabs. |
| Android app runtime/settings changed | `pnpm android:test` for unit-covered paths, plus `pnpm android:assemble` / `pnpm android:install` on a connected device for UI flows | Escalate to `pnpm android:lint` or flavor-specific install/run when Gradle, permissions, or flavor wiring changes. |
| Shared native kit changed | Run the nearest consuming iOS/macOS XCTest plus any Android rebuild path that packages shared resources | Escalate to both platform app leaves when protocol or shared UI helpers change. |
| Mobile package/signing/version surface changed | `pnpm ios:build` or `pnpm android:assemble` for the affected platform | Escalate to release/archive flows only when packaging metadata or shipping artifacts change. |

## Validation evidence

No product tests or builds were run while promoting this subtree. Command surfaces were verified from repo scripts and app READMEs only.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `3` (新增 3).
- Target-existing path refs in active map: `3`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
