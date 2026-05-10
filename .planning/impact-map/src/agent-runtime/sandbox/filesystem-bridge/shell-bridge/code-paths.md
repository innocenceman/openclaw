# Shell Bridge Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/sandbox/fs-bridge.ts`, `src/agents/sandbox/fs-bridge-shell-command-plans.ts`
- Runtime handoff: filesystem bridge validation protects sandbox-mounted paths before file reads, writes, shell execution, or mutation operations proceed.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `7` changed path(s) to this final leaf. `6` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 4, 'A': 2, 'D': 1}`.

- `src/agents/sandbox/fs-bridge.anchored-ops.test.ts`
- `src/agents/sandbox/fs-bridge.backend.e2e.test.ts`
- `src/agents/sandbox/fs-bridge.shell.test.ts`
- `src/agents/sandbox/fs-bridge.test-helpers.ts`
- `src/agents/sandbox/fs-bridge.ts`
- `src/agents/sandbox/fs-bridge.types.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
