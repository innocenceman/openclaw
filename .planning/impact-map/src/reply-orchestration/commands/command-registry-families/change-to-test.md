# Reply Command Registry Families Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/auto-reply/commands-args.test.ts`.
2. Add/target registry tests when command families or aliases change.
3. Cross-check `reply-orchestration/commands/command-handlers/` for handler dispatch changes.
