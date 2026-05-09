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
