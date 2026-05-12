# Routing Submodule

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/channel-abstraction/routing/`
- Source roots: `src/routing/`

## Purpose

Recipient/account/session routing and compatibility behavior shared by CLI, gateway, channels, and outbound delivery.

## Risk profile

High: route resolution drift can redirect replies, default-account selection, or session continuity.

## Wave 1R leaf status

| Leaf                   | Coverage   | Queue class | Source evidence                                                                                 |
| ---------------------- | ---------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `target-resolution/`   | `verified` | priority    | `src/routing/resolve-route.ts`, `src/routing/account-id.ts`, `src/routing/account-lookup.ts`... |
| `compatibility-paths/` | `verified` | priority    | `src/routing/bindings.ts`, `src/routing/default-account-warnings.ts`                            |

## Cross-module links

- ../README.md
- ../../infra-outbound-delivery/README.md
- ../../cli-commands/README.md

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed; impact risk CRITICAL for buildAgentSessionKey.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-routing.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; `src-routing` validation passed; GitNexus still flags `buildAgentSessionKey` as CRITICAL impact, so changes must continue to use targeted routing tests.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `9` (修改 5，新增 4).
- Target-existing changed paths listed here: `9`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/routing/account-id.ts`
- `src/routing/account-lookup.ts`
- `src/routing/binding-scope.ts`
- `src/routing/bindings.ts`
- `src/routing/bound-account-read.test.ts`
- `src/routing/bound-account-read.ts`
- `src/routing/peer-kind-match.ts`
- `src/routing/resolve-route.test.ts`
- `src/routing/resolve-route.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `3`
- Target-existing changed paths reflected here: `3`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/routing/default-account-warnings.ts`
- `src/routing/resolve-route.test.ts`
- `src/routing/resolve-route.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
