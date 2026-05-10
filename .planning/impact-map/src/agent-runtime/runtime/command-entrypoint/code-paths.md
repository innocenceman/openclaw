# Command Entrypoint Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/agent-command.ts`, `src/commands/agent.ts`, `src/commands/agent-via-gateway.ts`
- Runtime handoff: CLI/gateway calls normalize agent invocation before dispatching into scope/session helpers and reply execution.
