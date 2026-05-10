# Session Scope Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/agent-scope.test.ts src/agents/agent-paths.test.ts`.
2. Add identity/session targeted tests when changing identity derivation.
3. Run affected CLI or reply tests when session behavior crosses module boundaries.
