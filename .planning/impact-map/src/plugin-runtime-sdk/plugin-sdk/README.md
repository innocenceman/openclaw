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
