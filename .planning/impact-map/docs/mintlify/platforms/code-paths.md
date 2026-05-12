# Docs platforms Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/platforms` changes or moves.
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

This target refresh maps `26` changed path(s) to this final leaf. `26` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 26}`.

- `docs/platforms/android.md`
- `docs/platforms/digitalocean.md`
- `docs/platforms/index.md`
- `docs/platforms/ios.md`
- `docs/platforms/linux.md`
- `docs/platforms/mac/bundled-gateway.md`
- `docs/platforms/mac/canvas.md`
- `docs/platforms/mac/child-process.md`
- `docs/platforms/mac/dev-setup.md`
- `docs/platforms/mac/health.md`
- `docs/platforms/mac/icon.md`
- `docs/platforms/mac/logging.md`
- `docs/platforms/mac/menu-bar.md`
- `docs/platforms/mac/peekaboo.md`
- `docs/platforms/mac/permissions.md`
- `docs/platforms/mac/remote.md`
- `docs/platforms/mac/signing.md`
- `docs/platforms/mac/skills.md`
- `docs/platforms/mac/voice-overlay.md`
- `docs/platforms/mac/voicewake.md`
- `docs/platforms/mac/webchat.md`
- `docs/platforms/mac/xpc.md`
- `docs/platforms/macos.md`
- `docs/platforms/oracle.md`
- `docs/platforms/raspberry-pi.md`
- `docs/platforms/windows.md`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `docs/platforms/android.md`
- `docs/platforms/digitalocean.md`
- `docs/platforms/ios.md`
- `docs/platforms/mac/dev-setup.md`
- `docs/platforms/mac/menu-bar.md`
- `docs/platforms/mac/peekaboo.md`
- `docs/platforms/mac/remote.md`
- `docs/platforms/macos.md`
- `docs/platforms/oracle.md`
- `docs/platforms/raspberry-pi.md`
<!-- version-diff-refresh:v2026.5.4:end -->
