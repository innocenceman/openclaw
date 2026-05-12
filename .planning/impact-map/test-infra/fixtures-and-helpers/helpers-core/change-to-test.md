# Core Test Helpers Change-to-Test

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change                                     | First checks                                                                            | Broader validation                                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Edit files in this leaf                    | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible. |
| Change shared runner/setup/helper behavior | Run direct tests for the helper/runner plus one representative consumer suite.          | Full `pnpm test` before landing if related failures are plausible.                                                            |
| Change fixtures or mocks                   | Run tests that consume the fixture/mock and inspect snapshot/fixture assumptions.       | Add targeted regression tests when a fixture contract changes.                                                                |

## Minimum evidence for `verified`

Do not promote to `verified` until fresh scoped or full test output is recorded.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `113` (重命名/移动 36，新增 65，修改 6，删除 6).
- Target-existing path refs in active map: `106`; deleted/renamed-away refs kept only in transition artifacts: `7`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `test/helpers/agents/happy-path-prompt-snapshots.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/auth-wizard.ts`
- `test/helpers/auto-reply/trigger-handling-test-harness.ts`
- `test/helpers/cron/service-regression-fixtures.ts`
- `test/helpers/gateway-e2e-harness.ts`
- `test/helpers/media-generation/runtime-module-mocks.ts`
- `test/helpers/openclaw-test-instance.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
