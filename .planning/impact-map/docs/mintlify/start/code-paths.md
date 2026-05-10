# Docs start Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/start` changes or moves.
2. Local index pages plus `docs/docs.json` determine whether the route stays reachable in Mintlify.
3. `pnpm check:docs` and `pnpm docs:check-links` are the first automated checks.

## Translation gate path

1. English page titles, section labels, or short nav labels change.
2. `pnpm docs:check-i18n-glossary` confirms whether glossary coverage is still complete.
3. Locale regeneration stays downstream of approved glossary updates and was not executed during Wave 4.

## Trace rule

When a page change is meant to document a behavior change in code, trace from the docs page to the owning product/config/plugin surface before deciding whether a product test needs to run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `14` changed path(s) to this final leaf. `14` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 14}`.

- `docs/start/bootstrapping.md`
- `docs/start/docs-directory.md`
- `docs/start/getting-started.md`
- `docs/start/hubs.md`
- `docs/start/lore.md`
- `docs/start/onboarding-overview.md`
- `docs/start/onboarding.md`
- `docs/start/openclaw.md`
- `docs/start/quickstart.md`
- `docs/start/setup.md`
- `docs/start/showcase.md`
- `docs/start/wizard-cli-automation.md`
- `docs/start/wizard-cli-reference.md`
- `docs/start/wizard.md`

<!-- version-diff-refresh:v2026.4.24:end -->
