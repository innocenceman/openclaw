# Test Config and Runner

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Leaf module for `package.json`, `vitest*.config.*`, `test/setup.ts`, `test/global-setup.ts`, `test/non-isolated-runner.ts`, and test-runner manifest checks.

## Boundary

Vitest profile selection, setup/global setup, serial/non-isolated runner behavior, and test wrapper configuration.

## Evidence

Repo-native path inspection of the relevant `test/**`, package script, and fixture/helper roots. No broad test suite was run for this documentation-only wave.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-infra-config-runner.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; profile/runner tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

## 2026-05-09 G009 targeted validation

Decision: `verified` retained.

Reason: fresh G009 runner/profile targeted validation passed. Evidence: `.planning/impact-map/evidence/packages-test-infra-verified-wave-2026-05-09/PACKAGES-TEST-INFRA-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `build-ci-tests`.
- Risk: `medium`.
- Compatibility: `compatible`.
- Changed paths in this leaf: `122` (删除 14，新增 52，修改 52，重命名/移动 4).
- Target-existing changed paths listed here: `105`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `17`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `.agents/skills/openclaw-ghsa-maintainer/SKILL.md`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-qa-testing/agents/openai.yaml`
- `.agents/skills/openclaw-release-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/scripts/heapsnapshot-delta.mjs`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `... 另有 93 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `build-ci-tests`
- Risk: `medium`
- Compatibility: `compatible`
- Coverage: `fallback`
- Changed paths in diff: `159`
- Target-existing changed paths reflected here: `117`
- Deleted or renamed-away paths omitted from active impact-map: `42`

### Target-version changed paths

- `.agents/skills/clawsweeper/SKILL.md`
- `.agents/skills/clawsweeper/agents/openai.yaml`
- `.agents/skills/crabbox/SKILL.md`
- `.agents/skills/discord-clawd/SKILL.md`
- `.agents/skills/discord-clawd/agents/openai.yaml`
- `.agents/skills/gitcrawl/SKILL.md`
- `.agents/skills/gitcrawl/agents/openai.yaml`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md`
- `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-release-maintainer/SKILL.md`
- `.agents/skills/openclaw-small-bugfix-sweep/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/openclaw-testing/SKILL.md`
- `.agents/skills/openclaw-testing/agents/openai.yaml`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.crabbox.yaml`
- `.dockerignore`
- `.env.example`
- `.github/CODEOWNERS`
- `.github/actionlint.yaml`
- `.github/actions/docker-e2e-plan/action.yml`
- `.github/actions/setup-node-env/action.yml`
- `.github/codeql/codeql-actions-critical-security.yml`
- `.github/codeql/codeql-agent-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-android-critical-security.yml`
- `.github/codeql/codeql-channel-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-channel-runtime-boundary-critical-security.yml`
- `.github/codeql/codeql-config-boundary-critical-quality.yml`
- `.github/codeql/codeql-core-auth-secrets-critical-quality.yml`
- `.github/codeql/codeql-core-auth-secrets-critical-security.yml`
- `.github/codeql/codeql-gateway-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-macos-critical-security.yml`
- `.github/codeql/codeql-mcp-process-runtime-boundary-critical-quality.yml`
- `.github/codeql/codeql-mcp-process-tool-boundary-critical-security.yml`
- … plus 77 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
