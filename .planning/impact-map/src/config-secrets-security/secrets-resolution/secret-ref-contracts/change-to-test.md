# Secret Ref Contracts Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/config/config.secrets-schema.test.ts src/secrets/ref-contract.test.ts src/secrets/resolve.test.ts`.
2. Run command-secret tests when input contracts affect CLI resolution.
3. Run `pnpm build` if exported config/schema surfaces change.
