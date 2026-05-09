# ACP Impact Subtree

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/`
- Subtree: `acp/`

## Purpose

ACP client/server/control-plane/runtime support, session translation, persistent bindings, and secret/env bridge behavior.

## Split basis

code-review-graph flagged ACP control-plane and session identity files as high-risk, while GitNexus shows ACP spawn/session behavior crossing agent runtime. ACP therefore needs narrower leaves than a single `src/acp/**` card.

Use `leaf-index.md` to choose the narrowest ACP leaf.
