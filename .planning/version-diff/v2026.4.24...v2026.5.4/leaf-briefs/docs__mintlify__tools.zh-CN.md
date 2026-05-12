# docs/mintlify/tools

## 1. 功能结论

**文档/生成基线同步**：agents use loop detection switch for post-compaction guard、agents wire post-compaction loop guard into pi-embedded-runner、agents mediate async media completions、plugins default bundled discovery to allowlist；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 1、修改 42

## 3. 功能级详细差异

### 修复 agents mediate async media completions

文档/生成基线同步记录：修复 agents：mediate async media completions

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 agents preserve full subagent announce output

文档/生成基线同步记录：修复 agents：preserve full subagent announce output

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 bound trajectory runtime flush

文档/生成基线同步记录：修复 bound trajectory runtime flush

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 openrouter keep DeepSeek V4 reasoning effort valid

文档/生成基线同步记录：修复 openrouter：keep DeepSeek V4 reasoning effort valid

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 pass claude cli thinking effort

文档/生成基线同步记录：修复 pass claude cli thinking effort

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

文档/生成基线同步记录：修复 plugins：default bundled discovery to allowlist

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins rename bundled allowlist discovery policy

文档/生成基线同步记录：修复 plugins：rename bundled allowlist discovery policy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins respect allowlist for web provider fallback

文档/生成基线同步记录：修复 plugins：respect allowlist for web provider fallback

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 agents wire post-compaction loop guard into pi-embedded-runner

文档/生成基线同步记录：新增 agents：wire post-compaction loop guard into pi-embedded-runner

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 迁移/重构 agents use loop detection switch for post-compaction guard

文档/生成基线同步记录：迁移/重构 agents：use loop detection switch for post-compaction guard

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 acp agents setup docs、acp agents docs、brave search docs、browser control docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/tools`
- Changed path count: `43`
- Status counts: `新增 1、修改 42`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `43` files, `+5528` / `-3091`

### 归纳依据

- 主要落点：docs、image generation、CLI/command behavior、model/thinking policy、speech/TTS、video generation。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：refactor(agents): use loop detection switch for post-compaction guard；feat(agents): wire post-compaction loop guard into pi-embedded-runner；fix(agents): mediate async media completions；fix(plugins): default bundled discovery to allowlist；fix(plugins): rename bundled allowlist discovery policy；fix(plugins): respect allowlist for web provider fallback；fix(openrouter): keep DeepSeek V4 reasoning effort valid；fix: pass claude cli thinking effort

### Dimension evidence

- `tests-docs-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — semantic cue
  - source: `path` [M] `docs/tools/acp-agents.md` — semantic cue
  - source: `path` [M] `docs/tools/media-overview.md` — semantic cue
  - source: `path` [M] `docs/tools/subagents.md` — semantic cue
- `tests-docs-修复-agents-preserve-full-subagent-announce-output` / 修复 agents preserve full subagent announce output:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — semantic cue
  - source: `path` [M] `docs/tools/acp-agents.md` — semantic cue
  - source: `path` [M] `docs/tools/subagents.md` — semantic cue
- `tests-docs-修复-bound-trajectory-runtime-flush` / 修复 bound trajectory runtime flush:
  - source: `path` [M] `docs/tools/trajectory.md` — semantic cue
- `tests-docs-修复-openrouter-keep-DeepSeek-V4-reasoning-effort` / 修复 openrouter keep DeepSeek V4 reasoning effort valid:
  - source: `path` [A] `docs/tools/steer.md`
  - source: `path` [M] `docs/tools/acp-agents-setup.md`
  - source: `path` [M] `docs/tools/acp-agents.md`
  - source: `path` [M] `docs/tools/brave-search.md`
- `tests-docs-修复-pass-claude-cli-thinking-effort` / 修复 pass claude cli thinking effort:
  - source: `path` [M] `docs/tools/thinking.md` — semantic cue
- `tests-docs-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — semantic cue
  - source: `path` [M] `docs/tools/acp-agents.md` — semantic cue
  - source: `path` [M] `docs/tools/brave-search.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-control.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-linux-troubleshooting.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md` — semantic cue
- `tests-docs-修复-plugins-rename-bundled-allowlist-discovery-p` / 修复 plugins rename bundled allowlist discovery policy:
  - source: `path` [A] `docs/tools/steer.md`
  - source: `path` [M] `docs/tools/acp-agents-setup.md`
  - source: `path` [M] `docs/tools/acp-agents.md`
  - source: `path` [M] `docs/tools/brave-search.md`
- `tests-docs-修复-plugins-respect-allowlist-for-web-provider-f` / 修复 plugins respect allowlist for web provider fallback:
  - source: `path` [M] `docs/tools/web-fetch.md` — semantic cue
  - source: `path` [M] `docs/tools/web.md` — semantic cue
- `tests-docs-新增-agents-wire-post-compaction-loop-guard-into` / 新增 agents wire post-compaction loop guard into pi-embedded-runner:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — semantic cue
  - source: `path` [M] `docs/tools/acp-agents.md` — semantic cue
  - source: `path` [M] `docs/tools/loop-detection.md` — semantic cue
  - source: `path` [M] `docs/tools/subagents.md` — semantic cue
- `tests-docs-迁移-重构-agents-use-loop-detection-switch-for-post` / 迁移/重构 agents use loop detection switch for post-compaction guard:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — semantic cue
  - source: `path` [M] `docs/tools/acp-agents.md` — semantic cue
  - source: `path` [M] `docs/tools/brave-search.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-control.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-linux-troubleshooting.md` — semantic cue
  - source: `path` [M] `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/tools/acp-agents-setup.md` — docs evidence
  - source: `path` [M] `docs/tools/acp-agents.md` — docs evidence
  - source: `path` [M] `docs/tools/brave-search.md` — docs evidence
  - source: `path` [M] `docs/tools/browser-control.md` — docs evidence
  - source: `path` [M] `docs/tools/browser-linux-troubleshooting.md` — docs evidence
  - source: `path` [M] `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md` — docs evidence

### 路径证据

- 新增 `docs/tools/steer.md`：调整 steer docs（docs）。
- 修改 `docs/tools/acp-agents-setup.md`：调整 acp agents setup docs（docs）。
- 修改 `docs/tools/acp-agents.md`：调整 acp agents docs（docs）。
- 修改 `docs/tools/brave-search.md`：调整 brave search docs（docs）。
- 修改 `docs/tools/browser-control.md`：调整 browser control docs（docs）。
- 修改 `docs/tools/browser-linux-troubleshooting.md`：调整 browser linux troubleshooting docs（docs）。
- 修改 `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`：调整 browser wsl2 windows remote cdp troubleshooting docs（docs）。
- 修改 `docs/tools/browser.md`：调整 browser docs（docs）。
- 修改 `docs/tools/btw.md`：调整 btw docs（docs）。
- 修改 `docs/tools/clawhub.md`：调整 clawhub docs（docs）。
- 修改 `docs/tools/code-execution.md`：调整 code execution docs（docs）。
- 修改 `docs/tools/creating-skills.md`：调整 creating skills docs（docs）。
- 修改 `docs/tools/diffs.md`：调整 diffs docs（docs）。
- 其余 30 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/tools` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/tools/change-to-test.md` 的验证建议。
