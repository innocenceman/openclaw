# Test Config and Runner Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Test invocation path

1. A developer or CI path invokes a `pnpm test*` script or a scoped `pnpm test -- <filter>` command.
2. Test wrapper/profile configuration selects setup, isolation, and target files.
3. This leaf supplies either runner/config behavior, root tests, scripts tests, helpers, mocks, or fixtures.
4. Failures here can indicate product regressions, guardrail drift, or broken test infrastructure.

## Change impact path

1. Identify whether the changed file is runner/config, a test file, a helper, a mock, or a fixture.
2. Run the narrowest matching test/filter first.
3. Broaden to `pnpm test` or the documented profile only when shared behavior is affected.

## Evidence limits

The behavior path is based on path/script inspection and repo conventions; no test output was generated in this wave.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `122` changed path(s) to this final leaf. `105` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 14, 'A': 52, 'M': 52, 'R': 4}`.

- `.agents/skills/blacksmith-testbox/SKILL.md`
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
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/optimizetests/SKILL.md`
- `.agents/skills/optimizetests/agents/openai.yaml`
- `.agents/skills/parallels-discord-roundtrip/SKILL.md`
- `.agents/skills/security-triage/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.codex`
- `.dockerignore`
- `.env.example`
- `.github/actionlint.yaml`
- `.github/actions/setup-node-env/action.yml`
- `.github/actions/setup-pnpm-store-cache/action.yml`
- `.github/codeql/codeql-javascript-typescript.yml`
- `.github/codex/prompts/docs-agent.md`
- `.github/codex/prompts/docs-mdx-repair.md`
- `.github/codex/prompts/test-performance-agent.md`
- `.github/instructions/copilot.instructions.md`
- `... 另有 75 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
