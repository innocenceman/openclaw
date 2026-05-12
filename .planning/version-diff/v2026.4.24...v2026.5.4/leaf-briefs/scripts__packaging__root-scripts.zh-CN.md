# scripts/packaging/root-scripts

## 1. 功能结论

**新增**：add gateway stall diagnostics；**修改**：explain missing git during plugin install、release speed up focused release reruns、sync Codex app-server protocol、gateway route watch trace spam to artifacts；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 61、修改 97、删除 5

## 3. 功能级详细差异

### 修复 docker prune external plugin dist

修复 docker：prune external plugin dist

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 enable sync io tracing in gateway watch

修复 enable sync io tracing in gateway watch

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 explain missing git during plugin install

修复 explain missing git during plugin install

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway quiet benchmark watch output

修复 gateway：quiet benchmark watch output

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gateway route watch trace spam to artifacts

修复 gateway：route watch trace spam to artifacts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 preserve gateway watch trace overrides

修复 preserve gateway watch trace overrides

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 sync Codex app-server protocol

修复 sync Codex app-server protocol

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 release speed up focused release reruns

修改 release：speed up focused release reruns

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 add gateway stall diagnostics

新增 add gateway stall diagnostics

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 check deprecated internal config api、check no runtime action load config、generate bundled channel config metadata、live docker normalize config，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 build all、build stamp.d、build stamp、check docker e2e boundaries，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 README docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 install sh version regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `Makefile`（`Makefile`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `fix2`（`fix2.py`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `stage bundled plugin runtime deps`（`scripts/stage-bundled-plugin-runtime-deps.mjs`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `test built bundled runtime deps`（`scripts/test-built-bundled-runtime-deps.mjs`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 Makefile、fix2、bench cli startup、bench gateway startup、blacksmith testbox runner、blacksmith testbox state；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/root-scripts`
- Changed path count: `163`
- Status counts: `新增 61、修改 97、删除 5`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `163` files, `+19593` / `-4026`

### 归纳依据

- 主要落点：implementation、gateway runtime、configuration/schema、provider catalog、session/state handling、mobile app runtime、auth/pairing/security behavior、CLI/command behavior。
- 新增或暴露的关键符号包括：`tailLines`, `hasHelpFlag`, `printUsage`, `formatMb`, `formatRatio`, `formatMemoryStats`, `formatRatioStats`, `getStartupTraceStat`, `writePluginFixtures`, `hasGatewayReadyLog`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix: explain missing git during plugin install；ci(release): speed up focused release reruns；fix: sync Codex app-server protocol；fix(gateway): route watch trace spam to artifacts；fix(gateway): quiet benchmark watch output；fix: preserve gateway watch trace overrides；fix: enable sync io tracing in gateway watch；feat: add gateway stall diagnostics

### Dimension evidence

- `maintenance-修复-docker-prune-external-plugin-dist` / 修复 docker prune external plugin dist:
  - source: `path` [M] `scripts/check-docker-e2e-boundaries.mjs` — semantic cue
  - source: `path` [M] `scripts/check-extension-plugin-sdk-boundary.mjs` — semantic cue
  - source: `path` [M] `scripts/check-no-monolithic-plugin-sdk-entry-imports.ts` — semantic cue
  - source: `path` [M] `scripts/check-package-dist-imports.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-npm-runtime-builds.mjs` — semantic cue
- `maintenance-修复-enable-sync-io-tracing-in-gateway-watch` / 修复 enable sync io tracing in gateway watch:
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-changelog-attributions.mjs` — semantic cue
  - source: `path` [M] `scripts/check-deprecated-internal-config-api.mjs` — semantic cue
  - source: `path` [M] `scripts/check-extension-plugin-sdk-boundary.mjs` — semantic cue
  - source: `path` [M] `scripts/check-extension-wildcard-reexports.mjs` — semantic cue
  - source: `path` [M] `scripts/check-gateway-cpu-scenarios.mjs` — semantic cue
- `maintenance-修复-explain-missing-git-during-plugin-install` / 修复 explain missing git during plugin install:
  - source: `path` [M] `scripts/check-extension-plugin-sdk-boundary.mjs` — semantic cue
  - source: `path` [M] `scripts/check-no-monolithic-plugin-sdk-entry-imports.ts` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-npm-runtime-builds.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-sdk-subpath-exports.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-sdk-wildcard-reexports.mjs` — semantic cue
- `user-visible-修复-gateway-quiet-benchmark-watch-output` / 修复 gateway quiet benchmark watch output:
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-gateway-cpu-scenarios.mjs` — semantic cue
  - source: `path` [M] `scripts/check-gateway-watch-regression.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.d.mts` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.mjs` — semantic cue
- `maintenance-修复-gateway-route-watch-trace-spam-to-artifacts` / 修复 gateway route watch trace spam to artifacts:
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-codex-app-server-protocol.ts` — semantic cue
  - source: `path` [M] `scripts/check-gateway-cpu-scenarios.mjs` — semantic cue
  - source: `path` [M] `scripts/check-gateway-watch-regression.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.d.mts` — semantic cue
- `maintenance-修复-preserve-gateway-watch-trace-overrides` / 修复 preserve gateway watch trace overrides:
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-gateway-cpu-scenarios.mjs` — semantic cue
  - source: `path` [M] `scripts/check-gateway-watch-regression.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.d.mts` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.mjs` — semantic cue
- `maintenance-修复-sync-Codex-app-server-protocol` / 修复 sync Codex app-server protocol:
  - source: `path` [M] `scripts/check-codex-app-server-protocol.ts` — semantic cue
  - source: `path` [M] `scripts/docs-sync-publish.mjs` — semantic cue
  - source: `path` [M] `scripts/prepare-codex-ci-config.ts` — semantic cue
  - source: `path` [M] `scripts/protocol-gen-swift.ts` — semantic cue
  - source: `path` [M] `scripts/sync-codex-app-server-protocol.ts` — semantic cue
  - source: `path` [M] `scripts/sync-codex-model-prompt-fixture.ts` — semantic cue
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `scripts/check-codex-app-server-protocol.ts` — semantic cue
  - source: `path` [M] `scripts/control-ui-i18n.ts` — semantic cue
  - source: `path` [M] `scripts/prepare-codex-ci-config.ts` — semantic cue
  - source: `path` [M] `scripts/sync-codex-app-server-protocol.ts` — semantic cue
  - source: `path` [M] `scripts/sync-codex-model-prompt-fixture.ts` — semantic cue
  - source: `path` [M] `scripts/test-live-codex-harness-docker.sh` — semantic cue
- `maintenance-修改-release-speed-up-focused-release-reruns` / 修改 release speed up focused release reruns:
  - source: `path` [M] `scripts/bench-cli-startup.ts` — semantic cue
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-duplicates.mjs` — semantic cue
  - source: `path` [M] `scripts/full-release-validation-at-sha.mjs` — semantic cue
  - source: `path` [M] `scripts/github/run-openclaw-cross-os-release-checks.sh` — semantic cue
  - source: `path` [M] `scripts/openclaw-cross-os-release-checks.ts` — semantic cue
- `maintenance-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [M] `scripts/bench-gateway-startup.ts` — semantic cue
  - source: `path` [M] `scripts/check-gateway-cpu-scenarios.mjs` — semantic cue
  - source: `path` [M] `scripts/check-gateway-watch-regression.mjs` — semantic cue
  - source: `path` [M] `scripts/check-plugin-gateway-gauntlet.mjs` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.d.mts` — semantic cue
  - source: `path` [M] `scripts/gateway-watch-tmux.mjs` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `scripts/check-deprecated-internal-config-api.mjs` — contract evidence
  - source: `path` [M] `scripts/check-no-runtime-action-load-config.mjs` — contract evidence
  - source: `path` [M] `scripts/generate-bundled-channel-config-metadata.ts` — contract evidence
  - source: `path` [M] `scripts/live-docker-normalize-config.ts` — contract evidence
  - source: `path` [M] `scripts/load-channel-config-surface.ts` — contract evidence
  - source: `path` [M] `scripts/prepare-codex-ci-config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `scripts/build-all.mjs` — build/release evidence
  - source: `path` [M] `scripts/build-stamp.d.mts` — build/release evidence
  - source: `path` [M] `scripts/build-stamp.mjs` — build/release evidence
  - source: `path` [M] `scripts/check-docker-e2e-boundaries.mjs` — build/release evidence
  - source: `path` [M] `scripts/check-plugin-npm-runtime-builds.mjs` — build/release evidence
  - source: `path` [M] `scripts/check-workflows.mjs` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `scripts/clawdock/README.md` — docs evidence
  - source: `path` [M] `src/install-sh-version.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `Makefile`
  - source: `path` [D] `fix2.py`
  - source: `path` [D] `scripts/stage-bundled-plugin-runtime-deps.mjs`
  - source: `path` [D] `scripts/test-built-bundled-runtime-deps.mjs`
  - source: `path` [D] `scripts/write-npm-update-compat-sidecars.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `scripts/blacksmith-testbox-runner.mjs`
  - source: `path` [A] `scripts/blacksmith-testbox-state.mjs`
  - source: `path` [A] `scripts/check-changelog-attributions.mjs`
  - source: `path` [A] `scripts/check-cli-bootstrap-imports.mjs`
  - source: `path` [A] `scripts/check-deadcode-unused-files.mjs`
  - source: `path` [A] `scripts/check-deprecated-internal-config-api.mjs`

### 路径证据

- 新增 `scripts/blacksmith-testbox-runner.mjs`：调整 blacksmith testbox runner（implementation）。
- 新增 `scripts/blacksmith-testbox-state.mjs`：调整 blacksmith testbox state（session/state handling）。
- 新增 `scripts/check-changelog-attributions.mjs`：调整 check changelog attributions（implementation）。
- 新增 `scripts/check-cli-bootstrap-imports.mjs`：调整 check cli bootstrap imports（implementation）。
- 新增 `scripts/check-deadcode-unused-files.mjs`：调整 check deadcode unused files（implementation）。
- 新增 `scripts/check-deprecated-internal-config-api.mjs`：调整 check deprecated internal config api（configuration/schema）。
- 新增 `scripts/check-deprecated-jsdoc.mjs`：调整 check deprecated jsdoc（implementation）。
- 新增 `scripts/check-docker-e2e-boundaries.mjs`：调整 check docker e2e boundaries（implementation）。
- 新增 `scripts/check-duplicates.mjs`：调整 check duplicates（implementation）。
- 新增 `scripts/check-extension-wildcard-reexports.mjs`：调整 check extension wildcard reexports（implementation）。
- 新增 `scripts/check-gateway-cpu-scenarios.mjs`：调整 check gateway cpu scenarios（mobile app runtime）。
- 新增 `scripts/check-no-raw-http2-imports.mjs`：调整 check no raw http2 imports（implementation）。
- 修改 `scripts/bench-cli-startup.ts`：调整 bench cli startup（implementation）。
- 修改 `scripts/bench-gateway-startup.ts`：调整 bench gateway startup（gateway runtime）。
- 修改 `scripts/build-all.mjs`：调整 build all（implementation）。
- 修改 `scripts/build-stamp.d.mts`：调整 build stamp.d（implementation）。
- 修改 `scripts/build-stamp.mjs`：调整 build stamp（implementation）。
- 修改 `scripts/canvas-a2ui-copy.ts`：调整 canvas a2ui copy（implementation）。
- 修改 `scripts/changed-lanes.mjs`：调整 changed lanes（implementation）。
- 修改 `scripts/check-architecture-smells.mjs`：调整 check architecture smells（implementation）。
- 修改 `scripts/check-changed.mjs`：调整 check changed（implementation）。
- 修改 `scripts/check-codex-app-server-protocol.ts`：调整 check codex app server protocol（implementation）。
- 修改 `scripts/check-docs-mdx.mjs`：调整 check docs mdx（implementation）。
- 修改 `scripts/check-extension-plugin-sdk-boundary.mjs`：调整 check extension plugin sdk boundary（implementation）。
- 删除 `Makefile`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `fix2.py`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `scripts/stage-bundled-plugin-runtime-deps.mjs`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `scripts/test-built-bundled-runtime-deps.mjs`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `scripts/write-npm-update-compat-sidecars.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 134 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/root-scripts` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/root-scripts/change-to-test.md` 的验证建议。
