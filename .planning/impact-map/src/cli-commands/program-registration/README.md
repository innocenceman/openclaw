# Program Registration Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `cli-commands/`
- Leaf: `program-registration/`

## Purpose

Commander program tree wiring, argument parsing, and route registration.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `60` (修改 45，新增 15).
- Target-existing changed paths listed here: `60`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 48 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `48`
- Target-existing changed paths reflected here: `48`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
