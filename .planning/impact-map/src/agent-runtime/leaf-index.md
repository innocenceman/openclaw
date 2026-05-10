# Agent Runtime Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Leaf directory    | Coverage                   | Purpose                                                                                                                          |
| ----------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `runtime/`        | `exceptioned-deep-partial` | Runtime subtree split into command entrypoint, session/scope, command store, CLI runner, ACP spawn, and context/subagent leaves. |
| `tools/`          | `verified`                 | Built-in tool adapters, exec/runtime wrappers, coding tool exposure, and MCP stdio bridging.                                     |
| `providers-auth/` | `verified`                 | Provider credential state, OAuth/API-key selection, auth profile ordering, and model/provider auth resolution.                   |
| `sandbox/`        | `exceptioned-deep-partial` | Sandbox split into backend/policy, filesystem bridge, and workspace/browser/SSH leaves.                                          |
| `pi-runner/`      | `exceptioned-deep-partial` | Embedded Pi runtime split into run loop, provider params/streams, and subscription/extension leaves.                             |
| `skills/`         | `verified`                 | Skill discovery split into core inventory, plugin skills, and install/refresh leaves.                                            |
| `schema/`         | `verified`                 | Tool-schema cleanup helpers and provider-specific schema shaping.                                                                |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.

## 2026-05-08 remaining runtime wave

Evidence: `../../evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

## 2026-05-09 final audit

The final audit converted residual sandbox and Pi leaves to explicit `exceptioned-deep-partial` rows and promoted `skills/install-refresh/` to `verified` after its targeted installer/download/fallback/filter/frontmatter/refresh tests passed. Evidence: `../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.
