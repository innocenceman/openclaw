# Provider Params Streams Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/pi-embedded-runner/extra-params*.ts`, `src/agents/pi-embedded-runner/*-stream-wrappers.ts`, `src/agents/pi-embedded-runner/google.ts`, `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
