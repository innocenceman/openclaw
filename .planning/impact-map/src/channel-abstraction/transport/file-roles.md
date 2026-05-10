# Transport File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                               | Responsibility                               | First validation                                           |
| -------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------- |
| `src/channels/transport/**`, `src/channels/web/**` | Transport watchdogs and web channel helpers. | pnpm test -- src/channels/transport/stall-watchdog.test.ts |
