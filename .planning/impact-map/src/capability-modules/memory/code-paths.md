# Memory Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/memory/**`
- Runtime handoff: Memory requests normalize config and embeddings before search/manager layers serve reply/runtime callers.
