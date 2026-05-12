# Core Inventory Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/skills/`
- Leaf: `core-inventory/`

## Purpose

Skill inventory, workspace snapshots, status, and prompt assembly.

## 2026-05-08 result

Passed as part of `skills-core.log`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `61` (修改 48，新增 13).
- Target-existing changed paths listed here: `61`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `skills/1password/SKILL.md`
- `skills/apple-notes/SKILL.md`
- `skills/apple-reminders/SKILL.md`
- `skills/bluebubbles/SKILL.md`
- `skills/canvas/SKILL.md`
- `skills/clawhub/SKILL.md`
- `skills/coding-agent/SKILL.md`
- `skills/gh-issues/SKILL.md`
- `skills/github/SKILL.md`
- `skills/goplaces/SKILL.md`
- `skills/healthcheck/SKILL.md`
- `skills/himalaya/SKILL.md`
- `... 另有 49 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `14`
- Target-existing changed paths reflected here: `14`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `skills/coding-agent/SKILL.md`
- `skills/gifgrep/SKILL.md`
- `skills/pyproject.toml`
- `skills/skill-creator/scripts/test_package_skill.py`
- `src/agents/skills-status.test.ts`
- `src/agents/skills-status.ts`
- `src/agents/skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts`
- `src/agents/skills.buildworkspaceskillsnapshot.test.ts`
- `src/agents/skills.buildworkspaceskillstatus.test.ts`
- `src/agents/skills.loadworkspaceskillentries.test.ts`
- `src/agents/skills.test.ts`
- `src/agents/skills/snapshot-hydration.ts`
- `src/agents/skills/types.ts`
- `src/agents/skills/workspace.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
