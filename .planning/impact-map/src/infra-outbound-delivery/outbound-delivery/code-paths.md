# Outbound Delivery Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/deliver*.ts`, `src/infra/outbound/delivery-queue*.ts`, `src/infra/outbound/outbound-send-service.ts`
- Runtime handoff: Outbound delivery resolves queue/runtime state before channel send services emit messages.
