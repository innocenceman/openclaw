# Core Inventory Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts`.
2. Escalate to plugin/runtime tests when skill loading crosses extension or sandbox boundaries.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `61` (修改 48，新增 13).
- Target-existing path refs in active map: `61`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
