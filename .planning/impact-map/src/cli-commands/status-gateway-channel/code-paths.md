# Status Gateway Channel Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/commands/gateway-status/**`, `src/commands/channels/**`, `src/commands/status-all/**`, `src/cli/gateway-cli/**`, `src/cli/daemon-cli/**`
- Runtime handoff: Status and gateway commands fan into probe/runtime helpers before rendering user-facing output.
