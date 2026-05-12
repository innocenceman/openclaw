# Android Benchmark Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Benchmark module to app target | `apps/android/benchmark/build.gradle.kts` | Connected benchmark task availability, startup perf harness, emulator/device requirements. |
| Benchmark reports path | `apps/android/benchmark/build/**` (generated) | Report location and perf comparison workflow after connected tests run. |

## Trace rule

Treat this as a harness/config leaf until committed benchmark source expands the ownership boundary.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1` changed path(s) to this final leaf. `1` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1}`.

- `apps/android/benchmark/build.gradle.kts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `apps/android/benchmark/build.gradle.kts`
<!-- version-diff-refresh:v2026.5.4:end -->
