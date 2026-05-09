# Contracts File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                     | Responsibility                                                     | First validation                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/plugins/contracts/**`, `src/plugins/manifest.ts`, `src/plugins/schema-validator.ts` | Plugin metadata, manifest, contract suites, and schema validation. | pnpm test -- src/plugins/contracts/catalog.contract.test.ts src/plugins/contracts/loader.contract.test.ts src/plugins/contracts/runtime.contract.test.ts src/plugins/schema-validator.test.ts |
