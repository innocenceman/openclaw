# CLI Runner Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

1. Run `pnpm test -- src/agents/cli-runner.test.ts src/agents/cli-backends.test.ts src/agents/cli-runner`.
2. Run provider-specific runner tests when touching provider CLI behavior.
3. Run `pnpm build` for lazy-loading or bundled boundary changes.
