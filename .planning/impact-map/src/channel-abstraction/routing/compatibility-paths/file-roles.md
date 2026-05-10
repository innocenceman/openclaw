# Compatibility Paths File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                 | Responsibility                                                                                                                  | First validation                                                                                                                                    |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/routing/bindings.ts`, `src/routing/default-account-warnings.ts` | Binding-driven compatibility behavior and default-account warning/reporting for browser/device-session or custom-channel paths. | No dedicated colocated tests were observed; start with target-resolution tests and the nearest channel/binding consumer tests for the touched file. |
