# Compatibility Paths Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/routing/bindings.ts`, `src/routing/default-account-warnings.ts`
- Runtime handoff: Compatibility helpers post-process route selection to preserve legacy/default-account behavior for downstream callers.
