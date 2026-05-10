# G008 Docs and Scripts Verified Wave

Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks
Status: `complete-with-exceptions`
Scope: `docs/`, `scripts/`, and adjacent check-only package/release validation entrypoints.

## Summary

G008 evaluated documentation and automation leaves without editing product source. Existing leaves were already split narrowly enough for this wave: docs are separated by Mintlify category, generated baselines, and provider/channel settings docs sync; scripts are separated by packaging/helper families and release/versioning. No new leaf split was needed.

Coverage decision:

- `docs/generated-baselines/config-docs/` is `verified` because `pnpm config:docs:check`, `pnpm check:base-config-schema`, and the config doc-baseline tests passed.
- `docs/generated-baselines/bundled-plugin-metadata/` is `verified` because `pnpm check:bundled-plugin-metadata` and bundled metadata tests passed.
- Remaining docs and scripts leaves are `exceptioned-deep-partial`, not `verified`, because at least one standard validation in their evidence ladder is unavailable or fails in this environment: `pnpm lint:docs` cannot fetch `markdownlint-cli2`; standard `pnpm plugin-sdk:api:check` OOMs without a high-memory Node option; `pnpm release:openclaw:npm:check` correctly fails outside a release tag and also hits the known Discord runtime-dependency staging failure; `pnpm check:no-conflict-markers` hits sandbox `spawnSync git EPERM`.

## Boundary and split decision

Input ledgers reviewed:

- `.planning/STATE.md`
- `.planning/impact-map/MODULE-INDEX.md`
- `.planning/impact-map/docs/README.md`
- `.planning/impact-map/docs/leaf-index.md`
- `.planning/impact-map/docs/mintlify/leaf-index.md`
- `.planning/impact-map/docs/generated-baselines/leaf-index.md`
- `.planning/impact-map/scripts/README.md`
- `.planning/impact-map/scripts/leaf-index.md`
- `.planning/impact-map/scripts/packaging/leaf-index.md`
- `.planning/impact-map/scripts/release-versioning/leaf-index.md`

Decision: no new leaf split. `docs/mintlify/` already decomposes public docs by category and generated locale/control-plane paths; `docs/generated-baselines/` already separates config docs, Plugin SDK API, and bundled plugin metadata; `scripts/packaging/` already separates root scripts, lib helpers, docs-i18n, e2e, Docker, pre-commit, shell helpers, and residual cluster/live helpers; `scripts/release-versioning/` already separates app versions, CLI package version, and release docs.

## GitNexus evidence

Recorded in `logs/gitnexus-evidence.md`.

Highlights:

- `auditDocsLinks` is a standalone docs audit entrypoint called by `scripts/docs-link-audit.mjs` and depends on route normalization, inline-code stripping, generated-translation filtering, and nav-page collection helpers.
- `check-docs-i18n-glossary.mjs` main is a standalone glossary audit entrypoint over changed docs, glossary sources, and extracted terms.
- `writeConfigDocBaselineStatefile` is called by `scripts/generate-config-doc-baseline.ts` and `src/config/doc-baseline.integration.test.ts`.
- `collectBundledPluginMetadata` is exercised by `src/plugins/bundled-plugin-metadata.test.ts` and feeds bundled metadata rendering.
- `stageBundledPluginRuntimeDeps` is called by `scripts/runtime-postbuild.mjs` and is the release/package staging risk center.
- `collectPackUnpackedSizeErrors` is called by `scripts/release-check.ts` and `test/release-check.test.ts`.

Exception: GitNexus `impact(...)` returned `user cancelled MCP tool call` immediately for tested targets, so this wave recorded a Cypher caller-query fallback instead of pretending a successful `impact` report existed.

## code-review-graph evidence

Logs:

- `logs/crg-status.log`
- `logs/crg-docs-scripts-diff.log`
- `logs/code-review-graph-boundaries.log`

`code-review-graph status` reported 80,930 nodes, 732,204 edges, 8,574 files, `Last updated: 2026-05-08T11:31:24`, built at commit `f99ef11b272b`. `git diff --name-only f99ef11b272b -- docs scripts package.json pnpm-lock.yaml` returned empty, so the graph is fresh for this bounded docs/scripts/product-source slice. The wiki excerpts identify a small `docs-underline` community and a large `scripts-resolve` community, which supports keeping docs JS, generated baseline scripts, packaging helpers, and release checks as separate impact-map leaves.

## Validation commands

| Command                                                                                                                                                                                                                                                                                                                                               | Result                                                                                                   | Evidence                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `pnpm config:docs:check`                                                                                                                                                                                                                                                                                                                              | PASS                                                                                                     | `logs/config-docs-check.log`             |
| `pnpm check:base-config-schema`                                                                                                                                                                                                                                                                                                                       | PASS                                                                                                     | `logs/check-base-config-schema.log`      |
| `pnpm check:bundled-plugin-metadata`                                                                                                                                                                                                                                                                                                                  | PASS                                                                                                     | `logs/bundled-plugin-metadata.log`       |
| `pnpm plugin-sdk:check-exports`                                                                                                                                                                                                                                                                                                                       | PASS                                                                                                     | `logs/plugin-sdk-check-exports.log`      |
| `pnpm docs:check-links`                                                                                                                                                                                                                                                                                                                               | PASS, 2,233 internal links checked, 0 broken                                                             | `logs/docs-check-links.log`              |
| `pnpm docs:check-i18n-glossary`                                                                                                                                                                                                                                                                                                                       | PASS                                                                                                     | `logs/docs-check-i18n-glossary.log`      |
| `pnpm format:docs:check`                                                                                                                                                                                                                                                                                                                              | PASS, 680 files                                                                                          | `logs/format-docs-check.log`             |
| `pnpm lint:docs`                                                                                                                                                                                                                                                                                                                                      | EXCEPTION, network/cache failure fetching `markdownlint-cli2` via `pnpm dlx`                             | `logs/lint-docs.log`                     |
| `pnpm plugin-sdk:api:check`                                                                                                                                                                                                                                                                                                                           | EXCEPTION, Node heap OOM exit 134                                                                        | `logs/plugin-sdk-api-check.log`          |
| `NODE_OPTIONS=--max-old-space-size=8192 pnpm plugin-sdk:api:check`                                                                                                                                                                                                                                                                                    | PASS                                                                                                     | `logs/plugin-sdk-api-check-node8192.log` |
| `pnpm test -- src/scripts/docs-link-audit.test.ts src/config/doc-baseline.test.ts src/config/doc-baseline.integration.test.ts src/plugins/bundled-plugin-metadata.test.ts src/plugins/copy-bundled-plugin-metadata.test.ts test/scripts/stage-bundled-plugin-runtime-deps.test.ts test/release-check.test.ts test/openclaw-npm-release-check.test.ts` | PASS, wrapper completed 8 filters                                                                        | `logs/docs-scripts-targeted-tests.log`   |
| `pnpm release:openclaw:npm:check`                                                                                                                                                                                                                                                                                                                     | EXCEPTION, correctly fails without release tag and hits known Discord runtime-dependency staging failure | `logs/release-openclaw-npm-check.log`    |
| `pnpm check:no-conflict-markers`                                                                                                                                                                                                                                                                                                                      | EXCEPTION, sandbox `spawnSync git EPERM` in child script                                                 | `logs/no-conflict-markers.log`           |

## Explicit exceptions

- `MDLINT-DLX-NETWORK`: `pnpm lint:docs` uses `pnpm dlx markdownlint-cli2`; restricted network/proxy setup returns `EPERM` and pnpm also reports a cache mkdir ENOENT under `~/.cache/pnpm/dlx`.
- `PLUGIN-SDK-API-STANDARD-OOM`: the standard Plugin SDK API baseline check OOMs at the default heap. The high-memory rerun passes and confirms the checked-in baseline is current.
- `RELEASE-CHECK-NON-RELEASE-ENV`: the OpenClaw npm release check is intentionally release-tag-gated and fails with missing tag/version-date diagnostics in this non-release execution. Its npm pack dry run also reaches the known Discord runtime-dependency staging failure.
- `NO-CONFLICT-MARKERS-GIT-EPERM`: the check script failed while spawning `git ls-files -z` under this sandbox, despite the child output including the tracked-file list.
- `NO-LIVE-RELEASE-PUBLISH`: no release, publish, package upload, device, simulator, Docker daemon, Kubernetes, Podman, or systemd live action was run because those are outside this goal's safe local/check-only scope.

## Coverage updates

- `docs/` aggregate: `exceptioned-deep-partial`.
- `docs/mintlify/` aggregate and category leaves: `exceptioned-deep-partial` because link/glossary/format checks passed but markdownlint and Mintlify render were not available.
- `docs/generated-baselines/config-docs/`: `verified`.
- `docs/generated-baselines/bundled-plugin-metadata/`: `verified`.
- `docs/generated-baselines/plugin-sdk-api/`: `exceptioned-deep-partial` because standard API-check OOM remains explicit, despite high-memory pass.
- `docs/provider-channel-settings-docs-sync/`: `exceptioned-deep-partial`; docs links passed, but no dedicated cross-surface provider/channel parity checker exists for a full verified claim.
- `scripts/` aggregate and all packaging/release-versioning leaves: `exceptioned-deep-partial`; targeted tests and several checks passed, but release/package/live-system validations have explicit non-release or environment exceptions.

## Product source diff audit

`git diff --name-only -- src apps extensions packages scripts docs package.json pnpm-lock.yaml` returned empty before planning edits and after validation. Product source diff is `0` for this goal.

## Evidence audit

- All validation commands above have log files under `logs/`.
- Coverage labels under `.planning/impact-map/docs` and `.planning/impact-map/scripts` were scanned after updates: no `partial` or `deep-partial` labels remain in those subtrees.
- Link/card consistency was checked by scanning Markdown links in `.planning/impact-map/docs` and `.planning/impact-map/scripts`; unresolved relative links: `0`.
- `.planning` diff whitespace check passed.
- `.planning` Markdown formatting check passed after oxfmt fixed table alignment in the touched planning docs.

## Architect approval

APPROVED for exceptioned completion. The existing docs/scripts decomposition is appropriate for this goal: further splits would duplicate already-separated Mintlify categories, generated-baseline flows, packaging helpers, and release/versioning leaves. The residual risk is validation availability, not leaf ownership ambiguity.

## Verifier approval

APPROVED with explicit exceptions. The goal's check-only proof is sufficient to promote two generated-baseline leaves to `verified` and to mark the rest `exceptioned-deep-partial`. No product source was changed, no ACP/acp-spawn work was repeated, and failed commands are recorded as exceptions rather than over-promoted.
