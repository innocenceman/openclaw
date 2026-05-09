# Cron Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

- Primary paths: `src/cron/**`
- Runtime handoff: Schedules arm service timers, then isolated-agent or delivery logic executes through shared runtime paths.
