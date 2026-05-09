# Final Cross-Module Audit

Coverage: `complete-with-exceptions`
Freshness: 2026-05-09 final audit
Goal: `G010-final-cross-module-audit`

## Scope

This audit closes the current `.omx/ultragoal` handoff for the impact-map only. It does not modify product source. It preserves the already completed ACP and ACP-spawn verified waves and reviews the whole active impact-map for residual silent coverage gaps.

Boundaries came from:

- `.planning/STATE.md`
- `.planning/impact-map/MODULE-INDEX.md`
- `.planning/impact-map/COVERAGE-ROADMAP.md`
- All active `.planning/impact-map/**/leaf-index.md` files
- Existing wave evidence under `.planning/impact-map/evidence/**`

## Leaf split decision

No new leaf split was needed in this final audit. The only residual non-final labels were already split child leaves or stale aggregate rows:

- `src/agent-runtime/sandbox/filesystem-bridge/path-safety/`
- `src/agent-runtime/sandbox/workspace-browser-ssh/`
- `src/agent-runtime/pi-runner/provider-params-streams/`
- `src/agent-runtime/skills/install-refresh/`
- stale aggregate rows in `src/leaf-index.md` and `src/agent-runtime/leaf-index.md`

The first three are now explicit `exceptioned-deep-partial`; `skills/install-refresh/` is now `verified` because its targeted final command passed. Stale aggregate `deep-partial`/`partial` rows were synchronized to `exceptioned-deep-partial` or `verified` according to child evidence.

## Coverage audit result

`logs/final-map-audit-r2.log`:

- `leaf_rows=302`
- `verified=125`
- `exceptioned-deep-partial=177`
- `stub=0`, `partial=0`, `deep-partial=0`, empty coverage rows `0`
- Required final leaf card packets are present.
- Relative links resolve for `.planning/impact-map/**/*.md`.

## GitNexus evidence

MCP GitNexus was used first; equivalent CLI query/context logs are recorded in `logs/gitnexus-query-context.log` for auditability:

- `query("agent runtime sandbox filesystem bridge pi runner provider params streams skills install refresh reply orchestration gateway API CLI commands")` returned no process rows for the cross-module wording, so symbol context/impact was used for concrete risk centers.
- `context(SandboxFsPathGuard)` found the filesystem path safety class and its constructor caller from `src/agents/sandbox/fs-bridge.ts`.
- `context(installSkill)` found gateway and onboarding callers plus installer/download/fallback dependencies.
- MCP `impact` and `detect_changes` returned `user cancelled MCP tool call` in this runtime, so CLI fallback was recorded instead of pretending success.

CLI fallback impact evidence is in `logs/gitnexus-fallback-impact.log`:

- `SandboxFsPathGuard`: LOW upstream impact, direct sandbox filesystem bridge constructor caller.
- `runEmbeddedPiAgent`: CRITICAL upstream impact with reply, plugin, agent, model, hook, and voice-call-adjacent callers; this supports keeping provider params/streams exceptioned when its targeted tests fail.
- `installSkill`: bounded gateway/onboarding install callers; final targeted install/refresh tests passed, supporting promotion to `verified`.
- Reply, gateway, and CLI representative impact commands were attempted for the stale aggregate rows; the existing G003 evidence remains authoritative for their exceptioned child decisions.

GitNexus detect-changes exception:

- MCP `detect_changes(scope=all)` returned `user cancelled MCP tool call`.
- `npx gitnexus detect-changes --repo openclaw --scope all` returned `Error: Git diff failed: spawnSync git EPERM` while exiting 0; recorded in `logs/gitnexus-detect-changes.log`.
- Because GitNexus detect-changes was unavailable, this audit uses `code-review-graph detect-changes`, product-source diff, and leaf/card/static checks as the completion evidence instead of claiming a GitNexus detect pass.

## code-review-graph evidence

- `code-review-graph status` passed: 80,930 nodes, 732,204 edges, 8,574 files, last updated `2026-05-08T11:31:24`, built at commit `f99ef11b272b`.
- `code-review-graph detect-changes` passed with 726 changed files, 0 changed functions/classes, 0 affected flows, 0 test gaps, and overall risk score `0.00`.

Raw logs:

- `logs/code-review-graph-status.log`
- `logs/code-review-graph-detect-changes.log`

## Targeted validation

| Command log                        | Result                                                                                                                                            | Coverage decision                                                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `logs/path-safety.log`             | FAIL/TIMEOUT: command timed out at 260s; wrapper reported base code 1 after 258.8s with no retained Vitest failure detail.                        | `path-safety/` remains explicit `exceptioned-deep-partial`.                                                                |
| `logs/workspace-browser-ssh.log`   | PASS: non-Docker workspace/browser/SSH targeted command exited 0 in 7.7s.                                                                         | Leaf remains `exceptioned-deep-partial` because Docker/container/browser runtime smoke is unavailable in this environment. |
| `logs/provider-params-streams.log` | FAIL: provider params/stream wrapper targeted command exited 1 after 159.7s with wrapper failure artifacts and no retained Vitest failure detail. | `provider-params-streams/` remains explicit `exceptioned-deep-partial`.                                                    |
| `logs/skills-install-refresh.log`  | PASS: installer/download/fallback/filter/frontmatter/refresh targeted command exited 0 in 9.7s.                                                   | `install-refresh/` promoted to `verified`.                                                                                 |
| `logs/docs-check.log`              | FAIL/ENV: docs formatting passed; `pnpm dlx markdownlint-cli2` failed on restricted network/cache (`EPERM`, then `ENOENT`).                       | Existing docs exceptions remain explicit.                                                                                  |
| `logs/package-check.log`           | TIMEOUT/ENV: `pnpm release:openclaw:npm:check` timed out at 180s.                                                                                 | Existing package/release exceptions remain explicit.                                                                       |
| `logs/build-check.log`             | TIMEOUT: `pnpm build` reached `canvas:a2ui:bundle` and timed out at 260s before completing build.                                                 | Build is not claimed verified; existing build/package exceptions remain explicit.                                          |

## Static and product-source checks

Passing checks:

- `git diff --check -- .planning` passed; see `logs/diff-check-r3.log`.
- Full planning markdown formatting passed across 1,131 files after formatting-only cleanup; see `logs/oxfmt-planning-all-r3.log`.
- Final leaf/card/link audit passed; see `logs/final-map-audit-r3.log`.
- Product source diff check passed: `git diff --exit-code -- src apps extensions packages scripts docs package.json pnpm-lock.yaml`; see `logs/product-source-diff-r2.log`, `logs/product-source-diff.log`, and `logs/product-source-diff-names.log`.

Non-product WIP outside this goal remains in `.gitignore` and `AGENTS.md`; it is recorded in `logs/non-planning-diff-names.log` and was not modified for this goal.

## Coverage writeback

Updated ledgers:

- `.planning/STATE.md`
- `.planning/impact-map/MODULE-INDEX.md`
- `.planning/impact-map/COVERAGE-ROADMAP.md`
- `.planning/impact-map/src/leaf-index.md`
- `.planning/impact-map/src/agent-runtime/leaf-index.md`
- `.planning/impact-map/src/agent-runtime/sandbox/leaf-index.md`
- `.planning/impact-map/src/agent-runtime/sandbox/filesystem-bridge/leaf-index.md`
- `.planning/impact-map/src/agent-runtime/pi-runner/leaf-index.md`
- `.planning/impact-map/src/agent-runtime/skills/leaf-index.md`
- Residual leaf card packets for `path-safety/`, `workspace-browser-ssh/`, `provider-params-streams/`, and `install-refresh/`

## Approval

APPROVED after native architect review and verifier re-check.

- Architect approval: approved boundary coherence, no further split requirement, preservation of ACP/acp-spawn waves, and explicit exception mapping.
- Verifier approval: approved final leaf counts, raw command exits, code-review-graph detect evidence, GitNexus detect exception handling, full planning formatting (`logs/oxfmt-planning-all-r3.log`), final map audit (`logs/final-map-audit-r3.log`), and product-source diff 0 for product surfaces.
