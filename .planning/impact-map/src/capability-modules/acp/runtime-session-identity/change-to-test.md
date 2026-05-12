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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `13` (修改 11，新增 2).
- Target-existing path refs in active map: `13`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/acp/runtime/adapter-contract.testkit.ts`
- `src/acp/runtime/availability.ts`
- `src/acp/runtime/registry.test.ts`
- `src/acp/runtime/session-meta.ts`
- `src/acp/runtime/types.ts`
- `src/acp/session-interaction-mode.test.ts`
- `src/acp/session-interaction-mode.ts`
- `src/acp/session-mapper.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
