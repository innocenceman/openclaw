# Transport Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                           | Escalation trigger                                                                     | Notes                 |
| ------------ | ---------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------- |
| `transport/` | pnpm test -- src/channels/transport/stall-watchdog.test.ts | Escalate to channel send/monitor suites when transport timing or web behavior changes. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- No target-existing changed paths to test directly for this leaf.
<!-- version-diff-refresh:v2026.5.4:end -->
