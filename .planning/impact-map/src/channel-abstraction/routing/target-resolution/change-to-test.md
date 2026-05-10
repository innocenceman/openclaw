# Target Resolution Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                                 | Escalation trigger                                                                     | Notes                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------ |
| `target-resolution/` | pnpm test -- src/routing/resolve-route.test.ts src/routing/account-id.test.ts src/routing/account-lookup.test.ts src/routing/session-key.test.ts | Escalate to pnpm test:channels when routing semantics broaden across channel families. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
