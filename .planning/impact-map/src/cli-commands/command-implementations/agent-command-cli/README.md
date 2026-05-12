# Agent Command CLI Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `agent-command-cli/`

## Purpose

Agent and agents command handlers plus command session helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `30` (新增 7，修改 17，删除 6).
- Target-existing changed paths listed here: `24`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `6`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.matrix.integration.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.binding-format.ts`
- `... 另有 12 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `22`
- Target-existing changed paths reflected here: `21`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `src/commands/agent-command.test-mocks.ts`
- `src/commands/agent.acp.test.ts`
- `src/commands/agent.delivery.test.ts`
- `src/commands/agent.runtime-config.test.ts`
- `src/commands/agent.session.test.ts`
- `src/commands/agent/session.test.ts`
- `src/commands/agent/session.ts`
- `src/commands/agents.add.test.ts`
- `src/commands/agents.bind.commands.test.ts`
- `src/commands/agents.bind.test-support.ts`
- `src/commands/agents.bindings.ts`
- `src/commands/agents.command-shared.ts`
- `src/commands/agents.commands.add.ts`
- `src/commands/agents.commands.bind.ts`
- `src/commands/agents.commands.delete.ts`
- `src/commands/agents.commands.list.test.ts`
- `src/commands/agents.commands.list.ts`
- `src/commands/agents.config.ts`
- `src/commands/agents.delete.test.ts`
- `src/commands/agents.providers.test.ts`
- `src/commands/agents.providers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
