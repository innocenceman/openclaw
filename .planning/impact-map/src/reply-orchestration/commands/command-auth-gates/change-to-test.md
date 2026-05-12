# Reply Command Auth Gates Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run `pnpm test -- src/auto-reply/command-auth.owner-default.test.ts src/auto-reply/command-control.test.ts`.
2. Add targeted tests for `reply/command-gates.ts` when changing reject/allow behavior.
3. Run channel command tests when authorization semantics affect channel replies.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `4` (修改 3，新增 1).
- Target-existing path refs in active map: `4`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/command-auth.owner-default.test.ts`
- `src/auto-reply/command-auth.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
