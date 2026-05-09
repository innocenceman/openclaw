# Server Runtime File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                                                                                                                | Responsibility                                                                  | First validation                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/gateway/boot.ts`, `src/gateway/server-http.ts`, `src/gateway/server-close.ts`, `src/gateway/channel-health-*.ts`, `src/gateway/control-ui*.ts` | Gateway startup/shutdown, HTTP serving, control UI, and channel health runtime. | pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts |
