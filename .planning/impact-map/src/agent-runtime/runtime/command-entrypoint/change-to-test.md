# Command Entrypoint Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

1. For entrypoint or flag behavior, run `pnpm test -- src/commands/agent.test.ts src/commands/agent-via-gateway.test.ts`.
2. For gateway boot handoff changes, also run targeted gateway boot/server tests.
3. Run `pnpm build` when public CLI wiring or bundled output can change.
