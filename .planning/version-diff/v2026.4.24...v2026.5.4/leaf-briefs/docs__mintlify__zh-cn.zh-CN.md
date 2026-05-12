# docs/mintlify/zh-cn

## 1. 功能结论

**文档/生成基线同步**：add steer command guide、add channel progress drafts、add Mantis Discord smoke runner、i18n add plugin management glossary labels；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 文档同步 add steer command guide

文档/生成基线同步记录：文档同步 add steer command guide

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 add update testing glossary label

文档/生成基线同步记录：文档同步 add update testing glossary label

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 brave redirect legacy search page

文档/生成基线同步记录：文档同步 brave：redirect legacy search page

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 clarify app sdk documentation

文档/生成基线同步记录：文档同步 clarify app sdk documentation

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 document shipped app sdk

文档/生成基线同步记录：文档同步 document shipped app sdk

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 文档同步 i18n add plugin management glossary labels

文档/生成基线同步记录：文档同步 i18n：add plugin management glossary labels

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 新增 add Mantis Discord smoke runner

文档/生成基线同步记录：新增 add Mantis Discord smoke runner

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 新增 add channel progress drafts

文档/生成基线同步记录：新增 add channel progress drafts

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 新增 default active steering to batched delivery

文档/生成基线同步记录：新增 default active steering to batched delivery

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 测试覆盖 harden plugin update validation

文档/生成基线同步记录：测试覆盖 harden plugin update validation

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 glossary.zh CN，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm docs:check-i18n-glossary`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm docs:check-i18n-glossary`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/zh-cn`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `1` files, `+216` / `-0`

### 归纳依据

- 主要落点：implementation。
- 建议优先验证：优先运行 `pnpm docs:check-i18n-glossary`。
- 相关 commit 主题：docs: add steer command guide；feat: add channel progress drafts；feat: add Mantis Discord smoke runner；docs(i18n): add plugin management glossary labels；docs(brave): redirect legacy search page；docs: add update testing glossary label；test: harden plugin update validation；docs: document shipped app sdk

### Dimension evidence

- `tests-docs-文档同步-add-steer-command-guide` / 文档同步 add steer command guide:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-文档同步-add-update-testing-glossary-label` / 文档同步 add update testing glossary label:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json` — semantic cue
- `tests-docs-文档同步-brave-redirect-legacy-search-page` / 文档同步 brave redirect legacy search page:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-文档同步-clarify-app-sdk-documentation` / 文档同步 clarify app sdk documentation:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-文档同步-document-shipped-app-sdk` / 文档同步 document shipped app sdk:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-文档同步-i18n-add-plugin-management-glossary-labels` / 文档同步 i18n add plugin management glossary labels:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json` — semantic cue
- `tests-docs-新增-add-Mantis-Discord-smoke-runner` / 新增 add Mantis Discord smoke runner:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-新增-add-channel-progress-drafts` / 新增 add channel progress drafts:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-新增-default-active-steering-to-batched-delivery` / 新增 default active steering to batched delivery:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs-测试覆盖-harden-plugin-update-validation` / 测试覆盖 harden plugin update validation:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/.i18n/glossary.zh-CN.json` — docs evidence

### 路径证据

- 修改 `docs/.i18n/glossary.zh-CN.json`：调整 glossary.zh CN（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/zh-cn` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/zh-cn/change-to-test.md` 的验证建议。
