# Core Run Loop Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/pi-embedded-runner.ts`, `src/agents/pi-embedded-runner/model*.ts`, `src/agents/pi-embedded-runner/run*.ts`, `src/agents/pi-embedded-runner/compact*.ts`, `src/agents/pi-embedded-runner/lanes.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
