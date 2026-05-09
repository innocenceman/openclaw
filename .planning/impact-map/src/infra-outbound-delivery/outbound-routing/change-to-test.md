# Outbound Routing Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope        | First validation                                                                                                                                                                                      | Escalation trigger                                                                            | Notes                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| `outbound-routing/` | pnpm test -- src/infra/outbound/channel-resolution.test.ts src/infra/outbound/channel-selection.test.ts src/infra/outbound/target-resolver.test.ts src/infra/outbound/session-binding-service.test.ts | Escalate to routing/channel tests when recipient/account/session selection semantics broaden. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
