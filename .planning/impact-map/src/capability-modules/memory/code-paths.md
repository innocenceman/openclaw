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
- `src/memory-host-sdk/engine-embeddings.ts`
- `src/memory-host-sdk/engine-foundation.ts`
- `src/memory-host-sdk/engine-qmd.ts`
- `src/memory-host-sdk/engine-storage.ts`
- `src/memory-host-sdk/engine.ts`
- `src/memory-host-sdk/events.ts`
- `src/memory-host-sdk/host/backend-config.test.ts`
- `src/memory-host-sdk/host/backend-config.ts`
- `src/memory-host-sdk/host/batch-error-utils.ts`
- `src/memory-host-sdk/host/batch-http.test.ts`
- `src/memory-host-sdk/host/batch-http.ts`
- `src/memory-host-sdk/host/batch-output.ts`
- `src/memory-host-sdk/host/batch-provider-common.ts`
- `src/memory-host-sdk/host/batch-runner.ts`
- `src/memory-host-sdk/host/batch-status.ts`
- `src/memory-host-sdk/host/batch-upload.ts`
- `src/memory-host-sdk/host/batch-utils.ts`
- `src/memory-host-sdk/host/embedding-chunk-limits.ts`
- `src/memory-host-sdk/host/embedding-input-limits.ts`
- `src/memory-host-sdk/host/embedding-inputs.ts`
- `src/memory-host-sdk/host/embedding-model-limits.ts`
- `src/memory-host-sdk/host/embedding-provider-adapter-utils.ts`
- `src/memory-host-sdk/host/embedding-vectors.ts`
- `src/memory-host-sdk/host/embeddings-debug.ts`
- `src/memory-host-sdk/host/embeddings-model-normalize.ts`
- `src/memory-host-sdk/host/embeddings-remote-client.ts`
- `src/memory-host-sdk/host/embeddings-remote-fetch.test.ts`
- `src/memory-host-sdk/host/embeddings-remote-fetch.ts`
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
