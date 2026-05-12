# Status Gateway Channel Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `cli-commands/`
- Leaf: `status-gateway-channel/`

## Purpose

Status/probe surfaces, gateway lifecycle commands, and channel status/config command flows.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `102` (修改 56，新增 44，删除 2).
- Target-existing changed paths listed here: `100`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 88 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `66`
- Target-existing changed paths reflected here: `66`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
