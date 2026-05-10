# ACP Leaf Index

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

| Leaf directory                   | Coverage   | Purpose                                                          |
| -------------------------------- | ---------- | ---------------------------------------------------------------- |
| `control-plane-session-manager/` | `verified` | ACP control-plane manager, runtime cache, spawn, and controls.   |
| `runtime-session-identity/`      | `verified` | Runtime registry, session identity, session mapper, and IDs.     |
| `translator-protocol/`           | `verified` | ACP client/server protocol translation and event mapping.        |
| `persistent-bindings/`           | `verified` | Persistent binding lifecycle, resolution, and binding contracts. |
| `secret-env-bridge/`             | `verified` | ACP secret files, policy, metadata, and env bridge handling.     |

## Split rule

Prefer ACP child leaves over the broad `capability-modules/acp/` subtree. Cross-link to `agent-runtime/runtime/acp-spawn/` when spawn behavior changes.
