# docs/mintlify

## 1. 功能结论

**文档/生成基线同步**：sandbox support Windows drive-letter bind sources、agents enforce exact skill path from <available_skills> [AI-assisted]、gateway skip IPv6 loopback binding on Windows、plugins honor beta channel for auto installs；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 15、删除 2

## 3. 功能级详细差异

### 修复 agents enforce exact skill path from <available_skills> [AI-assisted]

文档/生成基线同步记录：修复 agents：enforce exact skill path from <available_skills> [AI-assisted]

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 explain missing git during plugin install

文档/生成基线同步记录：修复 explain missing git during plugin install

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 gateway skip IPv6 loopback binding on Windows

文档/生成基线同步记录：修复 gateway：skip IPv6 loopback binding on Windows

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

文档/生成基线同步记录：修复 plugins：honor beta channel for auto installs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

文档/生成基线同步记录：修复 sandbox：support Windows drive-letter bind sources

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 slack mention-gating thread participation

文档/生成基线同步记录：修复 slack mention-gating thread participation

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 start configured generation providers

文档/生成基线同步记录：修复 start configured generation providers

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

文档/生成基线同步记录：修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 update authenticate restart health probes

文档/生成基线同步记录：修复 update：authenticate restart health probes

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 note plugin peer-link update repair

文档/生成基线同步记录：文档同步 note plugin peer-link update repair

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 AGENTS docs、CHANGELOG docs、CONTRIBUTING docs、README docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify`
- Changed path count: `17`
- Status counts: `修改 15、删除 2`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `17` files, `+3806` / `-1555`

### 归纳依据

- 主要落点：docs、auth/pairing/security behavior、implementation。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；fix(agents): enforce exact skill path from <available_skills> [AI-assisted]；fix(gateway): skip IPv6 loopback binding on Windows；fix(plugins): honor beta channel for auto installs；fix(telegram): reuse preview for long text finals；fix(update): authenticate restart health probes；fix: explain missing git during plugin install；fix: slack mention-gating thread participation

### Dimension evidence

- `tests-docs-修复-agents-enforce-exact-skill-path-from-availa` / 修复 agents enforce exact skill path from <available_skills> [AI-assisted]:
  - source: `path` [M] `AGENTS.md` — semantic cue
- `tests-docs-修复-explain-missing-git-during-plugin-install` / 修复 explain missing git during plugin install:
  - source: `path` [M] `docs/snippets/plugin-publish/minimal-openclaw.plugin.json` — semantic cue
- `tests-docs-修复-gateway-skip-IPv6-loopback-binding-on-Windows` / 修复 gateway skip IPv6 loopback binding on Windows:
  - source: `path` [M] `CONTRIBUTING.md` — semantic cue
  - source: `path` [M] `docs/plan/codex-context-engine-harness.md` — semantic cue
  - source: `path` [M] `docs/refactor/async-exec-duplicate-completion-investigation.md` — semantic cue
  - source: `path` [M] `docs/snippets/plugin-publish/minimal-openclaw.plugin.json` — semantic cue
- `tests-docs-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `docs/plan/ui-channels.md` — semantic cue
- `tests-docs-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `AGENTS.md`
  - source: `path` [M] `CHANGELOG.md`
  - source: `path` [M] `CONTRIBUTING.md`
  - source: `path` [D] `docs/refactor/async-exec-duplicate-completion-investigation.md`
  - source: `path` [D] `docs/refactor/qa.md`
- `tests-docs-修复-slack-mention-gating-thread-participation` / 修复 slack mention-gating thread participation:
  - source: `path` [M] `AGENTS.md`
  - source: `path` [M] `CHANGELOG.md`
  - source: `path` [M] `CONTRIBUTING.md`
  - source: `path` [D] `docs/refactor/async-exec-duplicate-completion-investigation.md`
  - source: `path` [D] `docs/refactor/qa.md`
- `tests-docs-修复-start-configured-generation-providers` / 修复 start configured generation providers:
  - source: `path` [M] `AGENTS.md`
  - source: `path` [M] `CHANGELOG.md`
  - source: `path` [M] `CONTRIBUTING.md`
  - source: `path` [D] `docs/refactor/async-exec-duplicate-completion-investigation.md`
  - source: `path` [D] `docs/refactor/qa.md`
- `tests-docs-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `docs/plan/codex-context-engine-harness.md` — semantic cue
- `tests-docs-修复-update-authenticate-restart-health-probes` / 修复 update authenticate restart health probes:
  - source: `path` [M] `AGENTS.md`
  - source: `path` [M] `CHANGELOG.md`
  - source: `path` [M] `CONTRIBUTING.md`
  - source: `path` [D] `docs/refactor/async-exec-duplicate-completion-investigation.md`
  - source: `path` [D] `docs/refactor/qa.md`
- `tests-docs-文档同步-note-plugin-peer-link-update-repair` / 文档同步 note plugin peer-link update repair:
  - source: `path` [M] `docs/snippets/plugin-publish/minimal-openclaw.plugin.json` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `AGENTS.md` — docs evidence
  - source: `path` [M] `CHANGELOG.md` — docs evidence
  - source: `path` [M] `CONTRIBUTING.md` — docs evidence
  - source: `path` [M] `README.md` — docs evidence
  - source: `path` [M] `docs/auth-credential-semantics.md` — docs evidence
  - source: `path` [M] `docs/brave-search.md` — docs evidence

### 路径证据

- 修改 `AGENTS.md`：调整 AGENTS docs（docs）。
- 修改 `CHANGELOG.md`：调整 CHANGELOG docs（docs）。
- 修改 `CONTRIBUTING.md`：调整 CONTRIBUTING docs（docs）。
- 修改 `README.md`：调整 README docs（docs）。
- 修改 `docs/auth-credential-semantics.md`：调整 auth credential semantics docs（auth/pairing/security behavior）。
- 修改 `docs/brave-search.md`：调整 brave search docs（docs）。
- 修改 `docs/ci.md`：调整 ci docs（docs）。
- 修改 `docs/logging.md`：调整 logging docs（docs）。
- 修改 `docs/pi-dev.md`：调整 pi dev docs（docs）。
- 修改 `docs/pi.md`：调整 pi docs（docs）。
- 修改 `docs/plan/codex-context-engine-harness.md`：调整 codex context engine harness docs（docs）。
- 修改 `docs/plan/ui-channels.md`：调整 ui channels docs（docs）。
- 删除 `docs/refactor/async-exec-duplicate-completion-investigation.md`：移除旧的 docs 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `docs/refactor/qa.md`：移除旧的 docs 文件；需要确认没有调用方继续依赖这个路径。
- 其余 3 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/change-to-test.md` 的验证建议。
