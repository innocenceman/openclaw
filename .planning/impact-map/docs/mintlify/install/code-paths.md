# Docs install Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/install` changes or moves.
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

This target refresh maps `24` changed path(s) to this final leaf. `24` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 22, 'A': 2}`.

- `docs/install/ansible.md`
- `docs/install/azure.md`
- `docs/install/bun.md`
- `docs/install/clawdock.md`
- `docs/install/development-channels.md`
- `docs/install/digitalocean.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/gcp.md`
- `docs/install/hetzner.md`
- `docs/install/hostinger.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/migrating-matrix.md`
- `docs/install/migrating.md`
- `docs/install/nix.md`
- `docs/install/node.md`
- `docs/install/northflank.mdx`
- `docs/install/oracle.md`
- `docs/install/railway.mdx`
- `docs/install/raspberry-pi.md`
- `docs/install/render.mdx`
- `docs/install/uninstall.md`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `docs/install/ansible.md`
- `docs/install/bun.md`
- `docs/install/development-channels.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/hetzner.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/macos-vm.md`
- `docs/install/migrating-claude.md`
- `docs/install/migrating-hermes.md`
- `docs/install/migrating.md`

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
