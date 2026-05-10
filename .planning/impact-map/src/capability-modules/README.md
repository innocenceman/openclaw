# Capability Modules Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/capability-modules/`
- Source roots: `src/browser/`, `src/memory/`, `src/media/`, `src/media-understanding/`, `src/context-engine/`, `src/cron/`, `src/tts/`, `src/acp/`

## Purpose

Cross-cutting browser, memory, media, context, cron, speech, and ACP capabilities consumed by agents, channels, and the gateway.

## Risk profile

High: these capabilities are reused by multiple runtime surfaces and often bridge external systems or long-lived state.

## Wave 1R leaf status

| Leaf                   | Coverage                   | Queue class | Source evidence              |
| ---------------------- | -------------------------- | ----------- | ---------------------------- |
| `browser/`             | `exceptioned-deep-partial` | priority    | `src/browser/**`             |
| `memory/`              | `exceptioned-deep-partial` | priority    | `src/memory/**`              |
| `media/`               | `exceptioned-deep-partial` | priority    | `src/media/**`               |
| `media-understanding/` | `verified`                 | residual    | `src/media-understanding/**` |
| `context-engine/`      | `verified`                 | residual    | `src/context-engine/**`      |
| `cron/`                | `verified`                 | residual    | `src/cron/**`                |
| `tts/`                 | `verified`                 | residual    | `src/tts/**`                 |
| `acp/`                 | `verified`                 | priority    | `src/acp/**`                 |

## Cross-module links

- ../agent-runtime/README.md
- ../gateway-api-surface/README.md
- ../plugin-runtime-sdk/README.md

## ACP verified wave note

`acp/` and its five child leaves were promoted to `verified` in the 2026-05-08 ACP verified wave. Evidence: `../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`.

## 2026-05-09 G005 capability/shared wave

Decision: aggregate remains `exceptioned-deep-partial`. `context-engine/`, `cron/`, `media-understanding/`, `tts/`, and already verified `acp/` have passing targeted evidence. `browser/`, `memory/`, and `media/` remain exceptioned because their standard targeted commands failed or timed out; future promotion should split those risk-diverse leaves before retrying. Evidence: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.
