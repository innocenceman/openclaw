# Infra / Outbound Delivery Impact Map

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/infra-outbound-delivery/`
- Source roots: `src/infra/`

## Purpose

Outbound delivery, target resolution, message action execution, identity helpers, and lower-level network/TLS/formatting support.

## Risk profile

High: infra changes can alter delivery semantics across every built-in and plugin channel.

## Wave 1R leaf status

| Leaf                 | Coverage   | Queue class | Source evidence                                                                                                          |
| -------------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `outbound-delivery/` | `verified` | priority    | `src/infra/outbound/deliver*.ts`, `src/infra/outbound/delivery-queue*.ts`, `src/infra/outbound/outbound-send-service.ts` |
| `outbound-routing/`  | `verified` | priority    | `src/infra/outbound/channel-*.ts`, `src/infra/outbound/target-*.ts`, `src/infra/outbound/session-binding-service.ts`...  |
| `outbound-actions/`  | `verified` | residual    | `src/infra/outbound/message-action-*.ts`                                                                                 |
| `outbound-identity/` | `verified` | residual    | `src/infra/outbound/identity.ts`, `src/infra/outbound/conversation-id.ts`, `src/infra/outbound/base-session-key.ts`...   |
| `network/`           | `verified` | residual    | `src/infra/net/**`                                                                                                       |
| `tls/`               | `verified` | residual    | `src/infra/tls/**`                                                                                                       |
| `formatting/`        | `verified` | residual    | `src/infra/outbound/envelope.ts`, `src/infra/outbound/format.ts`, `src/infra/outbound/payloads.ts`...                    |

## Cross-module links

- ../channel-abstraction/README.md
- ../channel-abstraction/routing/README.md
- ../config-secrets-security/README.md
