# Tools Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope | First validation                                                                                                                                          | Escalation trigger                                                                            | Notes                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| `tools/`     | pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `209` (修改 126，新增 69，删除 12，重命名/移动 2).
- Target-existing path refs in active map: `196`; deleted/renamed-away refs kept only in transition artifacts: `13`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/agents/apply-patch.ts`
- `src/agents/bash-tools.exec-approval-followup.test.ts`
- `src/agents/bash-tools.exec-approval-followup.ts`
- `src/agents/bash-tools.exec-approval-request.ts`
- `src/agents/bash-tools.exec-foreground-failures.test.ts`
- `src/agents/bash-tools.exec-host-gateway.test.ts`
- `src/agents/bash-tools.exec-host-gateway.ts`
- `src/agents/bash-tools.exec-host-node-phases.ts`
- `src/agents/bash-tools.exec-host-node.test.ts`
- `src/agents/bash-tools.exec-host-node.ts`
- `src/agents/bash-tools.exec-host-node.types.ts`
- `src/agents/bash-tools.exec-host-shared.ts`
- `src/agents/bash-tools.exec-output.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.approval-id.test.ts`
- `src/agents/bash-tools.exec.background-abort.test.ts`
- `src/agents/bash-tools.exec.path.test.ts`
- `src/agents/bash-tools.exec.pty.test.ts`
- `src/agents/bash-tools.exec.script-preflight.test.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.process.poll-timeout.test.ts`
- `src/agents/bash-tools.process.ts`
- `src/agents/bash-tools.schemas.ts`
- `src/agents/bash-tools.test.ts`
- `src/agents/mcp-stdio.ts`
- `src/agents/openclaw-tools.agents.test.ts`
- `src/agents/openclaw-tools.browser-plugin.integration.test.ts`
- `src/agents/openclaw-tools.media-factory-plan.test.ts`
- `src/agents/openclaw-tools.plugin-context.test.ts`
- `src/agents/openclaw-tools.plugin-context.ts`
- `src/agents/openclaw-tools.session-status.test.ts`
- `src/agents/openclaw-tools.sessions-visibility.test.ts`
- `src/agents/openclaw-tools.sessions.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.allowlist.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.lifecycle.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.model.test.ts`
- `src/agents/openclaw-tools.subagents.sessions-spawn.test-harness.ts`
- `src/agents/openclaw-tools.subagents.test-harness.ts`
- … plus 102 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
