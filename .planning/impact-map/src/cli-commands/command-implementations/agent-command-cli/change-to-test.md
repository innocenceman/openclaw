# Agent Command CLI Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`.
2. Run `agent-runtime/runtime/` tests when command behavior changes runtime execution.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `30` (新增 7，修改 17，删除 6).
- Target-existing path refs in active map: `24`; deleted/renamed-away refs kept only in transition artifacts: `6`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
