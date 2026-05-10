# Sessions File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                        | Responsibility                                                         | First validation                                                                                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/config/sessions/**`, `src/sessions/**` | Session config defaults, main session state, and session-path helpers. | No dedicated src/sessions/\*.test.ts was observed; start with nearest session-config or routing/session tests for the touched file. |
