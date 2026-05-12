# ACP Spawn Verified Wave Evidence

Coverage decision: `verified`
Freshness: 2026-05-08 GitNexus + code-review-graph + targeted tests

## Scope

- Impact leaf: `src/agent-runtime/runtime/acp-spawn/`
- Product source paths inspected, not modified:
  - `src/agents/acp-spawn.ts`
  - `src/agents/acp-spawn-parent-stream.ts`
  - `src/agents/acp-binding-architecture.guardrail.test.ts`
  - `src/agents/acp-spawn.test.ts`
  - `src/agents/acp-spawn-parent-stream.test.ts`
  - `src/agents/tools/sessions-spawn-tool.ts` as the direct caller boundary
- Planning files updated under `.planning/**` only.

## Tool freshness

| Tool              | Freshness evidence                                                                                                                                                                                                                                          | Decision use                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| GitNexus          | Current source graph remained valid for this slice: GitNexus/code-review-graph were built at `f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc`, and `git diff f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc..67988132eaae83a11f26f3c64583913ff8f90221 -- src` is empty. | Used for `spawnAcpDirect` and parent-stream context/impact. |
| code-review-graph | `.code-review-graph/graph.db` metadata: `schema_version=9`, `last_updated=2026-05-08T11:31:24`, `last_postprocessed_at=2026-05-08T11:31:50`, `git_head_sha=f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc`; product source unchanged since that graph.            | Used for risk and test-boundary checks on ACP spawn files.  |
| Real tests        | Fresh logs under `logs/`.                                                                                                                                                                                                                                   | Required promotion evidence.                                |

## GitNexus evidence

| Symbol                           | File                                    | Upstream impact                                                                                                                                                | Boundary result                                                                                                                                                                                         |
| -------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spawnAcpDirect`                 | `src/agents/acp-spawn.ts`               | LOW risk; 2 direct callers; 4 impacted symbols; affected module `Agents`; direct caller `createSessionsSpawnTool`; test caller `src/agents/acp-spawn.test.ts`. | Leaf correctly owns ACP spawn bridge; caller boundary is `src/agents/tools/sessions-spawn-tool.ts`.                                                                                                     |
| `startAcpSpawnParentStreamRelay` | `src/agents/acp-spawn-parent-stream.ts` | LOW risk; 1 direct caller; 3 impacted symbols; direct caller `spawnAcpDirect`.                                                                                 | Parent stream relay belongs inside this leaf and is covered by dedicated parent-stream tests.                                                                                                           |
| `spawnAcpDirect` outgoing calls  | `src/agents/acp-spawn.ts`               | Calls ACP control-plane/session helpers, policy checks, session binding service, gateway call, stream-log resolution, and parent-stream relay.                 | Cross-links remain to `capability-modules/acp/`, `infra-outbound-delivery/`, and `gateway-api-surface/`; this leaf owns the agent-runtime handoff, not the downstream ACP/control-plane implementation. |

`gitnexus query "ACP spawn parent stream agent runtime acp-spawn"` returned no process rows, so symbol context/impact was the authoritative GitNexus view for this bounded leaf.

## code-review-graph evidence

| File                                                    | Nodes | Avg risk | Max risk | Caller count | Security nodes | Coverage note                                                                                                                                          |
| ------------------------------------------------------- | ----: | -------: | -------: | -----------: | -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/agents/acp-spawn.ts`                               |    20 |     0.38 |     0.70 |           24 |              5 | High-risk helpers include session file persistence, ACP session mode, heartbeat/session-local routing, and requester session key resolution.           |
| `src/agents/acp-spawn-parent-stream.ts`                 |    20 |     0.32 |     0.70 |           43 |              1 | Parent-stream relay/log-path behavior is bounded by dedicated tests.                                                                                   |
| `src/agents/acp-spawn.test.ts`                          |    40 |     0.39 |     0.70 |           34 |             16 | Main behavior tests cover thread binding, sandbox rejection, stream-to-parent, implicit streaming, dispatch failure cleanup, and context requirements. |
| `src/agents/acp-spawn-parent-stream.test.ts`            |    13 |     0.30 |     0.70 |            9 |              2 | Dedicated relay/log-path behavior tests.                                                                                                               |
| `src/agents/acp-binding-architecture.guardrail.test.ts` |     3 |     0.33 |     0.70 |            0 |              1 | Architecture guardrail coverage for ACP/session binding boundaries.                                                                                    |
| `src/agents/tools/sessions-spawn-tool.ts`               |     2 |     0.35 |     0.70 |            1 |              1 | Direct caller bridge covered by adjacent tool test.                                                                                                    |

## Validation commands

| Command                                                                                                                                      | Result                  | Evidence log                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------- |
| `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts` | PASS: 3 files, 32 tests | `logs/acp-spawn-targeted-tests.log`     |
| `pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`                                                                                  | PASS: 1 file, 9 tests   | `logs/sessions-spawn-tool-adjacent.log` |

## Ralph deslop and post-deslop regression

Deslop scope was restricted to this Ralph wave's changed `.planning/**` files. The fallback/slop signal scan found no matches for temporary workaround, silent default, swallowed error, bypass, or alternate-path signals, so no cleanup edits were needed.

Post-deslop regression commands both passed:

| Command                                                                                                                                      | Result                  | Evidence log                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- |
| `pnpm test -- src/agents/acp-spawn.test.ts src/agents/acp-spawn-parent-stream.test.ts src/agents/acp-binding-architecture.guardrail.test.ts` | PASS: 3 files, 32 tests | `logs/post-deslop-acp-spawn-targeted-tests.log`     |
| `pnpm test -- src/agents/tools/sessions-spawn-tool.test.ts`                                                                                  | PASS: 1 file, 9 tests   | `logs/post-deslop-sessions-spawn-tool-adjacent.log` |

## Coverage decision

Promote `src/agent-runtime/runtime/acp-spawn/` to `verified`.

Rationale:

- The leaf has a narrow source boundary: ACP spawn bridge plus parent-stream relay.
- GitNexus shows a low upstream blast radius centered on `Agents`, with a direct caller in `sessions-spawn-tool` and internal parent-stream relay usage.
- code-review-graph risk remains non-trivial but is bounded by direct behavior tests and an architecture guardrail.
- The direct leaf tests and adjacent caller test passed fresh in this wave.

No ACP spawn exception remains. The parent `agent-runtime/runtime/` subtree remains `deep-partial` because sibling runtime leaves are not verified by this wave.

## Source-change control

No product source was changed. This wave only updates `.planning/**` evidence and coverage ledgers.
