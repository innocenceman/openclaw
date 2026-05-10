# Plugin Runtime / Plugin SDK Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/plugin-runtime-sdk/`
- Source roots: `src/plugin-sdk/`, `src/plugins/`, `src/extensions/`

## Purpose

Unifies the public extension SDK surface and the internal plugin runtime/loader/contracts/boundary enforcement slices under the logical Core Runtime module used by the architecture atlas.

## Child slices

| Child slice        | Coverage                   | Purpose                                                                               |
| ------------------ | -------------------------- | ------------------------------------------------------------------------------------- |
| `plugin-sdk/`      | `exceptioned-deep-partial` | Public SDK subpaths and extension-facing contracts; `api-drift/` remains exceptioned. |
| `plugins-runtime/` | `verified`                 | Plugin discovery/loading/runtime adapters/contracts/boundary enforcement.             |

## Cross-module links

- ../agent-runtime/README.md
- ../channel-abstraction/README.md
- ../capability-modules/README.md
- ../config-secrets-security/README.md
