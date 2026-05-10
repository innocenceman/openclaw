# Network Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/net/**`
- Runtime handoff: Network guards wrap remote fetches before media, plugin, or browser/runtime consumers use them.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 10, 'A': 3}`.

- `src/infra/net/fetch-guard.ssrf.test.ts`
- `src/infra/net/fetch-guard.ts`
- `src/infra/net/hostname.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/proxy-env.ts`
- `src/infra/net/proxy-fetch.test.ts`
- `src/infra/net/proxy-fetch.ts`
- `src/infra/net/redirect-headers.ts`
- `src/infra/net/runtime-fetch.test.ts`
- `src/infra/net/runtime-fetch.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`
- `src/infra/net/undici-runtime.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
