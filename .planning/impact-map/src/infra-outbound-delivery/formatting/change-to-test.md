# Formatting Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope  | First validation                                                                                                                                                | Escalation trigger                                                                          | Notes                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------- |
| `formatting/` | pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `7` (修改 7).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/infra/outbound/payloads.test.ts`
- `src/infra/outbound/payloads.ts`
- `src/infra/outbound/sanitize-text.test.ts`
- `src/infra/outbound/sanitize-text.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
