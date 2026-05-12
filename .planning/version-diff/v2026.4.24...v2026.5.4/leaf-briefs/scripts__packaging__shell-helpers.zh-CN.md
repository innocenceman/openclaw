# scripts/packaging/shell-helpers

## 1. 功能结论

**新增**：docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup；**修改**：plugins repair missing clawhub installs、plugins externalize acpx release packages、sandboxing clarify sandbox setup scripts require source checkout、install/docker document compose config dir default fallback；**迁移/重构**：simplify plugin dependency handling；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：文档语义变化、行为调整、集成、构建或发布变化
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 修复 docker keep plugin runtime deps off bind mounts

文档/生成基线同步记录：修复 docker：keep plugin runtime deps off bind mounts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docker route local provider setup to host gateway

文档/生成基线同步记录：修复 docker：route local provider setup to host gateway

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins repair missing clawhub installs

文档/生成基线同步记录：修复 plugins：repair missing clawhub installs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 文档同步 full-page sentence-case sweep across 6 pages

文档/生成基线同步记录：文档同步 full-page sentence-case sweep across 6 pages

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 文档同步 install/docker document compose config dir default fallback

文档/生成基线同步记录：文档同步 install/docker：document compose config dir default fallback

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 文档同步 sandboxing clarify sandbox setup scripts require source checkout

文档/生成基线同步记录：文档同步 sandboxing：clarify sandbox setup scripts require source checkout

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Do…

文档/生成基线同步记录：新增 docker：add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 构建/发布调整 plugins externalize acpx release packages

文档/生成基线同步记录：构建/发布调整 plugins：externalize acpx release packages

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 构建/发布调整 use slim docker runtime

文档/生成基线同步记录：构建/发布调整 use slim docker runtime

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

文档/生成基线同步记录：迁移/重构 simplify plugin dependency handling

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 docker docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/shell-helpers`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `1` files, `+122` / `-18`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(plugins): repair missing clawhub installs；build(plugins): externalize acpx release packages；refactor: simplify plugin dependency handling；docs(sandboxing): clarify sandbox setup scripts require source checkout；docs(install/docker): document compose config dir default fallback；feat(docker): add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Docker setup；fix(docker): keep plugin runtime deps off bind mounts；fix(docker): route local provider setup to host gateway

### Dimension evidence

- `tests-docs-修复-docker-keep-plugin-runtime-deps-off-bind-mou` / 修复 docker keep plugin runtime deps off bind mounts:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-修复-docker-route-local-provider-setup-to-host-ga` / 修复 docker route local provider setup to host gateway:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-修复-plugins-repair-missing-clawhub-installs` / 修复 plugins repair missing clawhub installs:
  - source: `path` [M] `docs/install/docker.md`
- `tests-docs-文档同步-full-page-sentence-case-sweep-across-6-pag` / 文档同步 full-page sentence-case sweep across 6 pages:
  - source: `path` [M] `docs/install/docker.md`
- `tests-docs-文档同步-install-docker-document-compose-config-dir` / 文档同步 install/docker document compose config dir default fallback:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-文档同步-sandboxing-clarify-sandbox-setup-scripts-r` / 文档同步 sandboxing clarify sandbox setup scripts require source checkout:
  - source: `path` [M] `docs/install/docker.md`
- `tests-docs-新增-docker-add-OPENCLAW-SKIP-ONBOARDING-env-to-s` / 新增 docker add OPENCLAW_SKIP_ONBOARDING env to skip onboarding during Do…:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-构建-发布调整-plugins-externalize-acpx-release-packag` / 构建/发布调整 plugins externalize acpx release packages:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-构建-发布调整-use-slim-docker-runtime` / 构建/发布调整 use slim docker runtime:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `docs/install/docker.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/install/docker.md` — docs evidence

### 路径证据

- 修改 `docs/install/docker.md`：调整 docker docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/shell-helpers` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/shell-helpers/change-to-test.md` 的验证建议。
