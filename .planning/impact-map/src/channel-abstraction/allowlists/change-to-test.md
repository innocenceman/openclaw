# Allowlists Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope  | First validation                                                                                                                                                                             | Escalation trigger                                                                 | Notes                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| `allowlists/` | pnpm test -- src/channels/allow-from.test.ts src/channels/allowlist-match.test.ts src/channels/allowlists/resolve-utils.test.ts src/channels/plugins/contracts/group-policy.contract.test.ts | Escalate to pnpm test:channels when access rules affect multiple channel families. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
