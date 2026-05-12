# Generated or Localized Docs ja-JP

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/ja-JP/**` within the Mintlify docs surface.

- This is a small localized subtree rooted at `docs/ja-JP/`; no generated translation workflow was observed for this slice during Wave 4.

## Observed facts

3 files and 3 Markdown pages are present under `docs/ja-JP/`.
An `docs/ja-JP/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/ja-JP/index.md`
- `docs/ja-JP/start/getting-started.md`
- `docs/ja-JP/start/wizard.md`
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
