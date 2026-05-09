# Runtime Secret Collection Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/runtime*.ts`, `src/secrets/runtime-*collectors*.ts`, `src/secrets/provider-env-vars.ts`, `src/secrets/exec-resolution-policy.ts`
- Runtime handoff: Resolved refs are collected into runtime/provider/gateway/web execution surfaces before agents, plugins, or tools run.
