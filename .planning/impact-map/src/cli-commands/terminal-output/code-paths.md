# Terminal Output Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/terminal/**`, `src/cli/progress.ts`
- Runtime handoff: Terminal helpers are the last formatting layer before status/probe/config commands print output.
