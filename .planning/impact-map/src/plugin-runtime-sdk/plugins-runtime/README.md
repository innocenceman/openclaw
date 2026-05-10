# Plugin Runtime Impact Map

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/plugin-runtime-sdk/plugins-runtime/`
- Source roots: `src/plugins/`

## Purpose

Plugin loading/discovery, runtime adapters, contract validation, and boundary enforcement for bundled and installed plugins.

## Risk profile

High: runtime-loader or boundary mistakes can break installation, discovery, or shared channel/provider behavior across all plugins.

## Wave 1R leaf status

| Leaf                    | Coverage   | Queue class | Source evidence                                                                                                     |
| ----------------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `runtime-loader/`       | `verified` | priority    | `src/plugins/loader.ts`, `src/plugins/discovery.ts`, `src/plugins/install*.ts`...                                   |
| `runtime-adapters/`     | `verified` | residual    | `src/plugins/runtime/**`, `src/plugins/provider-runtime.ts`, `src/plugins/services.ts`                              |
| `contracts/`            | `verified` | priority    | `src/plugins/contracts/**`, `src/plugins/manifest.ts`, `src/plugins/schema-validator.ts`                            |
| `boundary-enforcement/` | `verified` | priority    | `src/plugins/sdk-alias.ts`, `src/plugins/bundled-plugin-naming.test.ts`, `src/plugins/install-security-scan.ts`...  |
| `test-helpers/`         | `verified` | residual    | `src/plugins/test-helpers/**`, `src/plugins/generated-plugin-test-helpers.ts`, `src/plugins/status.test-helpers.ts` |

## Cross-module links

- ../README.md
- ../../channel-abstraction/README.md
- ../../cli-commands/README.md
