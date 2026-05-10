# Config Doctor Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted configure/doctor tests for changed command files.
2. Run `config-secrets-security/` tests when config/schema/security behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `192` (重命名/移动 12，修改 116，新增 55，删除 9).
- Target-existing path refs in active map: `180`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
