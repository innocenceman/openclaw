# Exec Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                                                           | Escalation trigger                                                                     | Notes                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------------- |
| `exec/`      | No dedicated src/auto-reply/reply/exec/\*.test.ts was observed; start with nearest reply command test plus sandbox/media staging coverage. | Escalate to agents or sandbox tests when exec helpers change command/runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `22` (修改 19，新增 3).
- Target-existing path refs in active map: `22`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
