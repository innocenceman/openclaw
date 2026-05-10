# ACP Translator Protocol Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/translator*.ts`, `src/acp/event-mapper*.ts`, `src/acp/client.ts`, `src/acp/server.ts`, `src/acp/commands.ts`, `src/acp/types.ts`
- Runtime handoff: External ACP protocol events map into runtime/control-plane commands through translator and event-mapper surfaces.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `13` changed path(s) to this final leaf. `13` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 11, 'A': 2}`.

- `src/acp/client.test.ts`
- `src/acp/client.ts`
- `src/acp/commands.ts`
- `src/acp/event-mapper.ts`
- `src/acp/server.startup.test.ts`
- `src/acp/server.ts`
- `src/acp/translator.cancel-scoping.test.ts`
- `src/acp/translator.error-kind.test.ts`
- `src/acp/translator.prompt-harness.test-support.ts`
- `src/acp/translator.prompt-prefix.test.ts`
- `src/acp/translator.stop-reason.test.ts`
- `src/acp/translator.ts`
- `src/acp/types.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
