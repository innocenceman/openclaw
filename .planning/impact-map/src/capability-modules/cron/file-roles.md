# Cron File Roles

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths | Responsibility                                                                       | First validation                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `src/cron/**`        | Cron scheduler, isolated-agent runs, store/timer management, and heartbeat delivery. | pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts |
