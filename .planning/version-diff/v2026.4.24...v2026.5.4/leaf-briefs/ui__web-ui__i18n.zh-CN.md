# ui/web-ui/i18n

## 1. 功能结论

**修改**：ui refresh fa control ui locale、ui refresh nl control ui locale、ui refresh th control ui locale、ui refresh vi control ui locale；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 21、修改 43

## 3. 功能级详细差异

### 维护调整 ui refresh ar control ui locale

维护调整 ui：refresh ar control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh fa control ui locale

维护调整 ui：refresh fa control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh id control ui locale

维护调整 ui：refresh id control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh it control ui locale

维护调整 ui：refresh it control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh nl control ui locale

维护调整 ui：refresh nl control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh pl control ui locale

维护调整 ui：refresh pl control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh th control ui locale

维护调整 ui：refresh th control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh tr control ui locale

维护调整 ui：refresh tr control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh uk control ui locale

维护调整 ui：refresh uk control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 维护调整 ui refresh vi control ui locale

维护调整 ui：refresh vi control ui locale

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 translate regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/i18n`
- Changed path count: `64`
- Status counts: `新增 21、修改 43`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `64` files, `+22402` / `-116`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 建议优先验证：优先运行 `pnpm test:ui`；`pnpm ui:build`。
- 相关 commit 主题：chore(ui): refresh fa control ui locale；chore(ui): refresh nl control ui locale；chore(ui): refresh th control ui locale；chore(ui): refresh vi control ui locale；chore(ui): refresh pl control ui locale；chore(ui): refresh id control ui locale；chore(ui): refresh uk control ui locale；chore(ui): refresh it control ui locale

### Dimension evidence

- `user-visible-维护调整-ui-refresh-ar-control-ui-locale` / 维护调整 ui refresh ar control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-fa-control-ui-locale` / 维护调整 ui refresh fa control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-id-control-ui-locale` / 维护调整 ui refresh id control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-it-control-ui-locale` / 维护调整 ui refresh it control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-nl-control-ui-locale` / 维护调整 ui refresh nl control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-pl-control-ui-locale` / 维护调整 ui refresh pl control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-th-control-ui-locale` / 维护调整 ui refresh th control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-tr-control-ui-locale` / 维护调整 ui refresh tr control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-uk-control-ui-locale` / 维护调整 ui refresh uk control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `user-visible-维护调整-ui-refresh-vi-control-ui-locale` / 维护调整 ui refresh vi control ui locale:
  - source: `path` [M] `ui/src/i18n/.i18n/ar.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/ar.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/de.tm.jsonl` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.meta.json` — semantic cue
  - source: `path` [M] `ui/src/i18n/.i18n/es.tm.jsonl` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `ui/src/i18n/test/translate.test.ts` — test evidence

### 路径证据

- 新增 `ui/src/i18n/.i18n/ar.meta.json`：调整 ar.meta（implementation）。
- 新增 `ui/src/i18n/.i18n/ar.tm.jsonl`：调整 ar.tm（implementation）。
- 新增 `ui/src/i18n/.i18n/fa.meta.json`：调整 fa.meta（implementation）。
- 新增 `ui/src/i18n/.i18n/fa.tm.jsonl`：调整 fa.tm（implementation）。
- 新增 `ui/src/i18n/.i18n/glossary.ar.json`：调整 glossary.ar（implementation）。
- 新增 `ui/src/i18n/.i18n/glossary.fa.json`：调整 glossary.fa（implementation）。
- 新增 `ui/src/i18n/.i18n/glossary.it.json`：调整 glossary.it（implementation）。
- 新增 `ui/src/i18n/.i18n/glossary.nl.json`：调整 glossary.nl（implementation）。
- 新增 `ui/src/i18n/.i18n/glossary.vi.json`：调整 glossary.vi（implementation）。
- 新增 `ui/src/i18n/.i18n/it.meta.json`：调整 it.meta（implementation）。
- 新增 `ui/src/i18n/.i18n/it.tm.jsonl`：调整 it.tm（implementation）。
- 新增 `ui/src/i18n/.i18n/nl.meta.json`：调整 nl.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/de.meta.json`：调整 de.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/de.tm.jsonl`：调整 de.tm（implementation）。
- 修改 `ui/src/i18n/.i18n/es.meta.json`：调整 es.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/es.tm.jsonl`：调整 es.tm（implementation）。
- 修改 `ui/src/i18n/.i18n/fr.meta.json`：调整 fr.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/fr.tm.jsonl`：调整 fr.tm（implementation）。
- 修改 `ui/src/i18n/.i18n/id.meta.json`：调整 id.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/id.tm.jsonl`：调整 id.tm（implementation）。
- 修改 `ui/src/i18n/.i18n/ja-JP.meta.json`：调整 ja JP.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/ja-JP.tm.jsonl`：调整 ja JP.tm（implementation）。
- 修改 `ui/src/i18n/.i18n/ko.meta.json`：调整 ko.meta（implementation）。
- 修改 `ui/src/i18n/.i18n/ko.tm.jsonl`：调整 ko.tm（implementation）。
- 其余 40 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/web-ui/i18n` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/i18n/change-to-test.md` 的验证建议。
