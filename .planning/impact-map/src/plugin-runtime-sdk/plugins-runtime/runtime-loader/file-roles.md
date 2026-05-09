# Runtime Loader File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                               | Responsibility                                                                         | First validation                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/plugins/loader.ts`, `src/plugins/discovery.ts`, `src/plugins/install*.ts`, `src/plugins/manifest-registry.ts`, `src/plugins/runtime/index.ts` | Plugin discovery, install/update/uninstall, registry loading, and runtime entry setup. | pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts |
