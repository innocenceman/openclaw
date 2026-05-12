# Overall Impact-map Closeout Baseline Queue

Coverage decision: `planning-queue`
Freshness: 2026-05-08 ultragoal G001 baseline audit

## Objective

Audit the current impact-map state, preserve already completed ACP and acp-spawn verified waves, and define the module-by-module execution queue for the remaining verified waves. This goal does not promote additional leaves.

## Current source-change guard

- Product source diff from GitNexus indexed commit `838c48ad1399f0d76f92d103ea355474dc1a7b94` to current `HEAD` is `0` for product/source surfaces.
- Current working tree product source diff is `0`; unrelated non-planning WIP remains in `.gitignore`, `AGENTS.md`, and `.gitnexusignore`.
- Already completed verified waves are preserved and should not be repeated: `src/capability-modules/acp/` and `src/agent-runtime/runtime/acp-spawn/`.

## Tool freshness

| Tool              | Evidence                                                                                                                                                                         | Baseline decision                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| GitNexus          | Repo `openclaw` indexed with 140086 nodes / 210569 edges / 300 processes; tool reports index is one commit behind, but product source diff from indexed commit to `HEAD` is `0`. | Usable for planning-only baseline and subsequent bounded verified waves; rerun analyze if product source changes. |
| code-review-graph | `schema_version=9`, `last_updated=2026-05-08T11:31:24`, `git_head_sha=f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc`.                                                                 | Usable because product source is unchanged since the graph build.                                                 |
| Real validation   | No new module validation is claimed in G001; later goals must run targeted commands per leaf.                                                                                    | G001 writes queue only.                                                                                           |

## Coverage baseline

- Leaf-index rows parsed: `266` across `41` indexes.
- Coverage counts: verified: 36 | deep-partial: 115 | partial: 112 | exceptioned-deep-partial: 3.

| Top module    | Coverage mix     |
| ------------- | ---------------- | --------------------------- | ----------- | --------------------------- |
| `apps/`       | deep-partial: 6  | partial: 7                  |
| `docs/`       | deep-partial: 18 | partial: 12                 |
| `extensions/` | verified: 11     | deep-partial: 21            | partial: 50 |
| `packages/`   | deep-partial: 2  |
| `scripts/`    | deep-partial: 12 | partial: 5                  |
| `src/`        | verified: 19     | deep-partial: 52            | partial: 35 | exceptioned-deep-partial: 2 |
| `test-infra/` | verified: 6      | exceptioned-deep-partial: 1 |
| `ui/`         | deep-partial: 4  | partial: 3                  |

Full machine-readable status is in `leaf-status.json`.

## code-review-graph high-level risk anchors

| Source family     | Nodes | Avg risk | Max risk | Caller count | Security nodes |
| ----------------- | ----: | -------: | -------: | -----------: | -------------: |
| `src/agents/`     | 10891 |     0.30 |     1.00 |        16495 |           1326 |
| `src/auto-reply/` |  3536 |     0.30 |     1.00 |         5114 |            418 |
| `src/gateway/`    |  4255 |     0.33 |     0.85 |         6274 |            882 |
| `src/channels/`   |  1602 |     0.26 |     1.00 |         2177 |            107 |
| `src/plugin`      |  3164 |     0.25 |     1.00 |         4951 |            163 |
| `src/infra/`      |  5399 |     0.27 |     1.00 |         8545 |            367 |
| `src/config/`     |  2271 |     0.30 |     1.00 |         4230 |            291 |
| `src/acp/`        |   637 |     0.37 |     1.00 |         1094 |            179 |
| `extensions/`     | 20118 |     0.28 |     1.00 |        23220 |           1289 |
| `apps/`           |  7489 |     0.31 |     1.00 |         5883 |            535 |
| `ui/`             |  2108 |     0.30 |     1.00 |         3654 |            211 |
| `docs/`           |     7 |     0.26 |     0.30 |            5 |              0 |
| `scripts/`        |  1543 |     0.27 |     1.00 |         2339 |             40 |
| `packages/`       |     4 |     0.00 |     0.00 |            0 |              0 |
| `test/`           |   662 |     0.22 |     0.70 |          739 |              5 |

## Oversized or split-candidate leaves

| Candidate                                           | Reason                                                                                                                                                                     |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/gateway-api-surface/server-methods`            | Current exceptioned leaf likely too broad; split by RPC method families: agents/sessions, config/secrets, channels/devices, logs/status, send/outbound.                    |
| `src/agent-runtime/sandbox`                         | Multiple runtimes/policies/mount/browser bridges likely need subleaves if tests differ.                                                                                    |
| `src/agent-runtime/pi-runner`                       | Embedded runtime, compaction, stream subscription, and extension hooks likely have independent ladders.                                                                    |
| `src/agent-runtime/skills`                          | Skill discovery/install/workspace snapshots/plugin-skill wiring likely independent.                                                                                        |
| `src/shared-misc-runtime-support/shared-primitives` | Broad catch-all; split only after GitNexus/CRG shows distinct risk centers.                                                                                                |
| `apps/macos/app-sources`                            | Native app source surface is likely too broad; split by connection/settings, gateway control, UI/state, logs/diagnostics if tests differ.                                  |
| `ui/web-ui/components`                              | Likely broad; split provider/channel settings vs generic components if UI checks differ.                                                                                   |
| `scripts/packaging/root-scripts`                    | Root automation scripts may need command-family leaves if validation differs.                                                                                              |
| `docs/mintlify`                                     | Already has many child leaves; remaining partial docs leaves should usually verify as leaf docs checks, not split by every page unless generated/render ownership differs. |

Split candidates are not automatic refactors. Each later goal must confirm with MODULE/leaf docs, GitNexus, code-review-graph, and available tests before creating new leaf docs.

## Ultragoal execution queue

| Goal   | Module slice                    | Stop condition                                                                                                                                                                                                      |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `G001` | Baseline/current-state audit    | This artifact plus `leaf-status.json`; no verified promotions.                                                                                                                                                      |
| `G002` | src agent-runtime remaining     | `src/agent-runtime/runtime/{command-entrypoint,session-scope,command-session-store,cli-runner,context-subagents}` plus `sandbox/`, `pi-runner/`, `skills/`, `schema/`; do not repeat verified `runtime/acp-spawn/`. |
| `G003` | src reply/gateway/CLI           | `src/reply-orchestration/**`, `src/gateway-api-surface/**`, `src/cli-commands/**`; split `gateway/server-methods` by RPC families before retrying its exception.                                                    |
| `G004` | src channel/plugin/infra/config | `src/channel-abstraction/**`, `src/plugin-runtime-sdk/**`, `src/infra-outbound-delivery/**`, `src/config-secrets-security/**`; keep `plugin-sdk/api-drift` exception unless standard command passes.                |
| `G005` | src capabilities/shared         | `src/capability-modules/{browser,memory,media,media-understanding,context-engine,cron,tts}` plus `src/shared-misc-runtime-support/**`; do not repeat verified ACP subtree.                                          |
| `G006` | extensions                      | Provider/channel/tool/media/memory/auth/skill plugin leaves; one plugin is normally one leaf, split only large plugin internals with distinct test ladders.                                                         |
| `G007` | apps/ui                         | `apps/**` and `ui/**`; split `macos/app-sources` and `ui/web-ui/components` if source/test surfaces are too broad for one validation ladder.                                                                        |
| `G008` | docs/scripts                    | `docs/**` and `scripts/**`; run docs/generated baseline checks and script-family checks; exception credentialed/release-only actions.                                                                               |
| `G009` | packages/test-infra             | `packages/**` and `test-infra/**`; keep or resolve mocks exception with standard validation evidence.                                                                                                               |
| `G010` | Final audit                     | All active leaves verified or explicit exceptioned-deep-partial; link/coverage/product-source-diff checks and verifier approval.                                                                                    |

## G001 completion audit

- [x] Current state parsed from MODULE/leaf-index files.
- [x] Already completed ACP and acp-spawn waves preserved and excluded from repeat work.
- [x] Remaining module queue written.
- [x] Oversized/split-candidate leaves listed for later goal verification.
- [x] Product source diff guard recorded as `0`.
- [x] Verifier approval passed.
