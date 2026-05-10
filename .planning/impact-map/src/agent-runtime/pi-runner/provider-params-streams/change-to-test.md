# Provider Params Streams Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

1. Run provider-specific extra-param/stream-wrapper targeted tests.
2. Escalate to reply/runtime suites when embedded run behavior affects shared message flows.
3. Run live/provider checks only with explicit credentials or live-test opt-in.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `28` (删除 5，修改 16，重命名/移动 4，新增 3).
- Target-existing path refs in active map: `20`; deleted/renamed-away refs kept only in transition artifacts: `8`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
