# Status Gateway Channel File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                                                                                                          | Responsibility                                                                              | First validation                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/commands/gateway-status/**`, `src/commands/channels/**`, `src/commands/status-all/**`, `src/cli/gateway-cli/**`, `src/cli/daemon-cli/**` | Status/probe surfaces, gateway lifecycle commands, and channel status/config command flows. | pnpm test -- src/commands/channels.status.command-flow.test.ts src/cli/gateway-cli.coverage.test.ts src/cli/daemon-cli/status.test.ts src/commands/status-all/report-lines.test.ts |
