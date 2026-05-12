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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `27` changed path(s) to this final leaf. `27` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 18, 'A': 8, 'R': 1}`.

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/AGENTS.md`
- `docs/CLAUDE.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/date-time.md`
- `docs/index.md`
- `docs/logging.md`
- `docs/network.md`
- `docs/perplexity.md`
- `docs/pi-dev.md`
- `docs/pi.md`
- `docs/plan/codex-context-engine-harness.md`
- `docs/plan/ui-channels.md`
- `docs/prose.md`
- `docs/snippets/plugin-publish/minimal-openclaw.plugin.json`
- `docs/snippets/plugin-publish/minimal-package.json`
- `docs/style.css`
- `docs/superpowers/specs/2026-04-22-tweakcn-custom-theme-import-design.md`
- `docs/tts.md`
- `docs/vps.md`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `AGENTS.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/auth-credential-semantics.md`
- `docs/brave-search.md`
- `docs/ci.md`
- `docs/logging.md`
- `docs/pi-dev.md`
- `docs/pi.md`
- `docs/plan/codex-context-engine-harness.md`
- `docs/plan/ui-channels.md`
- `docs/snippets/plugin-publish/minimal-openclaw.plugin.json`
- `docs/superpowers/specs/2026-04-22-tweakcn-custom-theme-import-design.md`
- `docs/vps.md`

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
