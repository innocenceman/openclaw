# Program Registration Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope            | First validation                                                                                                                      | Escalation trigger                                                           | Notes                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------ |
| `program-registration/` | pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts | Run pnpm build when CLI exports/build output or lazy-load boundaries change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (修改 45，新增 15).
- Target-existing path refs in active map: `60`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/cli/argv.test.ts`
- `src/cli/argv.ts`
- `src/cli/program.force.test.ts`
- `src/cli/program.nodes-basic.e2e.test.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program.test-mocks.ts`
- `src/cli/program/action-reparse.test.ts`
- `src/cli/program/action-reparse.ts`
- `src/cli/program/command-descriptor-utils.ts`
- `src/cli/program/command-group-descriptors.ts`
- `src/cli/program/command-registry-core.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/config-guard.test.ts`
- `src/cli/program/config-guard.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/helpers.test.ts`
- `src/cli/program/helpers.ts`
- `src/cli/program/json-mode.ts`
- `src/cli/program/message/helpers.test.ts`
- `src/cli/program/message/helpers.ts`
- `src/cli/program/message/register.read-edit-delete.ts`
- `src/cli/program/message/register.thread.ts`
- `src/cli/program/parent-default-help.test.ts`
- `src/cli/program/parent-default-help.ts`
- `src/cli/program/preaction.test.ts`
- `src/cli/program/preaction.ts`
- `src/cli/program/register-command-groups.ts`
- `src/cli/program/register-lazy-command.ts`
- `src/cli/program/register.agent.test.ts`
- `src/cli/program/register.agent.ts`
- `src/cli/program/register.crestodian.ts`
- `src/cli/program/register.migrate.ts`
- `src/cli/program/register.onboard.test.ts`
- `src/cli/program/register.onboard.ts`
- `src/cli/program/register.setup.test.ts`
- `src/cli/program/register.setup.ts`
- `src/cli/program/register.status-health-sessions.test.ts`
- `src/cli/program/register.status-health-sessions.ts`
- `src/cli/program/register.subclis-core.ts`
- `src/cli/program/register.subclis.test.ts`
- … plus 8 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
