# Agent Command CLI Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/agent*.ts`, `src/commands/agent/**`, `src/commands/agents*.ts`
- Runtime handoff: CLI agent commands normalize flags and state before crossing into `agent-runtime/runtime/` leaves.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `30` changed path(s) to this final leaf. `24` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 7, 'M': 17, 'D': 6}`.

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.matrix.integration.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.binding-format.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.identity.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.identity.test.ts`
- `src/commands/agents.providers.test.ts`
- `src/commands/agents.providers.ts`
- `src/commands/agents.test.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agent/session.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.list.test.ts`
- `src/commands/agents.commands.list.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.providers.test.ts`
- `src/commands/agents.providers.ts`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
