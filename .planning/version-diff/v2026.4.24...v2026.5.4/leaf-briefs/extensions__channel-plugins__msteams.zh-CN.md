# extensions/channel-plugins/msteams

## 1. 功能结论

**新增**：add channel progress drafts；**修改**：resolve small triage issues、channels pass raw progress detail to drafts、channels unify progress draft line formatting、channels delay progress drafts until work is visible；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 2、修改 73、删除 5

## 3. 功能级详细差异

### 修复 channels delay progress drafts until work is visible

修复 channels：delay progress drafts until work is visible

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels expose progress draft config hints

修复 channels：expose progress draft config hints

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels pass raw progress detail to drafts

修复 channels：pass raw progress detail to drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels unify progress draft line formatting

修复 channels：unify progress draft line formatting

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 guard provider-prefixed delivery targets

修复 guard provider-prefixed delivery targets

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 msteams stream progress tool lines

修复 msteams：stream progress tool lines

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 msteams use manual delegated oauth setup

修复 msteams：use manual delegated oauth setup

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 修改 persist sent-message markers best-effort

修改 persist sent-message markers best-effort

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 add channel progress drafts

新增 add channel progress drafts

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 msteams public API barrel、channel plugin api、config api、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 attachments.graph regression/contract coverage、block streaming config regression/contract coverage、channel.actions regression/contract coverage、channel.directory regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `actions`（`extensions/msteams/src/actions.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `directory`（`extensions/msteams/src/directory.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `file lock`（`extensions/msteams/src/file-lock.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `send.reactions regression/contract coverage`（`extensions/msteams/src/send.reactions.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/msteams`
- Changed path count: `80`
- Status counts: `新增 2、修改 73、删除 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `80` files, `+1439` / `-1475`

### 归纳依据

- 主要落点：implementation、message delivery、tests/contracts、configuration/schema、manifest/package metadata、plugin entry/API surface、model/thinking policy、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`IMAGE_EXT_RE`, `DEFAULT_MEDIA_HOST_ALLOWLIST`, `DEFAULT_MEDIA_AUTH_HOST_ALLOWLIST`, `requireDirectorySelf`, `msteamsSetupPlugin`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/msteams/src/channel.directory.test.ts extensions/msteams/src/sdk.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: resolve small triage issues；fix(channels): pass raw progress detail to drafts；fix(channels): unify progress draft line formatting；fix(channels): delay progress drafts until work is visible；fix(msteams): stream progress tool lines；fix(channels): expose progress draft config hints；feat: add channel progress drafts；msteams: persist sent-message markers best-effort

### Dimension evidence

- `maintenance-修复-channels-delay-progress-drafts-until-work-is` / 修复 channels delay progress drafts until work is visible:
  - source: `path` [M] `extensions/msteams/src/reply-dispatcher.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/reply-dispatcher.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/resolve-allowlist.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/resolve-allowlist.ts` — semantic cue
- `maintenance-修复-channels-expose-progress-draft-config-hints` / 修复 channels expose progress draft config hints:
  - source: `path` [M] `extensions/msteams/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/block-streaming-config.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/config-ui-hints.ts` — semantic cue
- `maintenance-修复-channels-pass-raw-progress-detail-to-drafts` / 修复 channels pass raw progress detail to drafts:
  - source: `path` [M] `extensions/msteams/src/channel.directory.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/directory.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/monitor-handler.test-helpers.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/monitor-handler.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/monitor-handler/access.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/monitor-handler/message-handler.ts` — semantic cue
- `maintenance-修复-channels-unify-progress-draft-line-formatting` / 修复 channels unify progress draft line formatting:
  - source: `path` [A] `extensions/msteams/setup-plugin-api.ts`
  - source: `path` [A] `extensions/msteams/src/channel.setup.ts`
  - source: `path` [M] `extensions/msteams/api.ts`
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts`
  - source: `path` [M] `extensions/msteams/config-api.ts`
  - source: `path` [D] `extensions/msteams/src/actions.ts`
- `maintenance-修复-guard-provider-prefixed-delivery-targets` / 修复 guard provider-prefixed delivery targets:
  - source: `path` [A] `extensions/msteams/setup-plugin-api.ts`
  - source: `path` [A] `extensions/msteams/src/channel.setup.ts`
  - source: `path` [M] `extensions/msteams/api.ts`
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts`
  - source: `path` [M] `extensions/msteams/config-api.ts`
  - source: `path` [D] `extensions/msteams/src/actions.ts`
- `runtime-behavior-修复-msteams-stream-progress-tool-lines` / 修复 msteams stream progress tool lines:
  - source: `path` [M] `extensions/msteams/api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/msteams/package.json` — semantic cue
  - source: `path` [M] `extensions/msteams/runtime-api.ts` — semantic cue
- `maintenance-修复-msteams-use-manual-delegated-oauth-setup` / 修复 msteams use manual delegated oauth setup:
  - source: `path` [M] `extensions/msteams/api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/msteams/package.json` — semantic cue
  - source: `path` [M] `extensions/msteams/runtime-api.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [M] `extensions/msteams/src/resolve-allowlist.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/resolve-allowlist.ts` — semantic cue
- `maintenance-修改-persist-sent-message-markers-best-effort` / 修改 persist sent-message markers best-effort:
  - source: `path` [M] `extensions/msteams/src/sent-message-cache.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/sent-message-cache.ts` — semantic cue
- `maintenance-新增-add-channel-progress-drafts` / 新增 add channel progress drafts:
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/channel-api.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/channel.actions.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/channel.directory.test.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/channel.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/msteams/src/channel.setup.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/msteams/api.ts` — contract evidence
  - source: `path` [M] `extensions/msteams/channel-plugin-api.ts` — contract evidence
  - source: `path` [M] `extensions/msteams/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/msteams/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/msteams/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/msteams/setup-plugin-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/msteams/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/msteams/src/attachments.graph.test.ts` — test evidence
  - source: `path` [M] `extensions/msteams/src/block-streaming-config.test.ts` — test evidence
  - source: `path` [M] `extensions/msteams/src/channel.actions.test.ts` — test evidence
  - source: `path` [M] `extensions/msteams/src/channel.directory.test.ts` — test evidence
  - source: `path` [M] `extensions/msteams/src/channel.test.ts` — test evidence
  - source: `path` [M] `extensions/msteams/src/graph-upload.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/msteams/src/actions.ts`
  - source: `path` [D] `extensions/msteams/src/directory.ts`
  - source: `path` [D] `extensions/msteams/src/file-lock.ts`
  - source: `path` [D] `extensions/msteams/src/send.reactions.test.ts`
  - source: `path` [D] `extensions/msteams/src/send.reactions.ts`

### 路径证据

- 新增 `extensions/msteams/setup-plugin-api.ts`：调整 setup plugin api（implementation）。
- 新增 `extensions/msteams/src/channel.setup.ts`：调整 channel.setup（implementation）。
- 修改 `extensions/msteams/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/msteams/channel-plugin-api.ts`：调整 channel plugin api（implementation）。
- 修改 `extensions/msteams/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/msteams/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/msteams/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/msteams/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/msteams/setup-entry.ts`：调整 setup entry（implementation）。
- 修改 `extensions/msteams/src/attachments.graph.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/msteams/src/attachments.ts`：调整 attachments（implementation）。
- 修改 `extensions/msteams/src/attachments/download.ts`：调整 download（implementation）。
- 修改 `extensions/msteams/src/attachments/shared.ts`：调整 shared（implementation）。
- 修改 `extensions/msteams/src/block-streaming-config.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 删除 `extensions/msteams/src/actions.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/msteams/src/directory.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/msteams/src/file-lock.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/msteams/src/send.reactions.test.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/msteams/src/send.reactions.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 其余 61 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/msteams` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/msteams/change-to-test.md` 的验证建议。
