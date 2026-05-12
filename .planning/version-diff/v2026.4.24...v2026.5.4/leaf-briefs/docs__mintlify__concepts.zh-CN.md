# docs/mintlify/concepts

## 1. 功能结论

**文档/生成基线同步**：telegram reuse preview for long text finals、channels inline Slack manifest into Quick Setup with Recommended/Minimal variants、instructions for how to setup slack for QA tests、model guide runtime allowlist repairs；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 8、修改 29

## 3. 功能级详细差异

### 修复 compact progress draft lines

文档/生成基线同步记录：修复 compact progress draft lines

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 model guide runtime allowlist repairs

文档/生成基线同步记录：修复 model：guide runtime allowlist repairs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 resolve small triage issues

文档/生成基线同步记录：修复 resolve small triage issues

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

文档/生成基线同步记录：修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram stabilize reply dispatch runtime

文档/生成基线同步记录：修复 telegram：stabilize reply dispatch runtime

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 qa build Crabbox CLI for Mantis desktop runs

文档/生成基线同步记录：修改 qa：build Crabbox CLI for Mantis desktop runs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 channels inline Slack manifest into Quick Setup with Recommended/M…

文档/生成基线同步记录：文档同步 channels：inline Slack manifest into Quick Setup with Recommended/Minimal variants

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add rich Slack progress drafts

文档/生成基线同步记录：新增 add rich Slack progress drafts

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 instructions for how to setup slack for QA tests

文档/生成基线同步记录：新增 instructions for how to setup slack for QA tests

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 qa add mantis Slack desktop smoke

文档/生成基线同步记录：新增 qa：add mantis Slack desktop smoke

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 active memory docs、agent loop docs、agent runtimes docs、agent workspace docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/concepts`
- Changed path count: `37`
- Status counts: `新增 8、修改 29`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `37` files, `+4632` / `-1608`

### 归纳依据

- 主要落点：docs、session/state handling、agent runtime、message delivery、auth/pairing/security behavior、streaming/reasoning。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix(telegram): reuse preview for long text finals；docs(channels): inline Slack manifest into Quick Setup with Recommended/Minimal variants；Add instructions for how to setup slack for QA tests；fix(model): guide runtime allowlist repairs；fix: resolve small triage issues；fix(telegram): stabilize reply dispatch runtime；feat: add rich Slack progress drafts；fix: compact progress draft lines

### Dimension evidence

- `tests-docs-修复-compact-progress-draft-lines` / 修复 compact progress draft lines:
  - source: `path` [M] `docs/concepts/compaction.md` — semantic cue
  - source: `path` [M] `docs/concepts/progress-drafts.md` — semantic cue
- `tests-docs-修复-model-guide-runtime-allowlist-repairs` / 修复 model guide runtime allowlist repairs:
  - source: `path` [M] `docs/concepts/agent-runtimes.md` — semantic cue
  - source: `path` [M] `docs/concepts/model-failover.md` — semantic cue
  - source: `path` [M] `docs/concepts/model-providers.md` — semantic cue
  - source: `path` [M] `docs/concepts/models.md` — semantic cue
- `tests-docs-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `docs/concepts/channel-docking.md`
  - source: `path` [A] `docs/concepts/commitments.md`
  - source: `path` [A] `docs/concepts/mantis.md`
  - source: `path` [M] `docs/concepts/active-memory.md`
  - source: `path` [M] `docs/concepts/agent-loop.md`
  - source: `path` [M] `docs/concepts/agent-runtimes.md`
- `tests-docs-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `docs/concepts/context-engine.md` — semantic cue
- `tests-docs-修复-telegram-stabilize-reply-dispatch-runtime` / 修复 telegram stabilize reply dispatch runtime:
  - source: `path` [M] `docs/concepts/agent-runtimes.md` — semantic cue
- `tests-docs-修改-qa-build-Crabbox-CLI-for-Mantis-desktop-runs` / 修改 qa build Crabbox CLI for Mantis desktop runs:
  - source: `path` [M] `docs/concepts/mantis.md` — semantic cue
  - source: `path` [M] `docs/concepts/qa-e2e-automation.md` — semantic cue
  - source: `path` [M] `docs/concepts/qa-matrix.md` — semantic cue
- `tests-docs-文档同步-channels-inline-Slack-manifest-into-Quick` / 文档同步 channels inline Slack manifest into Quick Setup with Recommended/M…:
  - source: `path` [A] `docs/concepts/channel-docking.md`
  - source: `path` [A] `docs/concepts/commitments.md`
  - source: `path` [A] `docs/concepts/mantis.md`
  - source: `path` [M] `docs/concepts/active-memory.md`
  - source: `path` [M] `docs/concepts/agent-loop.md`
  - source: `path` [M] `docs/concepts/agent-runtimes.md`
- `tests-docs-新增-add-rich-Slack-progress-drafts` / 新增 add rich Slack progress drafts:
  - source: `path` [M] `docs/concepts/progress-drafts.md` — semantic cue
- `tests-docs-新增-instructions-for-how-to-setup-slack-for-QA-t` / 新增 instructions for how to setup slack for QA tests:
  - source: `path` [M] `docs/concepts/qa-e2e-automation.md` — semantic cue
  - source: `path` [M] `docs/concepts/qa-matrix.md` — semantic cue
  - source: `path` [M] `docs/concepts/session-tool.md` — semantic cue
- `tests-docs-新增-qa-add-mantis-Slack-desktop-smoke` / 新增 qa add mantis Slack desktop smoke:
  - source: `path` [M] `docs/concepts/mantis.md` — semantic cue
  - source: `path` [M] `docs/concepts/qa-e2e-automation.md` — semantic cue
  - source: `path` [M] `docs/concepts/qa-matrix.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/concepts/active-memory.md` — docs evidence
  - source: `path` [M] `docs/concepts/agent-loop.md` — docs evidence
  - source: `path` [M] `docs/concepts/agent-runtimes.md` — docs evidence
  - source: `path` [M] `docs/concepts/agent-workspace.md` — docs evidence
  - source: `path` [M] `docs/concepts/agent.md` — docs evidence
  - source: `path` [M] `docs/concepts/channel-docking.md` — docs evidence

### 路径证据

- 新增 `docs/concepts/channel-docking.md`：调整 channel docking docs（docs）。
- 新增 `docs/concepts/commitments.md`：调整 commitments docs（docs）。
- 新增 `docs/concepts/mantis.md`：调整 mantis docs（docs）。
- 新增 `docs/concepts/openclaw-sdk.md`：调整 openclaw sdk docs（docs）。
- 新增 `docs/concepts/parallel-specialist-lanes.md`：调整 parallel specialist lanes docs（docs）。
- 新增 `docs/concepts/progress-drafts.md`：调整 progress drafts docs（docs）。
- 新增 `docs/concepts/qa-matrix.md`：调整 qa matrix docs（docs）。
- 新增 `docs/concepts/queue-steering.md`：调整 queue steering docs（docs）。
- 修改 `docs/concepts/active-memory.md`：调整 active memory docs（docs）。
- 修改 `docs/concepts/agent-loop.md`：调整 agent loop docs（docs）。
- 修改 `docs/concepts/agent-runtimes.md`：调整 agent runtimes docs（agent runtime）。
- 修改 `docs/concepts/agent-workspace.md`：调整 agent workspace docs（docs）。
- 修改 `docs/concepts/agent.md`：调整 agent docs（docs）。
- 修改 `docs/concepts/compaction.md`：调整 compaction docs（docs）。
- 修改 `docs/concepts/context-engine.md`：调整 context engine docs（docs）。
- 修改 `docs/concepts/delegate-architecture.md`：调整 delegate architecture docs（docs）。
- 修改 `docs/concepts/dreaming.md`：调整 dreaming docs（docs）。
- 修改 `docs/concepts/experimental-features.md`：调整 experimental features docs（docs）。
- 修改 `docs/concepts/memory-builtin.md`：调整 memory builtin docs（docs）。
- 修改 `docs/concepts/memory-qmd.md`：调整 memory qmd docs（docs）。
- 其余 17 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/concepts` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/concepts/change-to-test.md` 的验证建议。
