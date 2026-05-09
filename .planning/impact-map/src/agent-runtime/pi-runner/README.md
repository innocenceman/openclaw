# Pi Runner Impact Subtree

Coverage: `deep-partial`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/`
- Subtree: `pi-runner/`

## Purpose

Embedded Pi execution, provider stream/parameter shaping, stream subscription, compaction, tool result shaping, and extension hooks.

## Split basis

`runEmbeddedPiAgent` has CRITICAL GitNexus upstream impact across agent command, reply execution, cron, model probing, hooks, and voice-call response generation. This subtree is too broad for a single leaf because run-loop behavior, provider params/streams, and subscription/extension hooks have different test ladders and code-review-graph risk centers.
