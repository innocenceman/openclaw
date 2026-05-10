# Android Permissions, Media, and Voice File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `PermissionRequester.kt`, `CameraHudState.kt`, `node/*Handler.kt`, `voice/**` |
| Shared dependencies | `apps/shared/OpenClawKit/**` only through generated/protocol parity; core gateway contracts under `src/gateway/**` when transport behavior changes. |
| Tests | `apps/android/app/src/test/**` focused on the touched runtime/UI/capability family. |
