# Outbound Actions Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/message-action-*.ts`
- Runtime handoff: Message actions normalize user intent before the outbound runner dispatches to transport-specific helpers.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `19` changed path(s) to this final leaf. `19` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 14, 'A': 5}`.

- `src/infra/outbound/message-action-normalization.test.ts`
- `src/infra/outbound/message-action-normalization.ts`
- `src/infra/outbound/message-action-param-keys.ts`
- `src/infra/outbound/message-action-params.test.ts`
- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.context.test.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.poll.test.ts`
- `src/infra/outbound/message-action-runner.send-validation.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.threading.test.ts`
- `src/infra/outbound/message-action-runner.ts`
- `src/infra/outbound/message-action-spec.test.ts`
- `src/infra/outbound/message-action-spec.ts`
- `src/infra/outbound/message-action-test-fixtures.ts`
- `src/infra/outbound/message-action-threading.test-helpers.ts`
- `src/infra/outbound/message-action-threading.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/infra/outbound/message-action-params.ts`
- `src/infra/outbound/message-action-runner.core-send.test.ts`
- `src/infra/outbound/message-action-runner.media.test.ts`
- `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts`
- `src/infra/outbound/message-action-runner.test-helpers.ts`
- `src/infra/outbound/message-action-runner.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
