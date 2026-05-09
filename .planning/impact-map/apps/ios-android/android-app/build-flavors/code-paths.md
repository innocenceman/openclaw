# Android Build Flavors and Packaging Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Owned Android path | `apps/android/build.gradle.kts`, `app/build.gradle.kts`, `benchmark/**`, `app/src/*/AndroidManifest.xml`, `app/src/main/res/**` | Gateway session state, capability availability, Compose UI behavior, flavor-specific packaging, or persisted secure state. |
| Shared protocol edge | `apps/shared/OpenClawKit/**` and gateway protocol constants | Cross-platform payload drift; pair with protocol/package checks when changed. |

## Trace rule

Start in the Android file family above, then widen to shared kit or gateway protocol only when payload/schema behavior crosses platform boundaries.
