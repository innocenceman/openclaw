# scripts/packaging/lib

## 1. 功能结论

**修改**：add slack onboarding channel smoke、sync Codex app-server protocol、Harden Codex harness control surfaces、package cover stale source plugin shadows；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、新增能力或入口、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 28、修改 41、删除 1

## 3. 功能级详细差异

### 修复 ci plan openwebui functional image

修复 ci：plan openwebui functional image

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins supplement external catalog contracts

修复 plugins：supplement external catalog contracts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 sync Codex app-server protocol

修复 sync Codex app-server protocol

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 test keep Open WebUI live lane image-free

修复 test：keep Open WebUI live lane image-free

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 test skip Open WebUI in no-live Docker plans

修复 test：skip Open WebUI in no-live Docker plans

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Harden Codex harness control surfaces

修改 Harden Codex harness control surfaces

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 release harden clawhub plugin publish

修改 release：harden clawhub plugin publish

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 add slack onboarding channel smoke

测试覆盖 add slack onboarding channel smoke

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 package cover stale source plugin shadows

测试覆盖 package：cover stale source plugin shadows

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 qa add Slack live transport lane

测试覆盖 qa：add Slack live transport lane

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 config boundary guard.d、config boundary guard、deprecated config api guard.d、deprecated config api guard，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 bundled plugin build entries types.d、bundled plugin build entries、docker build、docker e2e container，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bundled plugin root runtime mirrors`（`scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
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
- Impact-map dir: `.planning/impact-map/scripts/packaging/lib`
- Changed path count: `70`
- Status counts: `新增 28、修改 41、删除 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `70` files, `+6740` / `-645`

### 归纳依据

- 主要落点：implementation、configuration/schema、provider catalog、mobile app runtime、image generation、auth/pairing/security behavior、session/state handling、gateway runtime。
- 新增或暴露的关键符号包括：`consumeStringFlag`, `consumeIntFlag`, `consumeFloatFlag`, `collectRootPackageExcludedExtensionDirs`, `EXCLUDED_CORE_BUNDLED_PLUGIN_DIRS`, `collectPluginSourceEntries`, `collectTopLevelPublicSurfaceEntries`, `RELEASE_ONLY_PLUGIN_SHARDS`, `resolveCommandShardName`, `createAgenticCommandSplitShards`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：test: add slack onboarding channel smoke；fix: sync Codex app-server protocol；Harden Codex harness control surfaces；test(package): cover stale source plugin shadows；ci(release): harden clawhub plugin publish；fix(ci): plan openwebui functional image；fix(test): keep Open WebUI live lane image-free；fix(test): skip Open WebUI in no-live Docker plans

### Dimension evidence

- `user-visible-修复-ci-plan-openwebui-functional-image` / 修复 ci plan openwebui functional image:
  - source: `path` [M] `scripts/lib/ci-node-test-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/docker-e2e-image.sh` — semantic cue
  - source: `path` [M] `scripts/lib/docker-e2e-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/extension-test-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/npm-publish-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/official-external-channel-catalog.json` — semantic cue
- `public-contract-修复-plugins-supplement-external-catalog-contracts` / 修复 plugins supplement external catalog contracts:
  - source: `path` [M] `scripts/lib/official-external-channel-catalog.json` — semantic cue
  - source: `path` [M] `scripts/lib/official-external-plugin-catalog.json` — semantic cue
  - source: `path` [M] `scripts/lib/official-external-provider-catalog.json` — semantic cue
- `maintenance-修复-sync-Codex-app-server-protocol` / 修复 sync Codex app-server protocol:
  - source: `path` [M] `scripts/lib/codex-app-server-protocol-source.ts` — semantic cue
- `user-visible-修复-test-keep-Open-WebUI-live-lane-image-free` / 修复 test keep Open WebUI live lane image-free:
  - source: `path` [M] `scripts/lib/ci-node-test-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/extension-test-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/live-docker-auth.sh` — semantic cue
  - source: `path` [M] `scripts/lib/live-docker-stage.sh` — semantic cue
  - source: `path` [M] `scripts/lib/openclaw-e2e-instance.sh` — semantic cue
  - source: `path` [M] `scripts/lib/openclaw-test-state.mjs` — semantic cue
- `user-visible-修复-test-skip-Open-WebUI-in-no-live-Docker-plans` / 修复 test skip Open WebUI in no-live Docker plans:
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries-types.d.ts` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/ci-node-test-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/docker-build.sh` — semantic cue
  - source: `path` [M] `scripts/lib/docker-e2e-container.sh` — semantic cue
- `maintenance-修改-Harden-Codex-harness-control-surfaces` / 修改 Harden Codex harness control surfaces:
  - source: `path` [M] `scripts/lib/codex-app-server-protocol-source.ts` — semantic cue
  - source: `path` [M] `scripts/lib/rtt-harness.ts` — semantic cue
- `maintenance-修改-release-harden-clawhub-plugin-publish` / 修改 release harden clawhub plugin publish:
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries-types.d.ts` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/npm-publish-plan.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/official-external-plugin-catalog.json` — semantic cue
  - source: `path` [M] `scripts/lib/plugin-clawhub-release.ts` — semantic cue
- `tests-docs-测试覆盖-add-slack-onboarding-channel-smoke` / 测试覆盖 add slack onboarding channel smoke:
  - source: `path` [M] `scripts/lib/official-external-channel-catalog.json` — semantic cue
  - source: `path` [M] `scripts/lib/workspace-bootstrap-smoke.mjs` — semantic cue
- `tests-docs-测试覆盖-package-cover-stale-source-plugin-shadows` / 测试覆盖 package cover stale source plugin shadows:
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries-types.d.ts` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs` — semantic cue
  - source: `path` [M] `scripts/lib/codex-app-server-protocol-source.ts` — semantic cue
  - source: `path` [M] `scripts/lib/docker-e2e-package.sh` — semantic cue
  - source: `path` [M] `scripts/lib/extension-package-boundary.ts` — semantic cue
- `tests-docs-测试覆盖-qa-add-Slack-live-transport-lane` / 测试覆盖 qa add Slack live transport lane:
  - source: `path` [M] `scripts/lib/live-docker-auth.sh` — semantic cue
  - source: `path` [M] `scripts/lib/live-docker-stage.sh` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `scripts/lib/config-boundary-guard.d.mts` — contract evidence
  - source: `path` [M] `scripts/lib/config-boundary-guard.mjs` — contract evidence
  - source: `path` [M] `scripts/lib/deprecated-config-api-guard.d.mts` — contract evidence
  - source: `path` [M] `scripts/lib/deprecated-config-api-guard.mjs` — contract evidence
  - source: `path` [M] `scripts/lib/plugin-npm-package-manifest.mjs` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries-types.d.ts` — build/release evidence
  - source: `path` [M] `scripts/lib/bundled-plugin-build-entries.mjs` — build/release evidence
  - source: `path` [M] `scripts/lib/docker-build.sh` — build/release evidence
  - source: `path` [M] `scripts/lib/docker-e2e-container.sh` — build/release evidence
  - source: `path` [M] `scripts/lib/docker-e2e-image.sh` — build/release evidence
  - source: `path` [M] `scripts/lib/docker-e2e-logs.sh` — build/release evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`

### 路径证据

- 新增 `scripts/lib/codex-app-server-protocol-source.ts`：调整 codex app server protocol source（implementation）。
- 新增 `scripts/lib/config-boundary-guard.d.mts`：调整 config boundary guard.d（configuration/schema）。
- 新增 `scripts/lib/config-boundary-guard.mjs`：调整 config boundary guard（configuration/schema）。
- 新增 `scripts/lib/deprecated-config-api-guard.d.mts`：调整 deprecated config api guard.d（configuration/schema）。
- 新增 `scripts/lib/deprecated-config-api-guard.mjs`：调整 deprecated config api guard（configuration/schema）。
- 新增 `scripts/lib/docker-build.sh`：调整 docker build（implementation）。
- 新增 `scripts/lib/docker-e2e-container.sh`：调整 docker e2e container（implementation）。
- 新增 `scripts/lib/docker-e2e-package.sh`：调整 docker e2e package（implementation）。
- 新增 `scripts/lib/docker-e2e-plan.mjs`：调整 docker e2e plan（implementation）。
- 新增 `scripts/lib/docker-e2e-scenarios.mjs`：调整 docker e2e scenarios（mobile app runtime）。
- 新增 `scripts/lib/local-build-metadata-paths.d.mts`：调整 local build metadata paths.d（implementation）。
- 新增 `scripts/lib/local-build-metadata-paths.mjs`：调整 local build metadata paths（implementation）。
- 修改 `scripts/lib/arg-utils.mjs`：调整 arg utils（implementation）。
- 修改 `scripts/lib/bundled-plugin-build-entries-types.d.ts`：调整 bundled plugin build entries types.d（implementation）。
- 修改 `scripts/lib/bundled-plugin-build-entries.mjs`：调整 bundled plugin build entries（implementation）。
- 修改 `scripts/lib/bundled-runtime-sidecar-paths.json`：调整 bundled runtime sidecar paths（implementation）。
- 修改 `scripts/lib/ci-node-test-plan.mjs`：调整 ci node test plan（implementation）。
- 修改 `scripts/lib/dependency-ownership.json`：调整 dependency ownership（implementation）。
- 修改 `scripts/lib/docker-e2e-image.sh`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `scripts/lib/docker-e2e-logs.sh`：调整 docker e2e logs（implementation）。
- 修改 `scripts/lib/extension-import-boundary-checker.mjs`：调整 extension import boundary checker（implementation）。
- 修改 `scripts/lib/extension-package-boundary.ts`：调整 extension package boundary（implementation）。
- 修改 `scripts/lib/extension-source-classifier.d.mts`：调整 extension source classifier.d（implementation）。
- 修改 `scripts/lib/extension-source-classifier.mjs`：调整 extension source classifier（implementation）。
- 删除 `scripts/lib/bundled-plugin-root-runtime-mirrors.mjs`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 45 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/lib` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/lib/change-to-test.md` 的验证建议。
