# docs/mintlify/help

## 1. 功能结论

**文档/生成基线同步**：help,security cross-reference auth list and trusted-env-proxy、add slack onboarding channel smoke、gateway route watch trace spam to artifacts、gateway quiet benchmark watch output；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 1、修改 8、重命名 4

## 3. 功能级详细差异

### 修复 enable sync io tracing in gateway watch

文档/生成基线同步记录：修复 enable sync io tracing in gateway watch

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 gateway quiet benchmark watch output

文档/生成基线同步记录：修复 gateway：quiet benchmark watch output

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 gateway route watch trace spam to artifacts

文档/生成基线同步记录：修复 gateway：route watch trace spam to artifacts

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 model guide runtime allowlist repairs

文档/生成基线同步记录：修复 model：guide runtime allowlist repairs

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 release split release soak validation

文档/生成基线同步记录：修改 release：split release soak validation

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 help,security cross-reference auth list and trusted-env-proxy

文档/生成基线同步记录：文档同步 help,security：cross-reference auth list and trusted-env-proxy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add gateway stall diagnostics

文档/生成基线同步记录：新增 add gateway stall diagnostics

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试覆盖 add slack onboarding channel smoke

文档/生成基线同步记录：测试覆盖 add slack onboarding channel smoke

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试覆盖 plugins harden kitchen sink live gauntlet

文档/生成基线同步记录：测试覆盖 plugins：harden kitchen sink live gauntlet

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试覆盖 plugins source Testbox auth for kitchen sink live

文档/生成基线同步记录：测试覆盖 plugins：source Testbox auth for kitchen sink live

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 debugging docs、environment docs、faq first run docs、faq models docs，用于更新读者指引、能力说明或事实基线。

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
- Impact-map dir: `.planning/impact-map/docs/mintlify/help`
- Changed path count: `13`
- Status counts: `新增 1、修改 8、重命名 4`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `11` files, `+792` / `-388`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：docs(help,security): cross-reference auth list and trusted-env-proxy；test: add slack onboarding channel smoke；fix(gateway): route watch trace spam to artifacts；fix(gateway): quiet benchmark watch output；fix: enable sync io tracing in gateway watch；feat: add gateway stall diagnostics；ci(release): split release soak validation；fix(model): guide runtime allowlist repairs

### Dimension evidence

- `tests-docs-修复-enable-sync-io-tracing-in-gateway-watch` / 修复 enable sync io tracing in gateway watch:
  - source: `path` [M] `docs/help/debugging.md` — semantic cue
  - source: `path` [M] `docs/help/gpt54-codex-agentic-parity-maintainers.md` — semantic cue
  - source: `path` [M] `docs/help/gpt55-codex-agentic-parity-maintainers.md` — semantic cue
  - source: `path` [M] `docs/help/index.md` — semantic cue
  - source: `path` [M] `docs/help/testing-live.md` — semantic cue
  - source: `path` [M] `docs/help/testing-updates-plugins.md` — semantic cue
- `tests-docs-修复-gateway-quiet-benchmark-watch-output` / 修复 gateway quiet benchmark watch output:
  - source: `path` [A] `docs/help/testing-updates-plugins.md`
  - source: `path` [M] `docs/help/debugging.md`
  - source: `path` [M] `docs/help/environment.md`
  - source: `path` [M] `docs/help/faq-first-run.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity-maintainers.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity.md`
- `tests-docs-修复-gateway-route-watch-trace-spam-to-artifacts` / 修复 gateway route watch trace spam to artifacts:
  - source: `path` [A] `docs/help/testing-updates-plugins.md`
  - source: `path` [M] `docs/help/debugging.md`
  - source: `path` [M] `docs/help/environment.md`
  - source: `path` [M] `docs/help/faq-first-run.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity-maintainers.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity.md`
- `tests-docs-修复-model-guide-runtime-allowlist-repairs` / 修复 model guide runtime allowlist repairs:
  - source: `path` [M] `docs/help/faq-models.md` — semantic cue
- `tests-docs-修改-release-split-release-soak-validation` / 修改 release split release soak validation:
  - source: `path` [A] `docs/help/testing-updates-plugins.md`
  - source: `path` [M] `docs/help/debugging.md`
  - source: `path` [M] `docs/help/environment.md`
  - source: `path` [M] `docs/help/faq-first-run.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity-maintainers.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity.md`
- `tests-docs-文档同步-help-security-cross-reference-auth-list-an` / 文档同步 help,security cross-reference auth list and trusted-env-proxy:
  - source: `path` [M] `docs/help/debugging.md` — semantic cue
  - source: `path` [M] `docs/help/environment.md` — semantic cue
  - source: `path` [M] `docs/help/faq-first-run.md` — semantic cue
  - source: `path` [M] `docs/help/faq-models.md` — semantic cue
  - source: `path` [M] `docs/help/faq.md` — semantic cue
  - source: `path` [M] `docs/help/gpt54-codex-agentic-parity-maintainers.md` — semantic cue
- `tests-docs-新增-add-gateway-stall-diagnostics` / 新增 add gateway stall diagnostics:
  - source: `path` [A] `docs/help/testing-updates-plugins.md`
  - source: `path` [M] `docs/help/debugging.md`
  - source: `path` [M] `docs/help/environment.md`
  - source: `path` [M] `docs/help/faq-first-run.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity-maintainers.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity.md`
- `tests-docs-测试覆盖-add-slack-onboarding-channel-smoke` / 测试覆盖 add slack onboarding channel smoke:
  - source: `path` [A] `docs/help/testing-updates-plugins.md`
  - source: `path` [M] `docs/help/debugging.md`
  - source: `path` [M] `docs/help/environment.md`
  - source: `path` [M] `docs/help/faq-first-run.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity-maintainers.md`
  - source: `path` [R] `docs/help/gpt54-codex-agentic-parity.md`
- `tests-docs-测试覆盖-plugins-harden-kitchen-sink-live-gauntlet` / 测试覆盖 plugins harden kitchen sink live gauntlet:
  - source: `path` [M] `docs/help/testing-live.md` — semantic cue
  - source: `path` [M] `docs/help/testing-updates-plugins.md` — semantic cue
- `tests-docs-测试覆盖-plugins-source-Testbox-auth-for-kitchen-si` / 测试覆盖 plugins source Testbox auth for kitchen sink live:
  - source: `path` [M] `docs/help/testing-live.md` — semantic cue
  - source: `path` [M] `docs/help/testing-updates-plugins.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/help/debugging.md` — docs evidence
  - source: `path` [M] `docs/help/environment.md` — docs evidence
  - source: `path` [M] `docs/help/faq-first-run.md` — docs evidence
  - source: `path` [M] `docs/help/faq-models.md` — docs evidence
  - source: `path` [M] `docs/help/faq.md` — docs evidence
  - source: `path` [M] `docs/help/gpt54-codex-agentic-parity-maintainers.md` — docs evidence

### 路径证据

- 新增 `docs/help/testing-updates-plugins.md`：调整 testing updates plugins docs（docs）。
- 修改 `docs/help/debugging.md`：调整 debugging docs（docs）。
- 修改 `docs/help/environment.md`：调整 environment docs（docs）。
- 修改 `docs/help/faq-first-run.md`：调整 faq first run docs（docs）。
- 修改 `docs/help/faq-models.md`：调整 faq models docs（docs）。
- 修改 `docs/help/faq.md`：调整 faq docs（docs）。
- 修改 `docs/help/index.md`：调整 index docs（docs）。
- 修改 `docs/help/testing-live.md`：调整 testing live docs（docs）。
- 修改 `docs/help/testing.md`：调整 testing docs（docs）。
- 重命名 `docs/help/gpt54-codex-agentic-parity-maintainers.md`：调整 gpt54 codex agentic parity maintainers docs（docs）。
- 重命名 `docs/help/gpt54-codex-agentic-parity.md`：调整 gpt54 codex agentic parity docs（docs）。
- 重命名 `docs/help/gpt55-codex-agentic-parity-maintainers.md`：调整 gpt55 codex agentic parity maintainers docs（docs）。
- 重命名 `docs/help/gpt55-codex-agentic-parity.md`：调整 gpt55 codex agentic parity docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/help` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/help/change-to-test.md` 的验证建议。
