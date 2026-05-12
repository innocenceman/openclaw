# scripts/release-versioning/cli-package-version

## 1. 功能结论

**新增**：webchat add server-side dictation、support alpha releases；**修改**：accept externalized discord voice fallback、align postpublish verification with external plugins、reduce WebUI session latency churn thanks @BunsDev、clean up plugin dependency leftovers；**迁移/重构**：simplify plugin dependency handling；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 依赖/版本调整 clean up plugin dependency leftovers

依赖/版本调整 clean up plugin dependency leftovers

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 修复 align postpublish verification with external plugins

修复 align postpublish verification with external plugins

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 修复 build stamp runtime postbuild artifacts

修复 build：stamp runtime postbuild artifacts

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 修复 package bundled runtime deps helper

修复 package bundled runtime deps helper

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 新增 support alpha releases

新增 support alpha releases

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 新增 webchat add server-side dictation

新增 webchat：add server-side dictation

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 remove private QA package compat shims

构建/发布调整 remove private QA package compat shims

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 accept externalized discord voice fallback

测试覆盖 accept externalized discord voice fallback

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 openclaw npm postpublish verify、openclaw npm release check，需要按契约边界审查。

- 验证提示：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/cli-package-version`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `2` files, `+93` / `-64`

### 归纳依据

- 主要落点：implementation。
- 新增或暴露的关键符号包括：`MAX_INSTALLED_ROOT_DIST_JS_BYTES`, `OPTIONAL_OR_EXTERNALIZED_RUNTIME_IMPORTS`, `collectInstalledBundledExtensionIds`, `collectInstalledBundledRuntimeSidecarPaths`。
- 建议优先验证：优先运行 `pnpm release:openclaw:npm:check`；`pnpm build`。
- 相关 commit 主题：test: accept externalized discord voice fallback；fix: align postpublish verification with external plugins；fix: reduce WebUI session latency churn thanks @BunsDev；feat(webchat): add server-side dictation；feat: support alpha releases；chore: clean up plugin dependency leftovers；refactor: simplify plugin dependency handling；fix: package bundled runtime deps helper

### Dimension evidence

- `maintenance-依赖-版本调整-clean-up-plugin-dependency-leftovers` / 依赖/版本调整 clean up plugin dependency leftovers:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts` — semantic cue
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts` — semantic cue
- `maintenance-修复-align-postpublish-verification-with-external` / 修复 align postpublish verification with external plugins:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts` — semantic cue
- `user-visible-修复-build-stamp-runtime-postbuild-artifacts` / 修复 build stamp runtime postbuild artifacts:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `integration-build-release-修复-package-bundled-runtime-deps-helper` / 修复 package bundled runtime deps helper:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `user-visible-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `maintenance-新增-support-alpha-releases` / 新增 support alpha releases:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `maintenance-新增-webchat-add-server-side-dictation` / 新增 webchat add server-side dictation:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `integration-build-release-构建-发布调整-remove-private-QA-package-compat-shims` / 构建/发布调整 remove private QA package compat shims:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts` — semantic cue
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts` — semantic cue
- `tests-docs-测试覆盖-accept-externalized-discord-voice-fallback` / 测试覆盖 accept externalized discord voice fallback:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts`
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts`
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts` — semantic cue
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `scripts/openclaw-npm-postpublish-verify.ts` — contract evidence
  - source: `path` [M] `scripts/openclaw-npm-release-check.ts` — contract evidence

### 路径证据

- 修改 `scripts/openclaw-npm-postpublish-verify.ts`：调整 openclaw npm postpublish verify（implementation）。
- 修改 `scripts/openclaw-npm-release-check.ts`：调整 openclaw npm release check（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/release-versioning/cli-package-version` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/release-versioning/cli-package-version/change-to-test.md` 的验证建议。
