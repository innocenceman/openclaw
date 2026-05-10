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
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `5` (修改 5).
- Target-existing path refs in active map: `5`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
