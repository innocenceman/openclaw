# Client Call Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope   | First validation                                                                                            | Escalation trigger                                                              | Notes                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------- |
| `client-call/` | pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts | Escalate to CLI/app tests when caller behavior or transport assumptions change. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `9` (新增 3，修改 6).
- Target-existing path refs in active map: `9`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
