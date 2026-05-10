# Session Scope Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/agent-scope.ts`, `src/agents/agent-paths.ts`, `src/agents/cli-session.ts`, `src/agents/identity*.ts`
- Runtime handoff: Entrypoints resolve agent identity/session scope here before tools, providers, reply orchestration, or ACP integration consume the runtime context.
