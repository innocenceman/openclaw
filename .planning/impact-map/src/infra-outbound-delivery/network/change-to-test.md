# Network Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                                | Escalation trigger                                                                   | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------- |
| `network/`   | pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
