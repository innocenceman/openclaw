# Queue Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                         | Escalation trigger                                                                                      | Notes                 |
| ------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------- |
| `queue/`     | pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts | Escalate to outbound/channel tests when queue timing or delivery ordering crosses transport boundaries. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `16` (新增 7，修改 9).
- Target-existing path refs in active map: `16`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/auto-reply/reply/queue-policy.test.ts`
- `src/auto-reply/reply/queue-policy.ts`
- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings.test.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/steering.ts`
- `src/auto-reply/reply/queue/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
