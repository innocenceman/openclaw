# Core Abstractions Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/channel-config.ts`, `src/channels/command-gating.ts`, `src/channels/session*.ts`, `src/channels/targets.ts`
- Runtime handoff: Shared helpers normalize channel/session state before plugin or built-in transports consume it.
