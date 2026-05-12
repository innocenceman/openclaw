# Schema Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

| Change scope | First validation                                                                                | Escalation trigger                                                                               | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------- |
| `schema/`    | pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts | Run pnpm build when schema changes affect published tool surfaces or generated runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `6` (修改 5，新增 1).
- Target-existing path refs in active map: `6`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/pi-tools.schema.test.ts`
- `src/agents/pi-tools.schema.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
