# Context Tokens Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts`.
2. Escalate to reply/runtime tests when context or child-session state affects parent/child message flow.
