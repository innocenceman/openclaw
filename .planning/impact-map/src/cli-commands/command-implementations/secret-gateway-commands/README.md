# Secret Gateway Commands Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `secret-gateway-commands/`

## Purpose

CLI command handlers for secret/gateway resolution surfaces.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `18` (修改 17，新增 1).
- Target-existing changed paths listed here: `18`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli.coverage.test.ts`
- `src/cli/gateway-cli/call.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/register.option-collisions.test.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/cli/secrets-cli.test.ts`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `18`
- Target-existing changed paths reflected here: `18`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/cli/command-secret-resolution.coverage.test.ts`
- `src/cli/gateway-cli/dev.ts`
- `src/cli/gateway-cli/lifecycle.runtime.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.test.ts`
- `src/cli/gateway-cli/qa-parent-watchdog.ts`
- `src/cli/gateway-cli/register.ts`
- `src/cli/gateway-cli/run-loop.test.ts`
- `src/cli/gateway-cli/run-loop.ts`
- `src/cli/gateway-cli/run.option-collisions.test.ts`
- `src/cli/gateway-cli/run.supervised-lock.test.ts`
- `src/cli/gateway-cli/run.ts`
- `src/cli/gateway-cli/shared.ts`
- `src/commands/gateway-install-token.persist.runtime.ts`
- `src/commands/gateway-install-token.test.ts`
- `src/commands/gateway-install-token.ts`
- `src/commands/gateway-presence.ts`
- `src/commands/gateway-status.test.ts`
- `src/commands/gateway-status.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
