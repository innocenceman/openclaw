# Formatting Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope  | First validation                                                                                                                                                | Escalation trigger                                                                          | Notes                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------- |
| `formatting/` | pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts | Escalate to channel payload tests when formatting changes affect rendered outbound content. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
