# Command Entrypoint Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `command-entrypoint/`

## Purpose

Agent command entrypoint and gateway/CLI handoff into runtime execution.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 remaining runtime wave

Decision: `exceptioned-deep-partial`.

Evidence: `agent-via-gateway.log` and `command-entrypoint-adjacent.log` passed, but `src/commands/agent.test.ts` exits non-zero with no Vitest failure output; keep exceptioned.

Wave evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.
