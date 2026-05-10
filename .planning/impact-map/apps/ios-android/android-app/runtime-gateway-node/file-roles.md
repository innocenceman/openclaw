# Android Runtime, Gateway, and Node File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `NodeRuntime.kt`, `NodeForegroundService.kt`, `gateway/**`, `node/**` |
| Shared dependencies | `apps/shared/OpenClawKit/**` only through generated/protocol parity; core gateway contracts under `src/gateway/**` when transport behavior changes. |
| Tests | `apps/android/app/src/test/**` focused on the touched runtime/UI/capability family. |
