# Target Resolution Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/routing/resolve-route.ts`, `src/routing/account-id.ts`, `src/routing/account-lookup.ts`, `src/routing/session-key.ts`
- Runtime handoff: Callers resolve explicit target input, then preserve account/session continuity before delivery or command execution continues.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `3` changed path(s) to this final leaf. `3` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3}`.

- `src/routing/session-key.continuity.test.ts`
- `src/routing/session-key.test.ts`
- `src/routing/session-key.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
