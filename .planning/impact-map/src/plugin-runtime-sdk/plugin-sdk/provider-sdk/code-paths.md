# Provider Sdk Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugin-sdk/provider-*.ts`, `src/plugin-sdk/provider-entry.ts`
- Runtime handoff: Provider SDK helpers normalize auth/config/model behavior before runtime adapters call provider plugins.
