# ACP Spawn Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 acp-spawn verified wave

1. Run `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts`.
2. Also run ACP control-plane/session tests when spawn identity changes.

## Verified wave result

2026-05-08 result: both required commands passed.

- `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts` passed with 3 files and 32 tests.
- `pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts` passed with 1 file and 9 tests.

Keep the second command when a change touches `runtime="acp"`, `streamTo`, `resumeSessionId`, or the tool-to-`spawnAcpDirect` bridge.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `6` (修改 6).
- Target-existing path refs in active map: `6`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/acp-spawn-parent-stream.test.ts`
- `src/agents/acp-spawn-parent-stream.ts`
- `src/agents/acp-spawn.test.ts`
- `src/agents/acp-spawn.ts`
- `src/agents/tools/sessions-spawn-tool.test.ts`
- `src/agents/tools/sessions-spawn-tool.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
