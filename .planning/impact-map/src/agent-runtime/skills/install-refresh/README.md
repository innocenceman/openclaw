# Install Refresh Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/skills/`
- Leaf: `install-refresh/`

## Purpose

Skill install/download/fallback, frontmatter/filter helpers, and refresh/update flows.

## 2026-05-08 result

Split only. `skills.log` failed for the broader install/download/fallback/filter/frontmatter/refresh command, so this child is not verified.

## 2026-05-09 final audit result

Verified. The final targeted installer/download/fallback/filter/frontmatter/refresh command passed for this leaf. Evidence: `../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (修改 12，新增 1).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/skills-install-download.ts`
- `src/agents/skills-install-extract.ts`
- `src/agents/skills-install-fallback.test.ts`
- `src/agents/skills-install.download.test.ts`
- `src/agents/skills-install.test-mocks.ts`
- `src/agents/skills-install.test.ts`
- `src/agents/skills-install.ts`
- `src/agents/skills-install.types.ts`
- `src/agents/skills/config.ts`
- `src/agents/skills/env-overrides.ts`
- `src/agents/skills/frontmatter.ts`
- `src/agents/skills/refresh.test.ts`
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
