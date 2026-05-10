# Packages and Test Infrastructure Verified Wave

Date: 2026-05-09
Goal: G009-packages-test-infra
Scope: `packages/` and `test-infra/` only. Previously completed ACP and ACP-spawn waves were not repeated.

## Boundary and split decision

The existing leaves are narrow enough for this wave:

- `packages/shared-packages/{clawdbot,moltbot}/` are one package shim each. They contain import-shim, CLI metadata, and rename-notice behavior, but all are validated by the same package-release/pack-adjacent ladder.
- `test-infra/profiles-and-suites/{config-and-runner,root-tests,test-scripts}/` already separates runner/profile behavior from root tests and script tests.
- `test-infra/fixtures-and-helpers/{fixtures,helpers-core,helpers-extensions,mocks}/` already separates static fixtures, core helpers, extension helpers, and external-service mocks.

No additional leaf split was needed. Failed leaves remain `exceptioned-deep-partial`; no false `verified` promotion was made.

## Graph and review evidence

- GitNexus query/context/Cypher fallback evidence: `logs/gitnexus-evidence.md`.
- GitNexus `impact` was attempted for `parseReleaseVersion`, `buildVitestProfileCommand`, and `createMockBaileys`, but the MCP impact tool returned `user cancelled MCP tool call` immediately for each target. Because impact evidence is incomplete, it was not used to promote any failing leaf.
- code-review-graph status/detect evidence: `logs/code-review-graph-status-detect.log`.
  - code-review-graph was built at `f99ef11b272b`; current `HEAD` is newer, but `logs/source-diff-since-crg-build.log` shows zero diff for `packages`, `test`, `scripts`, `package.json`, and `pnpm-lock.yaml` since that build commit.
  - `code-review-graph detect-changes` reported 0 changed functions/classes, 0 affected flows, 0 test gaps, and risk score 0.00 for current planning-only changes.

## Validation results

| Area                        | Command                                                                                                                                                                                          | Exit | Decision                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---: | ---------------------------------------------------------------- |
| Package release tests       | `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`                                                                                              |    0 | package release helpers covered                                  |
| OpenClaw npm release check  | `timeout 120s pnpm release:openclaw:npm:check`                                                                                                                                                   |  124 | exception: standard release check timed out in this sandbox      |
| `clawdbot` pack dry-run     | `npm --cache /tmp/openclaw-g009-npm-cache pack --dry-run --json ./packages/clawdbot`                                                                                                             |    0 | pack listing generated                                           |
| `moltbot` pack dry-run      | `npm --cache /tmp/openclaw-g009-npm-cache pack --dry-run --json ./packages/moltbot`                                                                                                              |    0 | pack listing generated                                           |
| Package import shims        | `node -e "await import('./packages/clawdbot/index.js'); await import('./packages/moltbot/index.js')"`                                                                                            |    0 | import shims load                                                |
| Package bin/export audit    | `node /tmp/openclaw-g009-package-audit.mjs`                                                                                                                                                      |    1 | exception: declared `./bin/*.js` paths are missing               |
| Test config/runner          | `pnpm test -- test/scripts/run-vitest-profile.test.ts test/test-runner-manifest.test.ts`                                                                                                         |    0 | `verified` retained                                              |
| Root tests                  | `pnpm test -- src/entry.test.ts src/dockerfile.test.ts src/docker-build-cache.test.ts src/docker-image-digests.test.ts`                                                                          |    0 | `verified` retained                                              |
| Test scripts aggregate      | `pnpm test -- test/scripts/run-vitest-profile.test.ts test/test-runner-manifest.test.ts test/scripts/test-parallel.test.ts test/scripts/test-report-utils.test.ts`                               |    1 | exception                                                        |
| Test scripts isolation      | `pnpm test -- test/scripts/test-parallel.test.ts`                                                                                                                                                |    1 | `test-scripts/` exception centers on this wrapper test           |
| Test report utils isolation | `pnpm test -- test/scripts/test-report-utils.test.ts`                                                                                                                                            |    0 | adjacent script helper passes                                    |
| Core helpers                | `pnpm test -- src/cli/command-source.test-helpers.test.ts src/channels/plugins/helpers.test.ts src/gateway/http-auth-helpers.test.ts src/infra/archive-helpers.test.ts`                          |    0 | `verified` retained                                              |
| Extension helpers           | `pnpm test -- test/extension-plugin-sdk-boundary.test.ts test/plugin-extension-import-boundary.test.ts extensions/telegram/src/bot.helpers.test.ts extensions/msteams/src/media-helpers.test.ts` |    0 | `verified` retained                                              |
| Fixtures aggregate          | `pnpm test -- src/plugins/bundled-plugin-metadata.test.ts src/plugins/contracts/catalog.contract.test.ts test/scripts/test-extension.test.ts`                                                    |    1 | exception                                                        |
| Fixture adjacent isolation  | `pnpm test -- src/plugins/bundled-plugin-metadata.test.ts` and `pnpm test -- src/plugins/contracts/catalog.contract.test.ts`                                                                     |    0 | plugin metadata/catalog pass                                     |
| Test extension isolation    | `pnpm test -- test/scripts/test-extension.test.ts`                                                                                                                                               |    1 | `fixtures/` exception centers on test-extension wrapper behavior |
| Mocks aggregate             | `pnpm test -- src/gateway/boot.test.ts src/gateway/http-auth-helpers.test.ts src/commands/agent.test.ts`                                                                                         |    1 | known mocks exception remains open                               |
| Agent mock verbose rerun    | `pnpm test -- src/commands/agent.test.ts --reporter verbose`                                                                                                                                     |    1 | wrapper still exits 1 and emits only failure artifacts           |

Raw command logs and rerun artifacts live under `logs/`; `logs/results.tsv` lists the command/log mapping.

## Coverage decisions

- `packages/` and `packages/shared-packages/` become `exceptioned-deep-partial` rather than `verified` because the package import shims and pack dry-runs pass, but package CLI metadata points at missing `bin` files and the standard OpenClaw npm release check timed out.
- `packages/shared-packages/{clawdbot,moltbot}/` become `exceptioned-deep-partial` for the same missing declared bin/export path.
- `test-infra/profiles-and-suites/{config-and-runner,root-tests}/` remain `verified`; `test-scripts/` becomes `exceptioned-deep-partial` because its aggregate and isolated `test/scripts/test-parallel.test.ts` command exit 1.
- `test-infra/fixtures-and-helpers/{helpers-core,helpers-extensions}/` remain `verified`; `fixtures/` becomes `exceptioned-deep-partial` because `test/scripts/test-extension.test.ts` exits 1 while plugin metadata/catalog adjacent checks pass.
- `test-infra/fixtures-and-helpers/mocks/` remains `exceptioned-deep-partial`; the standard mocks command still fails. The rerun confirms the exception is current, not inherited blindly from P0.
- Aggregates `test-infra/`, `profiles-and-suites/`, and `fixtures-and-helpers/` are `exceptioned-deep-partial` until the failing standard commands are fixed and rerun.

## Product source diff

No product source was edited by this wave. The product-source diff audit is `logs/product-source-diff.log` and returned empty for `src apps extensions packages scripts docs package.json pnpm-lock.yaml`.

## Final audit

- Evidence packet exists and all changed coverage labels have a matching evidence note.
- No package/test-infra leaf is marked `verified` unless the fresh targeted command for that leaf passed.
- Known mocks exception was rerun and remains explicit.
- Product source diff is 0.
