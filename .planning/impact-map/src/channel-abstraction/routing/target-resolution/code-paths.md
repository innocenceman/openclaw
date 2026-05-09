# Target Resolution Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/routing/resolve-route.ts`, `src/routing/account-id.ts`, `src/routing/account-lookup.ts`, `src/routing/session-key.ts`
- Runtime handoff: Callers resolve explicit target input, then preserve account/session continuity before delivery or command execution continues.
