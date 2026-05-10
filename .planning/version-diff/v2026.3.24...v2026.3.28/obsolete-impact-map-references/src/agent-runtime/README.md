# Agent Runtime Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Large module: `src/`
- Canonical impact-map slice: `src/agent-runtime/`
- Source roots: `src/agents/`

## Purpose

Agent execution, tool orchestration, provider/auth selection, sandbox execution, Pi embedded runtime, skills, and schema support.

## Risk profile

High: central agent execution path and shared tool/runtime behavior.

## Wave 1R leaf status

| Leaf              | Coverage                   | Queue class | Source evidence                                                                                                   |
| ----------------- | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `runtime/`        | `exceptioned-deep-partial` | priority    | `src/agents/agent-command.ts`, `src/agents/agent-scope.ts`, `src/agents/command/**`...                            |
| `tools/`          | `verified`                 | priority    | `src/agents/apply-patch.ts`, `src/agents/bash-tools*.ts`, `src/agents/openclaw-tools*.ts`...                      |
| `providers-auth/` | `verified`                 | priority    | `src/agents/auth-profiles/**`, `src/agents/auth-profiles.ts`, `src/agents/model-auth*.ts`...                      |
| `sandbox/`        | `deep-partial`             | residual    | `src/agents/sandbox.ts`, `src/agents/sandbox/**`, `src/agents/tool-policy-sandbox.ts`                             |
| `pi-runner/`      | `deep-partial`             | residual    | `src/agents/pi-embedded-runner.ts`, `src/agents/pi-embedded-runner/**`, `src/agents/pi-embedded-subscribe*.ts`... |
| `skills/`         | `deep-partial`             | residual    | `src/agents/skills.ts`, `src/agents/skills/**`, `src/agents/skills-install*.ts`...                                |
| `schema/`         | `verified`                 | residual    | `src/agents/schema/**`, `src/agents/pi-tools.schema.ts`, `src/agents/tools/browser-tool.schema.ts`                |

## Cross-module links

- ../reply-orchestration/README.md
- ../capability-modules/README.md
- ../plugin-runtime-sdk/README.md

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed; impact risk MEDIUM for agentCommand.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-agents-runtime.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-agents-tools.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/src-agents-auth.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: priority leaves `verified`; aggregate `deep-partial`.

Reason: GitNexus and code-review-graph are fresh; runtime/tool/auth validations passed. Residual `sandbox`, `pi-runner`, `skills`, and `schema` leaves remain `partial`, so the aggregate module stays below full verified.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-08 remaining runtime verified wave

Decision: aggregate `exceptioned-deep-partial`.

Reason: remaining small leaves with passing targeted validation were promoted to `verified`; oversized `sandbox/`, `pi-runner/`, and mixed `runtime/context-subagents/` boundaries were split. `runtime/command-entrypoint/` remains `exceptioned-deep-partial` because `pnpm test -- src/commands/agent.test.ts` exits non-zero with no Vitest failure output in this environment. Newly split residual child leaves without passing targeted evidence remain `deep-partial`.

Evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

No product source was changed during this wave.
