# Tools Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/agents/apply-patch.ts`, `src/agents/bash-tools*.ts`, `src/agents/openclaw-tools*.ts`, `src/agents/mcp-stdio.ts`, `src/agents/tools/**`
- Runtime handoff: Tool invocations normalize approval/runtime policy before dispatching to exec, MCP, or channel-aware tool wrappers.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `209` changed path(s) to this final leaf. `196` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 126, 'A': 69, 'D': 12, 'R': 2}`.

- `src/agents/apply-patch.test.ts`
- `src/agents/apply-patch.ts`
- `src/agents/bash-tools.descriptions.ts`
- `src/agents/bash-tools.exec-approval-followup.test.ts`
- `src/agents/bash-tools.exec-approval-followup.ts`
- `src/agents/bash-tools.exec-approval-request.test.ts`
- `src/agents/bash-tools.exec-approval-request.ts`
- `src/agents/bash-tools.exec-foreground-failures.test.ts`
- `src/agents/bash-tools.exec-host-gateway.test.ts`
- `src/agents/bash-tools.exec-host-gateway.ts`
- `src/agents/bash-tools.exec-host-node.test.ts`
- `src/agents/bash-tools.exec-host-node.ts`
- `src/agents/bash-tools.exec-host-shared.test.ts`
- `src/agents/bash-tools.exec-host-shared.ts`
- `src/agents/bash-tools.exec-runtime.pty-fallback.test.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.approval-id.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/bash-tools.exec.path.test.ts`
- `src/agents/bash-tools.exec.pty.test.ts`
- `src/agents/bash-tools.exec.script-preflight.test.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.process-send-keys.test.ts`
- `src/agents/bash-tools.process-send-keys.ts`
- `src/agents/bash-tools.process.poll-timeout.test.ts`
- `src/agents/bash-tools.process.send-keys.test.ts`
- `src/agents/bash-tools.process.supervisor.test.ts`
- `src/agents/bash-tools.process.ts`
- `... 另有 166 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
