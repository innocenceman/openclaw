# Allowlists Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/allowlist-match.ts`, `src/channels/allowlists/**`, `src/channels/plugins/allowlist-match.ts`
- Runtime handoff: Allowlist/group policy checks run before command/reply dispatch and can short-circuit channel handling.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 2}`.

- `src/channels/allowlist-match.ts`
- `src/channels/allowlists/resolve-utils.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/channels/allowlists/resolve-utils.ts`
- `src/channels/plugins/allowlist-match.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
