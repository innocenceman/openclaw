# ui/web-ui/styles-types

## 1. 功能结论

**新增**：control-ui collapse cron new job panel、ui show active agent in dashboard header；**修改**：Control UI explicit action feedback、Refine responsive Control UI chat controls、control-ui contain access settings fields、control-ui dismiss talk startup errors；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 15

## 3. 功能级详细差异

### 修复 control-ui contain access settings fields

修复 control-ui：contain access settings fields

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修复 control-ui dismiss talk startup errors

修复 control-ui：dismiss talk startup errors

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修复 control-ui filter archived sessions

修复 control-ui：filter archived sessions

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修复 ui render text-block tool results

修复 ui：render text-block tool results

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修改 Control UI explicit action feedback

修改 Control UI explicit action feedback

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修改 Refine responsive Control UI chat controls

修改 Refine responsive Control UI chat controls

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 修改 chat remove unsupported line-clamp declaration

修改 chat：remove unsupported line-clamp declaration

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 新增 control-ui collapse cron new job panel

新增 control-ui：collapse cron new job panel

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 新增 ui show active agent in dashboard header

新增 ui：show active agent in dashboard header

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 components regression/contract coverage、config quick regression/contract coverage、layout.mobile regression/contract coverage、markdown preview regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/styles-types`
- Changed path count: `16`
- Status counts: `新增 1、修改 15`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `16` files, `+2651` / `-469`

### 归纳依据

- 主要落点：implementation、configuration/schema、tests/contracts、mobile app runtime。
- 建议优先验证：优先运行 `pnpm ui:build`；`pnpm test:ui`；`pnpm build`。
- 相关 commit 主题：Control UI explicit action feedback；Refine responsive Control UI chat controls；feat(control-ui): collapse cron new job panel；fix(control-ui): contain access settings fields；fix(control-ui): dismiss talk startup errors；fix(control-ui): filter archived sessions；feat(ui): show active agent in dashboard header；fix: resolve small triage issues

### Dimension evidence

- `user-visible-修复-control-ui-contain-access-settings-fields` / 修复 control-ui contain access settings fields:
  - source: `path` [A] `ui/src/styles/markdown-preview.test.ts`
  - source: `path` [M] `ui/src/styles/base.css`
  - source: `path` [M] `ui/src/styles/chat/grouped.css`
  - source: `path` [M] `ui/src/styles/chat/layout.css`
- `user-visible-修复-control-ui-dismiss-talk-startup-errors` / 修复 control-ui dismiss talk startup errors:
  - source: `path` [A] `ui/src/styles/markdown-preview.test.ts`
  - source: `path` [M] `ui/src/styles/base.css`
  - source: `path` [M] `ui/src/styles/chat/grouped.css`
  - source: `path` [M] `ui/src/styles/chat/layout.css`
- `user-visible-修复-control-ui-filter-archived-sessions` / 修复 control-ui filter archived sessions:
  - source: `path` [A] `ui/src/styles/markdown-preview.test.ts`
  - source: `path` [M] `ui/src/styles/base.css`
  - source: `path` [M] `ui/src/styles/chat/grouped.css`
  - source: `path` [M] `ui/src/styles/chat/layout.css`
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `ui/src/styles/markdown-preview.test.ts`
  - source: `path` [M] `ui/src/styles/base.css`
  - source: `path` [M] `ui/src/styles/chat/grouped.css`
  - source: `path` [M] `ui/src/styles/chat/layout.css`
- `user-visible-修复-ui-render-text-block-tool-results` / 修复 ui render text-block tool results:
  - source: `path` [M] `ui/src/styles/base.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/grouped.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/layout.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/sidebar.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/text.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/tool-cards.css` — semantic cue
- `user-visible-修改-Control-UI-explicit-action-feedback` / 修改 Control UI explicit action feedback:
  - source: `path` [M] `ui/src/styles/base.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/grouped.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/layout.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/sidebar.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/text.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/tool-cards.css` — semantic cue
- `user-visible-修改-Refine-responsive-Control-UI-chat-controls` / 修改 Refine responsive Control UI chat controls:
  - source: `path` [M] `ui/src/styles/base.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/grouped.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/layout.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/sidebar.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/text.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/tool-cards.css` — semantic cue
- `maintenance-修改-chat-remove-unsupported-line-clamp-declarati` / 修改 chat remove unsupported line-clamp declaration:
  - source: `path` [M] `ui/src/styles/chat/grouped.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/layout.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/sidebar.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/text.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/tool-cards.css` — semantic cue
- `user-visible-新增-control-ui-collapse-cron-new-job-panel` / 新增 control-ui collapse cron new job panel:
  - source: `path` [A] `ui/src/styles/markdown-preview.test.ts`
  - source: `path` [M] `ui/src/styles/base.css`
  - source: `path` [M] `ui/src/styles/chat/grouped.css`
  - source: `path` [M] `ui/src/styles/chat/layout.css`
- `user-visible-新增-ui-show-active-agent-in-dashboard-header` / 新增 ui show active agent in dashboard header:
  - source: `path` [M] `ui/src/styles/base.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/grouped.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/layout.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/sidebar.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/text.css` — semantic cue
  - source: `path` [M] `ui/src/styles/chat/tool-cards.css` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `ui/src/styles/components.test.ts` — test evidence
  - source: `path` [M] `ui/src/styles/config-quick.test.ts` — test evidence
  - source: `path` [M] `ui/src/styles/layout.mobile.test.ts` — test evidence
  - source: `path` [M] `ui/src/styles/markdown-preview.test.ts` — test evidence

### 路径证据

- 新增 `ui/src/styles/markdown-preview.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/styles/base.css`：调整 base（implementation）。
- 修改 `ui/src/styles/chat/grouped.css`：调整 grouped（implementation）。
- 修改 `ui/src/styles/chat/layout.css`：调整 layout（implementation）。
- 修改 `ui/src/styles/chat/sidebar.css`：调整 sidebar（implementation）。
- 修改 `ui/src/styles/chat/text.css`：调整 text（implementation）。
- 修改 `ui/src/styles/chat/tool-cards.css`：调整 tool cards（implementation）。
- 修改 `ui/src/styles/components.css`：调整 components（implementation）。
- 修改 `ui/src/styles/components.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/styles/config-quick.css`：调整 config quick（configuration/schema）。
- 修改 `ui/src/styles/config-quick.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `ui/src/styles/config.css`：调整 styles config（configuration/schema）。
- 修改 `ui/src/styles/layout.css`：调整 layout（implementation）。
- 其余 3 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/web-ui/styles-types` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/styles-types/change-to-test.md` 的验证建议。
