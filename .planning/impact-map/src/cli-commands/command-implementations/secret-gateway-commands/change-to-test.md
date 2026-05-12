# Secret Gateway Commands Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/cli/command-secret-gateway.test.ts src/cli/secrets-cli.test.ts src/cli/gateway-cli.coverage.test.ts src/commands/gateway-status.test.ts`.
2. Run `config-secrets-security/secrets-resolution/` or `gateway-api-surface/` tests when underlying behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `18` (修改 17，新增 1).
- Target-existing path refs in active map: `18`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/lifecycle.runtime.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.test.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.supervised-lock.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/commands/gateway-install-token.persist.runtime.ts`
- `src/commands/gateway-install-token.test.ts`
- `src/commands/gateway-install-token.ts`
- `src/commands/gateway-presence.ts`
- `src/commands/gateway-status.test.ts`
- `src/commands/gateway-status.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
