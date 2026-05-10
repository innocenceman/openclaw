# Secrets Resolution Impact Subtree

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Subtree: `secrets-resolution/`

## Purpose

Secret reference contracts, target registries, runtime secret collection, gateway/CLI secret resolution, and secret storage/audit helpers.

## Split basis

code-review-graph marked secret-ref coercion, runtime collection, gateway secret resolution, and provider auth storage as high-risk. This subtree is now split by contract boundary instead of treating `src/secrets/**` as one leaf.

Use `leaf-index.md` to choose the narrowest secrets leaf.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `18` (新增 13，修改 5).
- Target-existing changed paths listed here: `18`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/secrets/channel-contract-api.fast-path.test.ts`
- `src/secrets/channel-contract-api.ts`
- `src/secrets/channel-contract-surface-guardrails.test.ts`
- `src/secrets/channel-env-var-names.ts`
- `src/secrets/channel-env-vars.dynamic.test.ts`
- `src/secrets/channel-env-vars.ts`
- `src/secrets/channel-secret-basic-runtime.ts`
- `src/secrets/channel-secret-collector-runtime.ts`
- `src/secrets/channel-secret-tts-runtime.ts`
- `src/secrets/exec-secret-ref-id-parity.test.ts`
- `src/secrets/legacy-secretref-env-marker.ts`
- `src/secrets/plan.test.ts`
- `... 另有 6 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
