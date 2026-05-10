# Config / Secrets / Security Impact Map

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/config-secrets-security/`
- Source roots: `src/config/`, `src/secrets/`, `src/security/`, `src/sessions/`

## Purpose

Configuration IO/schema, session config surfaces, legacy migration, secrets resolution, and security guardrails.

## Risk profile

High: drift here can break startup, leak credentials, or produce unsafe filesystem/network behavior.

## Wave 1R leaf status

| Leaf                        | Coverage   | Queue class | Source evidence                                                              |
| --------------------------- | ---------- | ----------- | ---------------------------------------------------------------------------- |
| `config-io/`                | `verified` | residual    | `src/config/io*.ts`, `src/config/config.ts`, `src/config/paths.ts`...        |
| `config-schema-validation/` | `verified` | priority    | `src/config/schema*.ts`, `src/config/doc-baseline*.ts`, `src/config/zod*.ts` |
| `sessions/`                 | `verified` | residual    | `src/config/sessions/**`, `src/sessions/**`                                  |
| `legacy-migration/`         | `verified` | residual    | `src/config/legacy*.ts`, `src/commands/doctor-legacy-*.test.ts`              |
| `secrets-resolution/`       | `verified` | priority    | `src/secrets/**`                                                             |
| `security-guards/`          | `verified` | priority    | `src/security/**`, `src/infra/net/ssrf*.ts`                                  |

## Cross-module links

- ../cli-commands/README.md
- ../../gateway-api-surface/README.md
- ../../plugin-runtime-sdk/README.md
