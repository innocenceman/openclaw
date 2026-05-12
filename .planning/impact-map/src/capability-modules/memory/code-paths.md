# Memory Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/memory/**`
- Runtime handoff: Memory requests normalize config and embeddings before search/manager layers serve reply/runtime callers.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `70` changed path(s) to this final leaf. `70` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 70}`.

- `src/memory-host-sdk/dreaming.test.ts`
- `src/memory-host-sdk/dreaming.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/events.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `src/memory-host-sdk/host/embedding-inputs.ts`
- `src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/memory-host-sdk/dreaming.test.ts`
- `src/memory-host-sdk/dreaming.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `src/memory-host-sdk/host/embedding-defaults.ts`
- `src/memory-host-sdk/host/embedding-inputs.ts`
- `src/memory-host-sdk/host/types.ts`
- `src/memory-host-sdk/multimodal.ts`
- `src/memory-host-sdk/query.ts`
- `src/memory-host-sdk/secret.ts`
- `src/memory-host-sdk/status.ts`
- `src/memory/root-memory-files.ts`

Deleted or renamed-away paths omitted from this active leaf: `56`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
