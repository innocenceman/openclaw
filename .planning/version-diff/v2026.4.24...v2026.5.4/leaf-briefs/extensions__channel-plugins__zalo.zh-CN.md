# extensions/channel-plugins/zalo

## 1. 功能结论

**新增**：generalize message access groups；**修改**：guard provider-prefixed delivery targets、prepare second external plugin beta batch；**迁移/重构**：plugins remove extension jiti test hooks、trim zalo helper exports、trim extension shim reexports、channels route inbound turns through kernel；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-renames
- 路径状态摘要（降级事实）：修改 30、重命名 4

## 3. 功能级详细差异

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 generalize message access groups

新增 generalize message access groups

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare second external plugin beta batch

构建/发布调整 prepare second external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels add shared turn kernel

迁移/重构 channels：add shared turn kernel

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels finish turn kernel migration

迁移/重构 channels：finish turn kernel migration

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels route inbound turns through kernel

迁移/重构 channels：route inbound turns through kernel

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 channels route remaining turns through kernel

迁移/重构 channels：route remaining turns through kernel

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 plugins remove extension jiti test hooks

迁移/重构 plugins：remove extension jiti test hooks

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim extension shim reexports

迁移/重构 trim extension shim reexports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim zalo helper exports

迁移/重构 trim zalo helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 zalo public API barrel、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 zalo plugin entrypoint、runtime api regression/contract coverage、channel.directory regression/contract coverage、channel.startup regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 迁移/重命名变化

`lifecycle test support` 路径（`extensions/zalo/src/test-support/lifecycle-test-support.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`monitor mocks test support` 路径（`extensions/zalo/src/test-support/monitor-mocks-test-support.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`lifecycle test support` 路径（`extensions/zalo/test-support/lifecycle-test-support.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`monitor mocks test support` 路径（`extensions/zalo/test-support/monitor-mocks-test-support.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/zalo`
- Changed path count: `34`
- Status counts: `修改 30、重命名 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `32` files, `+664` / `-178`

### 归纳依据

- 主要落点：implementation、tests/contracts、auth/pairing/security behavior、message delivery、manifest/package metadata、plugin entry/API surface、image generation。
- 新增或暴露的关键符号包括：`ZALO_OUTBOUND_MEDIA_DIR`, `createHostedMediaResponse`, `secretTargetRegistryEntries`, `resolveLifecycleAllowFrom`, `createLifecycleConfig`, `createLifecycleAccount`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/zalo/src/channel.startup.test.ts extensions/zalo/src/config-schema.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: guard provider-prefixed delivery targets；build: prepare second external plugin beta batch；feat: generalize message access groups；refactor(plugins): remove extension jiti test hooks；refactor: trim zalo helper exports；refactor: trim extension shim reexports；refactor(channels): route inbound turns through kernel；refactor(channels): finish turn kernel migration

### Dimension evidence

- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/zalo/api.ts`
  - source: `path` [M] `extensions/zalo/index.test.ts`
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json`
  - source: `path` [R] `extensions/zalo/src/test-support/lifecycle-test-support.ts`
  - source: `path` [R] `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
  - source: `path` [R] `extensions/zalo/test-support/lifecycle-test-support.ts`
- `maintenance-新增-generalize-message-access-groups` / 新增 generalize message access groups:
  - source: `path` [M] `extensions/zalo/api.ts`
  - source: `path` [M] `extensions/zalo/index.test.ts`
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json`
  - source: `path` [R] `extensions/zalo/src/test-support/lifecycle-test-support.ts`
  - source: `path` [R] `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
  - source: `path` [R] `extensions/zalo/test-support/lifecycle-test-support.ts`
- `integration-build-release-构建-发布调整-prepare-second-external-plugin-beta-bat` / 构建/发布调整 prepare second external plugin beta batch:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-channels-add-shared-turn-kernel` / 迁移/重构 channels add shared turn kernel:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-channels-finish-turn-kernel-migration` / 迁移/重构 channels finish turn kernel migration:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-channels-route-inbound-turns-through-kern` / 迁移/重构 channels route inbound turns through kernel:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-channels-route-remaining-turns-through-ke` / 迁移/重构 channels route remaining turns through kernel:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-plugins-remove-extension-jiti-test-hooks` / 迁移/重构 plugins remove extension jiti test hooks:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-trim-extension-shim-reexports` / 迁移/重构 trim extension shim reexports:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `migration-迁移-重构-trim-zalo-helper-exports` / 迁移/重构 trim zalo helper exports:
  - source: `path` [M] `extensions/zalo/api.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/zalo/package.json` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — semantic cue
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/zalo/api.ts` — contract evidence
  - source: `path` [M] `extensions/zalo/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/zalo/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/zalo/src/runtime-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/zalo/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/zalo/index.test.ts` — test evidence
  - source: `path` [M] `extensions/zalo/runtime-api.test.ts` — test evidence
  - source: `path` [M] `extensions/zalo/src/channel.directory.test.ts` — test evidence
  - source: `path` [M] `extensions/zalo/src/channel.startup.test.ts` — test evidence
  - source: `path` [M] `extensions/zalo/src/monitor.image.polling.test.ts` — test evidence
  - source: `path` [M] `extensions/zalo/src/monitor.lifecycle.test.ts` — test evidence
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `extensions/zalo/src/test-support/lifecycle-test-support.ts`
  - source: `path` [R] `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
  - source: `path` [R] `extensions/zalo/test-support/lifecycle-test-support.ts`
  - source: `path` [R] `extensions/zalo/test-support/monitor-mocks-test-support.ts`

### 路径证据

- 修改 `extensions/zalo/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/zalo/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalo/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/zalo/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/zalo/runtime-api.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalo/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/zalo/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/zalo/src/actions.ts`：调整 actions（implementation）。
- 修改 `extensions/zalo/src/channel.directory.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalo/src/channel.startup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/zalo/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/zalo/src/monitor.image.polling.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 重命名 `extensions/zalo/src/test-support/lifecycle-test-support.ts`：调整 lifecycle test support（implementation）。
- 重命名 `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`：调整 monitor mocks test support（implementation）。
- 重命名 `extensions/zalo/test-support/lifecycle-test-support.ts`：调整 lifecycle test support（implementation）。
- 重命名 `extensions/zalo/test-support/monitor-mocks-test-support.ts`：调整 monitor mocks test support（implementation）。
- 其余 18 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/zalo` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/zalo/change-to-test.md` 的验证建议。
