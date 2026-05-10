# Status Gateway Channel Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/commands/gateway-status/**`, `src/commands/channels/**`, `src/commands/status-all/**`, `src/cli/gateway-cli/**`, `src/cli/daemon-cli/**`
- Runtime handoff: Status and gateway commands fan into probe/runtime helpers before rendering user-facing output.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `102` changed path(s) to this final leaf. `100` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 56, 'A': 44, 'D': 2}`.

- `src/cli/daemon-cli/gateway-token-drift.test.ts`
- `src/cli/daemon-cli/gateway-token-drift.ts`
- `src/cli/daemon-cli/install.integration.test.ts`
- `src/cli/daemon-cli/install.runtime.ts`
- `src/cli/daemon-cli/install.test.ts`
- `src/cli/daemon-cli/install.ts`
- `src/cli/daemon-cli/launchd-recovery.test.ts`
- `src/cli/daemon-cli/launchd-recovery.ts`
- `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`
- `src/cli/daemon-cli/lifecycle-core.test.ts`
- `src/cli/daemon-cli/lifecycle-core.ts`
- `src/cli/daemon-cli/lifecycle.runtime.ts`
- `src/cli/daemon-cli/lifecycle.test.ts`
- `src/cli/daemon-cli/lifecycle.ts`
- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/register-service-commands.test.ts`
- `src/cli/daemon-cli/register-service-commands.ts`
- `src/cli/daemon-cli/register.ts`
- `src/cli/daemon-cli/restart-health.test.ts`
- `src/cli/daemon-cli/restart-health.ts`
- `src/cli/daemon-cli/shared.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.print.test.ts`
- `src/cli/daemon-cli/status.print.ts`
- `src/cli/daemon-cli/status.runtime.ts`
- `src/cli/daemon-cli/status.ts`
- `src/commands/gateway-status/discovery.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `... 另有 70 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
