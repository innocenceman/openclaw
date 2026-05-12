# Shared Packages

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Scope

Compatibility packages under `packages/**` that preserve old package names while forwarding users to OpenClaw.

## Leaves

- `clawdbot/`: package metadata and import shim for `clawdbot`.
- `moltbot/`: package metadata and import shim for `moltbot`.

## Evidence limits

G009 added package release tests, import-shim checks, and npm pack dry-runs. Do not promote to `verified` until the missing legacy `./bin/*.js` targets are fixed and the standard release/pack-install ladder passes.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `plugin-sdk-core`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `85` (重命名/移动 8，修改 44，删除 7，新增 26).
- Target-existing changed paths listed here: `70`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `15`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `packages/memory-host-sdk/src/engine-embeddings.ts`
- `packages/memory-host-sdk/src/engine-foundation.ts`
- `packages/memory-host-sdk/src/engine-qmd.ts`
- `packages/memory-host-sdk/src/engine-storage.ts`
- `packages/memory-host-sdk/src/engine.ts`
- `packages/memory-host-sdk/src/host/backend-config.test.ts`
- `packages/memory-host-sdk/src/host/backend-config.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/embedding-model-limits.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.test.ts`
- `... 另有 58 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `plugin-sdk-core`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `89`
- Target-existing changed paths reflected here: `88`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `packages/memory-host-sdk/src/engine-embeddings.ts`
- `packages/memory-host-sdk/src/engine-foundation.ts`
- `packages/memory-host-sdk/src/engine-qmd.ts`
- `packages/memory-host-sdk/src/engine-storage.ts`
- `packages/memory-host-sdk/src/engine.ts`
- `packages/memory-host-sdk/src/host/backend-config.test.ts`
- `packages/memory-host-sdk/src/host/backend-config.ts`
- `packages/memory-host-sdk/src/host/batch-error-utils.ts`
- `packages/memory-host-sdk/src/host/batch-http.test.ts`
- `packages/memory-host-sdk/src/host/batch-http.ts`
- `packages/memory-host-sdk/src/host/batch-upload.ts`
- `packages/memory-host-sdk/src/host/batch-utils.ts`
- `packages/memory-host-sdk/src/host/config-utils.ts`
- `packages/memory-host-sdk/src/host/embedding-chunk-limits.ts`
- `packages/memory-host-sdk/src/host/embedding-defaults.ts`
- `packages/memory-host-sdk/src/host/embedding-provider-adapter-utils.ts`
- `packages/memory-host-sdk/src/host/embeddings-debug.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-client.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-fetch.ts`
- `packages/memory-host-sdk/src/host/embeddings-remote-provider.ts`
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- `packages/memory-host-sdk/src/host/embeddings.types.ts`
- `packages/memory-host-sdk/src/host/error-utils.ts`
- `packages/memory-host-sdk/src/host/hash.ts`
- `packages/memory-host-sdk/src/host/internal.test.ts`
- `packages/memory-host-sdk/src/host/internal.ts`
- `packages/memory-host-sdk/src/host/memory-schema.ts`
- `packages/memory-host-sdk/src/host/multimodal.ts`
- `packages/memory-host-sdk/src/host/node-llama.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-agent.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-auth.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-cli.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-config.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-io.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-memory.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-network.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime-session.ts`
- `packages/memory-host-sdk/src/host/openclaw-runtime.ts`
- … plus 48 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
