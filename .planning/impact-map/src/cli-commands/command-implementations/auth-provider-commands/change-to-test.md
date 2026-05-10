# Auth Provider Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted `auth-choice` and OAuth command tests.
2. Run `agent-runtime/providers-auth/` or plugin provider auth tests when runtime auth behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `70` (修改 44，删除 9，新增 16，重命名/移动 1).
- Target-existing path refs in active map: `60`; deleted/renamed-away refs kept only in transition artifacts: `10`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
