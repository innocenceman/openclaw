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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/cli/daemon-cli/install.integration.test.ts`
- `src/cli/daemon-cli/install.test.ts`
- `src/cli/daemon-cli/install.ts`
- `src/cli/daemon-cli/lifecycle-core.config-guard.test.ts`
- `src/cli/daemon-cli/lifecycle-core.test.ts`
- `src/cli/daemon-cli/lifecycle-core.ts`
- `src/cli/daemon-cli/lifecycle.test.ts`
- `src/cli/daemon-cli/lifecycle.ts`
- `src/cli/daemon-cli/probe.test.ts`
- `src/cli/daemon-cli/probe.ts`
- `src/cli/daemon-cli/register-service-commands.test.ts`
- `src/cli/daemon-cli/register-service-commands.ts`
- `src/cli/daemon-cli/response.ts`
- `src/cli/daemon-cli/restart-health.test.ts`
- `src/cli/daemon-cli/restart-health.ts`
- `src/cli/daemon-cli/shared.ts`
- `src/cli/daemon-cli/start-repair.ts`
- `src/cli/daemon-cli/status.gather.test.ts`
- `src/cli/daemon-cli/status.gather.ts`
- `src/cli/daemon-cli/status.print.test.ts`
- `src/cli/daemon-cli/status.print.ts`
- `src/cli/daemon-cli/test-helpers/lifecycle-core-harness.ts`
- `src/cli/daemon-cli/types.ts`
- `src/commands/gateway-status/discovery.ts`
- `src/commands/gateway-status/helpers.test.ts`
- `src/commands/gateway-status/helpers.ts`
- `src/commands/gateway-status/output.test.ts`
- `src/commands/gateway-status/output.ts`
- `src/commands/gateway-status/probe-run.ts`
- `src/commands/status-all/channels.test.ts`
- `src/commands/status-all/channels.ts`
- `src/commands/status-all/diagnosis.test.ts`
- `src/commands/status-all/diagnosis.ts`
- `src/commands/status-all/format.test.ts`
- `src/commands/status-all/format.ts`
- `src/commands/status-all/gateway.ts`
- `src/commands/status-all/text-report.ts`
- `src/commands/status.command-report-data.test.ts`
- `src/commands/status.command-report-data.ts`
- `src/commands/status.command-sections.test.ts`
- … plus 26 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
