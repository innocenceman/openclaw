# Subagent Registry Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/subagent-registry*.ts`, `src/agents/subagent-spawn.ts`
- Runtime handoff: context/subagent metadata is resolved before runtime execution, reply flows, or child-session lifecycle consumers continue.
