# Shared Channels Leaf Index

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory       | Coverage   | Purpose                                                                                                             |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| `core-abstractions/` | `verified` | Core shared channel config, command gating, session metadata, and target helpers.                                   |
| `plugin-bridge/`     | `verified` | Plugin-backed channel catalog, registry, setup/status helpers, contracts, outbound helpers, and runtime forwarders. |
| `bindings/`          | `verified` | Binding provider registry, configured-binding compiler, routing, and session lookup.                                |
| `allowlists/`        | `verified` | Allowlist matching and shared authorization helpers for channel and plugin paths.                                   |
| `transport/`         | `verified` | Transport watchdogs and web channel helpers.                                                                        |
| `routing/`           | `verified` | Cross-link to canonical routing leaf coverage for recipient/account/session resolution.                             |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
