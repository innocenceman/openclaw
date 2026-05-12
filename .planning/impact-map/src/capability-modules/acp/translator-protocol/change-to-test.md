# ACP Translator Protocol Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

1. Run `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`.
2. Run session identity tests when protocol changes alter session mapping.

## 2026-05-08 verification result

- Result: `verified`
- Tool evidence: GitNexus context on `AcpGatewayAgent.prompt` shows dependencies on event mapper, session store, gateway client request, session mapper, and meta helpers. code-review-graph: max risk 0.85, 250 risk-index symbols.
- Test evidence: `pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts` passed: 8 files, 88 tests.
- Raw log: `../../../../evidence/src-acp-verified-wave-2026-05-08/logs/translator-protocol.log`
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

- `src/acp/client.ts`
- `src/acp/event-mapper.ts`
- `src/acp/server.startup.test.ts`
- `src/acp/server.ts`
- `src/acp/translator.prompt-harness.test-support.ts`
- `src/acp/translator.session-rate-limit.test.ts`
- `src/acp/translator.set-session-mode.test.ts`
- `src/acp/translator.test-helpers.ts`
- `src/acp/translator.ts`
- `src/acp/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
