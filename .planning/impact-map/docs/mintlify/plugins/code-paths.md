# Docs plugins Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/plugins` changes or moves.
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

This target refresh maps `28` changed path(s) to this final leaf. `28` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 17, 'A': 11}`.

- `docs/plugins/agent-tools.md`
- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-extensions.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manifest.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/sdk-agent-harness.md`
- `docs/plugins/sdk-channel-plugins.md`
- `docs/plugins/sdk-entrypoints.md`
- `docs/plugins/sdk-migration.md`
- `docs/plugins/sdk-overview.md`
- `docs/plugins/sdk-provider-plugins.md`
- `docs/plugins/sdk-runtime.md`
- `docs/plugins/sdk-setup.md`
- `docs/plugins/sdk-subpaths.md`
- `docs/plugins/sdk-testing.md`
- `docs/plugins/skill-workshop.md`
- `docs/plugins/voice-call.md`
- `docs/plugins/webhooks.md`
- `docs/plugins/zalouser.md`

<!-- version-diff-refresh:v2026.4.24:end -->
