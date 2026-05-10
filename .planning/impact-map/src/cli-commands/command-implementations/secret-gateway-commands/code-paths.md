# Secret Gateway Commands Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/cli/command-secret-*.ts`, `src/cli/secrets-cli.ts`, `src/cli/gateway-cli*.ts`, `src/cli/gateway-cli/**`, `src/commands/gateway-*.ts`
- Runtime handoff: CLI secret/gateway commands resolve command-side secrets or call gateway surfaces before runtime modules consume results.
