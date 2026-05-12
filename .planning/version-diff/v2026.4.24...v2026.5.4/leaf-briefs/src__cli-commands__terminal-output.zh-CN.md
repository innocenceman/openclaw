# src/cli-commands/terminal-output

## 1. 功能结论

**新增**：commands add side alias for btw；**修改**：tui preserve code spans, code blocks, and dotted/hyphenated identifiers from long-token sanitizer、tui abort run during pre-event waiting gap、gateway bound sessions list responses、simplify stale response notice；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 5、修改 30

## 3. 功能级详细差异

### 优化 status lazy-load harness selection

优化 status：lazy-load harness selection

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 expose session-specific thinking levels

修复 expose session-specific thinking levels

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 gateway bound sessions list responses

修复 gateway：bound sessions list responses

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 tui abort run during pre-event waiting gap

修复 tui：abort run during pre-event waiting gap

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 tui preserve code spans, code blocks, and dotted/hyphenated identifi…

修复 tui：preserve code spans, code blocks, and dotted/hyphenated identifiers from long-token sanitizer

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 [codex] Fix Codex OAuth status auth label

修改 [codex] Fix Codex OAuth status auth label

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 bound hatch TUI timeout

修改 bound hatch TUI timeout

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修改 simplify stale response notice

修改 simplify stale response notice

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 commands add side alias for btw

新增 commands：add side alias for btw

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 fix tui command completion typecheck

测试覆盖 fix tui command completion typecheck

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 progress regression/contract coverage、progress、payload、status message，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 progress regression/contract coverage、osc progress regression/contract coverage、prompt select styled regression/contract coverage、stream writer regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `cli-command-surface`
- Impact-map dir: `.planning/impact-map/src/cli-commands/terminal-output`
- Changed path count: `35`
- Status counts: `新增 5、修改 30`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `35` files, `+2100` / `-302`

### 归纳依据

- 主要落点：implementation、tests/contracts、CLI/command behavior、session/state handling、gateway runtime、message delivery、streaming/reasoning。
- 新增或暴露的关键符号包括：`withStdinIsRaw`, `shouldUseInteractiveProgressSpinner`, `resolveChannelModelNote`, `loadAgentHarnessSelectionRuntime`, `resolveStatusAuthProvider`, `OSC_PROGRESS_PREFIX`, `OSC_PROGRESS_ST`, `OSC_PROGRESS_BEL`, `OSC_PROGRESS_C1_ST`, `supportsOscProgress`。
- 建议优先验证：优先运行 `| pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(tui): preserve code spans, code blocks, and dotted/hyphenated identifiers from long-token sanitizer；fix(tui): abort run during pre-event waiting gap；fix(gateway): bound sessions list responses；TUI: simplify stale response notice；feat(commands): add side alias for btw；test: fix tui command completion typecheck；fix: expose session-specific thinking levels；Wizard: bound hatch TUI timeout

### Dimension evidence

- `maintenance-优化-status-lazy-load-harness-selection` / 优化 status lazy-load harness selection:
  - source: `path` [M] `src/status/status-message.ts` — semantic cue
  - source: `path` [M] `src/status/status-text.ts` — semantic cue
  - source: `path` [M] `src/status/status-text.types.ts` — semantic cue
- `runtime-behavior-修复-expose-session-specific-thinking-levels` / 修复 expose session-specific thinking levels:
  - source: `path` [A] `src/terminal/osc-progress.test.ts`
  - source: `path` [A] `src/terminal/osc-progress.ts`
  - source: `path` [A] `src/terminal/prompt-select-styled-params.ts`
  - source: `path` [M] `src/cli/progress.test.ts`
  - source: `path` [M] `src/cli/progress.ts`
  - source: `path` [M] `src/interactive/payload.ts`
- `maintenance-修复-gateway-bound-sessions-list-responses` / 修复 gateway bound sessions list responses:
  - source: `path` [M] `src/tui/gateway-chat.test.ts` — semantic cue
  - source: `path` [M] `src/tui/gateway-chat.ts` — semantic cue
- `user-visible-修复-tui-abort-run-during-pre-event-waiting-gap` / 修复 tui abort run during pre-event waiting gap:
  - source: `path` [M] `src/tui/commands.test.ts` — semantic cue
  - source: `path` [M] `src/tui/commands.ts` — semantic cue
  - source: `path` [M] `src/tui/components/fuzzy-filter.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.test.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.ts` — semantic cue
  - source: `path` [M] `src/tui/gateway-chat.test.ts` — semantic cue
- `user-visible-修复-tui-preserve-code-spans-code-blocks-and-do` / 修复 tui preserve code spans, code blocks, and dotted/hyphenated identifi…:
  - source: `path` [M] `src/tui/commands.test.ts` — semantic cue
  - source: `path` [M] `src/tui/commands.ts` — semantic cue
  - source: `path` [M] `src/tui/components/fuzzy-filter.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.test.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.ts` — semantic cue
  - source: `path` [M] `src/tui/gateway-chat.test.ts` — semantic cue
- `maintenance-修改-codex-Fix-Codex-OAuth-status-auth-label` / 修改 [codex] Fix Codex OAuth status auth label:
  - source: `path` [M] `src/status/status-message.ts` — semantic cue
  - source: `path` [M] `src/status/status-text.ts` — semantic cue
  - source: `path` [M] `src/status/status-text.types.ts` — semantic cue
- `user-visible-修改-bound-hatch-TUI-timeout` / 修改 bound hatch TUI timeout:
  - source: `path` [M] `src/tui/commands.test.ts` — semantic cue
  - source: `path` [M] `src/tui/commands.ts` — semantic cue
  - source: `path` [M] `src/tui/components/fuzzy-filter.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.test.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.ts` — semantic cue
  - source: `path` [M] `src/tui/gateway-chat.test.ts` — semantic cue
- `maintenance-修改-simplify-stale-response-notice` / 修改 simplify stale response notice:
  - source: `path` [A] `src/terminal/osc-progress.test.ts`
  - source: `path` [A] `src/terminal/osc-progress.ts`
  - source: `path` [A] `src/terminal/prompt-select-styled-params.ts`
  - source: `path` [M] `src/cli/progress.test.ts`
  - source: `path` [M] `src/cli/progress.ts`
  - source: `path` [M] `src/interactive/payload.ts`
- `maintenance-新增-commands-add-side-alias-for-btw` / 新增 commands add side alias for btw:
  - source: `path` [M] `src/tui/commands.test.ts` — semantic cue
  - source: `path` [M] `src/tui/commands.ts` — semantic cue
  - source: `path` [M] `src/tui/tui-formatters.test.ts` — semantic cue
  - source: `path` [M] `src/tui/tui-formatters.ts` — semantic cue
- `user-visible-测试覆盖-fix-tui-command-completion-typecheck` / 测试覆盖 fix tui command completion typecheck:
  - source: `path` [M] `src/tui/commands.test.ts` — semantic cue
  - source: `path` [M] `src/tui/commands.ts` — semantic cue
  - source: `path` [M] `src/tui/components/fuzzy-filter.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.test.ts` — semantic cue
  - source: `path` [M] `src/tui/embedded-backend.ts` — semantic cue
  - source: `path` [M] `src/tui/gateway-chat.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/cli/progress.test.ts` — contract evidence
  - source: `path` [M] `src/cli/progress.ts` — contract evidence
  - source: `path` [M] `src/interactive/payload.ts` — contract evidence
  - source: `path` [M] `src/status/status-message.ts` — contract evidence
  - source: `path` [M] `src/status/status-text.ts` — contract evidence
  - source: `path` [M] `src/status/status-text.types.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/cli/progress.test.ts` — test evidence
  - source: `path` [M] `src/terminal/osc-progress.test.ts` — test evidence
  - source: `path` [M] `src/terminal/prompt-select-styled.test.ts` — test evidence
  - source: `path` [M] `src/terminal/stream-writer.test.ts` — test evidence
  - source: `path` [M] `src/tui/commands.test.ts` — test evidence
  - source: `path` [M] `src/tui/embedded-backend.test.ts` — test evidence

### 路径证据

- 新增 `src/terminal/osc-progress.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/terminal/osc-progress.ts`：调整 osc progress（implementation）。
- 新增 `src/terminal/prompt-select-styled-params.ts`：调整 prompt select styled params（implementation）。
- 新增 `src/tui/tui-last-session.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/tui/tui-last-session.ts`：调整 tui last session（session/state handling）。
- 修改 `src/cli/progress.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/cli/progress.ts`：调整 progress（CLI/command behavior）。
- 修改 `src/interactive/payload.ts`：调整 payload（implementation）。
- 修改 `src/status/status-message.ts`：调整 status message（message delivery）。
- 修改 `src/status/status-text.ts`：调整 status text（implementation）。
- 修改 `src/status/status-text.types.ts`：调整 status text（implementation）。
- 修改 `src/terminal/prompt-select-styled.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/terminal/prompt-select-styled.ts`：调整 prompt select styled（implementation）。
- 修改 `src/terminal/stream-writer.test.ts`：调整流式请求 payload wrapper、reasoning/replay 或 provider routing 行为。
- 修改 `src/tui/commands.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/tui/commands.ts`：调整 commands（CLI/command behavior）。
- 修改 `src/tui/components/fuzzy-filter.ts`：调整 fuzzy filter（implementation）。
- 其余 18 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/cli-commands/terminal-output` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/cli-commands/terminal-output/change-to-test.md` 的验证建议。
