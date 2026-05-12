# Plugin SDK Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/plugin-runtime-sdk/plugin-sdk/`
- Source roots: `src/plugin-sdk/`

## Purpose

Public plugin SDK subpaths and runtime/helper contracts consumed by extension packages.

## Risk profile

High: this is a published cross-package surface; drift breaks extensions and contract tests together.

## Wave 1R leaf status

| Leaf                | Coverage                   | Queue class | Source evidence                                                                                               |
| ------------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `public-subpaths/`  | `verified`                 | priority    | `src/plugin-sdk/index.ts`, `src/plugin-sdk/root-alias.cjs`, `src/plugin-sdk/subpaths.test.ts`...              |
| `provider-sdk/`     | `verified`                 | priority    | `src/plugin-sdk/provider-*.ts`, `src/plugin-sdk/provider-entry.ts`                                            |
| `channel-sdk/`      | `verified`                 | priority    | `src/plugin-sdk/channel-*.ts`, `src/plugin-sdk/allow-from.ts`, `src/plugin-sdk/group-access.ts`...            |
| `tool-sdk/`         | `verified`                 | residual    | `src/plugin-sdk/tool-send.ts`, `src/plugin-sdk/provider-tools.ts`, `src/plugin-sdk/provider-web-search.ts`... |
| `media-memory-sdk/` | `verified`                 | residual    | `src/plugin-sdk/media-*.ts`, `src/plugin-sdk/memory-*.ts`, `src/plugin-sdk/speech*.ts`...                     |
| `api-drift/`        | `exceptioned-deep-partial` | exception   | `src/plugin-sdk/api-baseline.ts`                                                                              |

## Cross-module links

- ../plugins-runtime/README.md
- ../../channel-abstraction/README.md
- ../../capability-modules/README.md

## 2026-05-08 P0 original wave evidence

Decision: `exceptioned-deep-partial`.

Reason: GN-STALE + CRG-STALE; plugin-sdk-api-check OOM; other SDK tests/check-exports passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-plugin-sdk-public.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-plugin-sdk-provider.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-plugin-sdk-channel.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/plugin-sdk-api-check.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/plugin-sdk-check-exports.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `exceptioned-deep-partial`.

Reason: Graph freshness is now fresh. SDK public/provider/channel tests and check-exports passed, and `plugin-sdk:api:check` passed with `NODE_OPTIONS=--max-old-space-size=8192`; the standard command still OOMs, so `api-drift` remains exceptioned.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `plugin-sdk-core`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `131` (重命名/移动 5，修改 62，新增 58，删除 6).
- Target-existing changed paths listed here: `120`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `11`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/plugin-sdk/allow-from.test.ts`
- `src/plugin-sdk/allow-from.ts`
- `src/plugin-sdk/channel-actions.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-contract-testing.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-core.ts`
- `src/plugin-sdk/channel-entry-contract.test.ts`
- `src/plugin-sdk/channel-entry-contract.ts`
- `src/plugin-sdk/channel-envelope.ts`
- `... 另有 108 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `plugin-sdk-core`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `67`
- Target-existing changed paths reflected here: `65`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `src/plugin-sdk/channel-activity-runtime.ts`
- `src/plugin-sdk/channel-config-helpers.test.ts`
- `src/plugin-sdk/channel-config-helpers.ts`
- `src/plugin-sdk/channel-config-schema-legacy.ts`
- `src/plugin-sdk/channel-config-schema.ts`
- `src/plugin-sdk/channel-contract-testing.test.ts`
- `src/plugin-sdk/channel-contract-testing.ts`
- `src/plugin-sdk/channel-contract.ts`
- `src/plugin-sdk/channel-entry-contract.test.ts`
- `src/plugin-sdk/channel-entry-contract.ts`
- `src/plugin-sdk/channel-feedback.ts`
- `src/plugin-sdk/channel-lifecycle.core.ts`
- `src/plugin-sdk/channel-lifecycle.queue.test.ts`
- `src/plugin-sdk/channel-mention-gating.ts`
- `src/plugin-sdk/channel-policy.ts`
- `src/plugin-sdk/channel-reply-pipeline.ts`
- `src/plugin-sdk/channel-route.test.ts`
- `src/plugin-sdk/channel-route.ts`
- `src/plugin-sdk/channel-send-result.ts`
- `src/plugin-sdk/channel-setup.test.ts`
- `src/plugin-sdk/channel-streaming.test.ts`
- `src/plugin-sdk/channel-streaming.ts`
- `src/plugin-sdk/channel-target-testing.ts`
- `src/plugin-sdk/channel-targets.ts`
- `src/plugin-sdk/channel-test-helpers.ts`
- `src/plugin-sdk/index.ts`
- `src/plugin-sdk/media-runtime.ts`
- `src/plugin-sdk/media-store.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.test.ts`
- `src/plugin-sdk/memory-core-bundled-runtime.ts`
- `src/plugin-sdk/memory-core-host-engine-embeddings.ts`
- `src/plugin-sdk/memory-core-host-engine-foundation.ts`
- `src/plugin-sdk/memory-core-host-engine-qmd.ts`
- `src/plugin-sdk/memory-core-host-engine-storage.ts`
- `src/plugin-sdk/memory-core-host-multimodal.ts`
- `src/plugin-sdk/memory-core-host-query.ts`
- `src/plugin-sdk/memory-core-host-runtime-cli.ts`
- `src/plugin-sdk/memory-core-host-runtime-core.ts`
- `src/plugin-sdk/memory-core-host-runtime-files.ts`
- `src/plugin-sdk/memory-core-host-secret.ts`
- … plus 25 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
