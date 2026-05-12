# extensions/memory-media-voice-plugins/voice-call

## 1. 功能结论

**修改**：voice-call bound realtime audio pacing、voice-call end realtime completed calls、google-meet keep realtime Twilio joins alive、voice-call scope call control gateway methods；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 8、修改 46、删除 1

## 3. 功能级详细差异

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 优化 voice-call trim realtime audio copies

优化 voice-call：trim realtime audio copies

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 google-meet keep realtime Twilio joins alive

修复 google-meet：keep realtime Twilio joins alive

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 improve google meet twilio join sequencing

修复 improve google meet twilio join sequencing

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call bound realtime audio pacing

修复 voice-call：bound realtime audio pacing

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call end realtime completed calls

修复 voice-call：end realtime completed calls

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call fallback on gateway 1006 closes

修复 voice-call：fallback on gateway 1006 closes

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call pace realtime Twilio audio

修复 voice-call：pace realtime Twilio audio

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call scope call control gateway methods

修复 voice-call：scope call control gateway methods

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 voice-call summarize restored call verification logs

修复 voice-call：summarize restored call verification logs

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 voice call public API barrel、plugin manifest/control-plane metadata、runtime api、config compat，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 README docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 voice call plugin entrypoint、cli regression/contract coverage、config regression/contract coverage、manager.notify regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `providers plugin entrypoint`（`extensions/voice-call/src/providers/index.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call`
- Changed path count: `55`
- Status counts: `新增 8、修改 46、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `55` files, `+5061` / `-408`

### 归纳依据

- 主要落点：implementation、tests/contracts、plugin entry/API surface、configuration/schema、manifest/package metadata、streaming/reasoning、speech/TTS、docs。
- 新增或暴露的关键符号包括：`createCallRecord`, `envRef`, `VOICE_CALL_WRITE_METHOD_SCOPE`, `VOICE_CALL_READ_METHOD_SCOPE`, `isCliOnlyProcess`, `GatewayMethod`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/voice-call`；`pnpm test:extensions`。
- 相关 commit 主题：fix(voice-call): bound realtime audio pacing；fix(voice-call): end realtime completed calls；fix(google-meet): keep realtime Twilio joins alive；fix(voice-call): scope call control gateway methods；perf(voice-call): trim realtime audio copies；fix(voice-call): pace realtime Twilio audio；fix(voice-call): fallback on gateway 1006 closes；fix(voice-call): summarize restored call verification logs

### Dimension evidence

- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `extensions/voice-call/src/manager.restore.test.ts` — semantic cue
- `maintenance-优化-voice-call-trim-realtime-audio-copies` / 优化 voice-call trim realtime audio copies:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-google-meet-keep-realtime-Twilio-joins-alive` / 修复 google-meet keep realtime Twilio joins alive:
  - source: `path` [M] `extensions/voice-call/src/providers/twilio.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/api.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/twiml-policy.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/realtime-fast-context.test.ts` — semantic cue
- `maintenance-修复-improve-google-meet-twilio-join-sequencing` / 修复 improve google meet twilio join sequencing:
  - source: `path` [M] `extensions/voice-call/src/providers/twilio.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/api.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/src/providers/twilio/twiml-policy.ts` — semantic cue
- `maintenance-修复-voice-call-bound-realtime-audio-pacing` / 修复 voice-call bound realtime audio pacing:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-voice-call-end-realtime-completed-calls` / 修复 voice-call end realtime completed calls:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-voice-call-fallback-on-gateway-1006-closes` / 修复 voice-call fallback on gateway 1006 closes:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-voice-call-pace-realtime-Twilio-audio` / 修复 voice-call pace realtime Twilio audio:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-voice-call-scope-call-control-gateway-methods` / 修复 voice-call scope call control gateway methods:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `maintenance-修复-voice-call-summarize-restored-call-verificat` / 修复 voice-call summarize restored call verification logs:
  - source: `path` [M] `extensions/voice-call/README.md` — semantic cue
  - source: `path` [M] `extensions/voice-call/api.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/index.ts` — semantic cue
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/voice-call/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/voice-call/api.ts` — contract evidence
  - source: `path` [M] `extensions/voice-call/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/voice-call/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/voice-call/src/config-compat.ts` — contract evidence
  - source: `path` [M] `extensions/voice-call/src/config.test.ts` — contract evidence
  - source: `path` [M] `extensions/voice-call/src/config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/voice-call/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/voice-call/README.md` — docs evidence
  - source: `path` [M] `extensions/voice-call/index.test.ts` — test evidence
  - source: `path` [M] `extensions/voice-call/src/cli.test.ts` — test evidence
  - source: `path` [M] `extensions/voice-call/src/config.test.ts` — test evidence
  - source: `path` [M] `extensions/voice-call/src/manager.notify.test.ts` — test evidence
  - source: `path` [M] `extensions/voice-call/src/manager.restore.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/voice-call/src/providers/index.ts`

### 路径证据

- 新增 `extensions/voice-call/src/cli.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/voice-call/src/gateway-continue-operation.ts`：调整 gateway continue operation（gateway runtime）。
- 新增 `extensions/voice-call/src/realtime-fast-context.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/voice-call/src/realtime-fast-context.ts`：调整 realtime fast context（implementation）。
- 新增 `extensions/voice-call/src/webhook-exposure.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/voice-call/src/webhook-exposure.ts`：调整 webhook exposure（implementation）。
- 新增 `extensions/voice-call/src/webhook/realtime-audio-pacer.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/voice-call/src/webhook/realtime-audio-pacer.ts`：调整 realtime audio pacer（implementation）。
- 修改 `extensions/voice-call/README.md`：调整 README docs（docs）。
- 修改 `extensions/voice-call/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/voice-call/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/voice-call/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/voice-call/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/voice-call/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/voice-call/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/voice-call/src/cli.ts`：调整 cli（implementation）。
- 修改 `extensions/voice-call/src/config-compat.ts`：调整 config compat（configuration/schema）。
- 修改 `extensions/voice-call/src/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/voice-call/src/config.ts`：调整 src config（configuration/schema）。
- 修改 `extensions/voice-call/src/http-headers.ts`：调整 http headers（implementation）。
- 删除 `extensions/voice-call/src/providers/index.ts`：移除旧的 plugin entry/API surface 文件；需要确认没有调用方继续依赖这个路径。
- 其余 34 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/memory-media-voice-plugins/voice-call` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/memory-media-voice-plugins/voice-call/change-to-test.md` 的验证建议。
