# Formatting Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/envelope.ts`, `src/infra/outbound/format.ts`, `src/infra/outbound/payloads.ts`, `src/infra/outbound/sanitize-text.ts`
- Runtime handoff: Formatting helpers are the last shared transform before a transport sends payloads.
