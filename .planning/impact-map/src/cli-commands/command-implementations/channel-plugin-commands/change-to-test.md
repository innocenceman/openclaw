# Channel Plugin Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/commands/channels.ts src/commands/channels`.
2. Run channel abstraction/plugin bridge tests when command behavior affects runtime channel state.
