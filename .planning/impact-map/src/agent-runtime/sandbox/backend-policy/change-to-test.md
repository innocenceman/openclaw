# Backend Policy Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts`.
2. Escalate to `pnpm build` when sandbox runtime boundaries or browser bridges affect packaged output.
3. For Docker/SSH/browser behavior, run container or remote smoke checks only when the environment is available.
