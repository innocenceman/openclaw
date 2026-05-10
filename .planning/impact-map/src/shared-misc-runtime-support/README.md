# Shared / Misc Runtime Support Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/shared-misc-runtime-support/`
- Source roots: `src/bootstrap/`, `src/compat/`, `src/daemon/`, `src/docs/`, `src/hooks/`, `src/i18n/`, `src/logging/`, `src/markdown/`, `src/node-host/`, `src/process/`, `src/scripts/`, `src/shared/`, `src/test-helpers/`, `src/test-utils/`, `src/types/`, `src/utils/`

## Purpose

Holds cross-cutting runtime support, compatibility helpers, generated-doc helpers, logging/markdown/i18n utilities, process/bootstrap helpers, and test/helper support that does not own a primary runtime flow by itself.

## Risk profile

Medium: individual files are often small, but many are imported broadly. Treat broad utility changes as cross-module changes and validate the nearest consumers.

## Child slices

| Child slice           | Coverage                   | Purpose                                                                      |
| --------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `root-entrypoints/`   | `verified`                 | Root package entrypoints, runtime/bootstrap entry files, and global state.   |
| `web-provider-root/`  | `verified`                 | Root web provider/channel-web and bundled web-search registry surfaces.      |
| `startup-process/`    | `exceptioned-deep-partial` | Bootstrap, daemon, process, and node-host runtime support.                   |
| `compat-hooks/`       | `verified`                 | Compatibility helpers and workspace hook integration.                        |
| `docs-i18n-markdown/` | `verified`                 | Local docs helpers, i18n utilities, and Markdown support under `src/`.       |
| `shared-primitives/`  | `verified`                 | Shared primitives, utilities, and types used across runtime modules.         |
| `logging-support/`    | `verified`                 | Logging support surfaces that do not own a primary runtime flow.             |
| `test-support/`       | `verified`                 | Test helpers and test utilities consumed by colocated and integration tests. |

## Cross-module links

- ../agent-runtime/README.md
- ../cli-commands/README.md
- ../config-secrets-security/README.md
- ../gateway-api-surface/README.md

## 2026-05-09 G005 capability/shared wave

Decision: aggregate is `exceptioned-deep-partial`. `root-entrypoints/`, `web-provider-root/`, `compat-hooks/`, `docs-i18n-markdown/`, `shared-primitives/`, `logging-support/`, and `test-support/` have passing targeted evidence. `startup-process/` remains exceptioned because the daemon suite failed even though bootstrap, node-host, and process tests passed. Evidence: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.
