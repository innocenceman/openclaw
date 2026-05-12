# macOS App File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Notes |
| --- | --- | --- | --- |
| `apps/macos/Sources/**` | macOS app implementation, settings UI, gateway lifecycle, node mode, and menu-bar surfaces. | `exceptioned-deep-partial` | Primary runtime surface. |
| `apps/macos/Package.swift` | Swift package entrypoint for the macOS app. | `exceptioned-deep-partial` | Governs build target layout. |
| `apps/macos/Tests/**` | XCTest/smoke coverage under `OpenClawIPCTests`. | `exceptioned-deep-partial` | Closest regression surface for macOS behavior. |
| `apps/macos/Sources/OpenClaw/Resources/Info.plist` | Bundle metadata, permissions, version, and URL scheme surface. | `exceptioned-deep-partial` | Important for packaging and release drift. |
| `scripts/package-mac-app.sh`, `scripts/restart-mac.sh`, `scripts/clawlog.sh` | Packaging/restart/logging operational scripts. | `exceptioned-deep-partial` | Required for local runtime/debug flows. |

## Update rule

When a macOS slice develops its own dedicated validation lane, split it into a narrower leaf instead of growing this parent card.
