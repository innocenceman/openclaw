# Shared Packages Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

| Change type                             | First validation                                                                                                                                                                  | Escalation trigger                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Package metadata or export shim changed | Inspect the package leaf docs and run release/package targeted tests such as `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`. | Run pack/install smoke before publishing.    |
| Binary metadata changed                 | Confirm the declared `bin` target exists and forwards to the intended CLI.                                                                                                        | Run npm pack/install in a temp project.      |
| Postinstall warning changed             | Inspect install output in package smoke.                                                                                                                                          | Include release verification before publish. |

## Evidence limits

G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `85` (重命名/移动 8，修改 44，删除 7，新增 26).
- Target-existing path refs in active map: `70`; deleted/renamed-away refs kept only in transition artifacts: `15`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
