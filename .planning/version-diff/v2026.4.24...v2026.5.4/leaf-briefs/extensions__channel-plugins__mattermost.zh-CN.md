# extensions/channel-plugins/mattermost

## 1. 功能结论

**修改**：mattermost clarify model picker runtime behavior、resolve small triage issues、mattermost suppress draft progress chatter、channels align preview tool progress help；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 3、修改 48、删除 1

## 3. 功能级详细差异

### 修复 channels align preview tool progress help

修复 channels：align preview tool progress help

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 channels keep matrix and mattermost bundled

修复 channels：keep matrix and mattermost bundled

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost accept streaming config

修复 mattermost：accept streaming config

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost clarify model picker runtime behavior

修复 mattermost：clarify model picker runtime behavior

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost expose streaming config hints

修复 mattermost：expose streaming config hints

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost honor progress tool silence

修复 mattermost：honor progress tool silence

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost load config metadata from config surface

修复 mattermost：load config metadata from config surface

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost share progress draft labels

修复 mattermost：share progress draft labels

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 mattermost suppress draft progress chatter

修复 mattermost：suppress draft progress chatter

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 doctor contract api、plugin manifest/control-plane metadata、runtime api、channel api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel actions setup status regression/contract coverage、channel regression/contract coverage、config schema regression/contract coverage、accounts regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `config schema`（`extensions/mattermost/src/config-schema.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/mattermost`
- Changed path count: `52`
- Status counts: `新增 3、修改 48、删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `52` files, `+2846` / `-378`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、auth/pairing/security behavior、manifest/package metadata、streaming/reasoning、message delivery、CLI/command behavior。
- 新增或暴露的关键符号包括：`formatMattermostAllowEntry`, `MattermostStreamingModeSchema`, `MattermostStreamingProgressSchema`, `MattermostStreamingPreviewSchema`, `MattermostStreamingBlockSchema`, `MattermostStreamingSchema`, `MattermostChannelConfigSchema`, `mattermostChannelConfigUiHints`, `normalizeMattermostDraftText`, `buildMattermostToolStatusText`。
- 建议优先验证：优先运行 `pnpm test:contracts:channels`；`pnpm test -- extensions/mattermost/src/channel.test.ts extensions/mattermost/src/config-schema.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(mattermost): clarify model picker runtime behavior；fix: resolve small triage issues；fix(mattermost): suppress draft progress chatter；fix(channels): align preview tool progress help；fix(mattermost): share progress draft labels；fix(mattermost): honor progress tool silence；fix(mattermost): expose streaming config hints；fix(mattermost): accept streaming config

### Dimension evidence

- `maintenance-修复-channels-align-preview-tool-progress-help` / 修复 channels align preview tool progress help:
  - source: `path` [M] `extensions/mattermost/src/mattermost/monitor-helpers.ts` — semantic cue
- `maintenance-修复-channels-keep-matrix-and-mattermost-bundled` / 修复 channels keep matrix and mattermost bundled:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `runtime-behavior-修复-mattermost-accept-streaming-config` / 修复 mattermost accept streaming config:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `runtime-behavior-修复-mattermost-clarify-model-picker-runtime-beha` / 修复 mattermost clarify model picker runtime behavior:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `runtime-behavior-修复-mattermost-expose-streaming-config-hints` / 修复 mattermost expose streaming config hints:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `maintenance-修复-mattermost-honor-progress-tool-silence` / 修复 mattermost honor progress tool silence:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `public-contract-修复-mattermost-load-config-metadata-from-config` / 修复 mattermost load config metadata from config surface:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `maintenance-修复-mattermost-share-progress-draft-labels` / 修复 mattermost share progress draft labels:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `maintenance-修复-mattermost-suppress-draft-progress-chatter` / 修复 mattermost suppress draft progress chatter:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/package.json` — semantic cue
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `extensions/mattermost/doctor-contract-api.ts`
  - source: `path` [A] `extensions/mattermost/src/config-ui-hints.ts`
  - source: `path` [A] `extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts`
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json`
  - source: `path` [M] `extensions/mattermost/package.json`
  - source: `path` [M] `extensions/mattermost/runtime-api.ts`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/mattermost/doctor-contract-api.ts` — contract evidence
  - source: `path` [M] `extensions/mattermost/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/mattermost/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/mattermost/src/channel-api.ts` — contract evidence
  - source: `path` [M] `extensions/mattermost/src/channel-config-shared.ts` — contract evidence
  - source: `path` [M] `extensions/mattermost/src/config-schema-core.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/mattermost/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/mattermost/src/channel.test.ts` — test evidence
  - source: `path` [M] `extensions/mattermost/src/config-schema.test.ts` — test evidence
  - source: `path` [M] `extensions/mattermost/src/mattermost/accounts.test.ts` — test evidence
  - source: `path` [M] `extensions/mattermost/src/mattermost/draft-stream.test.ts` — test evidence
  - source: `path` [M] `extensions/mattermost/src/mattermost/model-picker.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/mattermost/src/config-schema.ts`

### 路径证据

- 新增 `extensions/mattermost/doctor-contract-api.ts`：调整 doctor contract api（implementation）。
- 新增 `extensions/mattermost/src/config-ui-hints.ts`：调整 config ui hints（configuration/schema）。
- 新增 `extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mattermost/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/mattermost/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/mattermost/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/mattermost/src/channel-actions-setup-status.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mattermost/src/channel-api.ts`：调整 channel api（implementation）。
- 修改 `extensions/mattermost/src/channel-config-shared.ts`：调整 channel config shared（configuration/schema）。
- 修改 `extensions/mattermost/src/channel.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mattermost/src/channel.ts`：调整 channel（implementation）。
- 修改 `extensions/mattermost/src/config-schema-core.ts`：调整 config schema core（configuration/schema）。
- 修改 `extensions/mattermost/src/config-schema.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/mattermost/src/config-surface.ts`：调整 config surface（configuration/schema）。
- 修改 `extensions/mattermost/src/doctor.ts`：调整 doctor（implementation）。
- 删除 `extensions/mattermost/src/config-schema.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 其余 36 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/mattermost` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/mattermost/change-to-test.md` 的验证建议。
