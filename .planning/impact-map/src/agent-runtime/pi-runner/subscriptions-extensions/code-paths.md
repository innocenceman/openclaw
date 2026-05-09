# Subscriptions Extensions Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/pi-embedded-subscribe*.ts`, `src/agents/pi-extensions/**`, `src/agents/pi-embedded-helpers/**`, `src/agents/pi-embedded-runner/extensions.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
