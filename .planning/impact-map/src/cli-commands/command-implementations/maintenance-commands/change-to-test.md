# Maintenance Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted tests for the changed command family.
2. For message behavior, also run channel/infra outbound tests when delivery semantics change.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `301` (重命名/移动 3，修改 202，新增 85，删除 11).
- Target-existing path refs in active map: `288`; deleted/renamed-away refs kept only in transition artifacts: `13`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/cli/argv-invocation.ts`
- `src/cli/capability-cli.test.ts`
- `src/cli/capability-cli.ts`
- `src/cli/channel-auth.test.ts`
- `src/cli/channel-auth.ts`
- `src/cli/channel-options.test.ts`
- `src/cli/channel-options.ts`
- `src/cli/channels-cli.ts`
- `src/cli/cli-name.ts`
- `src/cli/cli-utils.test.ts`
- `src/cli/cli-utils.ts`
- `src/cli/command-bootstrap.test.ts`
- `src/cli/command-bootstrap.ts`
- `src/cli/command-catalog.ts`
- `src/cli/command-execution-startup.test.ts`
- `src/cli/command-execution-startup.ts`
- `src/cli/command-path-matches.ts`
- `src/cli/command-path-policy.test.ts`
- `src/cli/command-path-policy.ts`
- `src/cli/command-registration-policy.test.ts`
- `src/cli/command-registration-policy.ts`
- `src/cli/command-startup-policy.test.ts`
- `src/cli/command-startup-policy.ts`
- `src/cli/completion-cli.ts`
- `src/cli/completion-cli.write-state.test.ts`
- `src/cli/completion-runtime.ts`
- `src/cli/config-cli.test.ts`
- `src/cli/config-cli.ts`
- `src/cli/config-set-input.ts`
- `src/cli/config-set-parser.ts`
- `src/cli/container-target.test.ts`
- `src/cli/container-target.ts`
- `src/cli/cron-cli.test.ts`
- `src/cli/cron-cli/register.cron-add.ts`
- `src/cli/cron-cli/register.cron-edit.ts`
- `src/cli/cron-cli/register.ts`
- `src/cli/cron-cli/shared.test.ts`
- `src/cli/cron-cli/shared.ts`
- `src/cli/cron-cli/thread-id-shared.ts`
- `src/cli/daemon-cli.coverage.test.ts`
- … plus 199 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
