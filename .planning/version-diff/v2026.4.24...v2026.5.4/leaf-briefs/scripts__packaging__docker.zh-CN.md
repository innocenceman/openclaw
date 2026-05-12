# scripts/packaging/docker

## 1. 功能结论

**新增**：docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup；**修改**：clean up root clutter、release prefer GPT-5.5 smoke models、package bundled runtime deps helper、shard release validation hotspots；**迁移/重构**：simplify plugin dependency handling；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：修改 6、重命名 3

## 3. 功能级详细差异

### 修复 ci stabilize full release validation

修复 ci：stabilize full release validation

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docker route local provider setup to host gateway

修复 docker：route local provider setup to host gateway

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 package bundled runtime deps helper

修复 package bundled runtime deps helper

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 release ship dist import helper

修复 release：ship dist import helper

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 shard release validation hotspots

修改 shard release validation hotspots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Do…

新增 docker：add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 docker isolate installer smoke sessions

测试覆盖 docker：isolate installer smoke sessions

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 release prefer GPT-5.5 smoke models

测试覆盖 release：prefer GPT-5.5 smoke models

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 clean up root clutter

维护调整 clean up root clutter

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Dockerfile、run，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 迁移/重命名变化

`Dockerfile` 路径（`scripts/docker/sandbox/Dockerfile`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Dockerfile` 路径（`scripts/docker/sandbox/Dockerfile.browser`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`Dockerfile` 路径（`scripts/docker/sandbox/Dockerfile.common`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/docker`
- Changed path count: `9`
- Status counts: `修改 6、重命名 3`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `9` files, `+390` / `-102`

### 归纳依据

- 主要落点：implementation。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：chore: clean up root clutter；test(release): prefer GPT-5.5 smoke models；refactor: simplify plugin dependency handling；fix: package bundled runtime deps helper；ci: shard release validation hotspots；fix(release): ship dist import helper；fix(ci): stabilize full release validation；feat(docker): add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup

### Dimension evidence

- `maintenance-修复-ci-stabilize-full-release-validation` / 修复 ci stabilize full release validation:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.browser`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.common`
- `maintenance-修复-docker-route-local-provider-setup-to-host-ga` / 修复 docker route local provider setup to host gateway:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/sandbox/Dockerfile` — semantic cue
- `integration-build-release-修复-package-bundled-runtime-deps-helper` / 修复 package bundled runtime deps helper:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.browser`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.common`
- `maintenance-修复-release-ship-dist-import-helper` / 修复 release ship dist import helper:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.browser`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.common`
- `maintenance-修改-shard-release-validation-hotspots` / 修改 shard release validation hotspots:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile`
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.browser`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.common`
- `maintenance-新增-docker-add-OPENCLAW-SKIP-ONBOARDING-env-to-s` / 新增 docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Do…:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/sandbox/Dockerfile` — semantic cue
- `tests-docs-测试覆盖-docker-isolate-installer-smoke-sessions` / 测试覆盖 docker isolate installer smoke sessions:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/sandbox/Dockerfile` — semantic cue
- `tests-docs-测试覆盖-release-prefer-GPT-5-5-smoke-models` / 测试覆盖 release prefer GPT-5.5 smoke models:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — semantic cue
- `maintenance-维护调整-clean-up-root-clutter` / 维护调整 clean up root clutter:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/setup.sh` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — semantic cue
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — semantic cue
  - source: `path` [M] `scripts/docker/sandbox/Dockerfile` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `scripts/docker/cleanup-smoke/Dockerfile` — build/release evidence
  - source: `path` [M] `scripts/docker/install-sh-e2e/Dockerfile` — build/release evidence
  - source: `path` [M] `scripts/docker/install-sh-e2e/run.sh` — build/release evidence
  - source: `path` [M] `scripts/docker/install-sh-smoke/Dockerfile` — build/release evidence
  - source: `path` [M] `scripts/docker/install-sh-smoke/run.sh` — build/release evidence
  - source: `path` [M] `scripts/docker/sandbox/Dockerfile` — build/release evidence
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.browser`
  - source: `path` [R] `scripts/docker/sandbox/Dockerfile.common`

### 路径证据

- 修改 `scripts/docker/cleanup-smoke/Dockerfile`：调整 Dockerfile（implementation）。
- 修改 `scripts/docker/install-sh-e2e/Dockerfile`：调整 Dockerfile（implementation）。
- 修改 `scripts/docker/install-sh-e2e/run.sh`：调整 run（implementation）。
- 修改 `scripts/docker/install-sh-smoke/Dockerfile`：调整 Dockerfile（implementation）。
- 修改 `scripts/docker/install-sh-smoke/run.sh`：调整 run（implementation）。
- 修改 `scripts/docker/setup.sh`：调整 setup（implementation）。
- 重命名 `scripts/docker/sandbox/Dockerfile`：调整 Dockerfile（implementation）。
- 重命名 `scripts/docker/sandbox/Dockerfile.browser`：调整 Dockerfile（implementation）。
- 重命名 `scripts/docker/sandbox/Dockerfile.common`：调整 Dockerfile（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/docker` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/docker/change-to-test.md` 的验证建议。
