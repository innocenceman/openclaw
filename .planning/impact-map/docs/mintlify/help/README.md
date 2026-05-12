# Docs help

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/help/**` within the Mintlify docs surface.

## Observed facts

7 files and 7 Markdown pages are present under `docs/help/`.
An `docs/help/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/help/debugging.md`
- `docs/help/environment.md`
- `docs/help/faq.md`
- `docs/help/index.md`
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
- Changed paths in this leaf: `12` (修改 7，新增 5).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `docs/help/debugging.md`
- `docs/help/environment.md`
- `docs/help/faq-first-run.md`
- `docs/help/faq-models.md`
- `docs/help/faq.md`
- `docs/help/gpt54-codex-agentic-parity-maintainers.md`
- `docs/help/gpt54-codex-agentic-parity.md`
- `docs/help/index.md`
- `docs/help/scripts.md`
- `docs/help/testing-live.md`
- `docs/help/testing.md`
- `docs/help/troubleshooting.md`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `13`
- Target-existing changed paths reflected here: `11`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `docs/help/debugging.md`
- `docs/help/environment.md`
- `docs/help/faq-first-run.md`
- `docs/help/faq-models.md`
- `docs/help/faq.md`
- `docs/help/gpt55-codex-agentic-parity-maintainers.md`
- `docs/help/gpt55-codex-agentic-parity.md`
- `docs/help/index.md`
- `docs/help/testing-live.md`
- `docs/help/testing-updates-plugins.md`
- `docs/help/testing.md`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
