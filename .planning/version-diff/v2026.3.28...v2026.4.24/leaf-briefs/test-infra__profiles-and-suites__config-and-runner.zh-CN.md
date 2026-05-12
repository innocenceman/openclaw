# test-infra/profiles-and-suites/config-and-runner

## 一句话结论

config and runner 所属的 Build, CI, scripts, tests and release automation 有 122 个路径变化（新增 52、修改 52、删除 14、重命名 4），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner`
- Changed path count: `122`
- Status counts: `新增 52、修改 52、删除 14、重命名 4`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `122` files, `+16326` / `-6572`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 52、修改 52、删除 14、重命名 4。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `.agents/skills/blacksmith-testbox/SKILL.md`
- `.agents/skills/openclaw-qa-testing/SKILL.md`
- `.agents/skills/openclaw-qa-testing/agents/openai.yaml`
- `.agents/skills/openclaw-secret-scanning-maintainer/SKILL.md`
- `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs`
- `.agents/skills/openclaw-test-performance/SKILL.md`
- `.agents/skills/openclaw-test-performance/agents/openai.yaml`
- `.agents/skills/optimizetests/SKILL.md`
- `.agents/skills/optimizetests/agents/openai.yaml`
- `.agents/skills/tag-duplicate-prs-issues/SKILL.md`
- `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`
- `.github/codex/prompts/docs-agent.md`
- `.github/codex/prompts/docs-mdx-repair.md`
- `.github/codex/prompts/test-performance-agent.md`
- `.github/pr-assets/compaction-checkpoints/sessions-checkpoints-inline.png`
- `.github/pr-assets/compaction-checkpoints/sessions-overview-inline.png`
- `.github/workflows/ci-check-testbox.yml`
- `.github/workflows/control-ui-locale-refresh.yml`
- `.github/workflows/docs-agent.yml`
- `.github/workflows/docs-sync-publish.yml`
- `.github/workflows/docs-translate-trigger-release.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/duplicate-after-merge.yml`
- `.github/workflows/npm-telegram-beta-e2e.yml`
- `.github/workflows/openclaw-cross-os-release-checks-reusable.yml`
- `.github/workflows/openclaw-live-and-e2e-checks-reusable.yml`
- `.github/workflows/openclaw-release-checks.yml`
- `.github/workflows/openclaw-scheduled-live-checks.yml`
- `.github/workflows/parity-gate.yml`
- `.github/workflows/plugin-clawhub-release.yml`
- … 另有 22 个路径，详见 `leaf-impact.json`。

### 修改

- `.agents/skills/openclaw-ghsa-maintainer/SKILL.md`
- `.agents/skills/openclaw-parallels-smoke/SKILL.md`
- `.agents/skills/openclaw-pr-maintainer/SKILL.md`
- `.agents/skills/openclaw-release-maintainer/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/SKILL.md`
- `.agents/skills/openclaw-test-heap-leaks/scripts/heapsnapshot-delta.mjs`
- `.agents/skills/parallels-discord-roundtrip/SKILL.md`
- `.agents/skills/security-triage/SKILL.md`
- `.dockerignore`
- `.env.example`
- `.github/actionlint.yaml`
- `.github/actions/setup-node-env/action.yml`
- `.github/actions/setup-pnpm-store-cache/action.yml`
- `.github/codeql/codeql-javascript-typescript.yml`
- `.github/instructions/copilot.instructions.md`
- `.github/labeler.yml`
- `.github/pull_request_template.md`
- `.github/workflows/auto-response.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/docker-release.yml`
- `.github/workflows/install-smoke.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/macos-release.yml`
- `.github/workflows/openclaw-npm-release.yml`
- `.github/workflows/plugin-npm-release.yml`
- `.github/workflows/sandbox-common-smoke.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/workflow-sanity.yml`
- `.gitignore`
- … 另有 22 个路径，详见 `leaf-impact.json`。

### 删除

- `.agent/workflows/update_clawdbot.md`
- `.agents/maintainers.md`
- `.github/workflows/ci-bun.yml`
- `.pi/prompts/landpr.md`
- `.pi/prompts/reviewpr.md`
- `vitest.channel-paths.mjs`
- `vitest.contracts.config.ts`
- `vitest.e2e.config.ts`
- `vitest.extensions.config.ts`
- `vitest.live.config.ts`
- `vitest.pattern-file.ts`
- `vitest.scoped-config.ts`
- `vitest.unit-paths.mjs`
- `vitest.unit.config.ts`

### 重命名

- `.codex`
- `vitest.channels.config.ts`
- `vitest.gateway.config.ts`
- `vitest.performance-config.ts`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：Edit files in this leaf | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/config-and-runner` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner/change-to-test.md` 的验证建议。
