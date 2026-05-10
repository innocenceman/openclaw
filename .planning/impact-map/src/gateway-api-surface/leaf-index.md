# Gateway / API Surface Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Leaf directory    | Coverage                   | Purpose                                                                                           |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `server-runtime/` | `verified`                 | Gateway startup/shutdown, HTTP serving, control UI, and channel health runtime.                   |
| `server-methods/` | `exceptioned-deep-partial` | RPC method handlers for agents, config, channels, devices, logs, send, and sessions.              |
| `protocol/`       | `verified`                 | Gateway protocol schemas, primitives, and push/connect contracts.                                 |
| `client-call/`    | `verified`                 | Gateway client wrappers and RPC call helpers used by CLI/app callers.                             |
| `auth-session/`   | `exceptioned-deep-partial` | Gateway auth modes, connection/device auth, origin checks, and session reset/probe auth behavior. |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
