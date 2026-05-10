# ACP Secret Env Bridge Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/secret-file.ts`, `src/acp/policy.ts`, `src/acp/meta.ts`
- Runtime handoff: ACP runtime startup may materialize or filter secret/env inputs before provider/runtime execution.
