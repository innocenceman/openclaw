# Reply, Gateway, and CLI Verified Wave

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 GitNexus + code-review-graph + targeted tests

## Scope

This wave covers `src/reply-orchestration/`, `src/gateway-api-surface/`, and `src/cli-commands/` for ultragoal `G003-src-reply-gateway-cli`. It does not repeat the already completed ACP or ACP-spawn verified waves and does not edit product source.

## Split decision

| Boundary                                                                      | Decision                                | Reason                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reply-orchestration/commands/`                                               | keep existing child split               | The prior split into auth gates, registry/families, and handlers matches distinct policy, registry, and execution handler risk centers. Auth and registry targeted tests passed; handlers remain exceptioned after grouped command-handler validation failed. |
| `reply-orchestration/{runner,streaming,queue}/`                               | keep leaves, `exceptioned-deep-partial` | Existing leaves are cohesive enough for current ownership, but their standard validation commands failed with wrapper exit 1 and no retained Vitest failure output, so promotion would be dishonest.                                                          |
| `reply-orchestration/{export-html,channel-shaping}/`                          | keep leaves, `verified`                 | Dedicated targeted tests passed and source surfaces are narrow.                                                                                                                                                                                               |
| `reply-orchestration/exec/`                                                   | keep leaf, `exceptioned-deep-partial`   | No dedicated exec suite exists; nearest command/queue validation failed, so this residual leaf cannot be promoted.                                                                                                                                            |
| `gateway-api-surface/server-methods/`                                         | keep leaf, `exceptioned-deep-partial`   | Existing P0 exception remains. Standard server-methods validation still fails.                                                                                                                                                                                |
| `gateway-api-surface/auth-session/`                                           | keep leaf, `exceptioned-deep-partial`   | Gateway auth validation timed out under the low-memory wrapper and the non-timeboxed run later failed after a long gateway run.                                                                                                                               |
| `gateway-api-surface/{server-runtime,protocol,client-call}/`                  | keep leaves, `verified`                 | Targeted validation passed for lifecycle/runtime, protocol contracts, and client/call helpers.                                                                                                                                                                |
| `cli-commands/command-implementations/`                                       | keep existing child split               | The child split matches command-family boundaries. Secret/gateway commands passed; agent, channel/plugin, auth/provider, config/doctor, and maintenance families remain exceptioned after standard family validation failed or timed out.                     |
| `cli-commands/{program-registration,status-gateway-channel,terminal-output}/` | keep leaves, `verified`                 | Targeted CLI registration, status/channel/gateway, and terminal output tests passed.                                                                                                                                                                          |

## GitNexus evidence

MCP `gitnexus_context` returned context for `runReplyAgent`, `handleGatewayRequest`, `buildProgram`, `parseCommandArgs`, and `routeReply`. MCP `gitnexus_impact` returned `user cancelled MCP tool call`, so equivalent impact checks were also run via `npx gitnexus impact` and logged in `logs/gitnexus-impact.log`.

Highlights:

- `runReplyAgent`: LOW upstream risk; direct caller `runPreparedReply`, then `getReplyFromConfig`. The context graph shows broad downstream dependencies into model auth, diagnostics, agent events, context tokens, session accounting, typing, queue policy, origin routing, follow-up runner, and block streaming.
- `handleGatewayRequest`: HIGH upstream risk; direct callers `dispatchGatewayMethod` and `attachGatewayWsMessageHandler`, with one affected WebSocket gateway process and Gateway/Infra/Ws-connection module impact.
- `routeReply`: CRITICAL upstream risk; direct callers include dispatch, follow-up, ACP delivery, reset hooks, and outbound send paths; affected processes include `dispatchReplyFromConfig` and `runPreparedReply`.
- `parseCommandArgs`: LOW upstream risk centered on Telegram native command registration and command registry tests.
- `agentCommand`: LOW upstream risk with callers from gateway boot and CLI agent command registration.
- `resolveGatewayAuth`: CRITICAL upstream risk across security audit, commands, gateway, gateway CLI, browser control auth, and agent/gateway runtime configuration.

## code-review-graph evidence

`code-review-graph status` reported 80,930 nodes, 732,204 edges, 8,574 files, `Last updated: 2026-05-08T11:31:24`, built at commit `f99ef11b272b`. Current `HEAD` is `67988132eaae83a11f26f3c64583913ff8f90221`, and `git diff f99ef11b272b -- src/auto-reply src/gateway src/cli src/commands src/terminal src/tui` returned empty, so the graph remains fresh for this bounded slice.

Risk query highlights from `.code-review-graph/graph.db` are logged in `logs/code-review-graph-risk.log`:

- Reply command gates: `rejectUnauthorizedCommand` risk 1.0, security-relevant; validates separate auth-gate ownership.
- Reply runner: session reset/touch helpers risk 0.70, security-relevant; `runReplyAgent` itself is tested and lower graph risk.
- Gateway auth: `authorizeHttpGatewayConnect`, `resolveGatewayAuth`, and `authorizeGatewayConnect` are security-relevant with risk 0.85/0.70.
- Gateway methods: `authorizeGatewayMethod` is security-relevant; `handleGatewayRequest` is a central method dispatcher.
- CLI agent command: `persistSessionEntry` and `runCliWithSession` are security-relevant risk centers; this supports keeping agent-command CLI exceptioned when validation fails.
- CLI gateway run: inline password and password option handling are security-relevant; secret/gateway command tests passed.

## Validation matrix

| Leaf                                                            | Status                     | Evidence                                                                                                                                                      |
| --------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reply-orchestration/runner/`                                   | `exceptioned-deep-partial` | `reply-runner.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                                    |
| `reply-orchestration/commands/command-auth-gates/`              | `verified`                 | `reply-command-auth-gates.log` PASS.                                                                                                                          |
| `reply-orchestration/commands/command-registry-families/`       | `verified`                 | `reply-command-registry.log` PASS.                                                                                                                            |
| `reply-orchestration/commands/command-handlers/`                | `exceptioned-deep-partial` | `reply-command-handlers.log` FAIL, wrapper exit 1/no retained Vitest failure output after 133.5s.                                                             |
| `reply-orchestration/streaming/`                                | `exceptioned-deep-partial` | `reply-streaming.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                                 |
| `reply-orchestration/exec/`                                     | `exceptioned-deep-partial` | No dedicated exec suite exists; nearest command/queue validation failed.                                                                                      |
| `reply-orchestration/queue/`                                    | `exceptioned-deep-partial` | `reply-queue.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                                     |
| `reply-orchestration/export-html/`                              | `verified`                 | `reply-export-html.log` PASS.                                                                                                                                 |
| `reply-orchestration/channel-shaping/`                          | `verified`                 | `reply-channel-shaping.log` PASS.                                                                                                                             |
| `gateway-api-surface/server-runtime/`                           | `verified`                 | `gateway-server-runtime.log` PASS.                                                                                                                            |
| `gateway-api-surface/server-methods/`                           | `exceptioned-deep-partial` | `gateway-server-methods.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                          |
| `gateway-api-surface/protocol/`                                 | `verified`                 | `gateway-protocol.log` PASS.                                                                                                                                  |
| `gateway-api-surface/client-call/`                              | `verified`                 | `gateway-client-call.log` PASS.                                                                                                                               |
| `gateway-api-surface/auth-session/`                             | `exceptioned-deep-partial` | `gateway-auth-session-rerun.log` timed out at 240s with wrapper failure artifacts; non-timeboxed `gateway-auth-session.log` eventually exited 1 after 371.0s. |
| `cli-commands/program-registration/`                            | `verified`                 | `cli-program-registration.log` PASS.                                                                                                                          |
| `cli-commands/command-implementations/agent-command-cli/`       | `exceptioned-deep-partial` | `cli-agent-command.log` FAIL, wrapper exit 1/no retained Vitest failure output after 173.9s.                                                                  |
| `cli-commands/command-implementations/channel-plugin-commands/` | `exceptioned-deep-partial` | `cli-channel-plugin.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                              |
| `cli-commands/command-implementations/auth-provider-commands/`  | `exceptioned-deep-partial` | `cli-auth-provider.log` FAIL, wrapper exit 1/no retained Vitest failure output after 166.6s.                                                                  |
| `cli-commands/command-implementations/config-doctor-commands/`  | `exceptioned-deep-partial` | `cli-config-doctor.log` timed out at 240s after unit tests passed and base doctor/config group failed.                                                        |
| `cli-commands/command-implementations/secret-gateway-commands/` | `verified`                 | `cli-secret-gateway.log` PASS.                                                                                                                                |
| `cli-commands/command-implementations/maintenance-commands/`    | `exceptioned-deep-partial` | `cli-maintenance.log` FAIL, wrapper exit 1/no retained Vitest failure output.                                                                                 |
| `cli-commands/status-gateway-channel/`                          | `verified`                 | `cli-status-gateway-channel.log` PASS.                                                                                                                        |
| `cli-commands/terminal-output/`                                 | `verified`                 | `cli-terminal-output.log` PASS.                                                                                                                               |

## Static, build, and audit evidence

- PASS: `git diff --check -- .planning`; recorded in `logs/evidence-static-audit.log` and final rerun `logs/evidence-static-audit-final.log`.
- PASS: `pnpm exec oxfmt --check` over the touched planning docs; recorded in `logs/evidence-static-audit.log` and final rerun `logs/evidence-static-audit-final.log`.
- PASS: targeted link/coverage audit found no stale `partial`/`deep-partial` labels in the G003 target roots and no missing leaf card packets; recorded in `logs/evidence-link-coverage-audit.log`.
- PASS: product source diff audit `git diff -- src apps extensions packages scripts docs package.json pnpm-lock.yaml` returned empty; recorded in `logs/evidence-static-audit.log` and final rerun `logs/evidence-static-audit-final.log`.
- EXCEPTION: `pnpm dlx markdownlint-cli2` could not run under restricted network/cache setup (`EPERM` registry fetch, then pnpm dlx cache `ENOENT`); `pnpm exec markdownlint-cli2` was unavailable. Recorded in `logs/markdownlint.log` and `logs/markdownlint-exec.log`.
- EXCEPTION: `pnpm build` reached `scripts/runtime-postbuild.mjs` and failed staging bundled runtime deps for `discord` because `npm install` failed; recorded in `logs/build.log`. This matches the prior G002 environment exception and produced no product source diff.
- EXCEPTION: MCP `gitnexus_detect_changes` returned `user cancelled MCP tool call`; CLI fallback `npx gitnexus detect-changes --repo openclaw --scope all` reported `Git diff failed: spawnSync git EPERM`. Recorded in `logs/gitnexus-detect-changes.log`.

## Coverage decision

Promote only leaves with passing targeted validation to `verified`. Keep leaves with failed or timed-out standard commands at `exceptioned-deep-partial`; do not promote broad aggregates. The aggregate `src/reply-orchestration/`, `src/gateway-api-surface/`, and `src/cli-commands/` rows are therefore `exceptioned-deep-partial` with explicit evidence instead of silent `partial` or false `verified` status.

## Verifier and architect approval

APPROVED. Native architect and verifier review both approved the conservative exceptioned-deep-partial aggregate decision after the final static audit.

- Architect approval: confirmed the verified vs exceptioned decisions are conservative, coherent with HIGH/CRITICAL GitNexus risk centers, and reflected consistently in leaf indexes plus module ledgers.
- Verifier approval: confirmed the evidence matrix matches raw log exit codes, product source diff is empty, target coverage labels have no `partial`/`deep-partial` residue, and all target leaf card packets are present.
