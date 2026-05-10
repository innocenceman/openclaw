# Subagent Registry Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/subagent-registry.test.ts src/agents/subagent-registry-queries.test.ts src/agents/subagent-registry-cleanup.test.ts src/agents/subagent-registry-completion.test.ts src/agents/subagent-registry.persistence.test.ts src/agents/subagent-registry.context-engine.test.ts src/agents/subagent-spawn.test.ts`.
2. Escalate to reply/runtime tests when context or child-session state affects parent/child message flow.
