# Android Benchmark Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Benchmark harness config changed | `cd apps/android && ./gradlew :benchmark:connectedDebugAndroidTest` | Escalate to perf helper scripts when startup snapshots or hotspot reports are part of the change goal. |
| Benchmark source added or changed | `cd apps/android && ./gradlew :benchmark:connectedDebugAndroidTest` | Escalate to device-specific perf comparisons when benchmark logic affects release decisions. |

## Validation evidence

No benchmark commands were run while promoting this leaf. The connected-test command was verified from `apps/android/README.md`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1` (修改 1).
- Target-existing path refs in active map: `1`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
