# src/cli-commands/command-implementations/config-doctor-commands

## 1. 功能结论

**修改**：align beta plugin repair expectations、plugins honor beta channel for auto installs、release prune externalized plugin chunks、doctor clarify configured plugin repair；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 44、修改 112、删除 4、重命名 2

## 3. 功能级详细差异

### 修复 doctor repair allow-only official plugins

修复 doctor：repair allow-only official plugins

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

修复 plugins：default bundled discovery to allowlist

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

修复 plugins：honor beta channel for auto installs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 plugins rename bundled allowlist discovery policy

修复 plugins：rename bundled allowlist discovery policy

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 release prune externalized plugin chunks

修复 release：prune externalized plugin chunks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 repair stale session route state in doctor

修复 repair stale session route state in doctor

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 文档同步 doctor clarify configured plugin repair

文档同步 doctor：clarify configured plugin repair

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align beta plugin repair expectations

测试覆盖 align beta plugin repair expectations

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 doctor mock bundled channel ids

测试覆盖 doctor：mock bundled channel ids

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 doctor preserve bundled discovery literal type

测试覆盖 doctor：preserve bundled discovery literal type

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 configure.commands、configure.daemon regression/contract coverage、configure.daemon、configure.gateway auth.prompt auth config regression/contract coverage，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 doctor sandbox.warns sandbox enabled without docker regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 configure.daemon regression/contract coverage、configure.gateway auth.prompt auth config regression/contract coverage、configure.wizard regression/contract coverage、daemon install helpers regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `doctor bundled plugin runtime deps regression/contract coverage`（`src/commands/doctor-bundled-plugin-runtime-deps.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `doctor bundled plugin runtime deps`（`src/commands/doctor-bundled-plugin-runtime-deps.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `legacy config runtime migrate`（`src/commands/doctor/shared/legacy-config-runtime-migrate.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `runtime compat api`（`src/commands/doctor/shared/runtime-compat-api.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`legacy models add metadata regression/contract coverage` 路径（`src/commands/doctor/shared/legacy-models-add-metadata.test.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`legacy models add metadata` 路径（`src/commands/doctor/shared/legacy-models-add-metadata.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 configure.commands、configure.daemon regression/contract coverage、configure.daemon、configure.gateway auth.prompt auth config regression/contract coverage、configure.gateway auth、configure；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands`
- Changed path count: `162`
- Status counts: `新增 44、修改 112、删除 4、重命名 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `162` files, `+19353` / `-1884`

### 归纳依据

- 主要落点：CLI/command behavior、implementation、tests/contracts、gateway runtime、session/state handling、configuration/schema。
- 新增或暴露的关键符号包括：`createTestModel`, `hasConfiguredProviderModels`, `hasStaticManifestCatalogRows`, `listConfiguredModelProviders`, `resolveSingleConfiguredProvider`, `resolveConfiguredProviderFromAuthChange`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：test: align beta plugin repair expectations；fix(plugins): honor beta channel for auto installs；fix(release): prune externalized plugin chunks；docs(doctor): clarify configured plugin repair；fix: repair stale session route state in doctor；fix(doctor): repair allow-only official plugins；test(doctor): preserve bundled discovery literal type；fix(plugins): default bundled discovery to allowlist

### Dimension evidence

- `maintenance-修复-doctor-repair-allow-only-official-plugins` / 修复 doctor repair allow-only official plugins:
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
- `maintenance-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
- `maintenance-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `src/commands/doctor-format.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/channel-doctor.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/channel-doctor.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/channel-plugin-blockers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/channel-plugin-blockers.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/legacy-config-migrations.channels.ts` — semantic cue
- `migration-修复-plugins-rename-bundled-allowlist-discovery-p` / 修复 plugins rename bundled allowlist discovery policy:
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-service-repair-policy.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/allowlist-policy-repair.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/bundled-plugin-load-paths.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor/shared/bundled-plugin-load-paths.ts` — semantic cue
- `maintenance-修复-release-prune-externalized-plugin-chunks` / 修复 release prune externalized plugin chunks:
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-manifests.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-manifests.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-registry.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-registry.ts` — semantic cue
- `maintenance-修复-repair-stale-session-route-state-in-doctor` / 修复 repair stale session route state in doctor:
  - source: `path` [M] `src/commands/daemon-install-helpers.test.ts` — semantic cue
  - source: `path` [M] `src/commands/daemon-install-helpers.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
- `tests-docs-文档同步-doctor-clarify-configured-plugin-repair` / 文档同步 doctor clarify configured plugin repair:
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
- `tests-docs-测试覆盖-align-beta-plugin-repair-expectations` / 测试覆盖 align beta plugin repair expectations:
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-manifests.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-manifests.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-registry.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-plugin-registry.ts` — semantic cue
- `tests-docs-测试覆盖-doctor-mock-bundled-channel-ids` / 测试覆盖 doctor mock bundled channel ids:
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
- `tests-docs-测试覆盖-doctor-preserve-bundled-discovery-literal` / 测试覆盖 doctor preserve bundled discovery literal type:
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth-profile-config.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-auth.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — semantic cue
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/commands/configure.commands.ts` — contract evidence
  - source: `path` [M] `src/commands/configure.daemon.test.ts` — contract evidence
  - source: `path` [M] `src/commands/configure.daemon.ts` — contract evidence
  - source: `path` [M] `src/commands/configure.gateway-auth.prompt-auth-config.test.ts` — contract evidence
  - source: `path` [M] `src/commands/configure.gateway-auth.ts` — contract evidence
  - source: `path` [M] `src/commands/configure.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/commands/doctor-sandbox.warns-sandbox-enabled-without-docker.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/commands/configure.daemon.test.ts` — test evidence
  - source: `path` [M] `src/commands/configure.gateway-auth.prompt-auth-config.test.ts` — test evidence
  - source: `path` [M] `src/commands/configure.wizard.test.ts` — test evidence
  - source: `path` [M] `src/commands/daemon-install-helpers.test.ts` — test evidence
  - source: `path` [M] `src/commands/doctor-auth-flat-profiles.test.ts` — test evidence
  - source: `path` [M] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`
  - source: `path` [D] `src/commands/doctor-bundled-plugin-runtime-deps.ts`
  - source: `path` [D] `src/commands/doctor/shared/legacy-config-runtime-migrate.ts`
  - source: `path` [D] `src/commands/doctor/shared/runtime-compat-api.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/commands/doctor/shared/legacy-models-add-metadata.test.ts`
  - source: `path` [R] `src/commands/doctor/shared/legacy-models-add-metadata.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/commands/doctor-auth-flat-profiles.test.ts`
  - source: `path` [A] `src/commands/doctor-auth-flat-profiles.ts`
  - source: `path` [A] `src/commands/doctor-auth-profile-config.ts`
  - source: `path` [A] `src/commands/doctor-command-owner.test.ts`
  - source: `path` [A] `src/commands/doctor-command-owner.ts`
  - source: `path` [A] `src/commands/doctor-config-preflight.test.ts`

### 路径证据

- 新增 `src/commands/doctor-auth-flat-profiles.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-auth-flat-profiles.ts`：调整 doctor auth flat profiles（CLI/command behavior）。
- 新增 `src/commands/doctor-auth-profile-config.ts`：调整 doctor auth profile config（CLI/command behavior）。
- 新增 `src/commands/doctor-command-owner.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-command-owner.ts`：调整 doctor command owner（CLI/command behavior）。
- 新增 `src/commands/doctor-config-preflight.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-gateway-health.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-plugin-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-plugin-registry.ts`：调整 doctor plugin registry（CLI/command behavior）。
- 新增 `src/commands/doctor-service-repair-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 新增 `src/commands/doctor-session-state-providers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/commands/doctor-session-state-providers.ts`：调整 doctor session state providers（CLI/command behavior）。
- 修改 `src/commands/configure.commands.ts`：调整 configure.commands（CLI/command behavior）。
- 修改 `src/commands/configure.daemon.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/configure.daemon.ts`：调整 configure.daemon（CLI/command behavior）。
- 修改 `src/commands/configure.gateway-auth.prompt-auth-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/configure.gateway-auth.ts`：调整 configure.gateway auth（gateway runtime）。
- 修改 `src/commands/configure.ts`：调整 configure（CLI/command behavior）。
- 修改 `src/commands/configure.wizard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/configure.wizard.ts`：调整 configure.wizard（CLI/command behavior）。
- 修改 `src/commands/daemon-install-helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/commands/daemon-install-helpers.ts`：调整 daemon install helpers（CLI/command behavior）。
- 修改 `src/commands/doctor-auth.ts`：调整 doctor auth（CLI/command behavior）。
- 修改 `src/commands/doctor-claude-cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/commands/doctor-bundled-plugin-runtime-deps.test.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/doctor-bundled-plugin-runtime-deps.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/doctor/shared/legacy-config-runtime-migrate.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/commands/doctor/shared/runtime-compat-api.ts`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/commands/doctor/shared/legacy-models-add-metadata.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/commands/doctor/shared/legacy-models-add-metadata.ts`：调整 legacy models add metadata（CLI/command behavior）。
- 其余 132 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/command-implementations/config-doctor-commands` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/command-implementations/config-doctor-commands/change-to-test.md` 的验证建议。
