# Secret Target Registry Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`.
2. Run command target tests when registry entries affect CLI command resolution.
