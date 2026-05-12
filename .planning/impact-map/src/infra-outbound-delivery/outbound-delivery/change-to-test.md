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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/message.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/targets-resolve-shared.ts`
- `src/infra/outbound/targets-session.ts`
- `src/infra/outbound/targets.shared-test.ts`
- `src/infra/outbound/targets.test-helpers.ts`
- `src/infra/outbound/targets.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
