# Secret Gateway Commands Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/cli/command-secret-*.ts`, `src/cli/secrets-cli.ts`, `src/cli/gateway-cli*.ts`, `src/cli/gateway-cli/**`, `src/commands/gateway-*.ts`
- Runtime handoff: CLI secret/gateway commands resolve command-side secrets or call gateway surfaces before runtime modules consume results.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `18` changed path(s) to this final leaf. `18` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 17, 'A': 1}`.

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli.coverage.test.ts`
- `src/cli/gateway-cli/call.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/register.option-collisions.test.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/cli/secrets-cli.test.ts`
- `src/commands/gateway-install-token.persist.runtime.ts`
- `src/commands/gateway-install-token.test.ts`
- `src/commands/gateway-install-token.ts`
- `src/commands/gateway-presence.ts`
- `src/commands/gateway-status.test.ts`
- `src/commands/gateway-status.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
