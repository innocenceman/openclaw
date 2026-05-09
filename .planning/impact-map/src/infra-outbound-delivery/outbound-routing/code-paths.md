# Outbound Routing Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/channel-*.ts`, `src/infra/outbound/target-*.ts`, `src/infra/outbound/session-binding-service.ts`, `src/infra/outbound/outbound-policy.ts`
- Runtime handoff: Outbound routing maps session/account/channel policy into a concrete send target before delivery.
