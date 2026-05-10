# Docs Support .generated

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/.generated/**` within the Mintlify docs surface.

## Observed facts

5 files and 1 Markdown page are present under `docs/.generated/`.
No `docs/.generated/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/.generated/README.md`
  Route groups, redirects, and top-level page ordering still flow through `docs/docs.json`.

## Incoming dependencies

- Other docs pages and Mintlify nav groups route readers into this leaf.
- Root-relative internal links and image references can break when page or asset paths move.

## Outgoing dependencies

- Docs validation starts with `pnpm check:docs` or the narrower `pnpm docs:check-links` / `pnpm docs:check-i18n-glossary` checks.

## Risk triggers

- Renaming or moving pages without updating `docs/docs.json` navigation, redirects, or local index links.
- Changing root-relative links or embedded asset paths without rerunning docs link checks.

## Validation status

No product tests, docs builds, or translation reruns were executed for this leaf during Wave 4. Coverage is based on repo-native inspection of the current tree, package scripts, and adjacent docs tooling.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `386` (修改 133，删除 81，新增 170，重命名/移动 2).
- Target-existing changed paths listed here: `304`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `82`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/.generated/README.md`
- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/.i18n/ar-navigation.json`
- `docs/.i18n/de-navigation.json`
- `docs/.i18n/es-navigation.json`
- `docs/.i18n/fr-navigation.json`
- `docs/.i18n/id-navigation.json`
- `docs/.i18n/it-navigation.json`
- `docs/.i18n/ja-navigation.json`
- `docs/.i18n/ko-navigation.json`
- `docs/.i18n/pl-navigation.json`
- `... 另有 292 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
