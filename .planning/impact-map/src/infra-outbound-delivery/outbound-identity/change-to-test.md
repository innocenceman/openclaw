# Outbound Identity Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                                                                   | Escalation trigger                                                                                 | Notes                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------- |
| `outbound-identity/` | pnpm test -- src/infra/outbound/identity.test.ts src/infra/outbound/conversation-id.test.ts src/infra/outbound/outbound-session.test.ts src/infra/outbound/directory-cache.test.ts | Escalate to routing or channel send tests when identity mapping broadens across sessions/accounts. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
