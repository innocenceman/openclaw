# Tls File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths | Responsibility                           | First validation                                                             |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| `src/infra/tls/**`   | TLS fingerprint and gateway TLS helpers. | pnpm test -- src/infra/tls/fingerprint.test.ts src/infra/tls/gateway.test.ts |
