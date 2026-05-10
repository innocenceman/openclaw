# Outbound Delivery Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/deliver*.ts`, `src/infra/outbound/delivery-queue*.ts`, `src/infra/outbound/outbound-send-service.ts`
- Runtime handoff: Outbound delivery resolves queue/runtime state before channel send services emit messages.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `65` changed path(s) to this final leaf. `56` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 24, 'D': 9, 'M': 32}`.

- `src/cli/send-runtime/channel-outbound-send.test.ts`
- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/AGENTS.md`
- `src/infra/outbound/account-scoped-conversation-bindings.ts`
- `src/infra/outbound/agent-delivery.test.ts`
- `src/infra/outbound/agent-delivery.ts`
- `src/infra/outbound/best-effort-delivery.test.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/current-conversation-bindings.test.ts`
- `src/infra/outbound/current-conversation-bindings.ts`
- `src/infra/outbound/deliver-types.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/delivery-queue-recovery.ts`
- `src/infra/outbound/delivery-queue-storage.ts`
- `src/infra/outbound/delivery-queue.policy.test.ts`
- `src/infra/outbound/delivery-queue.reconnect-drain.test.ts`
- `src/infra/outbound/delivery-queue.recovery.test.ts`
- `src/infra/outbound/delivery-queue.storage.test.ts`
- `src/infra/outbound/delivery-queue.test-helpers.ts`
- `src/infra/outbound/delivery-queue.ts`
- `src/infra/outbound/formatting.ts`
- `src/infra/outbound/identity-types.ts`
- `src/infra/outbound/message-plan.test.ts`
- `src/infra/outbound/message-plan.ts`
- `src/infra/outbound/message.channels.test.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `... 另有 26 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
