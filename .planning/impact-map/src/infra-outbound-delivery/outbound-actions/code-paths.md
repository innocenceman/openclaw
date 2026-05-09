# Outbound Actions Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/infra/outbound/message-action-*.ts`
- Runtime handoff: Message actions normalize user intent before the outbound runner dispatches to transport-specific helpers.
