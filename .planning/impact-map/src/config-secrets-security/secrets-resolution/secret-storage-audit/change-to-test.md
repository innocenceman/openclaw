# Secret Storage Audit Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/secrets/apply.test.ts src/secrets/audit.test.ts src/secrets/configure.test.ts src/secrets/path-utils.test.ts`.
2. Run doctor/config tests when storage repair or config IO behavior changes.
