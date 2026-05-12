# test-infra/profiles-and-suites/root-tests

## 1. 功能结论

**修改**：release speed up focused release reruns、use latest kitchen sink canary、plugins update kitchen sink prerelease canary version、add slack onboarding channel smoke；**迁移/重构**：插件 SDK test runtime/contracts；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`tests`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：tests-only、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 46、修改 57、删除 2、重命名 1

## 3. 功能级详细差异

### 修复 clean up orphaned child processes

修复 clean up orphaned child processes

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 repair release validation checks

修复 repair release validation checks

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 update keep plugin install runtime aliases stable

修复 update：keep plugin install runtime aliases stable

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 release recover Windows packaged update no-restart timeout

修改 release：recover Windows packaged update no-restart timeout

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 release speed up focused release reruns

修改 release：speed up focused release reruns

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 add slack onboarding channel smoke

测试覆盖 add slack onboarding channel smoke

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 package cover stale source plugin shadows

测试覆盖 package：cover stale source plugin shadows

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 plugins update kitchen sink prerelease canary version

测试覆盖 plugins：update kitchen sink prerelease canary version

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 use latest kitchen sink canary

测试覆盖 use latest kitchen sink canary

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin npm package manifest regression/contract coverage、oxlint config regression/contract coverage、vitest extensions config regression/contract coverage、vitest projects config regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 plugin npm runtime build regression/contract coverage、build all regression/contract coverage、bundled plugin build entries regression/contract coverage、docker all scheduler regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 architecture smells regression/contract coverage、cli json stdout.e2e regression/contract coverage、extension import boundaries regression/contract coverage、extension test boundary regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bundled plugin staged runtime deps regression/contract coverage`（`test/scripts/bundled-plugin-staged-runtime-deps.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `stage bundled plugin runtime deps regression/contract coverage`（`test/scripts/stage-bundled-plugin-runtime-deps.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`node builtin mocks regression/contract coverage` 路径（`test/helpers/node-builtin-mocks.test.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 architecture smells regression/contract coverage、cli json stdout.e2e regression/contract coverage、extension import boundaries regression/contract coverage、extension test boundary regression/contract coverage、gateway.multi.e2e regression/contract coverage、git hooks pre commit regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

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
- Impact-map dir: `.planning/impact-map/test-infra/profiles-and-suites/root-tests`
- Changed path count: `106`
- Status counts: `新增 46、修改 57、删除 2、重命名 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `106` files, `+12758` / `-2846`

### 归纳依据

- 主要落点：tests/contracts、configuration/schema、gateway runtime、session/state handling、image generation、provider catalog、mobile app runtime。
- 新增或暴露的关键符号包括：`CHANNEL_CONTRACT_TEST_HELPERS_PREFIX`, `BUNDLED_PLUGIN_RESOLVER_TEST_FILES`, `BROAD_PUBLIC_SOURCE_ARTIFACT_BASENAMES`, `findRelativeSrcImports`, `collectBundledPluginIds`, `getLineNumber`, `findRealBroadSourceApiResolverReferences`, `DEFAULT_LIVE_IMAGE_GENERATION_TIMEOUT_MS`, `LIVE_IMAGE_GENERATION_TIMEOUT_MS`, `resolvePositiveIntegerEnv`。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：ci(release): speed up focused release reruns；test: use latest kitchen sink canary；test(plugins): update kitchen sink prerelease canary version；test: add slack onboarding channel smoke；fix: repair release validation checks；fix: clean up orphaned child processes；Harden Codex harness control surfaces；test(package): cover stale source plugin shadows

### Dimension evidence

- `maintenance-修复-clean-up-orphaned-child-processes` / 修复 clean up orphaned child processes:
  - source: `path` [M] `test/scripts/bench-gateway-startup.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/lint-suppressions.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/managed-child-process.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/parallels-npm-update-smoke.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/plugin-update-unchanged-docker.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/upgrade-survivor-baselines.test.ts` — semantic cue
- `maintenance-修复-repair-release-validation-checks` / 修复 repair release validation checks:
  - source: `path` [M] `test/openclaw-npm-release-check.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-clawhub-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-release.test.ts` — semantic cue
  - source: `path` [M] `test/release-check.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/openclaw-cross-os-release-checks.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/openclaw-cross-os-release-workflow.test.ts` — semantic cue
- `runtime-behavior-修复-update-keep-plugin-install-runtime-aliases-s` / 修复 update keep plugin install runtime aliases stable:
  - source: `path` [M] `test/image-generation.runtime.live.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-clawhub-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-package-manifest.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-runtime-build.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/bundled-plugin-build-entries.test.ts` — semantic cue
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `test/scripts/codex-app-server-protocol-source.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/rtt-harness.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/test-live-codex-harness-docker.test.ts` — semantic cue
- `integration-build-release-修改-release-recover-Windows-packaged-update-no-r` / 修改 release recover Windows packaged update no-restart timeout:
  - source: `path` [M] `test/openclaw-npm-release-check.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-clawhub-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-release.test.ts` — semantic cue
  - source: `path` [M] `test/release-check.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/openclaw-cross-os-release-checks.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/openclaw-cross-os-release-workflow.test.ts` — semantic cue
- `maintenance-修改-release-speed-up-focused-release-reruns` / 修改 release speed up focused release reruns:
  - source: `path` [M] `test/openclaw-npm-release-check.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-clawhub-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-release.test.ts` — semantic cue
  - source: `path` [M] `test/release-check.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/bench-gateway-startup.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/lint-suppressions.test.ts` — semantic cue
- `tests-docs-测试覆盖-add-slack-onboarding-channel-smoke` / 测试覆盖 add slack onboarding channel smoke:
  - source: `path` [M] `test/official-channel-catalog.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/parallels-npm-update-smoke.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/parallels-smoke-model.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/release-beta-smoke.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/run-additional-boundary-checks.test.ts` — semantic cue
- `tests-docs-测试覆盖-package-cover-stale-source-plugin-shadows` / 测试覆盖 package cover stale source plugin shadows:
  - source: `path` [M] `test/plugin-clawhub-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-package-manifest.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-release.test.ts` — semantic cue
  - source: `path` [M] `test/plugin-npm-runtime-build.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/bundled-plugin-build-entries.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/bundled-plugin-staged-runtime-deps.test.ts` — semantic cue
- `tests-docs-测试覆盖-plugins-update-kitchen-sink-prerelease-can` / 测试覆盖 plugins update kitchen sink prerelease canary version:
  - source: `path` [M] `test/scripts/ios-version.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/parallels-npm-update-smoke.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/plugin-prerelease-test-plan.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/plugin-update-unchanged-docker.test.ts` — semantic cue
  - source: `path` [M] `test/scripts/postinstall-bundled-plugins.test.ts` — semantic cue
- `tests-docs-测试覆盖-use-latest-kitchen-sink-canary` / 测试覆盖 use latest kitchen sink canary:
  - source: `path` [M] `test/scripts/check-deadcode-unused-files.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `test/architecture-smells.test.ts` — semantic cue
  - source: `path` [M] `test/cli-json-stdout.e2e.test.ts` — semantic cue
  - source: `path` [M] `test/extension-import-boundaries.test.ts` — semantic cue
  - source: `path` [M] `test/extension-test-boundary.test.ts` — semantic cue
  - source: `path` [M] `test/gateway.multi.e2e.test.ts` — semantic cue
  - source: `path` [M] `test/git-hooks-pre-commit.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `test/plugin-npm-package-manifest.test.ts` — contract evidence
  - source: `path` [M] `test/scripts/oxlint-config.test.ts` — contract evidence
  - source: `path` [M] `test/vitest-extensions-config.test.ts` — contract evidence
  - source: `path` [M] `test/vitest-projects-config.test.ts` — contract evidence
  - source: `path` [M] `test/vitest-scoped-config.test.ts` — contract evidence
  - source: `path` [M] `test/vitest-unit-config.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `test/plugin-npm-runtime-build.test.ts` — build/release evidence
  - source: `path` [M] `test/scripts/build-all.test.ts` — build/release evidence
  - source: `path` [M] `test/scripts/bundled-plugin-build-entries.test.ts` — build/release evidence
  - source: `path` [M] `test/scripts/docker-all-scheduler.test.ts` — build/release evidence
  - source: `path` [M] `test/scripts/docker-build-helper.test.ts` — build/release evidence
  - source: `path` [M] `test/scripts/docker-e2e-plan.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `test/architecture-smells.test.ts` — test evidence
  - source: `path` [M] `test/cli-json-stdout.e2e.test.ts` — test evidence
  - source: `path` [M] `test/extension-import-boundaries.test.ts` — test evidence
  - source: `path` [M] `test/extension-test-boundary.test.ts` — test evidence
  - source: `path` [M] `test/gateway.multi.e2e.test.ts` — test evidence
  - source: `path` [M] `test/git-hooks-pre-commit.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`
  - source: `path` [D] `test/scripts/stage-bundled-plugin-runtime-deps.test.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `test/helpers/node-builtin-mocks.test.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `test/helpers/openclaw-test-instance.test.ts`
  - source: `path` [A] `test/helpers/stt-live-audio.test.ts`
  - source: `path` [A] `test/plugin-npm-package-manifest.test.ts`
  - source: `path` [A] `test/plugin-npm-runtime-build.test.ts`
  - source: `path` [A] `test/scripts/barnacle-auto-response.test.ts`
  - source: `path` [A] `test/scripts/bench-gateway-startup.test.ts`

### 路径证据

- 新增 `test/helpers/openclaw-test-instance.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/helpers/stt-live-audio.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/plugin-npm-package-manifest.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/plugin-npm-runtime-build.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/barnacle-auto-response.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/bench-gateway-startup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/blacksmith-testbox-runner.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/blacksmith-testbox-state.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/check-changelog-attributions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/check-cli-bootstrap-imports.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/check-deadcode-unused-files.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `test/scripts/check-extension-wildcard-reexports.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/architecture-smells.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/cli-json-stdout.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/extension-import-boundaries.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/extension-test-boundary.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/gateway.multi.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/git-hooks-pre-commit.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/image-generation.runtime.live.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `test/npm-publish-plan.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/official-channel-catalog.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `test/openclaw-launcher.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/openclaw-npm-postpublish-verify.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/openclaw-npm-release-check.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `test/scripts/bundled-plugin-staged-runtime-deps.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/scripts/stage-bundled-plugin-runtime-deps.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `test/helpers/node-builtin-mocks.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 79 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/profiles-and-suites/root-tests` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/profiles-and-suites/root-tests/change-to-test.md` 的验证建议。
