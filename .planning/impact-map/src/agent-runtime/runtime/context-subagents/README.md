# Context Subagents Impact Subtree

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Subtree: `context-subagents/`

## Purpose

Context token lookup and subagent run/session registry behavior.

## Split basis

GitNexus and code-review-graph show separate risk centers: context-token lookup feeds reply/model/session flows, while subagent registry feeds spawn, steering, lifecycle, persistence, and announcement flows. Both child leaves passed targeted validation in this wave.

Evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.
