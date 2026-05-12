# acpx Skill Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/acpx` (skills=['./skills']).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `skill-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `41` (新增 13，重命名/移动 1，修改 13，删除 14).
- Target-existing changed paths listed here: `27`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `14`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/CLAUDE.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/setup-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/acpx-runtime-compat.d.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `... 另有 15 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `skill-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `20`
- Target-existing changed paths reflected here: `20`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/claude-agent-acp-completion.test.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `extensions/acpx/src/codex-auth-bridge.ts`
- `extensions/acpx/src/config-schema.ts`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/manifest.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/service.test.ts`
- `extensions/acpx/src/service.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
