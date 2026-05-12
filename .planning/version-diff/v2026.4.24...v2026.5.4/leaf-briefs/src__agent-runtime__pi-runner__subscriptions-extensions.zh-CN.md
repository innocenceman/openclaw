# src/agent-runtime/pi-runner/subscriptions-extensions

## 1. 功能结论

**新增**：agents add tool progress detail modes、opt-in reaction tool tracking；**修改**：agents avoid duplicate generated media attachments、agents align slack target normalization assertion、scope messaging tool final reply dedupe、agents detect incomplete tool-use turns with pre-tool text；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 38

## 3. 功能级详细差异

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修复 agents avoid duplicate generated media attachments

修复 agents：avoid duplicate generated media attachments

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修复 agents classify tool-execution timeouts

修复 agents：classify tool-execution timeouts

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修复 agents detect incomplete tool-use turns with pre-tool text

修复 agents：detect incomplete tool-use turns with pre-tool text

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修复 keep media provider inventory internal

修复 keep media provider inventory internal

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修复 scope messaging tool final reply dedupe

修复 scope messaging tool final reply dedupe

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 修改 agents trim tool-timeout comments

修改 agents：trim tool-timeout comments

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 新增 agents add tool progress detail modes

新增 agents：add tool progress detail modes

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 新增 opt-in reaction tool tracking

新增 opt-in reaction tool tracking

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 测试覆盖 agents align slack target normalization assertion

测试覆盖 agents：align slack target normalization assertion

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 pi embedded helpers.formatassistanterrortext regression/contract coverage、pi embedded helpers.isbillingerrormessage regression/contract coverage、pi embedded helpers.sanitize session messages images.removes empty assistant text blocks but preserves regression/contract coverage、pi embedded helpers.sanitizeuserfacingtext regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 pi embedded helpers.formatassistanterrortext regression/contract coverage、pi embedded helpers.isbillingerrormessage regression/contract coverage、pi embedded helpers.sanitize session messages images.removes empty assistant text blocks but preserves regression/contract coverage、pi embedded helpers.sanitizeuserfacingtext regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions`
- Changed path count: `40`
- Status counts: `新增 2、修改 38`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `40` files, `+2726` / `-328`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`isGenericUnknownStreamError`, `CJK_AUTH_ERROR_PATTERNS`, `isGemma4ModelRequiringReasoningStrip`, `EMPTY_CONTENT_PLACEHOLDER`, `dropEmptyTextBlocks`, `ensureNonEmptyContent`, `MIN_REVERSE_SUBSTRING_DUPLICATE_RATIO`。
- 建议优先验证：优先运行 `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`。
- 相关 commit 主题：fix(agents): avoid duplicate generated media attachments；test(agents): align slack target normalization assertion；fix: scope messaging tool final reply dedupe；feat(agents): add tool progress detail modes；Add opt-in reaction tool tracking；fix(agents): detect incomplete tool-use turns with pre-tool text；fix: keep media provider inventory internal；style(agents): trim tool-timeout comments

### Dimension evidence

- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.emits-reasoning-as-separate-message-enabled.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts` — semantic cue
- `maintenance-修复-agents-avoid-duplicate-generated-media-attac` / 修复 agents avoid duplicate generated media attachments:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `maintenance-修复-agents-classify-tool-execution-timeouts` / 修复 agents classify tool-execution timeouts:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `maintenance-修复-agents-detect-incomplete-tool-use-turns-with` / 修复 agents detect incomplete tool-use turns with pre-tool text:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `maintenance-修复-keep-media-provider-inventory-internal` / 修复 keep media provider inventory internal:
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.tools.media.test.ts` — semantic cue
- `maintenance-修复-scope-messaging-tool-final-reply-dedupe` / 修复 scope messaging tool final reply dedupe:
  - source: `path` [M] `src/agents/pi-embedded-helpers/messaging-dedupe.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts` — semantic cue
- `maintenance-修改-agents-trim-tool-timeout-comments` / 修改 agents trim tool-timeout comments:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `maintenance-新增-agents-add-tool-progress-detail-modes` / 新增 agents add tool progress detail modes:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `maintenance-新增-opt-in-reaction-tool-tracking` / 新增 opt-in reaction tool tracking:
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.handlers.tools.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.tool-text-diagnostics.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-subscribe.tools.extract.test.ts` — semantic cue
- `tests-docs-测试覆盖-agents-align-slack-target-normalization-as` / 测试覆盖 agents align slack target normalization assertion:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — semantic cue
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — contract evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers.validate-turns.test.ts` — test evidence
  - source: `path` [M] `src/agents/pi-embedded-helpers/errors.test.ts` — test evidence

### 路径证据

- 新增 `src/agents/pi-embedded-helpers/errors.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/pi-embedded-subscribe.tool-text-diagnostics.ts`：调整 pi embedded subscribe.tool text diagnostics（agent runtime）。
- 修改 `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-helpers.validate-turns.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-helpers/errors.ts`：调整 errors（agent runtime）。
- 修改 `src/agents/pi-embedded-helpers/failover-matches.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/pi-embedded-helpers/failover-matches.ts`：调整 failover matches（agent runtime）。
- 修改 `src/agents/pi-embedded-helpers/google.ts`：调整 google（agent runtime）。
- 修改 `src/agents/pi-embedded-helpers/images.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `src/agents/pi-embedded-helpers/messaging-dedupe.ts`：调整 messaging dedupe（agent runtime）。
- 修改 `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`：调整 sanitize user facing text（agent runtime）。
- 其余 26 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/pi-runner/subscriptions-extensions` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/pi-runner/subscriptions-extensions/change-to-test.md` 的验证建议。
