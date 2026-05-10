# Path Safety Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

1. Run fs/path/anchored operation targeted tests.
2. Escalate to sandbox workspace/browser/SSH checks when path changes cross backend boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `5` (修改 4，新增 1).
- Target-existing path refs in active map: `5`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
