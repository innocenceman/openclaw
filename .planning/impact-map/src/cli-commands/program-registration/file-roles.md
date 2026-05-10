# Program Registration File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                          | Responsibility                                                           | First validation                                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `src/cli/program/**`, `src/cli/program.ts`, `src/cli/argv.ts` | Commander program tree wiring, argument parsing, and route registration. | pnpm test -- src/cli/program/build-program.test.ts src/cli/program.smoke.test.ts src/cli/argv.test.ts src/cli/command-options.test.ts |
