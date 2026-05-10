# Runtime Secret Collection Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

2. Run runtime-web/gateway tests when changing web or gateway secret surfaces.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `59` (修改 14，新增 44，删除 1).
- Target-existing path refs in active map: `58`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
