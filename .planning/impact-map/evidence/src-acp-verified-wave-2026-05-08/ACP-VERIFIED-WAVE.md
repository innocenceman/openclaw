# ACP Verified Wave Evidence

Coverage: `verified`
Freshness: 2026-05-08 src ACP verified wave

## Scope

Verified the `capability-modules/acp/` child leaves after the GitNexus/code-review-graph split refinement. Scope was documentation/evidence only; no product source was edited.

## Tool evidence

### GitNexus

- `context(getAcpSessionManager)` found `src/acp/control-plane/manager.ts` with direct callers in `src/gateway/session-reset-service.ts`, `src/gateway/server-startup.ts`, `src/agents/agent-command.ts`, `src/agents/acp-spawn.ts`, `src/acp/persistent-bindings.lifecycle.ts`, `src/auto-reply/reply/dispatch-acp.ts`, and ACP reply command handlers.
- `impact(getAcpSessionManager, upstream, maxDepth=2)` reported `CRITICAL` risk, 21 direct callers, 30 impacted symbols, 5 affected processes, and affected Agents/Bindings/Plugins/Gateway/Reply modules. This confirms ACP control-plane manager is a verified high-blast-radius leaf and must keep targeted tests plus cross-module owner awareness.
- `context(resolveSessionIdentityFromMeta)` found callers from ACP control-plane manager methods, reply ACP dispatch, identity reconcile, and runtime session identifier helpers.
- `context(prompt)` in `src/acp/translator.ts` found outbound calls to event mapper, session store, `src/gateway/client.ts` request, and session/meta helpers.
- `context(ensureConfiguredAcpBindingSession)` found the channel plugin ACP stateful target driver and persistent binding tests as consumers, and outgoing calls into ACP manager session lifecycle.
- `context(readSecretFromFile)` found callers in ACP CLI, gateway CLI run, and ACP server args; outgoing dependency is `src/infra/secret-file.ts`.

### code-review-graph

code-review-graph database freshness: `last_updated=2026-05-08T11:31:24`, `schema_version=9`.

Grouped ACP risk summary:

| Leaf                             | Risk count | Avg risk | Max risk | Caller total | Security-relevant symbols |
| -------------------------------- | ---------: | -------: | -------: | -----------: | ------------------------: |
| `control-plane-session-manager/` |        147 |     0.46 |     1.00 |          350 |                        50 |
| `runtime-session-identity/`      |        101 |     0.44 |     0.85 |          231 |                        38 |
| `translator-protocol/`           |        250 |     0.37 |     0.85 |          348 |                        67 |
| `persistent-bindings/`           |         65 |     0.40 |     0.70 |          121 |                        20 |
| `secret-env-bridge/`             |         19 |     0.34 |     0.85 |           44 |                         4 |

Top ACP risk signals included `getAcpSessionManager` at risk 1.00 and multiple session/control-plane/translator/secret functions at risk 0.85, supporting the child-leaf split and the need for targeted verification.

## Targeted validation

| Leaf                             | Command                                                                                                                                                                                                                                                                                                               | Result                    |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `control-plane-session-manager/` | `pnpm test -- src/acp/control-plane/manager.test.ts src/acp/control-plane/runtime-cache.test.ts`                                                                                                                                                                                                                      | Passed: 2 files, 38 tests |
| `runtime-session-identity/`      | `pnpm test -- src/acp/session.test.ts src/acp/session-mapper.test.ts src/acp/runtime/session-identifiers.test.ts src/acp/runtime/registry.test.ts`                                                                                                                                                                    | Passed: 4 files, 18 tests |
| `translator-protocol/`           | `pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts` | Passed: 8 files, 88 tests |
| `persistent-bindings/`           | `pnpm test -- src/acp/persistent-bindings.test.ts src/acp/persistent-bindings.lifecycle.test.ts`                                                                                                                                                                                                                      | Passed: 2 files, 30 tests |
| `secret-env-bridge/`             | `pnpm test -- src/acp/secret-file.test.ts src/acp/policy.test.ts`                                                                                                                                                                                                                                                     | Passed: 2 files, 6 tests  |

Raw logs live under `logs/` in this evidence directory.

## Coverage decision

All ACP child leaves are promoted to `verified`. No ACP child leaf requires an exception in this wave. The ACP subtree remains a high-risk surface despite verified coverage; future product-source changes should rerun GitNexus impact/context plus the leaf-specific targeted tests before landing.
