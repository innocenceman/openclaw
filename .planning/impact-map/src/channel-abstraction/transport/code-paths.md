# Transport Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/transport/**`, `src/channels/web/**`
- Runtime handoff: Transport helpers guard delivery/runtime state after routing and before low-level channel IO.
