# Docs Support .i18n

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/.i18n/**` within the Mintlify docs surface.

## Observed facts

5 files and 1 Markdown page are present under `docs/.i18n/`.
No `docs/.i18n/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/.i18n/README.md`
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
- Changed paths in this leaf: `364` (重命名/移动 3，修改 10，新增 38，删除 313).
- Target-existing changed paths listed here: `48`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `316`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.ar.json`
- `docs/.i18n/glossary.de.json`
- `docs/.i18n/glossary.es.json`
- `docs/.i18n/glossary.fr.json`
- `docs/.i18n/glossary.id.json`
- `docs/.i18n/glossary.it.json`
- `docs/.i18n/glossary.ja-JP.json`
- `docs/.i18n/glossary.ko.json`
- `docs/.i18n/glossary.pl.json`
- `docs/.i18n/glossary.pt-BR.json`
- `docs/.i18n/glossary.th.json`
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `22`
- Target-existing changed paths reflected here: `19`
- Deleted or renamed-away paths omitted from active impact-map: `3`

### Target-version changed paths

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.fa.json`
- `docs/.i18n/glossary.nl.json`
- `docs/.i18n/glossary.vi.json`
- `docs/.i18n/glossary.zh-TW.json`
- `scripts/docs-i18n/codex_command_unix.go`
- `scripts/docs-i18n/codex_command_windows.go`
- `scripts/docs-i18n/codex_command_windows_test.go`
- `scripts/docs-i18n/doc_chunked_raw.go`
- `scripts/docs-i18n/doc_mode_test.go`
- `scripts/docs-i18n/main.go`
- `scripts/docs-i18n/main_test.go`
- `scripts/docs-i18n/process.go`
- `scripts/docs-i18n/prompt.go`
- `scripts/docs-i18n/prompt_test.go`
- `scripts/docs-i18n/translator.go`
- `scripts/docs-i18n/translator_test.go`
- `scripts/docs-i18n/util.go`
- `scripts/docs-i18n/util_test.go`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
