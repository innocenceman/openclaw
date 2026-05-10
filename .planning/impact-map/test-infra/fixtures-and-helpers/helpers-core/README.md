# Core Test Helpers

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Leaf module for `test/helpers/**` excluding extension-specific helpers.

## Boundary

Shared helper utilities used by multiple test suites.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-helpers-core.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; core helper tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `verified` retained.

Reason: fresh G009 core helper targeted validation passed. Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `113` (重命名/移动 36，新增 65，修改 6，删除 6).
- Target-existing changed paths listed here: `106`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `7`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `test/helpers/AGENTS.md`
- `test/helpers/CLAUDE.md`
- `test/helpers/agents/auth-profile-runtime-contract.ts`
- `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
- `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
- `test/helpers/agents/outcome-fallback-runtime-contract.ts`
- `test/helpers/agents/pi-ai-stream-simple-mock.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/agents/prompt-overlay-runtime-contract.ts`
- `test/helpers/agents/schema-normalization-runtime-contract.ts`
- `test/helpers/agents/transcript-repair-runtime-contract.ts`
- `test/helpers/agents/transport-params-runtime-contract.ts`
- `... 另有 94 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
