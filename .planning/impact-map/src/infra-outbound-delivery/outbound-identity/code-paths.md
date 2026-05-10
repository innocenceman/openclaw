# Outbound Identity Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/identity.ts`, `src/infra/outbound/conversation-id.ts`, `src/infra/outbound/base-session-key.ts`, `src/infra/outbound/outbound-session.ts`, `src/infra/outbound/directory-cache.ts`
- Runtime handoff: Identity helpers maintain stable conversation/session keys before routing and delivery bind targets.
