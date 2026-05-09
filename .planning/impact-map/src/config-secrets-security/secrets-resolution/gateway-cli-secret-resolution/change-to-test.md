# Gateway CLI Secret Resolution Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

1. Run `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/command-secret-resolution.coverage.test.ts src/cli/command-secret-targets.test.ts src/cli/message-secret-scope.test.ts src/cli/secrets-cli.test.ts`.
2. Run gateway command tests when gateway auth/token resolution changes.
