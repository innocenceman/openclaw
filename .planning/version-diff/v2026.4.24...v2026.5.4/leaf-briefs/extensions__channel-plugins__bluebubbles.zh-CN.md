# extensions/channel-plugins/bluebubbles

## 1. 功能结论

**修改**：bluebubbles accept native contact database paths、secretrefs resolve external channel contracts、guard provider-prefixed delivery targets、prepare second external plugin beta batch；**迁移/重构**：hide extension helper internals、annotate secret target registries、trim secret contract type imports、trim bluebubbles config helper exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 6、修改 47

## 3. 功能级详细差异

### 修复 bluebubbles UTI-aware audio attachment detection

修复 bluebubbles：UTI-aware audio attachment detection

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts

修复 secretrefs：resolve external channel contracts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 构建/发布调整 prepare second external plugin beta batch

构建/发布调整 prepare second external plugin beta batch

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 测试覆盖 bluebubbles accept native contact database paths

测试覆盖 bluebubbles：accept native contact database paths

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 迁移/重构 annotate secret target registries

迁移/重构 annotate secret target registries

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 迁移/重构 hide extension helper internals

迁移/重构 hide extension helper internals

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 迁移/重构 trim bluebubbles config helper exports

迁移/重构 trim bluebubbles config helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 迁移/重构 trim bluebubbles helper exports

迁移/重构 trim bluebubbles helper exports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 迁移/重构 trim secret contract type imports

迁移/重构 trim secret contract type imports

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 bluebubbles public API barrel、doctor contract api、plugin manifest/control-plane metadata、config apply，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 actions regression/contract coverage、attachments regression/contract coverage、channel.status regression/contract coverage、conversation bindings regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/bluebubbles`
- Changed path count: `53`
- Status counts: `新增 6、修改 47`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `53` files, `+2373` / `-320`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、manifest/package metadata、configuration/schema、auth/pairing/security behavior、session/state handling、plugin entry/API surface。
- 新增或暴露的关键符号包括：`requireDefined`, `buildChatContextFromActionParams`, `APPLE_AUDIO_UTIS`, `isBlueBubblesAudioAttachment`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/monitor.test.ts`；`pnpm test -- extensions/bluebubbles/src/setup-surface.test.ts extensions/bluebubbles/src/chat.test.ts`。
- 相关 commit 主题：test(bluebubbles): accept native contact database paths；fix(secretrefs): resolve external channel contracts；refactor: hide extension helper internals；fix: guard provider-prefixed delivery targets；build: prepare second external plugin beta batch；refactor: annotate secret target registries；refactor: trim secret contract type imports；fix(bluebubbles): UTI-aware audio attachment detection

### Dimension evidence

- `maintenance-修复-bluebubbles-UTI-aware-audio-attachment-detec` / 修复 bluebubbles UTI-aware audio attachment detection:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [M] `extensions/bluebubbles/src/targets.ts` — semantic cue
- `public-contract-修复-secretrefs-resolve-external-channel-contracts` / 修复 secretrefs resolve external channel contracts:
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/channel-shared.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/channel.status.test.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/channel.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-second-external-plugin-beta-bat` / 构建/发布调整 prepare second external plugin beta batch:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `tests-docs-测试覆盖-bluebubbles-accept-native-contact-database` / 测试覆盖 bluebubbles accept native contact database paths:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `migration-迁移-重构-annotate-secret-target-registries` / 迁移/重构 annotate secret target registries:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `migration-迁移-重构-hide-extension-helper-internals` / 迁移/重构 hide extension helper internals:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `migration-迁移-重构-trim-bluebubbles-config-helper-exports` / 迁移/重构 trim bluebubbles config helper exports:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `migration-迁移-重构-trim-bluebubbles-helper-exports` / 迁移/重构 trim bluebubbles helper exports:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `public-contract-迁移-重构-trim-secret-contract-type-imports` / 迁移/重构 trim secret contract type imports:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/package.json` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/account-resolve.ts` — semantic cue
  - source: `path` [M] `extensions/bluebubbles/src/accounts.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/bluebubbles/api.ts` — contract evidence
  - source: `path` [M] `extensions/bluebubbles/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/bluebubbles/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/bluebubbles/src/config-apply.ts` — contract evidence
  - source: `path` [M] `extensions/bluebubbles/src/config-schema.ts` — contract evidence
  - source: `path` [M] `extensions/bluebubbles/src/monitor-processing-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/bluebubbles/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/bluebubbles/src/actions.test.ts` — test evidence
  - source: `path` [M] `extensions/bluebubbles/src/attachments.test.ts` — test evidence
  - source: `path` [M] `extensions/bluebubbles/src/channel.status.test.ts` — test evidence
  - source: `path` [M] `extensions/bluebubbles/src/conversation-bindings.test.ts` — test evidence
  - source: `path` [M] `extensions/bluebubbles/src/conversation-route.test.ts` — test evidence
  - source: `path` [M] `extensions/bluebubbles/src/media-send.test.ts` — test evidence

### 路径证据

- 新增 `extensions/bluebubbles/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/bluebubbles/src/monitor-reply-cache.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/bluebubbles/src/monitor-reply-fetch.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/bluebubbles/src/monitor-reply-fetch.ts`：调整 monitor reply fetch（message delivery）。
- 新增 `extensions/bluebubbles/src/session-route.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/bluebubbles/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/bluebubbles/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/bluebubbles/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/bluebubbles/src/account-resolve.ts`：调整 account resolve（implementation）。
- 修改 `extensions/bluebubbles/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/bluebubbles/src/actions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/bluebubbles/src/actions.ts`：调整 actions（implementation）。
- 修改 `extensions/bluebubbles/src/attachments.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/bluebubbles/src/attachments.ts`：调整 attachments（implementation）。
- 修改 `extensions/bluebubbles/src/channel-shared.ts`：调整 channel shared（implementation）。
- 修改 `extensions/bluebubbles/src/channel.status.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/bluebubbles/src/channel.ts`：调整 channel（implementation）。
- 其余 35 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/bluebubbles` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/bluebubbles/change-to-test.md` 的验证建议。
