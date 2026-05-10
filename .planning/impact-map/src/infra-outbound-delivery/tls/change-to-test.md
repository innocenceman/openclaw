# Tls Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                             | Escalation trigger                                                                              | Notes                 |
| ------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- |
| `tls/`       | pnpm test -- src/infra/tls/fingerprint.test.ts src/infra/tls/gateway.test.ts | Escalate to gateway/auth tests when TLS surface changes affect connectivity or trust decisions. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
