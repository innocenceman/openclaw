# Agent Command CLI Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts src/commands/agents.test.ts`.
2. Run `agent-runtime/runtime/` tests when command behavior changes runtime execution.
