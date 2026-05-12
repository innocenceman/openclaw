# docs/mintlify/.i18n

## 1. 功能结论

**文档/生成基线同步**：Windows-specific reliability gap in the new timeout cleanup path、docs allow partial i18n doc batches、docs bound i18n codex prompt cleanup、clarify i18n locale visibility；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 8、修改 11、删除 3

## 3. 功能级详细差异

### 修复 Windows-specific reliability gap in the new timeout cleanup path

文档/生成基线同步记录：修复 Windows-specific reliability gap in the new timeout cleanup path

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 docs allow partial i18n doc batches

文档/生成基线同步记录：修复 docs：allow partial i18n doc batches

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 docs bound i18n codex prompt cleanup

文档/生成基线同步记录：修复 docs：bound i18n codex prompt cleanup

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 harden docs i18n prompt echoes

文档/生成基线同步记录：修复 harden docs i18n prompt echoes

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 isolate docs i18n codex home

文档/生成基线同步记录：修复 isolate docs i18n codex home

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 keep docs i18n codex home out of tmp

文档/生成基线同步记录：修复 keep docs i18n codex home out of tmp

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 修复 seed docs i18n codex auth

文档/生成基线同步记录：修复 seed docs i18n codex auth

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 advertise xhigh docs i18n thinking

文档/生成基线同步记录：文档同步 advertise xhigh docs i18n thinking

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 clarify i18n locale visibility

文档/生成基线同步记录：文档同步 clarify i18n locale visibility

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 新增 i18n align docs and ui locales

文档/生成基线同步记录：新增 i18n：align docs and ui locales

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 README docs、glossary.fa、glossary.nl、glossary.vi，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm docs:check-i18n-glossary`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.i18n`
- Changed path count: `22`
- Status counts: `新增 8、修改 11、删除 3`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `22` files, `+1090` / `-1079`

### 归纳依据

- 主要落点：implementation、CLI/command behavior、docs。
- 建议优先验证：优先运行 `pnpm docs:check-i18n-glossary`。
- 相关 commit 主题：fix: Windows-specific reliability gap in the new timeout cleanup path；fix(docs): allow partial i18n doc batches；fix(docs): bound i18n codex prompt cleanup；docs: clarify i18n locale visibility；feat(i18n): align docs and ui locales；docs: advertise xhigh docs i18n thinking；fix: harden docs i18n prompt echoes；fix: seed docs i18n codex auth

### Dimension evidence

- `tests-docs-修复-Windows-specific-reliability-gap-in-the-new` / 修复 Windows-specific reliability gap in the new timeout cleanup path:
  - source: `path` [M] `scripts/docs-i18n/codex_command_windows.go` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_windows_test.go` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/main.go` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/main_test.go` — semantic cue
- `tests-docs-修复-docs-allow-partial-i18n-doc-batches` / 修复 docs allow partial i18n doc batches:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-修复-docs-bound-i18n-codex-prompt-cleanup` / 修复 docs bound i18n codex prompt cleanup:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-修复-harden-docs-i18n-prompt-echoes` / 修复 harden docs i18n prompt echoes:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-修复-isolate-docs-i18n-codex-home` / 修复 isolate docs i18n codex home:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-修复-keep-docs-i18n-codex-home-out-of-tmp` / 修复 keep docs i18n codex home out of tmp:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-修复-seed-docs-i18n-codex-auth` / 修复 seed docs i18n codex auth:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-文档同步-advertise-xhigh-docs-i18n-thinking` / 文档同步 advertise xhigh docs i18n thinking:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-文档同步-clarify-i18n-locale-visibility` / 文档同步 clarify i18n locale visibility:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs-新增-i18n-align-docs-and-ui-locales` / 新增 i18n align docs and ui locales:
  - source: `path` [M] `docs/.i18n/README.md` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — semantic cue
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — semantic cue
  - source: `path` [M] `scripts/docs-i18n/codex_command_unix.go` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/.i18n/README.md` — docs evidence
  - source: `path` [M] `docs/.i18n/glossary.fa.json` — docs evidence
  - source: `path` [M] `docs/.i18n/glossary.nl.json` — docs evidence
  - source: `path` [M] `docs/.i18n/glossary.vi.json` — docs evidence
  - source: `path` [M] `docs/.i18n/glossary.zh-TW.json` — docs evidence

### 路径证据

- 新增 `docs/.i18n/glossary.fa.json`：调整 glossary.fa（implementation）。
- 新增 `docs/.i18n/glossary.nl.json`：调整 glossary.nl（implementation）。
- 新增 `docs/.i18n/glossary.vi.json`：调整 glossary.vi（implementation）。
- 新增 `docs/.i18n/glossary.zh-TW.json`：调整 glossary.zh TW（implementation）。
- 新增 `scripts/docs-i18n/codex_command_unix.go`：调整 codex command unix（CLI/command behavior）。
- 新增 `scripts/docs-i18n/codex_command_windows.go`：调整 codex command windows（CLI/command behavior）。
- 新增 `scripts/docs-i18n/codex_command_windows_test.go`：调整 codex command windows test（CLI/command behavior）。
- 新增 `scripts/docs-i18n/prompt_test.go`：调整 prompt test（implementation）。
- 修改 `docs/.i18n/README.md`：调整 README docs（docs）。
- 修改 `scripts/docs-i18n/doc_chunked_raw.go`：调整 doc chunked raw（implementation）。
- 修改 `scripts/docs-i18n/doc_mode_test.go`：调整 doc mode test（implementation）。
- 修改 `scripts/docs-i18n/main.go`：调整 main（implementation）。
- 修改 `scripts/docs-i18n/main_test.go`：调整 main test（implementation）。
- 修改 `scripts/docs-i18n/process.go`：调整 process（implementation）。
- 修改 `scripts/docs-i18n/prompt.go`：调整 prompt（implementation）。
- 修改 `scripts/docs-i18n/translator.go`：调整 translator（implementation）。
- 修改 `scripts/docs-i18n/translator_test.go`：调整 translator test（implementation）。
- 修改 `scripts/docs-i18n/util.go`：调整 util（implementation）。
- 修改 `scripts/docs-i18n/util_test.go`：调整 util test（implementation）。
- 删除 `scripts/docs-i18n/pi_command.go`：移除旧的 CLI/command behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `scripts/docs-i18n/pi_rpc_client.go`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `scripts/docs-i18n/pi_rpc_client_test.go`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/.i18n` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/.i18n/change-to-test.md` 的验证建议。
