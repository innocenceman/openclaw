# Tools Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/agents/apply-patch.ts`, `src/agents/bash-tools*.ts`, `src/agents/openclaw-tools*.ts`, `src/agents/mcp-stdio.ts`, `src/agents/tools/**`
- Runtime handoff: Tool invocations normalize approval/runtime policy before dispatching to exec, MCP, or channel-aware tool wrappers.
