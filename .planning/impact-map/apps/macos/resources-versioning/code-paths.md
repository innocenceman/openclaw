# macOS Resources and Versioning Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Bundle metadata to packaged app | `apps/macos/Sources/OpenClaw/Resources/Info.plist` -> `scripts/package-mac-app.sh` | Version stamping, permissions strings, Sparkle/update fields, URL handling. |
| Icon metadata to bundle resources | `apps/macos/Icon.icon/icon.json`, `apps/macos/Sources/OpenClaw/Resources/OpenClaw.icns` | App icon generation/appearance in packaged builds. |

## Trace rule

Check this leaf whenever a change affects bundle metadata even if the behavioral code lives elsewhere.
