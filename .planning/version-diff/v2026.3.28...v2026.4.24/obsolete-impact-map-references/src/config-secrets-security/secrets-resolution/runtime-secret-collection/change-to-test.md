# Runtime Secret Collection Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/secrets/runtime.test.ts src/secrets/runtime.integration.test.ts src/secrets/provider-env-vars.test.ts`.
2. Run runtime-web/gateway tests when changing web or gateway secret surfaces.
