# Contracts Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                                                                              | Escalation trigger                                                                                              | Notes                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `contracts/` | pnpm test -- src/plugins/contracts/catalog.contract.test.ts src/plugins/contracts/loader.contract.test.ts src/plugins/contracts/runtime.contract.test.ts src/plugins/schema-validator.test.ts | Escalate to pnpm test:contracts:plugins or pnpm test:extensions when contract changes reach extension packages. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
