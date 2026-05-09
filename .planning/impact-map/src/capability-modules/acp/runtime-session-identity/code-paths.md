# ACP Runtime Session Identity Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/runtime/**`, `src/acp/session*.ts`, `src/acp/session-mapper.ts`, `src/acp/conversation-id.ts`
- Runtime handoff: Translator/control-plane code resolves runtime session identity here before dispatching or reconnecting ACP sessions.
