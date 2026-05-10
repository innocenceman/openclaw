# Program Registration Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/cli/program/**`, `src/cli/program.ts`, `src/cli/argv.ts`
- Runtime handoff: CLI startup builds the command tree before handing off into concrete command handlers.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `60` changed path(s) to this final leaf. `60` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 45, 'A': 15}`.

- `src/cli/argv.test.ts`
- `src/cli/program.nodes-basic.e2e.test.ts`
- `src/cli/program.nodes-media.e2e.test.ts`
- `src/cli/program.smoke.test.ts`
- `src/cli/program.test-mocks.ts`
- `src/cli/program/action-reparse.test.ts`
- `src/cli/program/build-program.test.ts`
- `src/cli/program/build-program.ts`
- `src/cli/program/build-program.version-alias.test.ts`
- `src/cli/program/command-descriptor-utils.test.ts`
- `src/cli/program/command-descriptor-utils.ts`
- `src/cli/program/command-group-descriptors.test.ts`
- `src/cli/program/command-group-descriptors.ts`
- `src/cli/program/command-registry-core.ts`
- `src/cli/program/command-registry.test.ts`
- `src/cli/program/command-registry.ts`
- `src/cli/program/command-tree.test.ts`
- `src/cli/program/command-tree.ts`
- `src/cli/program/config-guard.test.ts`
- `src/cli/program/config-guard.ts`
- `src/cli/program/context.test.ts`
- `src/cli/program/core-command-descriptors.ts`
- `src/cli/program/help.test.ts`
- `src/cli/program/json-mode.ts`
- `src/cli/program/message/register.discord-admin.ts`
- `src/cli/program/message/register.pins.ts`
- `src/cli/program/message/register.send.ts`
- `src/cli/program/message/register.thread.test.ts`
- `src/cli/program/message/register.thread.ts`
- `src/cli/program/preaction.test.ts`
- `... 另有 30 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
