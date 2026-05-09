# Coverage Roadmap

Coverage: `partial`

This roadmap controls the progressive whole-repo impact-map program. It keeps OpenClaw coverage broad enough that every future file change can be placed somewhere, while preventing shallow notes from being mistaken for verified impact knowledge.

For the operational file-change workflow, use [`CHANGE-IMPACT-WORKFLOW.md`](CHANGE-IMPACT-WORKFLOW.md). For the verified-wave execution order, use [`../VERIFIED-WAVE-RUNBOOK.md`](../VERIFIED-WAVE-RUNBOOK.md).

## Promotion rules

### `stub` → `partial`

A module can move to `partial` when it has:

- purpose and boundary notes
- submodule taxonomy
- key paths or files to inspect
- first validation strategy
- risk triggers
- explicit evidence gaps

### `partial` → `deep-partial`

A module can move to `deep-partial` when it has:

- leaf-level `README.md`, `file-roles.md`, `code-paths.md`, and `change-to-test.md` cards
- file-role and code-path claims from repo-native structural inspection or recorded fresh tool evidence
- explicit evidence limits saying whether product tests, builds, or graph indexes were not run
- a first validation strategy for common changes

### `deep-partial` → `verified`

A module can move to `verified` only when it has:

- file-role cards checked against current code
- key behavior/code paths mapped to tests or diagnostics
- fresh validation evidence recorded in the module doc
- graph/tool coverage status labeled as fresh, stale, partial, or unavailable when graph/tool evidence is claimed

Graph output alone cannot promote a module to `verified`; the slice boundary, freshness, and validation evidence must be recorded together.

### Exception and demotion rule

If code changes or tool coverage becomes stale, demote `verified` to `deep-partial`, `partial`, or `exceptioned-deep-partial` according to the remaining evidence. If leaf-level file-role/code-path evidence is stale or untrusted, demote to `partial` until fresh evidence is recorded. Use `exceptioned-deep-partial` only when the gap is explicit, bounded, and linked to evidence.

## Whole-repo roadmap

| Top-level area | Owner lane                                   | Impact-map directory | Current state                                                                       | Target state                                                                  | First validation                                                                                   | Remaining exception class                                                                               |
| -------------- | -------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/`         | Lane A: core runtime/routing/gateway/CLI     | `src/`               | `exceptioned-deep-partial`; all active rows verified or exceptioned                 | keep active rows either `verified` or explicitly exceptioned                  | repo-native inspection completed; targeted tests named in `src/leaf-index.md` and final leaf cards | product tests/builds/graph indexes were not rerun during final closeout                                 |
| `extensions/`  | Lane B: plugin ecosystem and channel plugins | `extensions/`        | `exceptioned-deep-partial`; tool/capability family `verified`                       | retain explicit exceptions for provider/channel/media/auth/skill/runtime gaps | G006 targeted package/plugin checks and bounded tests recorded                                     | Google network failures, voice-call/channel/skill timeouts, no-test leaves, and Discord staging failure |
| `apps/`        | Lane C: native apps                          | `apps/`              | `exceptioned-deep-partial`; split platform/settings leaves                          | retain platform exceptions until prerequisites exist                          | split broad app/settings leaves; attempted Android tests/lint/assemble                             | Java/JAVA_HOME, Xcode, simulator, and device prerequisites unavailable                                  |
| `ui/`          | Lane C: web UI                               | `ui/`                | `exceptioned-deep-partial`; split UI/settings leaves                                | retain explicit test exceptions; keep build/static checks passing             | split broad web UI/settings leaves; ran UI build/static and attempted UI tests                     | `pnpm --dir ui test` exits 1 despite 535 passing tests                                                  |
| `docs/`        | Lane D: docs/release/tooling                 | `docs/`              | `exceptioned-deep-partial`; two generated-baseline leaves `verified`                | retain docs exceptions until lint/render/parity checks pass                   | docs links/glossary/format plus generated baseline checks                                          | markdownlint dlx, Mintlify render, Plugin SDK standard heap, and parity checks exceptioned              |
| `scripts/`     | Lane D: automation                           | `scripts/`           | `exceptioned-deep-partial`; targeted script/release tests passed                    | retain automation exceptions until release/package/live-system checks pass    | targeted script tests, release check, package metadata checks                                      | non-release tag, Discord staging, sandbox child-git, and live system actions exceptioned                |
| `packages/`    | Lane E: shared packages                      | `packages/`          | `exceptioned-deep-partial`; package leaves have bin/release exceptions              | retain package exceptions until legacy bin/export paths and release pass      | package release tests, import shims, npm pack dry-runs, bin/export audit                           | declared legacy `./bin/*.js` targets are missing; standard npm release check timed out                  |
| `test/`        | Lane E: test infrastructure                  | `test-infra/`        | `exceptioned-deep-partial`; runner/root/helper leaves pass with explicit exceptions | retain test-infra exceptions until failing standard commands pass             | targeted runner/root/script/helper/fixture/mock validations                                        | `test-scripts`, `fixtures`, and `mocks` standard commands exit 1                                        |

## Closeout status

The final cross-module audit closed the active impact-map coverage program for the current `.planning` tree: every active `leaf-index.md` row is now either `verified` or `exceptioned-deep-partial`. No active row should remain `stub`, empty, plain `partial`, or plain `deep-partial`.

Historical wave notes used `partial` and `deep-partial` as intermediate states. Those older labels are retained only inside evidence packets and git history; they are not the current active coverage state.

Final closeout evidence: [`evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`](evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md).

## Historical wave ledger

| Gate          | Scope closed                                                                                                    | Current result                                                                                                                    | Evidence                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wave 0        | roadmap setup, repo-native/manual-first policy, graph freshness policy                                          | complete historical setup                                                                                                         | this roadmap and `.planning/STATE.md`                                                                                                                                                      |
| Wave 1 + 1R   | `src/` hierarchy, residue sweep, and later child verified waves                                                 | active `src/**/leaf-index.md` rows are `verified` or `exceptioned-deep-partial`                                                   | `evidence/src-*`, `evidence/p0-verified-wave-2026-05-08/`, `evidence/final-cross-module-audit-2026-05-09/`                                                                                 |
| Wave 2 + 2R   | `extensions/` plugin boundaries, tool/capability leaves, providers/auth/memory/media/skill/channel/package rows | extension rows are `verified` or `exceptioned-deep-partial`; support-only paths remain out of taxonomy                            | [`evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`](evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md)                     |
| Wave 3 + G007 | `apps/` and `ui/` platform/settings/UI leaves                                                                   | broad app/UI leaves are split; all app/UI rows are explicit exceptions until platform or failing-test prerequisites are available | [`evidence/apps-ui-verified-wave-2026-05-09/APP-UI-VERIFIED-WAVE.md`](evidence/apps-ui-verified-wave-2026-05-09/APP-UI-VERIFIED-WAVE.md)                                                   |
| Wave 4 + G008 | `docs/` and `scripts/` docs-sync, generated baseline, release, and automation leaves                            | rows are `verified` or `exceptioned-deep-partial`; no active scaffold-only docs/scripts coverage remains                          | [`evidence/docs-scripts-verified-wave-2026-05-09/DOCS-SCRIPTS-VERIFIED-WAVE.md`](evidence/docs-scripts-verified-wave-2026-05-09/DOCS-SCRIPTS-VERIFIED-WAVE.md)                             |
| Wave 5 + G009 | `packages/` and `test-infra/` shared package, runner, root-test, script, fixture, helper, and mock leaves       | package/test-infra rows are `verified` or `exceptioned-deep-partial`; failing standard commands stay explicit exceptions          | [`evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`](evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md) |

## Current exception lanes

Use the remaining exceptions as validation targets, not as new requirements:

- `src/`: standard product tests/builds/graph refresh were not rerun during closeout; some bounded leaves still have environment or command failures recorded in evidence.
- `extensions/`: provider/channel/media/auth/skill/runtime rows keep explicit exceptions for network, timeout, missing-test, and Discord staging failures.
- `apps/` and `ui/`: platform prerequisites are unavailable on this Linux host, and UI Vitest still has an unhandled mock/loopback failure despite broad passing coverage.
- `docs/` and `scripts/`: docs render/lint parity, standard Plugin SDK heap behavior, release/package staging, sandbox child-git, and live-system actions remain exceptioned.
- `packages/` and `test-infra/`: legacy package bin/export targets, standard release checks, and selected script/fixture/mock commands remain exceptioned.

## Tool policy for Phase 2

- Repo-native inspection is the default evidence source for moving from `stub` to `partial`.
- code-review-graph may be used after a module boundary exists, preferably with `status` or bounded/incremental commands.
- GitNexus may be used only for a bounded slice that has been indexed successfully.
- graphify remains disabled until `.planning/config.json` ownership is explicit.
- No graph output can promote a module to `verified` unless its slice boundary and freshness are recorded.

## Hierarchical detail rule

Detailed module expansion should use submodule directories instead of only flat markdown files. Preferred shape: `<large-module>/<submodule>/README.md`, `file-roles.md`, `code-paths.md`, and `change-to-test.md`.

## Maintenance rule

Leaf cards and evidence packets remain the source of detailed proof. Keep this roadmap as the concise control plane: promotion rules, current repo-wide state, exception classes, and links to evidence. Avoid copying long command logs or wave narratives back into this file.
