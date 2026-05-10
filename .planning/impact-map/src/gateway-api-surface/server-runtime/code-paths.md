# Server Runtime Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/gateway/boot.ts`, `src/gateway/server-http.ts`, `src/gateway/server-close.ts`, `src/gateway/channel-health-*.ts`, `src/gateway/control-ui*.ts`
- Runtime handoff: Gateway runtime boots listeners and control UI before routing requests into auth or server-method handlers.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `21` changed path(s) to this final leaf. `21` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 19, 'A': 2}`.

- `src/gateway/boot.ts`
- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui.auto-root.http.test.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.hooks-request-timeout.test.ts`
- `src/gateway/server-http.probe.test.ts`
- `src/gateway/server-http.stages.test.ts`
- `src/gateway/server-http.test-harness.ts`
- `src/gateway/server-http.ts`
- `src/infra/ports.test.ts`
- `src/infra/ports.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
