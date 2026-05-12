# extensions/skill-plugins/feishu

## 1. 功能结论

**修改**：resolve small triage issues、feishu share streaming tool progress labels、feishu honor block streaming config、feishu satisfy queue timeout lint；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 5、修改 52

## 3. 功能级详细差异

### 修复 channels preserve degraded voice text and mention boundaries

修复 channels：preserve degraded voice text and mention boundaries

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu avoid duplicate voice reply text

修复 feishu：avoid duplicate voice reply text

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu cap per-chat queue task wait so a single hang doesn't starve…

修复 feishu：cap per-chat queue task wait so a single hang doesn't starve later messages

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu honor block streaming config

修复 feishu：honor block streaming config

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu repair media-aware message dedupe

修复 feishu：repair media-aware message dedupe

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu satisfy queue timeout lint

修复 feishu：satisfy queue timeout lint

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu share streaming tool progress labels

修复 feishu：share streaming tool progress labels

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 feishu split timeout env parsing from client

修复 feishu：split timeout env parsing from client

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 修改 [AI-assisted] fix(feishu): probe status with account credentials

修改 [AI-assisted] fix(feishu): probe status with account credentials

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 comment handler runtime api、config schema regression/contract coverage、dedup runtime api、monitor transport runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 async regression/contract coverage、bitable regression/contract coverage、bot group name regression/contract coverage、chat regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/feishu`
- Changed path count: `57`
- Status counts: `新增 5、修改 52`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `57` files, `+3639` / `-406`

### 归纳依据

- 主要落点：implementation、tests/contracts、message delivery、configuration/schema、model/thinking policy、auth/pairing/security behavior、streaming/reasoning、session/state handling。
- 新增或暴露的关键符号包括：`createConfig`, `createBitableClient`, `isDefaultEmptyBitableFieldValue`, `isPlaceholderBitableRecord`, `parseMediaKeys`, `makeAccount`, `FEISHU_HTTP_TIMEOUT_MS`, `FEISHU_HTTP_TIMEOUT_MAX_MS`, `FEISHU_HTTP_TIMEOUT_ENV_VAR`, `resolveConfiguredHttpTimeoutMs`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/feishu`；`pnpm test:extensions`。
- 相关 commit 主题：fix: resolve small triage issues；fix(feishu): share streaming tool progress labels；fix(feishu): honor block streaming config；fix(feishu): satisfy queue timeout lint；fix(feishu): cap per-chat queue task wait so a single hang doesn't starve later messages；fix(channels): preserve degraded voice text and mention boundaries；fix(feishu): avoid duplicate voice reply text；fix(feishu): repair media-aware message dedupe

### Dimension evidence

- `maintenance-修复-channels-preserve-degraded-voice-text-and-me` / 修复 channels preserve degraded voice text and mention boundaries:
  - source: `path` [M] `extensions/feishu/src/comment-handler-runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/comment-handler.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/comment-handler.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/mention.ts` — semantic cue
- `maintenance-修复-feishu-avoid-duplicate-voice-reply-text` / 修复 feishu avoid duplicate voice reply text:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `maintenance-修复-feishu-cap-per-chat-queue-task-wait-so-a-sin` / 修复 feishu cap per-chat queue task wait so a single hang doesn't starve…:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `runtime-behavior-修复-feishu-honor-block-streaming-config` / 修复 feishu honor block streaming config:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `maintenance-修复-feishu-repair-media-aware-message-dedupe` / 修复 feishu repair media-aware message dedupe:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `maintenance-修复-feishu-satisfy-queue-timeout-lint` / 修复 feishu satisfy queue timeout lint:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `runtime-behavior-修复-feishu-share-streaming-tool-progress-labels` / 修复 feishu share streaming tool progress labels:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `maintenance-修复-feishu-split-timeout-env-parsing-from-client` / 修复 feishu split timeout env parsing from client:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `extensions/feishu/src/audio-preflight.runtime.ts`
  - source: `path` [A] `extensions/feishu/src/bitable.test.ts`
  - source: `path` [A] `extensions/feishu/src/bot-group-name.test.ts`
  - source: `path` [M] `extensions/feishu/src/async.test.ts`
  - source: `path` [M] `extensions/feishu/src/async.ts`
  - source: `path` [M] `extensions/feishu/src/bitable.ts`
- `maintenance-修改-AI-assisted-fix-feishu-probe-status-with` / 修改 [AI-assisted] fix(feishu): probe status with account credentials:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/async.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/audio-preflight.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bitable.ts` — semantic cue
  - source: `path` [M] `extensions/feishu/src/bot-content.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/feishu/src/comment-handler-runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/src/config-schema.test.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/src/dedup-runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/src/monitor-transport-runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/feishu/src/tools-config.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/feishu/src/async.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bitable.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/bot-group-name.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/chat.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/comment-handler.test.ts` — test evidence
  - source: `path` [M] `extensions/feishu/src/config-schema.test.ts` — test evidence

### 路径证据

- 新增 `extensions/feishu/src/audio-preflight.runtime.ts`：调整 audio preflight（implementation）。
- 新增 `extensions/feishu/src/bitable.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/feishu/src/bot-group-name.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/feishu/src/client-timeout.ts`：调整 client timeout（implementation）。
- 新增 `extensions/feishu/src/dedupe-key.ts`：调整 dedupe key（implementation）。
- 修改 `extensions/feishu/src/async.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/async.ts`：调整 async（implementation）。
- 修改 `extensions/feishu/src/bitable.ts`：调整 bitable（implementation）。
- 修改 `extensions/feishu/src/bot-content.ts`：调整 bot content（implementation）。
- 修改 `extensions/feishu/src/chat.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/chat.ts`：调整 chat（implementation）。
- 修改 `extensions/feishu/src/comment-dispatcher.ts`：调整 comment dispatcher（implementation）。
- 修改 `extensions/feishu/src/comment-handler-runtime-api.ts`：调整 comment handler runtime api（implementation）。
- 修改 `extensions/feishu/src/comment-handler.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/feishu/src/comment-handler.ts`：调整 comment handler（implementation）。
- 修改 `extensions/feishu/src/comment-shared.ts`：调整 comment shared（implementation）。
- 修改 `extensions/feishu/src/comment-target.ts`：调整 comment target（implementation）。
- 其余 40 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/skill-plugins/feishu` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/feishu/change-to-test.md` 的验证建议。
