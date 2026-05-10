# macOS App Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| macOS runtime/settings changed | Run the nearest macOS XCTest or smoke directly on a Mac | Escalate to `scripts/restart-mac.sh` when gateway lifecycle, onboarding, or menu shell behavior changes. |
| Packaging/restart/logging script changed | `scripts/package-mac-app.sh` or `scripts/restart-mac.sh` as appropriate | Escalate to full packaged-app verification when app bundle layout or relaunch behavior changes. |
| Version/bundle metadata changed | `scripts/package-mac-app.sh` | Escalate to release-specific checks only when shipping metadata changes. |

## Validation evidence

No macOS builds or tests were run while promoting this subtree. Commands were verified from root `package.json` and `apps/macos/README.md`.
