# Root Entrypoints Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/entry*.ts`, `src/index.ts`, `src/runtime.ts`, `src/library.ts`, `src/extensionAPI.ts`, `src/global-state.ts`, `src/globals.ts`, `src/version.ts`, `src/param-key.ts`, `src/polls.ts`
- Runtime handoff: Package entrypoints and runtime bootstrap files fan out into CLI, gateway, plugin SDK, and shared runtime modules.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `11` changed path(s) to this final leaf. `11` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 10, 'A': 1}`.

- `src/entry.test.ts`
- `src/entry.ts`
- `src/entry.version-fast-path.test.ts`
- `src/entry.version-fast-path.ts`
- `src/globals.ts`
- `src/index.ts`
- `src/library.test.ts`
- `src/library.ts`
- `src/param-key.ts`
- `src/version.test.ts`
- `src/version.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/entry.compile-cache.test.ts`
- `src/entry.compile-cache.ts`
- `src/entry.respawn.test.ts`
- `src/entry.respawn.ts`
- `src/entry.test.ts`
- `src/entry.ts`
- `src/extensionAPI.ts`
- `src/index.ts`
- `src/library.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
