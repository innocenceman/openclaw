# Provider Sdk Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope    | First validation                                                                                                                                       | Escalation trigger                                                                    | Notes                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------ |
| `provider-sdk/` | pnpm test -- src/plugin-sdk/provider-entry.test.ts src/plugin-sdk/fetch-auth.test.ts src/plugin-sdk/request-url.test.ts src/plugin-sdk/runtime.test.ts | Escalate to plugin/runtime/provider tests when SDK auth or provider contracts change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
