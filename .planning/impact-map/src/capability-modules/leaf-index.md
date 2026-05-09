# Capability Modules Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Leaf directory         | Coverage                   | Purpose                                                                                                                               |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `browser/`             | `exceptioned-deep-partial` | Browser bridge server, CDP/Playwright sessions, routes, profiles, screenshots, and browser tool runtime.                              |
| `memory/`              | `exceptioned-deep-partial` | Embedding, search, manager, QMD, and session-file memory storage/runtime.                                                             |
| `media/`               | `exceptioned-deep-partial` | Media fetch/store/server helpers, path policy, parsing, and local/remote media handling.                                              |
| `media-understanding/` | `verified`                 | Audio/video/image understanding runner, provider registry, and attachment guards.                                                     |
| `context-engine/`      | `verified`                 | Context assembly and registry support used by embedded agent/runtime flows.                                                           |
| `cron/`                | `verified`                 | Cron scheduler, isolated-agent runs, store/timer management, and heartbeat delivery.                                                  |
| `tts/`                 | `verified`                 | Text-to-speech registry, text preparation, and provider selection.                                                                    |
| `acp/`                 | `verified`                 | ACP subtree verified across control-plane, runtime/session identity, translator/protocol, persistent bindings, and secret/env bridge. |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
