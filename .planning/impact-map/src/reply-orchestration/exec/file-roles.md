# Exec File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                 | Responsibility                                                      | First validation                                                                                                                           |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/auto-reply/reply/exec.ts`, `src/auto-reply/reply/exec/**`, `src/auto-reply/reply/directive*.ts` | Reply-side exec helpers, directives, and command execution staging. | No dedicated src/auto-reply/reply/exec/\*.test.ts was observed; start with nearest reply command test plus sandbox/media staging coverage. |
