# Backend Policy Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/sandbox.ts`, `src/agents/sandbox/backend.ts`, `src/agents/sandbox/config*.ts`, `src/agents/sandbox/validate-sandbox-security.ts`, `src/agents/tool-policy-sandbox.ts`
- Runtime handoff: sandbox policy and runtime adapters gate tool execution before filesystem, browser, Docker, or SSH operations proceed.
