# Status Gateway Channel Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope              | First validation                                                                                                                                                                   | Escalation trigger                                                                                        | Notes                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------ |
| `status-gateway-channel/` | pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts | Escalate to pnpm test:gateway or pnpm test:channels when command output depends on live runtime behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `102` (修改 56，新增 44，删除 2).
- Target-existing path refs in active map: `100`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
