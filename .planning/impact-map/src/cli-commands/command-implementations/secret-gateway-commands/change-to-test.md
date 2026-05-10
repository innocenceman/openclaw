# Secret Gateway Commands Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`.
2. Run `config-secrets-security/secrets-resolution/` or `gateway-api-surface/` tests when underlying behavior changes.
