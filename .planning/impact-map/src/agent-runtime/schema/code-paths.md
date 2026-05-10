# Schema Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

- Primary paths: `src/agents/schema/**`, `src/agents/pi-tools.schema.ts`, `src/agents/tools/browser-tool.schema.ts`
- Runtime handoff: Schema helpers sanitize tool declarations before provider/runtime transport emits them.
