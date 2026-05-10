# macOS Menu, Canvas, and Chat File Roles

Coverage: `exceptioned-deep-partial`

| Role | Paths |
| --- | --- |
| Primary owners | `Menu*.swift`, `Canvas*.swift`, `WebChat*.swift`, `Session*.swift`, `Usage*.swift`, `Context*.swift` |
| Shared dependencies | `apps/shared/OpenClawKit/**`, gateway protocol/config surfaces, and generated Swift protocol files when touched. |
| Tests | `apps/macos/Tests/OpenClawIPCTests/**` matching the owned feature family. |
