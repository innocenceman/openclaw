# extensions/auth-integration-plugins/diagnostics-otel

## 1. 功能结论

**修改**：diagnostics drop stale session recovery event cases、telegram reuse preview for long text finals、sync Codex app-server protocol、lint cover diagnostic phase events；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 5

## 3. 功能级详细差异

### 修复 classify session liveness diagnostics

修复 classify session liveness diagnostics

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 diagnostics drop stale session recovery event cases

修复 diagnostics：drop stale session recovery event cases

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 lint cover diagnostic phase events

修复 lint：cover diagnostic phase events

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 plugins keep externalized launch installs on npm

修复 plugins：keep externalized launch installs on npm

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 plugins repair missing clawhub installs

修复 plugins：repair missing clawhub installs

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 sync Codex app-server protocol

修复 sync Codex app-server protocol

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 telemetry bound message diagnostics labels

修复 telemetry：bound message diagnostics labels

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 plugins externalize acpx release packages

构建/发布调整 plugins：externalize acpx release packages

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 构建/发布调整 prepare next external plugin beta batch

构建/发布调整 prepare next external plugin beta batch

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 diagnostics otel public API barrel、plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 service regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/auth-integration-plugins/diagnostics-otel`
- Changed path count: `5`
- Status counts: `修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `5` files, `+2894` / `-150`

### 归纳依据

- 主要落点：manifest/package metadata、plugin entry/API surface、tests/contracts、implementation。
- 新增或暴露的关键符号包括：`TOOL_SPAN_ID`, `ORIGINAL_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT`, `ORIGINAL_OTEL_EXPORTER_OTLP_METRICS_ENDPOINT`, `ORIGINAL_OTEL_EXPORTER_OTLP_LOGS_ENDPOINT`, `ORIGINAL_OTEL_SEMCONV_STABILITY_OPT_IN`。
- 建议优先验证：优先运行 `pnpm test -- extensions/diagnostics-otel/src/service.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(diagnostics): drop stale session recovery event cases；fix(telegram): reuse preview for long text finals；fix: sync Codex app-server protocol；fix(lint): cover diagnostic phase events；fix(telemetry): bound message diagnostics labels；fix(plugins): keep externalized launch installs on npm；fix(plugins): repair missing clawhub installs；build(plugins): externalize acpx release packages

### Dimension evidence

- `maintenance-修复-classify-session-liveness-diagnostics` / 修复 classify session liveness diagnostics:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `maintenance-修复-diagnostics-drop-stale-session-recovery-even` / 修复 diagnostics drop stale session recovery event cases:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `maintenance-修复-lint-cover-diagnostic-phase-events` / 修复 lint cover diagnostic phase events:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `maintenance-修复-plugins-keep-externalized-launch-installs-on` / 修复 plugins keep externalized launch installs on npm:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `maintenance-修复-plugins-repair-missing-clawhub-installs` / 修复 plugins repair missing clawhub installs:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts`
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json`
  - source: `path` [M] `extensions/diagnostics-otel/package.json`
- `maintenance-修复-sync-Codex-app-server-protocol` / 修复 sync Codex app-server protocol:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts`
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json`
  - source: `path` [M] `extensions/diagnostics-otel/package.json`
- `maintenance-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts`
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json`
  - source: `path` [M] `extensions/diagnostics-otel/package.json`
- `maintenance-修复-telemetry-bound-message-diagnostics-labels` / 修复 telemetry bound message diagnostics labels:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `integration-build-release-构建-发布调整-plugins-externalize-acpx-release-packag` / 构建/发布调整 plugins externalize acpx release packages:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `integration-build-release-构建-发布调整-prepare-next-external-plugin-beta-batch` / 构建/发布调整 prepare next external plugin beta batch:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — semantic cue
  - source: `path` [M] `extensions/diagnostics-otel/src/service.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/diagnostics-otel/api.ts` — contract evidence
  - source: `path` [M] `extensions/diagnostics-otel/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/diagnostics-otel/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/diagnostics-otel/src/service.test.ts` — test evidence

### 路径证据

- 修改 `extensions/diagnostics-otel/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/diagnostics-otel/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/diagnostics-otel/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/diagnostics-otel/src/service.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/diagnostics-otel/src/service.ts`：调整 service（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/auth-integration-plugins/diagnostics-otel` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/auth-integration-plugins/diagnostics-otel/change-to-test.md` 的验证建议。
