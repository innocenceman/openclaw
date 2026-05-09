# Test Helpers File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                | Responsibility                                              | First validation                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `src/plugins/test-helpers/**`, `src/plugins/generated-plugin-test-helpers.ts`, `src/plugins/status.test-helpers.ts` | Plugin runtime test fixtures and shared helper scaffolding. | Use the nearest consuming plugin runtime/contract test because helper-only files do not have a standalone suite. |
