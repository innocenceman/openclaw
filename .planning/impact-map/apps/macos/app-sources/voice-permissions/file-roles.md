# macOS Voice and Permissions File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `Talk*.swift`, `Voice*.swift`, `AudioInputDeviceObserver.swift`, `Permission*.swift`, `ScreenRecordService.swift` |
| Shared dependencies | `apps/shared/OpenClawKit/**`, gateway protocol/config surfaces, and generated Swift protocol files when touched. |
| Tests | `apps/macos/Tests/OpenClawIPCTests/**` matching the owned feature family. |
