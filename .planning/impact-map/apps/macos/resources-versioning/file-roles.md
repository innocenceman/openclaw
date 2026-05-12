# macOS Resources and Versioning File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/macos/Sources/OpenClaw/Resources/Info.plist` | Canonical bundle metadata, permission strings, URL scheme, and default version fields. | `exceptioned-deep-partial` | Packaging stamps this file into `dist/OpenClaw.app`. |
| `apps/macos/Icon.icon/icon.json` | Icon-generation metadata. | `exceptioned-deep-partial` | Impacts branded app icon regeneration rather than runtime logic. |
| `apps/macos/Sources/OpenClaw/Resources/OpenClaw.icns` | Packaged app icon asset. | `exceptioned-deep-partial` | Packaging/runtime appearance impact only. |

## Update rule

Track root-version interactions in impact notes, but keep ownership of root version bumps outside this leaf.
