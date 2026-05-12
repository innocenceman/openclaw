# Android Benchmark File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| `apps/android/benchmark/build.gradle.kts` | Macrobenchmark module target, instrumentation runner, and benchmark dependency wiring. | `exceptioned-deep-partial` | Controls whether startup/frame-timing tests can run against `:app`. |
| `apps/android/benchmark/src/**` | Future benchmark source path. | `structural` | No meaningful committed benchmark source was observed in this scan. |

## Update rule

If benchmark source files are added, promote them from structural placeholders to concrete owned roles before relying on this leaf for perf decisions.
