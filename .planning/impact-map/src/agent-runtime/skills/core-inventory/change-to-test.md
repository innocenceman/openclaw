# Core Inventory Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`.
2. Escalate to plugin/runtime tests when skill loading crosses extension or sandbox boundaries.
