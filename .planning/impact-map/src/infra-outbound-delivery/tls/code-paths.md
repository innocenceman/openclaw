# Tls Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/tls/**`
- Runtime handoff: TLS helpers shape connection trust checks before outbound or gateway transport connects.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1` changed path(s) to this final leaf. `1` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 1}`.

- `src/infra/tls/fingerprint.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
