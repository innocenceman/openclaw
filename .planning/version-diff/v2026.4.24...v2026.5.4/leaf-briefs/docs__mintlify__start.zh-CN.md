# docs/mintlify/start

## 1. 功能结论

**文档/生成基线同步**：auto-repair gateway watch startup、support home-relative media paths、load source bundled plugins from pnpm workspaces、gateway run watch mode in tmux；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 6

## 3. 功能级详细差异

### 修复 agents harden bootstrap and ACP session routing

文档/生成基线同步记录：修复 agents：harden bootstrap and ACP session routing

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 auto-repair gateway watch startup

文档/生成基线同步记录：修复 auto-repair gateway watch startup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 docs make docs formatter mintlify-safe

文档/生成基线同步记录：修复 docs：make docs formatter mintlify-safe

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 load source bundled plugins from pnpm workspaces

文档/生成基线同步记录：修复 load source bundled plugins from pnpm workspaces

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 onboard infer custom model image input

文档/生成基线同步记录：修复 onboard：infer custom model image input

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 support home-relative media paths

文档/生成基线同步记录：修复 support home-relative media paths

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 automation+start batch fix filler openings and prose Tip

文档/生成基线同步记录：文档同步 automation+start：batch fix filler openings and prose Tip

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 update OpenAI GPT-5.5 API guidance

文档/生成基线同步记录：文档同步 update OpenAI GPT-5.5 API guidance

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试覆盖 auto-reply assert bare reset acknowledgement

文档/生成基线同步记录：测试覆盖 auto-reply：assert bare reset acknowledgement

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 维护调整 gateway run watch mode in tmux

文档/生成基线同步记录：维护调整 gateway：run watch mode in tmux

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 bootstrapping docs、openclaw docs、setup docs、wizard cli automation docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/start`
- Changed path count: `6`
- Status counts: `修改 6`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `6` files, `+43` / `-18`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix: auto-repair gateway watch startup；fix: support home-relative media paths；fix: load source bundled plugins from pnpm workspaces；chore(gateway): run watch mode in tmux；fix(agents): harden bootstrap and ACP session routing；test(auto-reply): assert bare reset acknowledgement；fix(docs): make docs formatter mintlify-safe；fix(onboard): infer custom model image input

### Dimension evidence

- `tests-docs-修复-agents-harden-bootstrap-and-ACP-session-rout` / 修复 agents harden bootstrap and ACP session routing:
  - source: `path` [M] `docs/start/bootstrapping.md` — semantic cue
- `tests-docs-修复-auto-repair-gateway-watch-startup` / 修复 auto-repair gateway watch startup:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-修复-docs-make-docs-formatter-mintlify-safe` / 修复 docs make docs formatter mintlify-safe:
  - source: `path` [M] `docs/start/bootstrapping.md` — semantic cue
  - source: `path` [M] `docs/start/openclaw.md` — semantic cue
  - source: `path` [M] `docs/start/setup.md` — semantic cue
  - source: `path` [M] `docs/start/wizard-cli-automation.md` — semantic cue
  - source: `path` [M] `docs/start/wizard-cli-reference.md` — semantic cue
  - source: `path` [M] `docs/start/wizard.md` — semantic cue
- `tests-docs-修复-load-source-bundled-plugins-from-pnpm-worksp` / 修复 load source bundled plugins from pnpm workspaces:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-修复-onboard-infer-custom-model-image-input` / 修复 onboard infer custom model image input:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-修复-support-home-relative-media-paths` / 修复 support home-relative media paths:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-文档同步-automation-start-batch-fix-filler-openings` / 文档同步 automation+start batch fix filler openings and prose Tip:
  - source: `path` [M] `docs/start/bootstrapping.md` — semantic cue
  - source: `path` [M] `docs/start/openclaw.md` — semantic cue
  - source: `path` [M] `docs/start/setup.md` — semantic cue
  - source: `path` [M] `docs/start/wizard-cli-automation.md` — semantic cue
  - source: `path` [M] `docs/start/wizard-cli-reference.md` — semantic cue
  - source: `path` [M] `docs/start/wizard.md` — semantic cue
- `tests-docs-文档同步-update-OpenAI-GPT-5-5-API-guidance` / 文档同步 update OpenAI GPT-5.5 API guidance:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-测试覆盖-auto-reply-assert-bare-reset-acknowledgeme` / 测试覆盖 auto-reply assert bare reset acknowledgement:
  - source: `path` [M] `docs/start/bootstrapping.md`
  - source: `path` [M] `docs/start/openclaw.md`
  - source: `path` [M] `docs/start/setup.md`
- `tests-docs-维护调整-gateway-run-watch-mode-in-tmux` / 维护调整 gateway run watch mode in tmux:
  - source: `path` [M] `docs/start/bootstrapping.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/start/bootstrapping.md` — docs evidence
  - source: `path` [M] `docs/start/openclaw.md` — docs evidence
  - source: `path` [M] `docs/start/setup.md` — docs evidence
  - source: `path` [M] `docs/start/wizard-cli-automation.md` — docs evidence
  - source: `path` [M] `docs/start/wizard-cli-reference.md` — docs evidence
  - source: `path` [M] `docs/start/wizard.md` — docs evidence

### 路径证据

- 修改 `docs/start/bootstrapping.md`：调整 bootstrapping docs（docs）。
- 修改 `docs/start/openclaw.md`：调整 openclaw docs（docs）。
- 修改 `docs/start/setup.md`：调整 setup docs（docs）。
- 修改 `docs/start/wizard-cli-automation.md`：调整 wizard cli automation docs（docs）。
- 修改 `docs/start/wizard-cli-reference.md`：调整 wizard cli reference docs（docs）。
- 修改 `docs/start/wizard.md`：调整 wizard docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/start` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/start/change-to-test.md` 的验证建议。
