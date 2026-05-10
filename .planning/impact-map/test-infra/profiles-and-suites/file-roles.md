# Profiles and Suites File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| File or path                               | Role                               | Evidence state | Notes                                                     |
| ------------------------------------------ | ---------------------------------- | -------------- | --------------------------------------------------------- |
| `test/non-isolated-runner.ts`              | Non-isolated test runner behavior. | repo-inspected | High impact for serial/shared-state suites.               |
| `test/test-runner-manifest.test.ts`        | Test runner manifest expectations. | repo-inspected | Validates runner inventory assumptions.                   |
| `test/setup.ts` and `test/global-setup.ts` | Global setup surfaces.             | repo-inspected | Changes can affect many tests.                            |
| `test/*.test.ts` and `test/*.e2e.test.ts`  | Root-level suites and guardrails.  | repo-inspected | Use scoped wrapper before broadening.                     |
| `test/scripts/*.test.ts`                   | Tests for automation scripts.      | repo-inspected | Guards scripts used by release/package/quality workflows. |
| `package.json` test scripts                | Top-level test entrypoints.        | repo-inspected | Changes alter local/CI test routing.                      |
