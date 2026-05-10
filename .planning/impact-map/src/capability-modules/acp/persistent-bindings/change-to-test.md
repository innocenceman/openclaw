# ACP Persistent Bindings Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

1. Run `pnpm test -- src/acp/persistent-bindings.test.ts src/acp/persistent-bindings.lifecycle.test.ts`.
2. Add migration/compatibility tests before changing persisted binding shape.

## 2026-05-08 verification result

- Result: `verified`
- Tool evidence: GitNexus context on `ensureConfiguredAcpBindingSession` shows consumers in channel plugin ACP stateful target driver and outgoing calls into ACP manager lifecycle. code-review-graph: max risk 0.70, 65 risk-index symbols.
- Test evidence: `pnpm test -- src/acp/persistent-bindings.test.ts src/acp/persistent-bindings.lifecycle.test.ts` passed: 2 files, 30 tests.
- Raw log: `../../../../evidence/src-acp-verified-wave-2026-05-08/logs/persistent-bindings.log`
