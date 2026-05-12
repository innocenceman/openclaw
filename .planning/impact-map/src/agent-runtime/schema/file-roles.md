# Schema File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

| Representative paths                                                                               | Responsibility                                                    | First validation                                                                                |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/agents/schema/**`, `src/agents/pi-tools.schema.ts`, `src/agents/tools/browser-tool.schema.ts` | Tool-schema cleanup helpers and provider-specific schema shaping. | pnpm test -- src/agents/schema/clean-for-gemini.test.ts src/agents/schema/clean-for-xai.test.ts |
