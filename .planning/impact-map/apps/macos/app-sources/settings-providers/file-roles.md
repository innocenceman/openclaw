# macOS Settings and Providers File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `SettingsRootView.swift`, `ConfigSettings.swift`, `ChannelsSettings*.swift`, `ChannelConfigForm.swift`, `ConfigStore.swift`, `CronSettings*.swift` |
| Shared dependencies | `apps/shared/OpenClawKit/**`, gateway protocol/config surfaces, and generated Swift protocol files when touched. |
| Tests | `apps/macos/Tests/OpenClawIPCTests/**` matching the owned feature family. |
