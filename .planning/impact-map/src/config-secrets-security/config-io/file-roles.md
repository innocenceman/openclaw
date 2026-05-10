# Config Io File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                         | Responsibility                                                                      | First validation                                                                                                                          |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `src/config/io*.ts`, `src/config/config.ts`, `src/config/paths.ts`, `src/config/includes.ts` | Config read/write, path resolution, includes, runtime snapshot, and merge behavior. | pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts |
