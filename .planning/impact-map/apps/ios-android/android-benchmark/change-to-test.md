# Android Benchmark Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Benchmark harness config changed | `cd apps/android && ./gradlew :benchmark:connectedDebugAndroidTest` | Escalate to perf helper scripts when startup snapshots or hotspot reports are part of the change goal. |
| Benchmark source added or changed | `cd apps/android && ./gradlew :benchmark:connectedDebugAndroidTest` | Escalate to device-specific perf comparisons when benchmark logic affects release decisions. |

## Validation evidence

No benchmark commands were run while promoting this leaf. The connected-test command was verified from `apps/android/README.md`.
