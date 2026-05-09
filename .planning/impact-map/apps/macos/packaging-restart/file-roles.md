# macOS Packaging and Restart File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `scripts/package-mac-app.sh` | Main packaging script: root build steps, UI build, Swift build, Info.plist stamping, framework embedding. | `exceptioned-deep-partial` | Affects `dist/OpenClaw.app` layout and build/version metadata. |
| `scripts/restart-mac.sh` | Canonical local restart workflow for the macOS app and gateway. | `exceptioned-deep-partial` | Coordinates build cache cleanup, packaging, app launch, and attach-only behavior. |
| `scripts/clawlog.sh` | macOS unified-log query helper for the `ai.openclaw` subsystem. | `exceptioned-deep-partial` | Important for debugging runtime/logging regressions. |

## Update rule

Keep this leaf script-focused. If a future packaging helper becomes independently maintained, add it here instead of broadening the app-sources leaf.
