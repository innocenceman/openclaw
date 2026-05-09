# Android Benchmark Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path | Trace start | Likely downstream impact |
| --- | --- | --- |
| Benchmark module to app target | `apps/android/benchmark/build.gradle.kts` | Connected benchmark task availability, startup perf harness, emulator/device requirements. |
| Benchmark reports path | `apps/android/benchmark/build/**` (generated) | Report location and perf comparison workflow after connected tests run. |

## Trace rule

Treat this as a harness/config leaf until committed benchmark source expands the ownership boundary.
