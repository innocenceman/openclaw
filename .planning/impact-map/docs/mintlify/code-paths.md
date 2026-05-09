# Docs and Mintlify Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Public docs route path

1. Category pages live under `docs/<category>/**`.
2. `docs/docs.json` exposes those pages through Mintlify groups, redirects, and route order.
3. `pnpm check:docs`, `pnpm docs:check-links`, and `pnpm docs:list` are the first docs-side guards.

## Locale-control path

1. English docs changes can trigger glossary coverage work in `docs/.i18n/**`.
2. Approved locale regeneration flows through `scripts/docs-i18n`.
3. Generated output then lands under `docs/zh-CN/**`.

## Trace rule

When a docs change looks local, still confirm whether it crossed one of the shared Mintlify shell planes: route registration, locale control, or generated baseline drift.
