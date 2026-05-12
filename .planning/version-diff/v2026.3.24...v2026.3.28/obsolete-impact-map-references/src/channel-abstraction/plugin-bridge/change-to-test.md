# Plugin Bridge Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope     | First validation                                                                                                                                                                                                                         | Escalation trigger                                                                                                        | Notes                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `plugin-bridge/` | pnpm test -- src/channels/plugins/contracts/registry.contract.test.ts src/channels/plugins/contracts/inbound.contract.test.ts src/channels/plugins/contracts/outbound-payload.contract.test.ts src/channels/plugins/plugins-core.test.ts | Escalate to pnpm test:contracts:channels or pnpm test:extensions when registry/runtime behavior crosses channel packages. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
