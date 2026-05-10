# Formatting Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/envelope.ts`, `src/infra/outbound/format.ts`, `src/infra/outbound/payloads.ts`, `src/infra/outbound/sanitize-text.ts`
- Runtime handoff: Formatting helpers are the last shared transform before a transport sends payloads.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `7` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 7}`.

- `src/infra/outbound/envelope.test.ts`
- `src/infra/outbound/format.test.ts`
- `src/infra/outbound/format.ts`
- `src/infra/outbound/payloads.test.ts`
- `src/infra/outbound/payloads.ts`
- `src/infra/outbound/sanitize-text.test.ts`
- `src/infra/outbound/sanitize-text.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
