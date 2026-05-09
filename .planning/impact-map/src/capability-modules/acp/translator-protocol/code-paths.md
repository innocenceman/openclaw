# ACP Translator Protocol Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/translator*.ts`, `src/acp/event-mapper*.ts`, `src/acp/client.ts`, `src/acp/server.ts`, `src/acp/commands.ts`, `src/acp/types.ts`
- Runtime handoff: External ACP protocol events map into runtime/control-plane commands through translator and event-mapper surfaces.
