# Bindings Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                                                                                | Escalation trigger                                                                                       | Notes                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------ |
| `bindings/`  | pnpm test -- src/channels/plugins/acp-bindings.test.ts src/channels/plugins/binding-targets.test.ts src/channels/plugins/target-resolvers.test.ts src/channels/plugins/pairing-adapters.test.ts | Escalate to routing and channel suites when binding resolution changes target/account/session semantics. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
