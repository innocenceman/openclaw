# ACP Control Plane Session Manager Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/control-plane/**`
- Runtime handoff: ACP requests enter the control-plane manager before runtime sessions, spawn, and control operations are dispatched.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `7` changed path(s) to this final leaf. `7` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 7}`.

- `src/acp/control-plane/manager.core.ts`
- `src/acp/control-plane/manager.identity-reconcile.ts`
- `src/acp/control-plane/manager.test.ts`
- `src/acp/control-plane/manager.types.ts`
- `src/acp/control-plane/manager.utils.ts`
- `src/acp/control-plane/runtime-options.ts`
- `src/acp/control-plane/spawn.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
