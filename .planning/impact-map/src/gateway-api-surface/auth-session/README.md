# Auth Session Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `gateway-api-surface/`
- Leaf: `auth-session/`

## Purpose

Gateway auth modes, connection/device auth, origin checks, and session reset/probe auth behavior.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `21` (修改 17，新增 4).
- Target-existing changed paths listed here: `21`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/gateway/auth-mode-policy.ts`
- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/connection-auth.test.ts`
- `src/gateway/connection-auth.ts`
- `src/gateway/origin-check.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `... 另有 9 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `16`
- Target-existing changed paths reflected here: `16`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/gateway/auth.test.ts`
- `src/gateway/auth.ts`
- `src/gateway/device-auth.ts`
- `src/gateway/probe-auth.test.ts`
- `src/gateway/probe-auth.ts`
- `src/infra/node-pairing.test.ts`
- `src/infra/node-pairing.ts`
- `src/pairing/allow-from-store-file.test.ts`
- `src/pairing/allow-from-store-file.ts`
- `src/pairing/allow-from-store-read.test.ts`
- `src/pairing/allow-from-store-read.ts`
- `src/pairing/pairing-messages.test.ts`
- `src/pairing/pairing-store.test.ts`
- `src/pairing/pairing-store.ts`
- `src/pairing/setup-code.test.ts`
- `src/pairing/setup-code.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
