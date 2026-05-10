# macOS Gateway Runtime Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run the closest `apps/macos/Tests/OpenClawIPCTests/*` target for the touched file family.
2. Run `cd apps/macos && swift test --filter <focused filter>` on a macOS host.
3. For app-runtime behavior, rebuild and relaunch the macOS app directly on the Mac; do not use ad-hoc tmux gateway sessions.
4. Run `pnpm check:host-env-policy:swift` when generated host env policy or launch/runtime environment handling is in scope.

Exception: this G007 run executed on Linux; macOS/Xcode/app-smoke validation is explicitly unavailable, so this leaf remains `exceptioned-deep-partial`.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `10` (修改 9，新增 1).
- Target-existing path refs in active map: `10`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
