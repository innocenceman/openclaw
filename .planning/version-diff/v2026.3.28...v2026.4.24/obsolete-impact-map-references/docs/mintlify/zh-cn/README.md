# Generated or Localized Docs zh-CN

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for `docs/zh-CN/**` within the Mintlify docs surface.

## Observed facts

312 files and 312 Markdown pages are present under `docs/zh-CN/`.
An `docs/zh-CN/index.md` page is present and acts as the local entrypoint.
Sample files:

- `docs/zh-CN/AGENTS.md`
- `docs/zh-CN/automation/auth-monitoring.md`
- `docs/zh-CN/automation/cron-jobs.md`
- `docs/zh-CN/automation/cron-vs-heartbeat.md`
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
