# ui/web-ui/i18n

## 一句话结论

i18n 所属的 Memory, media, web UI and terminal UI surfaces 有 56 个路径变化（新增 47、修改 9），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/i18n`
- Changed path count: `56`
- Status counts: `新增 47、修改 9`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `56` files, `+20228` / `-24`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 47、修改 9。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `ui/src/i18n/.i18n/de.meta.json`
- `ui/src/i18n/.i18n/de.tm.jsonl`
- `ui/src/i18n/.i18n/es.meta.json`
- `ui/src/i18n/.i18n/es.tm.jsonl`
- `ui/src/i18n/.i18n/fr.meta.json`
- `ui/src/i18n/.i18n/fr.tm.jsonl`
- `ui/src/i18n/.i18n/glossary.de.json`
- `ui/src/i18n/.i18n/glossary.es.json`
- `ui/src/i18n/.i18n/glossary.fr.json`
- `ui/src/i18n/.i18n/glossary.id.json`
- `ui/src/i18n/.i18n/glossary.ja-JP.json`
- `ui/src/i18n/.i18n/glossary.ko.json`
- `ui/src/i18n/.i18n/glossary.pl.json`
- `ui/src/i18n/.i18n/glossary.pt-BR.json`
- `ui/src/i18n/.i18n/glossary.th.json`
- `ui/src/i18n/.i18n/glossary.tr.json`
- `ui/src/i18n/.i18n/glossary.uk.json`
- `ui/src/i18n/.i18n/glossary.zh-CN.json`
- `ui/src/i18n/.i18n/glossary.zh-TW.json`
- `ui/src/i18n/.i18n/id.meta.json`
- `ui/src/i18n/.i18n/id.tm.jsonl`
- `ui/src/i18n/.i18n/ja-JP.meta.json`
- `ui/src/i18n/.i18n/ja-JP.tm.jsonl`
- `ui/src/i18n/.i18n/ko.meta.json`
- `ui/src/i18n/.i18n/ko.tm.jsonl`
- `ui/src/i18n/.i18n/pl.meta.json`
- `ui/src/i18n/.i18n/pl.tm.jsonl`
- `ui/src/i18n/.i18n/pt-BR.meta.json`
- `ui/src/i18n/.i18n/pt-BR.tm.jsonl`
- `ui/src/i18n/.i18n/th.meta.json`
- … 另有 17 个路径，详见 `leaf-impact.json`。

### 修改

- `ui/src/i18n/lib/registry.ts`
- `ui/src/i18n/lib/types.ts`
- `ui/src/i18n/locales/de.ts`
- `ui/src/i18n/locales/en.ts`
- `ui/src/i18n/locales/es.ts`
- `ui/src/i18n/locales/pt-BR.ts`
- `ui/src/i18n/locales/zh-CN.ts`
- `ui/src/i18n/locales/zh-TW.ts`
- `ui/src/i18n/test/translate.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：Locale registry/runtime changed | `pnpm test:ui` | Escalate to `pnpm ui:build` when lazy-import boundaries or bundled locale output changes.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `ui/web-ui/i18n` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/i18n/change-to-test.md` 的验证建议。
