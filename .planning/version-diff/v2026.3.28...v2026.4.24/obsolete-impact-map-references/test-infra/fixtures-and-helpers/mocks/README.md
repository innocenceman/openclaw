# Test Mocks

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

## Scope

Leaf module for `test/mocks/**`.

## Boundary

Mock modules and fake adapters used to isolate tests from external services.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `exceptioned-deep-partial`.

Reason: GN-STALE + CRG-STALE; test-infra-mocks failed due src/commands/agent.test.ts auth/timeouts.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-mocks.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `exceptioned-deep-partial`.

Reason: Graph freshness is now fresh, but `refresh-test-infra-mocks.log` still fails due missing provider auth and timeout fallout in `src/commands/agent.test.ts`.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `exceptioned-deep-partial`.

Reason: the standard mocks command `pnpm test -- src/gateway/boot.test.ts src/gateway/http-auth-helpers.test.ts src/commands/agent.test.ts` still exits 1. A focused `src/commands/agent.test.ts --reporter verbose` rerun also exits 1 and emits failure artifacts without a detailed Vitest body in this sandbox. This keeps the known mocks exception current and explicit.

Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.
