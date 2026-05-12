# extensions/channel-plugins/matrix

## 1. 功能结论

**修改**：matrix cover native Windows file semantics、[plugin sdk] Harden finalize retry and run context cleanup、resolve small triage issues、matrix scope progress tool status config；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 4、修改 141、删除 2

## 3. 功能级详细差异

### 修复 channels delay progress drafts until work is visible

修复 channels：delay progress drafts until work is visible

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels expose progress draft config hints

修复 channels：expose progress draft config hints

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels pass raw progress detail to drafts

修复 channels：pass raw progress detail to drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels skip empty progress drafts

修复 channels：skip empty progress drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels unify progress draft line formatting

修复 channels：unify progress draft line formatting

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 matrix bind approval reactions before option emoji

修复 matrix：bind approval reactions before option emoji

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 matrix scope progress tool status config

修复 matrix：scope progress tool status config

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 修改 [plugin sdk] Harden finalize retry and run context cleanup

修改 [plugin sdk] Harden finalize retry and run context cleanup

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 测试覆盖 matrix cover native Windows file semantics

测试覆盖 matrix：cover native Windows file semantics

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 matrix public API barrel、doctor contract api、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 CHANGELOG docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 matrix plugin entrypoint、account selection regression/contract coverage、actions regression/contract coverage、approval handler regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `manifest regression/contract coverage`（`extensions/matrix/src/manifest.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `test mocks`（`extensions/matrix/src/test-mocks.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 CHANGELOG docs、matrix public API barrel、auth presence、doctor contract api、matrix plugin entrypoint、plugin manifest/control-plane metadata；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/matrix`
- Changed path count: `147`
- Status counts: `新增 4、修改 141、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `147` files, `+4799` / `-1259`

### 归纳依据

- 主要落点：implementation、tests/contracts、session/state handling、configuration/schema、message delivery、auth/pairing/security behavior、plugin entry/API surface、manifest/package metadata。
- 新增或暴露的关键符号包括：`MATRIX_APPROVAL_METADATA_KEY`, `buildMatrixApprovalRoomTarget`, `buildExecApprovalView`, `buildPluginApprovalView`, `isSingleMatrixMessageLimitError`, `buildMatrixApprovalMetadata`, `normalizeMatrixOriginTarget`, `PERSISTENT_NAMESPACE`, `PERSISTENT_MAX_ENTRIES`, `DEFAULT_REACTION_TARGET_TTL_MS`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/matrix/src/channel.resolve.test.ts extensions/matrix/src/matrix/deps.test.ts`；`pnpm build`。
- 相关 commit 主题：test(matrix): cover native Windows file semantics；[plugin sdk] Harden finalize retry and run context cleanup；fix: resolve small triage issues；fix(matrix): scope progress tool status config；fix(matrix): bind approval reactions before option emoji；fix(channels): pass raw progress detail to drafts；fix(channels): unify progress draft line formatting；fix(channels): skip empty progress drafts

### Dimension evidence

- `maintenance-修复-channels-delay-progress-drafts-until-work-is` / 修复 channels delay progress drafts until work is visible:
  - source: `path` [M] `extensions/matrix/src/matrix/monitor/allowlist.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/monitor/room-history.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/sdk/idb-persistence.lock-order.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/sdk/idb-persistence.test-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/sdk/idb-persistence.test.ts` — semantic cue
- `maintenance-修复-channels-expose-progress-draft-config-hints` / 修复 channels expose progress draft config hints:
  - source: `path` [M] `extensions/matrix/src/config-schema.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/config-schema.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/config-ui-hints.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client/config-runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client/config-secret-input.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client/config.ts` — semantic cue
- `maintenance-修复-channels-pass-raw-progress-detail-to-drafts` / 修复 channels pass raw progress detail to drafts:
  - source: `path` [M] `extensions/matrix/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/channel.directory.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/doctor-contract.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/doctor.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/legacy-crypto-inspector-availability.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/legacy-crypto.test.ts` — semantic cue
- `maintenance-修复-channels-skip-empty-progress-drafts` / 修复 channels skip empty progress drafts:
  - source: `path` [A] `extensions/matrix/doctor-contract-api.ts`
  - source: `path` [A] `extensions/matrix/src/config-ui-hints.ts`
  - source: `path` [A] `extensions/matrix/src/group-mentions.test.ts`
  - source: `path` [M] `extensions/matrix/CHANGELOG.md`
  - source: `path` [M] `extensions/matrix/api.ts`
  - source: `path` [M] `extensions/matrix/auth-presence.ts`
- `maintenance-修复-channels-unify-progress-draft-line-formatting` / 修复 channels unify progress draft line formatting:
  - source: `path` [M] `extensions/matrix/src/matrix/draft-stream.test.ts` — semantic cue
- `maintenance-修复-matrix-bind-approval-reactions-before-option` / 修复 matrix bind approval reactions before option emoji:
  - source: `path` [M] `extensions/matrix/CHANGELOG.md` — semantic cue
  - source: `path` [M] `extensions/matrix/api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.ts` — semantic cue
- `maintenance-修复-matrix-scope-progress-tool-status-config` / 修复 matrix scope progress tool status config:
  - source: `path` [M] `extensions/matrix/CHANGELOG.md` — semantic cue
  - source: `path` [M] `extensions/matrix/api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [M] `extensions/matrix/src/channel.resolve.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/exec-approval-resolver.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client-resolver.test-helpers.ts` — semantic cue
- `maintenance-修改-plugin-sdk-Harden-finalize-retry-and-run-c` / 修改 [plugin sdk] Harden finalize retry and run context cleanup:
  - source: `path` [M] `extensions/matrix/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/matrix/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/approval-handler.runtime.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/approval-handler.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client/config-runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/src/matrix/client/config-secret-input.runtime.ts` — semantic cue
- `tests-docs-测试覆盖-matrix-cover-native-Windows-file-semantics` / 测试覆盖 matrix cover native Windows file semantics:
  - source: `path` [M] `extensions/matrix/CHANGELOG.md` — semantic cue
  - source: `path` [M] `extensions/matrix/api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/matrix/index.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/matrix/api.ts` — contract evidence
  - source: `path` [M] `extensions/matrix/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/matrix/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/matrix/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/matrix/src/config-schema.test.ts` — contract evidence
  - source: `path` [M] `extensions/matrix/src/config-schema.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/matrix/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/matrix/CHANGELOG.md` — docs evidence
  - source: `path` [M] `extensions/matrix/index.test.ts` — test evidence
  - source: `path` [M] `extensions/matrix/src/account-selection.test.ts` — test evidence
  - source: `path` [M] `extensions/matrix/src/actions.test.ts` — test evidence
  - source: `path` [M] `extensions/matrix/src/approval-handler.runtime.test.ts` — test evidence
  - source: `path` [M] `extensions/matrix/src/approval-native.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/matrix/src/manifest.test.ts`
  - source: `path` [D] `extensions/matrix/src/test-mocks.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/matrix/doctor-contract-api.ts`
  - source: `path` [A] `extensions/matrix/src/config-ui-hints.ts`
  - source: `path` [A] `extensions/matrix/src/group-mentions.test.ts`
  - source: `path` [A] `extensions/matrix/src/matrix/client/logging.test.ts`
  - source: `path` [M] `extensions/matrix/CHANGELOG.md`
  - source: `path` [M] `extensions/matrix/api.ts`

### 路径证据

- 新增 `extensions/matrix/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/matrix/src/config-ui-hints.ts`：调整 config ui hints（configuration/schema）。
- 新增 `extensions/matrix/src/group-mentions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/matrix/src/matrix/client/logging.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/matrix/CHANGELOG.md`：调整 CHANGELOG docs（docs）。
- 修改 `extensions/matrix/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/matrix/auth-presence.ts`：调整 auth presence（auth/pairing/security behavior）。
- 修改 `extensions/matrix/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/matrix/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/matrix/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/matrix/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/matrix/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/matrix/src/account-selection.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/matrix/src/account-selection.ts`：调整 account selection（implementation）。
- 修改 `extensions/matrix/src/actions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/matrix/src/approval-handler.runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `extensions/matrix/src/manifest.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/matrix/src/test-mocks.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 129 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/matrix` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/matrix/change-to-test.md` 的验证建议。
