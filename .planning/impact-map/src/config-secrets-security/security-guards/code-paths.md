# Security Guards Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/security/**`, `src/infra/net/ssrf*.ts`
- Runtime handoff: Security guards sit in front of file, regex, and remote-content operations and can block downstream runtime paths.
