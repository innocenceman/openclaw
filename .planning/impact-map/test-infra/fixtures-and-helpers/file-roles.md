# Fixtures and Helpers File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| File or path                       | Role                                               | Evidence state | Notes                                                   |
| ---------------------------------- | -------------------------------------------------- | -------------- | ------------------------------------------------------- |
| `test/helpers/**`                  | Shared helpers and harnesses used by many tests.   | repo-inspected | High fan-out; run representative consumers.             |
| `test/helpers/extensions/**`       | Extension/plugin-specific helper utilities.        | repo-inspected | Affects extension boundary and plugin tests.            |
| `test/fixtures/**`                 | Static fixtures and inventory-like contract files. | repo-inspected | Kept `partial` until consumer-specific evidence exists. |
| `test/mocks/**`                    | Shared mocks and fake services/modules.            | repo-inspected | Changes can alter isolation and test realism.           |
| `src/**/*.test.ts` colocated tests | Consumers of shared helpers across source modules. | repo-inspected | Use reference consumers when changing helpers/mocks.    |
