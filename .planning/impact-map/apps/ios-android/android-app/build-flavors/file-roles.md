# Android Build Flavors and Packaging File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `apps/android/build.gradle.kts`, `app/build.gradle.kts`, `benchmark/**`, `app/src/*/AndroidManifest.xml`, `app/src/main/res/**` |
| Shared dependencies | `apps/shared/OpenClawKit/**` only through generated/protocol parity; core gateway contracts under `src/gateway/**` when transport behavior changes. |
| Tests | `apps/android/app/src/test/**` focused on the touched runtime/UI/capability family. |
