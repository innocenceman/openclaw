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
