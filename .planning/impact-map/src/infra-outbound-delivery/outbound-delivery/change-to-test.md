# Outbound Delivery Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                                                                                     | Escalation trigger                                                                                          | Notes                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------ |
| `outbound-delivery/` | pnpm test -- src/infra/outbound/deliver.test.ts src/infra/outbound/delivery-queue.policy.test.ts src/infra/outbound/delivery-queue.recovery.test.ts src/infra/outbound/outbound-send-service.test.ts | Escalate to channel suites when delivery timing, retries, or queue persistence broadens transport behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `65` (新增 24，删除 9，修改 32).
- Target-existing path refs in active map: `56`; deleted/renamed-away refs kept only in transition artifacts: `9`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
