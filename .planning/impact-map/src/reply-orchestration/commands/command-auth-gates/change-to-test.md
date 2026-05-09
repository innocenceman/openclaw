# Reply Command Auth Gates Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`.
2. Add targeted tests for `reply/command-gates.ts` when changing reject/allow behavior.
3. Run channel command tests when authorization semantics affect channel replies.
