# docs/mintlify/web

## 1. 功能结论

**文档/生成基线同步**：dashboard guide manual token auth fallback、Refine responsive Control UI chat controls、add control UI responsiveness diagnostics、scope Control UI assistant media tickets；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 5

## 3. 功能级详细差异

### 修复 dashboard guide manual token auth fallback

文档/生成基线同步记录：修复 dashboard：guide manual token auth fallback

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 keep bootstrap context in system prompt

文档/生成基线同步记录：修复 keep bootstrap context in system prompt

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

文档/生成基线同步记录：修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 scope Control UI assistant media tickets

文档/生成基线同步记录：修复 scope Control UI assistant media tickets

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 ui surface compaction checkpoints in chat history

文档/生成基线同步记录：修复 ui：surface compaction checkpoints in chat history

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 ui update tweakcn appearance link

文档/生成基线同步记录：修复 ui：update tweakcn appearance link

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 Refine responsive Control UI chat controls

文档/生成基线同步记录：修改 Refine responsive Control UI chat controls

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 clarify webchat transcript persistence

文档/生成基线同步记录：文档同步 clarify webchat transcript persistence

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add control UI responsiveness diagnostics

文档/生成基线同步记录：新增 add control UI responsiveness diagnostics

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 webchat add server-side dictation

文档/生成基线同步记录：新增 webchat：add server-side dictation

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 control ui docs、dashboard docs、index docs、tui docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/web`
- Changed path count: `5`
- Status counts: `修改 5`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `5` files, `+346` / `-258`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix(dashboard): guide manual token auth fallback；Refine responsive Control UI chat controls；feat: add control UI responsiveness diagnostics；fix: scope Control UI assistant media tickets；fix(ui): update tweakcn appearance link；docs: clarify webchat transcript persistence；fix: keep bootstrap context in system prompt；fix(ui): surface compaction checkpoints in chat history

### Dimension evidence

- `tests-docs-修复-dashboard-guide-manual-token-auth-fallback` / 修复 dashboard guide manual token auth fallback:
  - source: `path` [M] `docs/web/dashboard.md` — semantic cue
- `tests-docs-修复-keep-bootstrap-context-in-system-prompt` / 修复 keep bootstrap context in system prompt:
  - source: `path` [M] `docs/web/index.md` — semantic cue
- `tests-docs-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [M] `docs/web/control-ui.md`
  - source: `path` [M] `docs/web/dashboard.md`
  - source: `path` [M] `docs/web/index.md`
- `tests-docs-修复-scope-Control-UI-assistant-media-tickets` / 修复 scope Control UI assistant media tickets:
  - source: `path` [M] `docs/web/control-ui.md` — semantic cue
  - source: `path` [M] `docs/web/tui.md` — semantic cue
- `tests-docs-修复-ui-surface-compaction-checkpoints-in-chat-hi` / 修复 ui surface compaction checkpoints in chat history:
  - source: `path` [M] `docs/web/control-ui.md` — semantic cue
  - source: `path` [M] `docs/web/index.md` — semantic cue
  - source: `path` [M] `docs/web/tui.md` — semantic cue
  - source: `path` [M] `docs/web/webchat.md` — semantic cue
- `tests-docs-修复-ui-update-tweakcn-appearance-link` / 修复 ui update tweakcn appearance link:
  - source: `path` [M] `docs/web/control-ui.md` — semantic cue
  - source: `path` [M] `docs/web/tui.md` — semantic cue
- `tests-docs-修改-Refine-responsive-Control-UI-chat-controls` / 修改 Refine responsive Control UI chat controls:
  - source: `path` [M] `docs/web/control-ui.md` — semantic cue
  - source: `path` [M] `docs/web/tui.md` — semantic cue
  - source: `path` [M] `docs/web/webchat.md` — semantic cue
- `tests-docs-文档同步-clarify-webchat-transcript-persistence` / 文档同步 clarify webchat transcript persistence:
  - source: `path` [M] `docs/web/webchat.md` — semantic cue
- `tests-docs-新增-add-control-UI-responsiveness-diagnostics` / 新增 add control UI responsiveness diagnostics:
  - source: `path` [M] `docs/web/control-ui.md` — semantic cue
  - source: `path` [M] `docs/web/tui.md` — semantic cue
- `tests-docs-新增-webchat-add-server-side-dictation` / 新增 webchat add server-side dictation:
  - source: `path` [M] `docs/web/webchat.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/web/control-ui.md` — docs evidence
  - source: `path` [M] `docs/web/dashboard.md` — docs evidence
  - source: `path` [M] `docs/web/index.md` — docs evidence
  - source: `path` [M] `docs/web/tui.md` — docs evidence
  - source: `path` [M] `docs/web/webchat.md` — docs evidence

### 路径证据

- 修改 `docs/web/control-ui.md`：调整 control ui docs（docs）。
- 修改 `docs/web/dashboard.md`：调整 dashboard docs（docs）。
- 修改 `docs/web/index.md`：调整 index docs（docs）。
- 修改 `docs/web/tui.md`：调整 tui docs（docs）。
- 修改 `docs/web/webchat.md`：调整 webchat docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/web` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/web/change-to-test.md` 的验证建议。
