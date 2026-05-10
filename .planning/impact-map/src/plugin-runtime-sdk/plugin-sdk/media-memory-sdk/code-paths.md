# Media Memory Sdk Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugin-sdk/media-*.ts`, `src/plugin-sdk/memory-*.ts`, `src/plugin-sdk/speech*.ts`, `src/plugin-sdk/web-media.ts`, `src/plugin-sdk/outbound-media.ts`
- Runtime handoff: Capability-oriented SDK helpers marshal payloads and guardrails before plugin runtime adapters consume them.
