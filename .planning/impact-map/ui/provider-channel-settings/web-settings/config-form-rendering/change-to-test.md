# Web Config Form Rendering Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run closest UI settings/channel test.
2. Run `pnpm --dir ui test`.
3. Run `pnpm ui:build`.
4. For parity changes, also update native settings/docs leaves and record exceptions for unavailable platform/device checks.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1` (修改 1).
- Target-existing path refs in active map: `1`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
