# Android Build Flavors and Packaging Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Owned Android path | `apps/android/build.gradle.kts`, `app/build.gradle.kts`, `benchmark/**`, `app/src/*/AndroidManifest.xml`, `app/src/main/res/**` | Gateway session state, capability availability, Compose UI behavior, flavor-specific packaging, or persisted secure state. |
| Shared protocol edge | `apps/shared/OpenClawKit/**` and gateway protocol constants | Cross-platform payload drift; pair with protocol/package checks when changed. |

## Trace rule

Start in the Android file family above, then widen to shared kit or gateway protocol only when payload/schema behavior crosses platform boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1` changed path(s) to this final leaf. `1` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1}`.

- `apps/android/build.gradle.kts`

<!-- version-diff-refresh:v2026.4.24:end -->
