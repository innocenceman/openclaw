# Maintenance Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted tests for the changed command family.
2. For message behavior, also run channel/infra outbound tests when delivery semantics change.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `301` (重命名/移动 3，修改 202，新增 85，删除 11).
- Target-existing path refs in active map: `288`; deleted/renamed-away refs kept only in transition artifacts: `13`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
