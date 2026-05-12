# Test Config and Runner Change-to-Test

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change                                     | First checks                                                                            | Broader validation                                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Edit files in this leaf                    | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible. |
| Change shared runner/setup/helper behavior | Run direct tests for the helper/runner plus one representative consumer suite.          | Full `pnpm test` before landing if related failures are plausible.                                                            |
| Change fixtures or mocks                   | Run tests that consume the fixture/mock and inspect snapshot/fixture assumptions.       | Add targeted regression tests when a fixture contract changes.                                                                |

## Minimum evidence for `verified`

Do not promote to `verified` until fresh scoped or full test output is recorded.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `122` (删除 14，新增 52，修改 52，重命名/移动 4).
- Target-existing path refs in active map: `105`; deleted/renamed-away refs kept only in transition artifacts: `17`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `compatible`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
