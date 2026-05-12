# Boundary Enforcement Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/plugins/sdk-alias.ts`, `src/plugins/bundled-plugin-naming.test.ts`, `src/plugins/install-security-scan.ts`, `src/plugins/runtime/runtime-plugin-boundary.ts`
- Runtime handoff: Boundary helpers enforce safe imports, manifest/package invariants, and runtime guardrails before plugin activation.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `2` changed path(s) to this final leaf. `2` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 1, 'M': 1}`.

- `src/plugin-activation-boundary.test.ts`
- `src/plugins/runtime/runtime-plugin-boundary.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/plugin-activation-boundary.test.ts`
- `src/plugins/runtime/runtime-plugin-boundary.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
