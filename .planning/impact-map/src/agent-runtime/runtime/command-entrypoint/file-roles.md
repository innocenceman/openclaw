# Command Entrypoint File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

- `src/agents/agent-command.ts`: core command entrypoint.
- `src/commands/agent*.ts`: CLI-facing command handoff into agent runtime.
- Gateway boot callers are cross-module consumers owned by `gateway-api-surface/server-runtime/`.
