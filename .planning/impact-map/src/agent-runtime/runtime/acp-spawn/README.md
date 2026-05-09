# ACP Spawn Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 acp-spawn verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `acp-spawn/`

## Purpose

ACP-aware agent spawn and parent-stream bridge.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 verified wave

Decision: `verified`.

Reason: GitNexus showed `spawnAcpDirect` has LOW upstream impact centered on `Agents` and a direct caller in `src/agents/tools/sessions-spawn-tool.ts`; `startAcpSpawnParentStreamRelay` is only called by `spawnAcpDirect`. code-review-graph risk is bounded by dedicated spawn, parent-stream, architecture guardrail, and adjacent tool tests.

Evidence: `.planning/impact-map/evidence/src-acp-spawn-verified-wave-2026-05-08/ACP-SPAWN-VERIFIED-WAVE.md` with raw logs under that directory.

No product source was changed during this wave.
