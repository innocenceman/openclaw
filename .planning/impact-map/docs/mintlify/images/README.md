# Docs images

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/images/**` within the Mintlify docs surface.

- These files are non-Markdown assets, so drift usually shows up as broken references or stale screenshots instead of lint failures.

## Observed facts

9 files and 0 Markdown pages are present under `docs/images/`.
No `docs/images/index.md` page was observed; route ownership is spread across leaf pages.
Sample files:

- `docs/images/configure-model-picker-unsearchable.png`
- `docs/images/feishu-step2-create-app.png`
- `docs/images/feishu-step3-credentials.png`
- `docs/images/feishu-step4-permissions.png`
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
