# src/shared-misc-runtime-support/docs-i18n-markdown

## 1. 功能结论

**修改**：Fix Control UI i18n tooltip placeholders、docs validate plugin json examples、docs validate strict channel json fences、docs make slack manifest snippets parseable；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 10

## 3. 功能级详细差异

### 修复 docs make slack manifest snippets parseable

修复 docs：make slack manifest snippets parseable

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docs validate channel config snippets

修复 docs：validate channel config snippets

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docs validate plugin json examples

修复 docs：validate plugin json examples

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 docs validate strict channel json fences

修复 docs：validate strict channel json fences

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 release align beta plugin changelog sections

修复 release：align beta plugin changelog sections

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Fix Control UI i18n tooltip placeholders

修改 Fix Control UI i18n tooltip placeholders

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 align support-boundary expectations

测试覆盖 align support-boundary expectations

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 tooling isolate a2ui copy env

测试覆盖 tooling：isolate a2ui copy env

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 move swabble into apps

维护调整 move swabble into apps

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 remove root assets

维护调整 remove root assets

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channel config examples regression/contract coverage、prepare codex ci config regression/contract coverage，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel config examples regression/contract coverage、plugin doc examples regression/contract coverage、registry regression/contract coverage、ir.nested lists regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown`
- Changed path count: `13`
- Status counts: `新增 3、修改 10`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `13` files, `+547` / `-86`

### 归纳依据

- 主要落点：tests/contracts、implementation、configuration/schema。
- 新增或暴露的关键符号包括：`CHANNEL_DOCS_DIR`, `lineNumberAt`, `PLUGIN_DOCS_DIR`, `listMarkdownFiles`, `getRegistry`, `getNestedTranslation`, `appendParagraphSeparator`, `appendTopLevelListSeparator`, `appendNestedListSeparator`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：Fix Control UI i18n tooltip placeholders；fix(docs): validate plugin json examples；fix(docs): validate strict channel json fences；fix(docs): make slack manifest snippets parseable；fix(docs): validate channel config snippets；fix(release): align beta plugin changelog sections；test: align support-boundary expectations；chore: remove root assets

### Dimension evidence

- `public-contract-修复-docs-make-slack-manifest-snippets-parseable` / 修复 docs make slack manifest snippets parseable:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — semantic cue
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — semantic cue
- `tests-docs-修复-docs-validate-channel-config-snippets` / 修复 docs validate channel config snippets:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — semantic cue
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — semantic cue
  - source: `path` [M] `src/scripts/prepare-codex-ci-config.test.ts` — semantic cue
- `tests-docs-修复-docs-validate-plugin-json-examples` / 修复 docs validate plugin json examples:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — semantic cue
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — semantic cue
  - source: `path` [M] `src/scripts/sync-plugin-versions.test.ts` — semantic cue
- `tests-docs-修复-docs-validate-strict-channel-json-fences` / 修复 docs validate strict channel json fences:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — semantic cue
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — semantic cue
- `maintenance-修复-release-align-beta-plugin-changelog-sections` / 修复 release align beta plugin changelog sections:
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — semantic cue
  - source: `path` [M] `src/scripts/sync-plugin-versions.test.ts` — semantic cue
- `user-visible-修改-Fix-Control-UI-i18n-tooltip-placeholders` / 修改 Fix Control UI i18n tooltip placeholders:
  - source: `path` [M] `src/i18n/registry.test.ts` — semantic cue
  - source: `path` [M] `src/scripts/canvas-a2ui-copy.test.ts` — semantic cue
  - source: `path` [M] `src/scripts/control-ui-i18n.test.ts` — semantic cue
- `tests-docs-测试覆盖-align-support-boundary-expectations` / 测试覆盖 align support-boundary expectations:
  - source: `path` [A] `src/docs/channel-config-examples.test.ts`
  - source: `path` [A] `src/docs/plugin-doc-examples.test.ts`
  - source: `path` [A] `src/scripts/control-ui-i18n.test.ts`
  - source: `path` [M] `src/i18n/registry.test.ts`
  - source: `path` [M] `src/markdown/code-spans.ts`
  - source: `path` [M] `src/markdown/frontmatter.ts`
- `user-visible-测试覆盖-tooling-isolate-a2ui-copy-env` / 测试覆盖 tooling isolate a2ui copy env:
  - source: `path` [M] `src/scripts/canvas-a2ui-copy.test.ts` — semantic cue
- `maintenance-维护调整-move-swabble-into-apps` / 维护调整 move swabble into apps:
  - source: `path` [A] `src/docs/channel-config-examples.test.ts`
  - source: `path` [A] `src/docs/plugin-doc-examples.test.ts`
  - source: `path` [A] `src/scripts/control-ui-i18n.test.ts`
  - source: `path` [M] `src/i18n/registry.test.ts`
  - source: `path` [M] `src/markdown/code-spans.ts`
  - source: `path` [M] `src/markdown/frontmatter.ts`
- `maintenance-维护调整-remove-root-assets` / 维护调整 remove root assets:
  - source: `path` [A] `src/docs/channel-config-examples.test.ts`
  - source: `path` [A] `src/docs/plugin-doc-examples.test.ts`
  - source: `path` [A] `src/scripts/control-ui-i18n.test.ts`
  - source: `path` [M] `src/i18n/registry.test.ts`
  - source: `path` [M] `src/markdown/code-spans.ts`
  - source: `path` [M] `src/markdown/frontmatter.ts`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — contract evidence
  - source: `path` [M] `src/scripts/prepare-codex-ci-config.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/docs/channel-config-examples.test.ts` — test evidence
  - source: `path` [M] `src/docs/plugin-doc-examples.test.ts` — test evidence
  - source: `path` [M] `src/i18n/registry.test.ts` — test evidence
  - source: `path` [M] `src/markdown/ir.nested-lists.test.ts` — test evidence
  - source: `path` [M] `src/scripts/canvas-a2ui-copy.test.ts` — test evidence
  - source: `path` [M] `src/scripts/ci-changed-scope.test.ts` — test evidence

### 路径证据

- 新增 `src/docs/channel-config-examples.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/docs/plugin-doc-examples.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/scripts/control-ui-i18n.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/i18n/registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/markdown/code-spans.ts`：调整 code spans（implementation）。
- 修改 `src/markdown/frontmatter.ts`：调整 frontmatter（implementation）。
- 修改 `src/markdown/ir.nested-lists.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/markdown/ir.ts`：调整 ir（implementation）。
- 修改 `src/scripts/canvas-a2ui-copy.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/scripts/ci-changed-scope.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/scripts/prepare-codex-ci-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/scripts/sync-plugin-versions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/scripts/test-projects.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/docs-i18n-markdown` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/docs-i18n-markdown/change-to-test.md` 的验证建议。
