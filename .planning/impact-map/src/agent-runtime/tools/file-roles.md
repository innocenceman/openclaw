# Tools File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                                                                                                        | Responsibility                                                                               | First validation                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/agents/apply-patch.ts`, `src/agents/bash-tools*.ts`, `src/agents/openclaw-tools*.ts`, `src/agents/mcp-stdio.ts`, `src/agents/tools/**` | Built-in tool adapters, exec/runtime wrappers, coding tool exposure, and MCP stdio bridging. | pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts |
