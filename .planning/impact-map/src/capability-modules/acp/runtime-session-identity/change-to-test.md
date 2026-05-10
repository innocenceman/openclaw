# ACP Runtime Session Identity Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

1. Run `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`.
2. Run translator tests when session IDs affect protocol messages.

## 2026-05-08 verification result

- Result: `verified`
- Tool evidence: GitNexus context on `resolveSessionIdentityFromMeta` shows callers in ACP control-plane manager, reply ACP dispatch, identity reconcile, and runtime session identifier helpers. code-review-graph: max risk 0.85, 101 risk-index symbols.
- Test evidence: `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts` passed: 4 files, 18 tests.
- Raw log: `../../../../evidence/src-acp-verified-wave-2026-05-08/logs/runtime-session-identity.log`
