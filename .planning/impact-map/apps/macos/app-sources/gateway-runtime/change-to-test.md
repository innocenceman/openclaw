# macOS Gateway Runtime Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/macos/Tests/OpenClawIPCTests/*` target for the touched file family.
2. Run `cd apps/macos && swift test --filter <focused filter>` on a macOS host.
3. For app-runtime behavior, rebuild and relaunch the macOS app directly on the Mac; do not use ad-hoc tmux gateway sessions.
4. Run `pnpm check:host-env-policy:swift` when generated host env policy or launch/runtime environment handling is in scope.

Exception: this G007 run executed on Linux; macOS/Xcode/app-smoke validation is explicitly unavailable, so this leaf remains `exceptioned-deep-partial`.
