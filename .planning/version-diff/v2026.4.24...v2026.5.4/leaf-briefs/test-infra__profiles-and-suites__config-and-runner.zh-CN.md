# test-infra/profiles-and-suites/config-and-runner

## 1. 功能结论

**修改**：parallelize release publish workflows、build route externalized plugin entry chunks、build route externalized plugin chunks、release speed up focused release reruns；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 59、修改 57、删除 34、重命名 9

## 3. 功能级详细差异

### 修复 build route externalized plugin chunks

修复 build：route externalized plugin chunks

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 build route externalized plugin entry chunks

修复 build：route externalized plugin entry chunks

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 plugins include json5 in memory runtime deps

修复 plugins：include json5 in memory runtime deps

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 release refresh plugin sdk api gate

修复 release：refresh plugin sdk api gate

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 parallelize release publish workflows

修改 parallelize release publish workflows

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 release speed up focused release reruns

修改 release：speed up focused release reruns

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 构建/发布调整 bump axios override

构建/发布调整 bump axios override

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 add slack onboarding channel smoke

测试覆盖 add slack onboarding channel smoke

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 live run cache probe with node

测试覆盖 live：run cache probe with node

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 plugins add kitchen sink rpc walk

测试覆盖 plugins：add kitchen sink rpc walk

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 codeql config boundary critical quality、.pre commit config、knip.config、tsconfig.core.projects，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 .dockerignore、CODEOWNERS、actionlint、action，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 SKILL docs、cl docs、is docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 docker build cache regression/contract coverage、docker image digests regression/contract coverage、docker setup.e2e regression/contract coverage、dockerfile regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `SKILL docs`（`.agents/skills/blacksmith-testbox/SKILL.md`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `.codex`（`.codex`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `.detect secrets`（`.detect-secrets.cfg`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `codeql javascript typescript`（`.github/codeql/codeql-javascript-typescript.yml`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`zizmor` 路径（`.github/zizmor.yml`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.markdownlint cli2` 路径（`.markdownlint-cli2.jsonc`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.shellcheckrc` 路径（`.shellcheckrc`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`.swiftformat` 路径（`.swiftformat`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 SKILL docs、openai、.codex、.crabbox、.detect secrets、.dockerignore；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner`
- Changed path count: `159`
- Status counts: `新增 59、修改 57、删除 34、重命名 9`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `159` files, `+16977` / `-18824`

### 归纳依据

- 主要落点：implementation、configuration/schema、docs、agent runtime、auth/pairing/security behavior、session/state handling、image generation、tests/contracts。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：ci: parallelize release publish workflows；fix(build): route externalized plugin entry chunks；fix(build): route externalized plugin chunks；ci(release): speed up focused release reruns；build: bump axios override；test(live): run cache probe with node；fix(release): refresh plugin sdk api gate；test: add slack onboarding channel smoke

### Dimension evidence

- `user-visible-修复-build-route-externalized-plugin-chunks` / 修复 build route externalized plugin chunks:
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-sdk-package-contract-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-sdk-reply-runtime-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-trust-boundary-critical-security.yml` — semantic cue
- `user-visible-修复-build-route-externalized-plugin-entry-chunks` / 修复 build route externalized plugin entry chunks:
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-sdk-package-contract-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-sdk-reply-runtime-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-trust-boundary-critical-security.yml` — semantic cue
- `runtime-behavior-修复-plugins-include-json5-in-memory-runtime-deps` / 修复 plugins include json5 in memory runtime deps:
  - source: `path` [M] `.agents/skills/openclaw-pr-maintainer/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-qa-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-release-maintainer/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-testing/SKILL.md` — semantic cue
- `public-contract-修复-release-refresh-plugin-sdk-api-gate` / 修复 release refresh plugin sdk api gate:
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-release-maintainer/SKILL.md` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-gateway-runtime-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-plugin-sdk-package-contract-critical-quality.yml` — semantic cue
- `maintenance-修改-parallelize-release-publish-workflows` / 修改 parallelize release publish workflows:
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-release-maintainer/SKILL.md` — semantic cue
  - source: `path` [M] `.github/workflows/auto-response.yml` — semantic cue
  - source: `path` [M] `.github/workflows/ci-build-artifacts-testbox.yml` — semantic cue
  - source: `path` [M] `.github/workflows/ci-check-testbox.yml` — semantic cue
- `maintenance-修改-release-speed-up-focused-release-reruns` / 修改 release speed up focused release reruns:
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.agents/skills/openclaw-release-maintainer/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/tag-duplicate-prs-issues/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.github/actions/setup-node-env/action.yml` — semantic cue
- `integration-build-release-构建-发布调整-bump-axios-override` / 构建/发布调整 bump axios override:
  - source: `path` [M] `.agents/skills/blacksmith-testbox/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/clawsweeper/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/clawsweeper/agents/openai.yaml` — semantic cue
  - source: `path` [M] `.agents/skills/crabbox/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/discord-clawd/SKILL.md` — semantic cue
  - source: `path` [M] `.agents/skills/discord-clawd/agents/openai.yaml` — semantic cue
- `tests-docs-测试覆盖-add-slack-onboarding-channel-smoke` / 测试覆盖 add slack onboarding channel smoke:
  - source: `path` [M] `.agents/skills/openclaw-parallels-smoke/SKILL.md` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-channel-runtime-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-channel-runtime-boundary-critical-security.yml` — semantic cue
  - source: `path` [M] `.github/workflows/install-smoke.yml` — semantic cue
  - source: `path` [M] `.github/workflows/mantis-discord-smoke.yml` — semantic cue
  - source: `path` [M] `.github/workflows/sandbox-common-smoke.yml` — semantic cue
- `tests-docs-测试覆盖-live-run-cache-probe-with-node` / 测试覆盖 live run cache probe with node:
  - source: `path` [M] `.github/actions/setup-node-env/action.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-agent-runtime-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-channel-runtime-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-channel-runtime-boundary-critical-security.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-gateway-runtime-boundary-critical-quality.yml` — semantic cue
  - source: `path` [M] `.github/codeql/codeql-mcp-process-runtime-boundary-critical-quality.yml` — semantic cue
- `tests-docs-测试覆盖-plugins-add-kitchen-sink-rpc-walk` / 测试覆盖 plugins add kitchen sink rpc walk:
  - source: `path` [A] `.agents/skills/clawsweeper/SKILL.md`
  - source: `path` [A] `.agents/skills/clawsweeper/agents/openai.yaml`
  - source: `path` [A] `.agents/skills/crabbox/SKILL.md`
  - source: `path` [M] `.agents/skills/openclaw-parallels-smoke/SKILL.md`
  - source: `path` [M] `.agents/skills/openclaw-pr-maintainer/SKILL.md`
  - source: `path` [M] `.agents/skills/openclaw-qa-testing/SKILL.md`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `.github/codeql/codeql-config-boundary-critical-quality.yml` — contract evidence
  - source: `path` [M] `.pre-commit-config.yaml` — contract evidence
  - source: `path` [M] `knip.config.ts` — contract evidence
  - source: `path` [M] `tsconfig.core.projects.json` — contract evidence
  - source: `path` [M] `tsconfig.core.test.agents.json` — contract evidence
  - source: `path` [M] `tsconfig.core.test.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `.dockerignore` — build/release evidence
  - source: `path` [M] `.github/CODEOWNERS` — build/release evidence
  - source: `path` [M] `.github/actionlint.yaml` — build/release evidence
  - source: `path` [M] `.github/actions/docker-e2e-plan/action.yml` — build/release evidence
  - source: `path` [M] `.github/actions/setup-node-env/action.yml` — build/release evidence
  - source: `path` [M] `.github/codeql/codeql-actions-critical-security.yml` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `.agents/skills/blacksmith-testbox/SKILL.md` — docs evidence
  - source: `path` [M] `.agents/skills/clawsweeper/SKILL.md` — docs evidence
  - source: `path` [M] `.agents/skills/crabbox/SKILL.md` — docs evidence
  - source: `path` [M] `.agents/skills/discord-clawd/SKILL.md` — docs evidence
  - source: `path` [M] `.agents/skills/gitcrawl/SKILL.md` — docs evidence
  - source: `path` [M] `.agents/skills/openclaw-parallels-smoke/SKILL.md` — docs evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `.agents/skills/blacksmith-testbox/SKILL.md`
  - source: `path` [D] `.codex`
  - source: `path` [D] `.detect-secrets.cfg`
  - source: `path` [D] `.github/codeql/codeql-javascript-typescript.yml`
  - source: `path` [D] `.github/pr-assets/compaction-checkpoints/sessions-checkpoints-inline.png`
  - source: `path` [D] `.github/pr-assets/compaction-checkpoints/sessions-overview-inline.png`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `.github/zizmor.yml`
  - source: `path` [R] `.markdownlint-cli2.jsonc`
  - source: `path` [R] `.shellcheckrc`
  - source: `path` [R] `.swiftformat`
  - source: `path` [R] `.swiftlint.yml`
  - source: `path` [R] `Dockerfile.sandbox`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `.agents/skills/clawsweeper/SKILL.md`
  - source: `path` [A] `.agents/skills/clawsweeper/agents/openai.yaml`
  - source: `path` [A] `.agents/skills/crabbox/SKILL.md`
  - source: `path` [A] `.agents/skills/discord-clawd/SKILL.md`
  - source: `path` [A] `.agents/skills/discord-clawd/agents/openai.yaml`
  - source: `path` [A] `.agents/skills/gitcrawl/SKILL.md`

### 路径证据

- 新增 `.agents/skills/clawsweeper/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/clawsweeper/agents/openai.yaml`：调整 openai（agent runtime）。
- 新增 `.agents/skills/crabbox/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/discord-clawd/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/discord-clawd/agents/openai.yaml`：调整 openai（agent runtime）。
- 新增 `.agents/skills/gitcrawl/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/gitcrawl/agents/openai.yaml`：调整 openai（agent runtime）。
- 新增 `.agents/skills/openclaw-pre-release-plugin-testing/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/openclaw-pre-release-plugin-testing/agents/openai.yaml`：调整 openai（agent runtime）。
- 新增 `.agents/skills/openclaw-small-bugfix-sweep/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/openclaw-testing/SKILL.md`：调整 SKILL docs（docs）。
- 新增 `.agents/skills/openclaw-testing/agents/openai.yaml`：调整 openai（agent runtime）。
- 修改 `.agents/skills/openclaw-parallels-smoke/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-pr-maintainer/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-qa-testing/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-release-maintainer/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-test-heap-leaks/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-test-performance/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/openclaw-test-performance/agents/openai.yaml`：调整 openai（agent runtime）。
- 修改 `.agents/skills/tag-duplicate-prs-issues/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `.agents/skills/tag-duplicate-prs-issues/agents/openai.yaml`：调整 openai（agent runtime）。
- 修改 `.dockerignore`：调整 .dockerignore（implementation）。
- 修改 `.env.example`：调整 .env（implementation）。
- 修改 `.github/CODEOWNERS`：调整 CODEOWNERS（implementation）。
- 删除 `.agents/skills/blacksmith-testbox/SKILL.md`：移除旧的 docs 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.codex`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.detect-secrets.cfg`：移除旧的 auth/pairing/security behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.github/codeql/codeql-javascript-typescript.yml`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.github/pr-assets/compaction-checkpoints/sessions-checkpoints-inline.png`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.github/pr-assets/compaction-checkpoints/sessions-overview-inline.png`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.github/workflows/parity-gate.yml`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.jscpd.json`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.mailmap`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.npmignore`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.pi/extensions/diff.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `.pi/extensions/files.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `.github/zizmor.yml`：调整 zizmor（implementation）。
- 重命名 `.markdownlint-cli2.jsonc`：调整 .markdownlint cli2（implementation）。
- 重命名 `.shellcheckrc`：调整 .shellcheckrc（implementation）。
- 重命名 `.swiftformat`：调整 .swiftformat（implementation）。
- 重命名 `.swiftlint.yml`：调整 .swiftlint（implementation）。
- 重命名 `Dockerfile.sandbox`：调整 Dockerfile（implementation）。
- 重命名 `Dockerfile.sandbox-browser`：调整 Dockerfile（implementation）。
- 重命名 `Dockerfile.sandbox-common`：调整 Dockerfile（implementation）。
- 重命名 `knip.config.ts`：调整 knip.config（configuration/schema）。
- 其余 114 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/config-and-runner` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/config-and-runner/change-to-test.md` 的验证建议。
