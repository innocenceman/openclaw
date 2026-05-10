# Maintenance Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/backup*.ts`, `src/commands/cleanup*.ts`, `src/commands/dashboard*.ts`, `src/commands/docs.ts`, `src/commands/health*.ts`, `src/commands/message*.ts`
- Runtime handoff: Maintenance commands provide CLI UX around support/health/message flows and may cross into docs, gateway, or channel modules.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `301` changed path(s) to this final leaf. `288` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 3, 'M': 202, 'A': 85, 'D': 11}`.

- `src/cli/acp-cli.option-collisions.test.ts`
- `src/cli/acp-cli.ts`
- `src/cli/argv-invocation.test.ts`
- `src/cli/argv-invocation.ts`
- `src/cli/banner-config-lite.ts`
- `src/cli/banner.test.ts`
- `src/cli/banner.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `src/cli/channel-options.ts`
- `src/cli/channels-cli.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/cli-utils.ts`
- `src/cli/command-bootstrap.test.ts`
- `src/cli/command-bootstrap.ts`
- `src/cli/command-catalog.ts`
- `src/cli/command-config-resolution.runtime.ts`
- `src/cli/command-config-resolution.test.ts`
- `src/cli/command-config-resolution.ts`
- `src/cli/command-execution-startup.test.ts`
- `src/cli/command-execution-startup.ts`
- `src/cli/command-format.ts`
- `src/cli/command-options.ts`
- `src/cli/command-path-matches.test.ts`
- `src/cli/command-path-matches.ts`
- `src/cli/command-path-policy.test.ts`
- `src/cli/command-path-policy.ts`
- `... 另有 258 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
