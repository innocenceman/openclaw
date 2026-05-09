# Network File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths | Responsibility                                               | First validation                                                                                                                                |
| -------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/infra/net/**`   | Proxy, SSRF, hostname, and fetch/runtime dispatcher helpers. | pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts |
