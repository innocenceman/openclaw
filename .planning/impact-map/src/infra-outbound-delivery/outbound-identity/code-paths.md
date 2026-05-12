# Outbound Identity Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/identity.ts`, `src/infra/outbound/conversation-id.ts`, `src/infra/outbound/base-session-key.ts`, `src/infra/outbound/outbound-session.ts`, `src/infra/outbound/directory-cache.ts`
- Runtime handoff: Identity helpers maintain stable conversation/session keys before routing and delivery bind targets.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `9` changed path(s) to this final leaf. `9` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 8, 'A': 1}`.

- `src/infra/outbound/base-session-key.ts`
- `src/infra/outbound/conversation-id.ts`
- `src/infra/outbound/directory-cache.test.ts`
- `src/infra/outbound/directory-cache.ts`
- `src/infra/outbound/identity.test.ts`
- `src/infra/outbound/identity.ts`
- `src/infra/outbound/outbound-session.test-helpers.ts`
- `src/infra/outbound/outbound-session.test.ts`
- `src/infra/outbound/outbound-session.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/infra/outbound/conversation-id.test.ts`
- `src/infra/outbound/conversation-id.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
