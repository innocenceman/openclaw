# Cron Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation                                                                                                                          | Escalation trigger                                                                                   | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| `cron/`      | pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `verified`. Full cron/context/tts command passed across 73 filters.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `135` (重命名/移动 3，新增 52，修改 71，删除 9).
- Target-existing path refs in active map: `123`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/cron/active-jobs.ts`
- `src/cron/cron-protocol-conformance.test.ts`
- `src/cron/cron-protocol-schema.test.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.test.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/heartbeat-policy.ts`
- `src/cron/isolated-agent.delivery-awareness.test.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.model-preflight.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-target.runtime.ts`
- `src/cron/isolated-agent/delivery-target.test.ts`
- `src/cron/isolated-agent/delivery-target.ts`
- `src/cron/isolated-agent/helpers.ts`
- `src/cron/isolated-agent/model-preflight.runtime.test.ts`
- `src/cron/isolated-agent/model-preflight.runtime.ts`
- `src/cron/isolated-agent/model-selection.ts`
- `src/cron/isolated-agent/run-embedded.runtime.ts`
- `src/cron/isolated-agent/run-execution.runtime.ts`
- `src/cron/isolated-agent/run-executor.ts`
- `src/cron/isolated-agent/run-fallback-policy.test.ts`
- `src/cron/isolated-agent/run-fallback-policy.ts`
- `src/cron/isolated-agent/run-session-state.test.ts`
- `src/cron/isolated-agent/run-session-state.ts`
- `src/cron/isolated-agent/run.cron-model-override-forwarding.test.ts`
- `src/cron/isolated-agent/run.interim-retry.test.ts`
- … plus 67 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
