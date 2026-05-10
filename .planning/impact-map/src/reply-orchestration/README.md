# Reply Orchestration Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/reply-orchestration/`
- Source roots: `src/auto-reply/`

## Purpose

Message-to-agent orchestration, command handling, streaming replies, reply queueing, and channel-aware formatting.

## Risk profile

High: this slice decides whether inbound traffic turns into commands, agent runs, streamed replies, or queued output.

## Wave 1R leaf status

| Leaf               | Coverage                   | Queue class | Source evidence                                                                                                  |
| ------------------ | -------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `runner/`          | `exceptioned-deep-partial` | priority    | `src/auto-reply/dispatch.ts`, `src/auto-reply/inbound*.ts`, `src/auto-reply/reply/agent-runner*.ts`...           |
| `commands/`        | `exceptioned-deep-partial` | priority    | `src/auto-reply/command-*.ts`, `src/auto-reply/commands-*.ts`, `src/auto-reply/reply/commands*.ts`...            |
| `streaming/`       | `exceptioned-deep-partial` | priority    | `src/auto-reply/heartbeat*.ts`, `src/auto-reply/reply/block-streaming.ts`, `src/auto-reply/reply/raw-body.ts`... |
| `exec/`            | `exceptioned-deep-partial` | residual    | `src/auto-reply/reply/exec.ts`, `src/auto-reply/reply/exec/**`, `src/auto-reply/reply/directive*.ts`             |
| `queue/`           | `exceptioned-deep-partial` | residual    | `src/auto-reply/reply/queue.ts`, `src/auto-reply/reply/queue/**`, `src/auto-reply/reply/queue-policy.ts`         |
| `export-html/`     | `verified`                 | residual    | `src/auto-reply/reply/export-html/**`                                                                            |
| `channel-shaping/` | `verified`                 | residual    | `src/auto-reply/chunk.ts`, `src/auto-reply/envelope.ts`, `src/auto-reply/media-note.ts`...                       |

## Cross-module links

- ../agent-runtime/README.md
- ../channel-abstraction/README.md
- ../infra-outbound-delivery/README.md
