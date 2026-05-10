# Channel Abstraction Impact Map

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/channel-abstraction/`
- Source roots: `src/channels/`, `src/bindings/`, `src/routing/`

## Purpose

Shared channel helpers, plugin-channel registry/bindings, allowlists, routing, and transport plumbing.

## Risk profile

High: one change can affect built-in channels, plugin channels, setup/status, and outbound routing together.

## Wave 1R leaf status

| Leaf                 | Coverage   | Queue class | Source evidence                                                                                            |
| -------------------- | ---------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `core-abstractions/` | `verified` | residual    | `src/channels/channel-config.ts`, `src/channels/command-gating.ts`, `src/channels/session*.ts`...          |
| `plugin-bridge/`     | `verified` | priority    | `src/channels/plugins/**`                                                                                  |
| `bindings/`          | `verified` | priority    | `src/channels/plugins/binding-*.ts`, `src/channels/plugins/configured-binding-*.ts`, `src/bindings/**`     |
| `allowlists/`        | `verified` | priority    | `src/channels/allowlist-match.ts`, `src/channels/allowlists/**`, `src/channels/plugins/allowlist-match.ts` |
| `transport/`         | `verified` | residual    | `src/channels/transport/**`, `src/channels/web/**`                                                         |
| `routing/`           | `verified` | priority    | `src/routing/**`                                                                                           |

## Cross-module links

- routing/README.md
- ../plugin-runtime-sdk/README.md
- ../infra-outbound-delivery/README.md
