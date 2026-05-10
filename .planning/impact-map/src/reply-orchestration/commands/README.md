# Reply Commands Impact Subtree

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/`
- Subtree: `commands/`

## Purpose

Reply-side command detection, auth/gates, registry data, and command-family handlers.

## Split basis

code-review-graph flagged command gates as a distinct high-risk policy point. The old single commands leaf mixed security/policy with registry and handlers, so this subtree now splits those responsibilities.

Use `leaf-index.md` to choose the narrowest command leaf.
