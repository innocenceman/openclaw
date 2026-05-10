# ACP Translator Protocol Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/acp/`
- Leaf: `translator-protocol/`

## Purpose

ACP client/server protocol translation, event mapping, and command contracts.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## Verified wave evidence

- Tool evidence: GitNexus context on `AcpGatewayAgent.prompt` shows dependencies on event mapper, session store, gateway client request, session mapper, and meta helpers. code-review-graph: max risk 0.85, 250 risk-index symbols.
- Validation evidence: `pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts` passed: 8 files, 88 tests.
- Evidence ledger: `../../../../evidence/src-acp-verified-wave-2026-05-08/ACP-VERIFIED-WAVE.md`
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `13` (修改 11，新增 2).
- Target-existing changed paths listed here: `13`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 1 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
