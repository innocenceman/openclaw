# Core Test Helpers File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path group                                             | Role                                                  | Impact when changed                                                                                      |
| ------------------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `test/helpers/**` excluding extension-specific helpers | Shared helper utilities used by multiple test suites. | Affects which tests run, how tests are isolated, or how fixture/helper behavior shapes test reliability. |
| `package.json` test scripts                            | Test entrypoint and profile wiring when relevant.     | Changes can alter CI/local coverage, profiles, or wrapper behavior.                                      |
| Related colocated `*.test.ts` files                    | Consumers and validation examples for this leaf.      | Use as the first evidence source before broadening to full suites.                                       |

## Evidence limits

Repo-native structural inspection only; no fresh `pnpm test` run is recorded here.
