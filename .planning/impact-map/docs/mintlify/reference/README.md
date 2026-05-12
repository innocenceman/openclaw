# Docs reference

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/reference/**` within the Mintlify docs surface.

## Observed facts

28 files and 27 Markdown pages are present under `docs/reference/`.
No `docs/reference/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/credits.md`
  Route groups, redirects, and top-level page ordering still flow through `docs/docs.json`.

## Incoming dependencies

- Other docs pages and Mintlify nav groups route readers into this leaf.
- Root-relative internal links and image references can break when page or asset paths move.
- English page-title and short-label changes can trigger glossary coverage requirements before any zh-CN rerun.

## Outgoing dependencies

- Docs validation starts with `pnpm check:docs` or the narrower `pnpm docs:check-links` / `pnpm docs:check-i18n-glossary` checks.
- When translation work is explicitly requested, the next dependency is `scripts/docs-i18n` plus `docs/.i18n` glossary/TM assets.

## Risk triggers

- Renaming or moving pages without updating `docs/docs.json` navigation, redirects, or local index links.
- Changing root-relative links or embedded asset paths without rerunning docs link checks.
- Adding new English titles or short labels without adding required glossary coverage before a translation rerun.

## Validation status

No product tests, docs builds, or translation reruns were executed for this leaf during Wave 4. Coverage is based on repo-native inspection of the current tree, package scripts, and adjacent docs tooling.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `29` (修改 28，新增 1).
- Target-existing changed paths listed here: `29`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/credits.md`
- `docs/reference/device-models.md`
- `docs/reference/memory-config.md`
- `docs/reference/prompt-caching.md`
- `docs/reference/rich-output-protocol.md`
- `docs/reference/rpc.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/session-management-compaction.md`
- `... 另有 17 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `16`
- Target-existing changed paths reflected here: `16`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `docs/reference/AGENTS.default.md`
- `docs/reference/RELEASING.md`
- `docs/reference/api-usage-costs.md`
- `docs/reference/application-modernization-plan.md`
- `docs/reference/full-release-validation.md`
- `docs/reference/memory-config.md`
- `docs/reference/openclaw-sdk-api-design.md`
- `docs/reference/rich-output-protocol.md`
- `docs/reference/secretref-credential-surface.md`
- `docs/reference/secretref-user-supplied-credentials-matrix.json`
- `docs/reference/session-management-compaction.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/test.md`
- `docs/reference/token-use.md`
- `docs/reference/transcript-hygiene.md`
- `docs/reference/wizard.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
