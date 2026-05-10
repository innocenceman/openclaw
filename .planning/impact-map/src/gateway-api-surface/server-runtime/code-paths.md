# Server Runtime Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/gateway/boot.ts`, `src/gateway/server-http.ts`, `src/gateway/server-close.ts`, `src/gateway/channel-health-*.ts`, `src/gateway/control-ui*.ts`
- Runtime handoff: Gateway runtime boots listeners and control UI before routing requests into auth or server-method handlers.
