# ACP Control Plane Session Manager Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

1. Run `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`.
2. Add targeted control-plane tests for manager or queue changes.
3. Cross-run `agent-runtime/runtime/acp-spawn/` tests for spawn identity changes.

## 2026-05-08 verification result

- Result: `verified`
- Tool evidence: GitNexus impact on `getAcpSessionManager` is CRITICAL: 21 direct callers, 30 impacted symbols, 5 affected processes. code-review-graph: max risk 1.00, 147 risk-index symbols.
- Test evidence: `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts` passed: 2 files, 38 tests.
- Raw log: `../../../../evidence/src-acp-verified-wave-2026-05-08/logs/control-plane-session-manager.log`
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `7` (修改 7).
- Target-existing path refs in active map: `7`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
