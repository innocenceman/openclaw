# Docs reference Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/reference` changes or moves.
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

This target refresh maps `29` changed path(s) to this final leaf. `29` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 28, 'A': 1}`.

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
- `docs/reference/templates/AGENTS.dev.md`
- `docs/reference/templates/AGENTS.md`
- `docs/reference/templates/BOOT.md`
- `docs/reference/templates/BOOTSTRAP.md`
- `docs/reference/templates/HEARTBEAT.md`
- `docs/reference/templates/IDENTITY.dev.md`
- `docs/reference/templates/IDENTITY.md`
- `docs/reference/templates/SOUL.dev.md`
- `docs/reference/templates/SOUL.md`
- `docs/reference/templates/TOOLS.dev.md`
- `docs/reference/templates/TOOLS.md`
- `docs/reference/templates/USER.dev.md`
- `docs/reference/templates/USER.md`
- `docs/reference/test.md`
- `docs/reference/token-use.md`
- `docs/reference/transcript-hygiene.md`
- `docs/reference/wizard.md`

<!-- version-diff-refresh:v2026.4.24:end -->
