# Runtime Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

| Leaf directory           | Coverage                   | Purpose                                                                   |
| ------------------------ | -------------------------- | ------------------------------------------------------------------------- |
| `command-entrypoint/`    | `exceptioned-deep-partial` | Agent command entrypoint and gateway/CLI handoff into agent execution.    |
| `session-scope/`         | `verified`                 | Agent scope, paths, session selection, identity, and local runtime state. |
| `command-session-store/` | `verified`                 | Agent command delivery/session store/run-context helpers.                 |
| `cli-runner/`            | `verified`                 | CLI backend runner, bundled MCP handoff, reliability, and watchdog glue.  |
| `acp-spawn/`             | `verified`                 | ACP-aware agent spawn and parent-stream bridge.                           |
| `context-subagents/`     | `verified`                 | Context token lookup and subagent registry, split into child leaves.      |

## Split rule

Pick the leaf that owns the first runtime handoff touched by the change; cross-link to reply, gateway, or ACP leaves when the change crosses those boundaries.

## 2026-05-08 remaining runtime wave

Evidence: `../../../evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.
