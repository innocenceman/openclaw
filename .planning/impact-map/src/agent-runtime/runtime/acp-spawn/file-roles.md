# ACP Spawn File Roles

Coverage: `verified`
Freshness: 2026-05-08 acp-spawn verified wave

- `acp-spawn.ts`: ACP spawn bridge.
- `acp-spawn-parent-stream.ts`: parent stream forwarding.
- Guardrail tests document ACP binding architecture expectations.

## Verified file roles

- `src/agents/acp-spawn.ts`: owns ACP spawn parameter handling, runtime policy rejection, target ACP agent resolution, optional thread binding, parent-stream plan selection, ACP runtime initialization, bootstrap dispatch, and failure cleanup.
- `src/agents/acp-spawn-parent-stream.ts`: owns parent-session progress relay, stream-log path resolution, no-output notices, lifecycle disposal, and relay heartbeat wakeups.
- `src/agents/tools/sessions-spawn-tool.ts`: direct caller bridge from the sessions spawn tool into `spawnAcpDirect`; keep as an adjacent validation boundary, not as a file owned by this leaf.
- Guardrail tests document that ACP/focus flows must stay off Discord thread-binding manager APIs.
