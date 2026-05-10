# Root Scripts

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for top-level scripts under `scripts/` that are not filed into a dedicated subdirectory.

## Observed facts

- 158 top-level script files were observed directly under `scripts/` during Wave 4 inspection.
- Sample files:
  - `scripts/build-docs-list.mjs`
  - `scripts/generate-config-doc-baseline.ts`
  - `scripts/openclaw-npm-release-check.ts`
  - `scripts/package-mac-app.sh`
  - `scripts/run-node.mjs`
  - `scripts/ui.js`
  - `scripts/write-cli-compat.ts`
- Root `package.json` entrypoints fan directly into this leaf for build, docs, release, runtime, and test flows, including `build`, `check`, `check:docs`, `config:docs:check`, `config:docs:gen`, `plugin-sdk:api:check`, `plugin-sdk:api:gen`, `release:check`, `test`, `ui:build`, and `docs:list`.
- Wave 4 grouped top-level scripts into build/generation, release/publish, install/runtime, test/check, and docs/maintenance families by filename inspection.

## Incoming dependencies

- Build/check/test/release/docs flows usually enter from root `package.json` scripts, direct shell invocation, or neighboring wrappers.
- Many root scripts also import shared helpers from `scripts/lib/**`.

## Outgoing dependencies

- Downstream impact spans packaging, docs generation, release guards, runtime launchers, smoke harnesses, and maintenance tooling.
- Because this leaf is the catch-all for top-level wrappers, blast radius is often broader than the edited file suggests.

## Risk triggers

- Renaming scripts without updating root package-script wrappers or docs examples.
- Changing helper semantics that multiple wrappers or CI flows assume.
- Treating a top-level script as isolated when it actually shares `scripts/lib/**` helpers with other build/test/release paths.

## Validation status

Wave 4 did not execute packaging/release/install/live environment actions for this leaf. Coverage is based on repo-native inspection of script files, wrapper references, and root package-script wiring.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `197` (新增 101，修改 80，重命名/移动 2，删除 14).
- Target-existing changed paths listed here: `183`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `14`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `Makefile`
- `fix2.py`
- `scripts/AGENTS.md`
- `scripts/CLAUDE.md`
- `scripts/anthropic-prompt-probe.ts`
- `scripts/audit-seams.mjs`
- `scripts/bench-cli-startup.ts`
- `scripts/bench-gateway-startup.ts`
- `scripts/bench-model.ts`
- `scripts/bench-test-changed.mjs`
- `scripts/build-all.mjs`
- `scripts/bundle-a2ui.mjs`
- `... 另有 171 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
