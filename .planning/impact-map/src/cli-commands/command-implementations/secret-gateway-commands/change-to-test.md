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
