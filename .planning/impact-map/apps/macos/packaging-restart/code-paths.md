# macOS Packaging and Restart Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Root build to packaged app | `scripts/package-mac-app.sh` | JS build, control UI build, Swift build, Info.plist stamping, embedded framework layout. |
| Restart workflow to running app | `scripts/restart-mac.sh` | App relaunch, gateway relaunch coordination, signing/no-sign modes, attach-only behavior. |
| Runtime logs to operator debugging | `scripts/clawlog.sh` | macOS unified log access, follow/tail/category filtering, log troubleshooting workflow. |

## Trace rule

Use this leaf for operational workflow changes even when the underlying app source stays the same.
