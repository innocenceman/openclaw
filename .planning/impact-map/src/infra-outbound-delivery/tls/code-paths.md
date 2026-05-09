# Tls Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/tls/**`
- Runtime handoff: TLS helpers shape connection trust checks before outbound or gateway transport connects.
