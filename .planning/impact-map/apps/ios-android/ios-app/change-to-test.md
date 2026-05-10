# iOS App Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Gateway, onboarding, or settings logic changed | `pnpm ios:gen`, then run the nearest XCTest or connected-iPhone smoke from Xcode | Escalate to `pnpm ios:build` when project generation, signing inputs, or broader app launch behavior changes. |
| App shell or capability-routing changed | `pnpm ios:build` | Escalate to manual device rebuild/relaunch when root tabs, node capability routing, or permission-gated flows change. |
| Version/signing inputs changed | `pnpm ios:build` | Escalate to beta/archive flows only when packaging or distribution metadata changes. |

## Validation evidence

No iOS builds or tests were run while promoting this leaf. Commands were verified from root `package.json` and `apps/ios/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `30` (修改 25，新增 5).
- Target-existing path refs in active map: `30`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
