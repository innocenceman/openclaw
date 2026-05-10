# Outbound Actions Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope        | First validation                                                                                                                                                                                                               | Escalation trigger                                                                          | Notes                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------- |
| `outbound-actions/` | pnpm test -- src/infra/outbound/message-action-spec.test.ts src/infra/outbound/message-action-params.test.ts src/infra/outbound/message-action-runner.threading.test.ts src/infra/outbound/message-action-runner.media.test.ts | Escalate to media/channel tests when message actions alter payload or attachment semantics. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
