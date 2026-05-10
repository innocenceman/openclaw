# Agent Runtime Remaining Verified Wave

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 GitNexus + code-review-graph + targeted tests

## Scope

This wave covers `src/agent-runtime/` after excluding the already verified ACP and ACP-spawn waves. It uses the existing logical owner `src/agent-runtime/` for `src/agents/**`, preserves `tools/` and `providers-auth/` verified status from the P0 refresh, and only updates `.planning/**` evidence and coverage labels.

## Split decision

| Boundary                         | Decision                                       | Reason                                                                                                                                                                                                                                                 |
| -------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runtime/command-entrypoint/`    | keep leaf, `exceptioned-deep-partial`          | Boundary is cohesive, but the standard `src/commands/agent.test.ts` command exits non-zero with no retained Vitest failure output, so it cannot be promoted.                                                                                           |
| `runtime/session-scope/`         | keep leaf, `verified`                          | Scope/path/identity tests passed and GitNexus shows the risk center is session identity resolution.                                                                                                                                                    |
| `runtime/command-session-store/` | keep leaf, `verified`                          | Command delivery/session-store test passed; the source surface is small and cohesive.                                                                                                                                                                  |
| `runtime/cli-runner/`            | keep leaf, `verified`                          | CLI runner/backend/bundle MCP tests passed; build escalation is documented for lazy-loading or packaging changes.                                                                                                                                      |
| `runtime/context-subagents/`     | split into child leaves, both `verified`       | GitNexus/code-review-graph show separate context-token and subagent-registry risk centers with different callers, but both targeted suites passed.                                                                                                     |
| `sandbox/`                       | split into child leaves, parent `deep-partial` | Sandbox mixes backend/policy, filesystem bridge, and workspace/browser/SSH behavior with different test ladders; core backend/policy and fs shell-bridge tests passed, broader grouped sandbox commands exited non-zero with no Vitest failure output. |
| `pi-runner/`                     | split into child leaves, parent `deep-partial` | `runEmbeddedPiAgent` is CRITICAL and `pi-runner/` spans run loop, provider params/streams, subscription, compaction, and extension hooks; core/subscription tests passed, provider-params grouped commands exited non-zero with no failure output.     |
| `skills/`                        | split subtree, parent `deep-partial`           | `skills-core.log` passed for core inventory/status/plugin-skill behavior, but the broader `skills.log` failed, so installer/refresh helpers remain residual.                                                                                           |
| `schema/`                        | keep leaf, `verified`                          | Gemini/XAI schema-cleaning command passed and GitNexus impact is LOW.                                                                                                                                                                                  |

## GitNexus evidence

- `npx gitnexus impact Function:src/agents/agent-command.ts:agentCommand --repo openclaw --direction upstream --depth 2`: LOW risk, 3 impacted symbols, direct callers `runBootOnce` and `agentCliCommand`.
- `npx gitnexus context runEmbeddedPiAgent --repo openclaw --file src/agents/pi-embedded-runner/run.ts`: direct callers include agent command, reply agent runner, cron isolated-agent, model probe, hooks, and voice-call response generation.
- `npx gitnexus impact Function:src/agents/pi-embedded-runner/run.ts:runEmbeddedPiAgent --repo openclaw --direction upstream --depth 2`: CRITICAL risk, 16 impacted symbols, 2 affected processes (`runAgentTurnWithFallback`, `runReplyAgent`) across Agents, Reply, Context-engine, Models, and voice-call-adjacent modules.
- `npx gitnexus impact Function:src/agents/agent-scope.ts:resolveSessionAgentIds --repo openclaw --direction upstream --depth 2`: CRITICAL risk, 42 impacted symbols and 7 affected processes; validates keeping session/scope evidence separate from command entrypoint.
- `npx gitnexus impact Function:src/agents/context.ts:lookupContextTokens --repo openclaw --direction upstream --depth 2`: HIGH risk, 15 impacted symbols and 2 reply processes; validates the context-token child split.
- `npx gitnexus impact Function:src/agents/subagent-registry.ts:registerSubagentRun --repo openclaw --direction upstream --depth 2`: LOW risk, direct caller `spawnSubagentDirect`, with sessions-spawn and reply subagent actions at depth 2.
- `npx gitnexus context createSandboxFsBridge --repo openclaw --file src/agents/sandbox/fs-bridge.ts` and matching impact: LOW risk with no indexed upstream callers; code-review-graph risk still shows fs bridge internal path/write helpers as local risk centers.
- `npx gitnexus impact Function:src/agents/schema/clean-for-gemini.ts:cleanSchemaForGemini --repo openclaw --direction upstream --depth 2`: LOW risk, direct callers in `pi-tools.schema.ts`, with Google sanitizer at depth 2.
- MCP `gitnexus_impact` returned `user cancelled MCP tool call` in this runtime, so the same impact checks were run through `npx gitnexus impact` and recorded here.

## code-review-graph evidence

`code-review-graph status` reported 80,930 nodes, 732,204 edges, 8,574 files, `Last updated: 2026-05-08T11:31:24`, built at commit `f99ef11b272b`. Current `HEAD` is `67988132eaae83a11f26f3c64583913ff8f90221`, and `git diff f99ef11b272b -- src/agents` is empty, so the graph remains fresh for this `src/agents/**` slice.

Risk query highlights from `.code-review-graph/graph.db`:

- `src/agents/pi-embedded-runner/run.ts`: runtime-auth refresh and failover helpers score up to 0.85/0.70 security-relevant; `runEmbeddedPiAgent` remains a high-centrality run-loop boundary.
- `src/agents/context.ts`: `lookupContextTokens` risk 1.0, caller count 12, security-relevant; split from subagent registry.
- `src/agents/subagent-registry.ts`: latest-run/session-runtime helpers score 1.0/0.85/0.70 and are security-relevant; split from context-token lookup.
- `src/agents/agent-scope.ts`: `resolveSessionAgentIds`/`resolveSessionAgentId` risk 0.70, tested, security-relevant; validates dedicated session-scope coverage.
- `src/agents/sandbox/fs-bridge.ts`: write/path helpers score 0.45 local risk; validates filesystem-bridge child boundary.
- `src/agents/agent-command.ts`: session persistence and CLI session handoff score 0.85/0.70; the failed standard `agent.test.ts` keeps command-entrypoint exceptioned.

## Validation matrix

| Leaf                                           | Status                     | Evidence                                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runtime/command-entrypoint/`                  | `exceptioned-deep-partial` | `agent-via-gateway.log` PASS; `command-entrypoint-adjacent.log` PASS; `agent-command-cli.log` and `agent-command-cli-show.log` FAIL with wrapper exit 1/no Vitest failure output after ~140s. |
| `runtime/session-scope/`                       | `verified`                 | `session-scope.log` PASS; `session-identity.log` PASS.                                                                                                                                        |
| `runtime/command-session-store/`               | `verified`                 | `command-session-store.log` PASS.                                                                                                                                                             |
| `runtime/cli-runner/`                          | `verified`                 | `cli-runner.log` PASS.                                                                                                                                                                        |
| `runtime/context-subagents/context-tokens/`    | `verified`                 | `context-subagents.log` PASS.                                                                                                                                                                 |
| `runtime/context-subagents/subagent-registry/` | `verified`                 | `context-subagents.log` PASS.                                                                                                                                                                 |
| `sandbox/backend-policy/`                      | `verified`                 | `sandbox-core.log` PASS; `tool-policy-sandbox.log` PASS.                                                                                                                                      |
| `sandbox/filesystem-bridge/shell-bridge/`      | `verified`                 | `sandbox-core.log` PASS for `fs-bridge.shell.test.ts`.                                                                                                                                        |
| `sandbox/filesystem-bridge/path-safety/`       | `deep-partial`             | Split only; broader fs/path grouped commands failed with wrapper exit 1/no retained Vitest output.                                                                                            |
| `sandbox/workspace-browser-ssh/`               | `deep-partial`             | Source boundary split only; broader sandbox grouped commands in `sandbox*.log` failed with wrapper exit 1/no Vitest failure output, so no promotion.                                          |
| `pi-runner/core-run-loop/`                     | `verified`                 | `pi-runner-core.log` PASS.                                                                                                                                                                    |
| `pi-runner/subscriptions-extensions/`          | `verified`                 | `pi-runner-core.log` PASS.                                                                                                                                                                    |
| `pi-runner/provider-params-streams/`           | `deep-partial`             | Boundary split only; `pi-runner-provider-params.log` and `pi-runner-extra-params-core.log` failed with wrapper exit 1/no Vitest failure output.                                               |
| `skills/core-inventory/`                       | `verified`                 | `skills-core.log` PASS for core skill inventory/status behavior.                                                                                                                              |
| `skills/plugin-skills/`                        | `verified`                 | `skills-core.log` PASS for plugin skill wiring.                                                                                                                                               |
| `skills/install-refresh/`                      | `deep-partial`             | Split only; `skills.log` failed for broader install/download/fallback/filter/frontmatter/refresh coverage.                                                                                    |
| `schema/`                                      | `verified`                 | `schema.log` PASS.                                                                                                                                                                            |

## Product source diff

No product source was edited in this wave. Required audit command: `git diff -- src apps extensions packages scripts docs package.json pnpm-lock.yaml` returned empty.

## Coverage decision

Promote passing, bounded leaves to `verified`; keep `runtime/command-entrypoint/` as `exceptioned-deep-partial`; keep newly split residual child leaves without passing targeted evidence as `deep-partial`, including `sandbox/filesystem-bridge/path-safety/` and `skills/install-refresh/`. Because not every child under `agent-runtime/` is verified, the aggregate `src/agent-runtime/` remains `exceptioned-deep-partial` rather than `verified`.

## Static, build, and audit evidence

- PASS: `git diff --check -- .planning`; recorded in `logs/evidence-static-audit.log`.
- PASS: `pnpm exec oxfmt --check` over the touched `src/agent-runtime` and evidence Markdown files; recorded in `logs/evidence-static-audit.log`.
- PASS: link/coverage/card audit script; required child leaf cards exist and no stub/empty coverage labels were found in this slice; recorded in `logs/evidence-link-coverage-audit.log`.
- PASS with network warning: `pnpm dlx markdownlint-cli2 ".planning/impact-map/src/agent-runtime/**/*.md" ".planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/*.md"`; `markdownlint-cli2` was already available locally, npm metadata fetch failed under restricted network, and lint completed with 0 errors; recorded in `logs/markdownlint.log`.
- FINAL RERUN EXCEPTION: after the approval-section-only evidence update, `pnpm dlx markdownlint-cli2` failed before linting due restricted network/cache setup (`EPERM` metadata fetch, then pnpm dlx cache `ENOENT`); `pnpm exec markdownlint-cli2` and `node_modules/.bin/markdownlint-cli2` were unavailable. Recorded in `logs/markdownlint-final.log`, `logs/markdownlint-final-exec.log`, and `logs/markdownlint-final-local.log`.
- EXCEPTION: `pnpm build` reached `scripts/runtime-postbuild.mjs` and failed staging bundled runtime deps for `discord` because `npm install` failed under the restricted network. No product source diff resulted; recorded in `logs/build.log`.
- PASS: `git diff -- src apps extensions packages scripts docs package.json pnpm-lock.yaml` returned empty product source diff; recorded in `logs/evidence-static-audit.log`.

## Verifier and architect approval

APPROVED. Native architect and verifier review both approved the conservative split after the second audit pass.

- Architect approval: confirmed `skills/` and `sandbox/filesystem-bridge/` conservative splits are coherent, aggregates are not overpromoted, and state/index/roadmap reflect the residual deep-partial boundaries.
- Verifier approval: confirmed the evidence matrix matches raw logs, `logs/evidence-static-audit-r2.log` passed, product source diff is empty, and the build exception is recorded as restricted-network `npm install` failure during bundled runtime deps staging.
