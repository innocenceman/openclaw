# iOS Extensions and Watch Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Share extension or watch logic changed | `pnpm ios:gen`, then run the nearest Xcode extension/watch smoke on a real device when available | Escalate to `pnpm ios:build` when bundle wiring, entitlements, or app-wide handoff changes. |
| Widget/live-activity metadata changed | `pnpm ios:build` | Escalate to device-side widget/live-activity verification when lock-screen or background presentation changes. |

## Validation evidence

No iOS extension/watch builds or tests were run while promoting this leaf. Command surfaces were verified from root `package.json` and `apps/ios/README.md`.
