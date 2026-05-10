# Shared Packages Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

## Import shim path

1. Consumer imports a legacy package (`clawdbot` or `moltbot`).
2. The package `exports` field resolves to `index.js`.
3. `index.js` re-exports `openclaw`.
4. Runtime behavior transfers to the root OpenClaw package.

## Binary compatibility path

1. Package metadata declares a legacy binary name.
2. Package/install validation must confirm the declared binary path exists and forwards correctly.
3. Release checks should catch drift before publishing.

## Install warning path

1. Package manager lifecycle may execute `scripts/postinstall.js`.
2. The script warns that the legacy package has been renamed to OpenClaw.

## Evidence limits

G009 npm pack dry-runs passed, but package bin/export audit found missing declared CLI entry files. A real install smoke remains blocked until those paths exist.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `85` changed path(s) to this final leaf. `70` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 8, 'M': 44, 'D': 7, 'A': 26}`.

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
- `packages/memory-host-sdk/src/host/embeddings.test.ts`
- `packages/memory-host-sdk/src/host/embeddings.ts`
- `packages/memory-host-sdk/src/host/internal.test.ts`
- `packages/memory-host-sdk/src/host/internal.ts`
- `packages/memory-host-sdk/src/host/memory-schema.ts`
- `packages/memory-host-sdk/src/host/multimodal.ts`
- `packages/memory-host-sdk/src/host/node-llama.ts`
- `packages/memory-host-sdk/src/host/post-json.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.test.ts`
- `packages/memory-host-sdk/src/host/qmd-process.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.test.ts`
- `packages/memory-host-sdk/src/host/qmd-query-parser.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.test.ts`
- `packages/memory-host-sdk/src/host/qmd-scope.ts`
- `packages/memory-host-sdk/src/host/query-expansion.test.ts`
- `packages/memory-host-sdk/src/host/query-expansion.ts`
- `packages/memory-host-sdk/src/host/read-file.ts`
- `packages/memory-host-sdk/src/host/secret-input.ts`
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
