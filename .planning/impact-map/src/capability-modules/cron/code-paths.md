# Cron Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/cron/**`
- Runtime handoff: Schedules arm service timers, then isolated-agent or delivery logic executes through shared runtime paths.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `135` changed path(s) to this final leaf. `123` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 3, 'A': 52, 'M': 71, 'D': 9}`.

- `src/cron/active-jobs.ts`
- `src/cron/delivery-field-schemas.ts`
- `src/cron/delivery-plan.test.ts`
- `src/cron/delivery-plan.ts`
- `src/cron/delivery-preview.ts`
- `src/cron/delivery.failure-notify.test.ts`
- `src/cron/delivery.test-helpers.ts`
- `src/cron/delivery.test.ts`
- `src/cron/delivery.ts`
- `src/cron/isolated-agent.auth-profile-propagation.test.ts`
- `src/cron/isolated-agent.delivery.test-helpers.ts`
- `src/cron/isolated-agent.direct-delivery-core-channels.test.ts`
- `src/cron/isolated-agent.helpers.test.ts`
- `src/cron/isolated-agent.hook-content-wrapping.test.ts`
- `src/cron/isolated-agent.isolated-auth-session-flag.test.ts`
- `src/cron/isolated-agent.lane.test.ts`
- `src/cron/isolated-agent.mocks.ts`
- `src/cron/isolated-agent.model-formatting.test.ts`
- `src/cron/isolated-agent.model-overrides.test.ts`
- `src/cron/isolated-agent.session-identity.test.ts`
- `src/cron/isolated-agent.test-harness.ts`
- `src/cron/isolated-agent.test-setup.ts`
- `src/cron/isolated-agent.turn-test-helpers.ts`
- `src/cron/isolated-agent/channel-output-policy.test.ts`
- `src/cron/isolated-agent/channel-output-policy.ts`
- `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.named-agent.test.ts`
- `src/cron/isolated-agent/delivery-dispatch.ts`
- `src/cron/isolated-agent/delivery-logger.runtime.ts`
- `src/cron/isolated-agent/delivery-outbound.runtime.ts`
- `... 另有 93 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
