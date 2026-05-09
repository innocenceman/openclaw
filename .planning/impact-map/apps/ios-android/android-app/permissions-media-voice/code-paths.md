# Android Permissions, Media, and Voice Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Owned Android path | `PermissionRequester.kt`, `CameraHudState.kt`, `node/*Handler.kt`, `voice/**` | Gateway session state, capability availability, Compose UI behavior, flavor-specific packaging, or persisted secure state. |
| Shared protocol edge | `apps/shared/OpenClawKit/**` and gateway protocol constants | Cross-platform payload drift; pair with protocol/package checks when changed. |

## Trace rule

Start in the Android file family above, then widen to shared kit or gateway protocol only when payload/schema behavior crosses platform boundaries.
