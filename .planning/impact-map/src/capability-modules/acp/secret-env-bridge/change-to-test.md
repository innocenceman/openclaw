# ACP Secret Env Bridge Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

1. Run `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`.
2. Also run `config-secrets-security/secrets-resolution/` tests when secret ref semantics change.

## 2026-05-08 verification result

- Result: `verified`
- Tool evidence: GitNexus context on `readSecretFromFile` shows callers in ACP CLI, gateway CLI run, and ACP server args, with dependency on `src/infra/secret-file.ts`. code-review-graph: max risk 0.85, 19 risk-index symbols.
- Test evidence: `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts` passed: 2 files, 6 tests.
- Raw log: `../../../../evidence/src-acp-verified-wave-2026-05-08/logs/secret-env-bridge.log`
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `4` (修改 4).
- Target-existing path refs in active map: `4`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/acp/policy.test.ts`
- `src/acp/policy.ts`
- `src/acp/secret-file.test.ts`
- `src/acp/secret-file.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
