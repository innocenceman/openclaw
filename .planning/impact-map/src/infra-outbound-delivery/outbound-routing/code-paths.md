# Outbound Routing Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/channel-*.ts`, `src/infra/outbound/target-*.ts`, `src/infra/outbound/session-binding-service.ts`, `src/infra/outbound/outbound-policy.ts`
- Runtime handoff: Outbound routing maps session/account/channel policy into a concrete send target before delivery.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `18` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 2, 'A': 3, 'M': 13}`.

- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-resolution.ts`
- `src/infra/outbound/channel-selection.runtime.ts`
- `src/infra/outbound/channel-selection.test.ts`
- `src/infra/outbound/channel-selection.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/outbound-policy.test.ts`
- `src/infra/outbound/outbound-policy.ts`
- `src/infra/outbound/session-binding-service.test.ts`
- `src/infra/outbound/session-binding-service.ts`
- `src/infra/outbound/target-id-resolution.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-normalization.ts`
- `src/infra/outbound/target-resolver.test.ts`
- `src/infra/outbound/target-resolver.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/infra/outbound/channel-bootstrap.runtime.ts`
- `src/infra/outbound/channel-resolution.test.ts`
- `src/infra/outbound/channel-target-prefix.ts`
- `src/infra/outbound/channel-target.ts`
- `src/infra/outbound/target-normalization.test.ts`
- `src/infra/outbound/target-normalization.ts`
- `src/infra/outbound/target-resolver.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
