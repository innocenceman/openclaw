# Command Session Store Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/command/**`
- Runtime handoff: Command entrypoints persist or load command run context before outbound delivery and reply execution observe state.
