# macOS Resources and Versioning Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| `Info.plist` metadata changed | `scripts/package-mac-app.sh` | Escalate to packaged-app launch and settings/about-surface verification when permissions, URL schemes, or version fields change. |
| Icon metadata/assets changed | Rebuild the packaged app via `scripts/package-mac-app.sh` | Escalate to manual icon inspection when branding or bundle assets change. |

## Validation evidence

No packaging commands were run while promoting this leaf. Command references were verified from repo scripts and `apps/macos/README.md`.
