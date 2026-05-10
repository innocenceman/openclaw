# Reply Orchestration Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Leaf directory     | Coverage                   | Purpose                                                                                              |
| ------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------- |
| `runner/`          | `exceptioned-deep-partial` | Inbound dispatch, reply-agent execution, ACP dispatch, memory hooks, and reply-run selection.        |
| `commands/`        | `exceptioned-deep-partial` | Commands subtree split into auth/gates, registry/families, and command handlers.                     |
| `streaming/`       | `exceptioned-deep-partial` | Block streaming, heartbeat typing, inline action streaming, and raw-body shaping.                    |
| `exec/`            | `exceptioned-deep-partial` | Reply-side exec helpers, directives, and command execution staging.                                  |
| `queue/`           | `exceptioned-deep-partial` | Reply queue state, enqueue/drain flow, queue normalization, and queue policy.                        |
| `export-html/`     | `verified`                 | Session/export HTML templates and security-sensitive transcript export shaping.                      |
| `channel-shaping/` | `verified`                 | Chunking, envelope shaping, media-note formatting, and inbound metadata shaping before channel send. |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
