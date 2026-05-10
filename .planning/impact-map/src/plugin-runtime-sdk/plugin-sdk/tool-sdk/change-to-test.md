# Tool Sdk Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                         | Escalation trigger                                                                         | Notes                 |
| ------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- |
| `tool-sdk/`  | pnpm test -- src/plugin-sdk/reply-payload.test.ts src/plugin-sdk/webhook-targets.test.ts | Run pnpm build if tool-facing SDK changes affect exported contracts or generated surfaces. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1` (修改 1).
- Target-existing path refs in active map: `1`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
