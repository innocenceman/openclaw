# Runtime Secret Collection Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/secrets-resolution/`
- Leaf: `runtime-secret-collection/`

## Purpose

Runtime/provider/gateway/web secret collection, provider env vars, and exec resolution policy.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `59` (修改 14，新增 44，删除 1).
- Target-existing changed paths listed here: `58`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/secrets/exec-resolution-policy.ts`
- `src/secrets/provider-env-vars.dynamic.test.ts`
- `src/secrets/provider-env-vars.test.ts`
- `src/secrets/provider-env-vars.ts`
- `src/secrets/runtime-auth-collectors.ts`
- `src/secrets/runtime-auth-profiles-oauth-policy.test.ts`
- `src/secrets/runtime-auth-refresh-failure.test.ts`
- `src/secrets/runtime-auth-store-inline-refs.test.ts`
- `src/secrets/runtime-auth.integration.test-helpers.ts`
- `src/secrets/runtime-channel-inactive-variants.test-support.ts`
- `src/secrets/runtime-channel-inactive-variants.test.ts`
- `src/secrets/runtime-command-secrets.ts`
- `... 另有 46 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
