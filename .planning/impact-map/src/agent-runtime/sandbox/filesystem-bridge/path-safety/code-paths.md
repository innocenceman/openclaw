# Path Safety Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

- Primary paths: `src/agents/sandbox/fs-paths.ts`, `src/agents/sandbox/host-paths.ts`, `src/agents/sandbox/fs-bridge-path-safety.ts`, `src/agents/sandbox/fs-bridge-rename-targets.ts`, `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- Runtime handoff: filesystem bridge validation protects sandbox-mounted paths before file reads, writes, shell execution, or mutation operations proceed.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `5` changed path(s) to this final leaf. `5` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 4, 'A': 1}`.

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/fs-bridge-path-safety.runtime.ts`
- `src/agents/sandbox/fs-bridge-path-safety.ts`
- `src/agents/sandbox/fs-paths.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/agents/sandbox/fs-bridge-mutation-helper.test.ts`
- `src/agents/sandbox/fs-bridge-mutation-helper.ts`
- `src/agents/sandbox/host-paths.test.ts`
- `src/agents/sandbox/host-paths.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
