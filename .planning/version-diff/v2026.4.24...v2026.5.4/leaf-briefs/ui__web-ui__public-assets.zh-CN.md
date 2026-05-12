# ui/web-ui/public-assets

## 1. 功能结论

**新增**：add Control UI PWA web push support；**修改**：contain iOS standalone viewport、remove stale preview artifacts；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 2、修改 2、删除 2

## 3. 功能级详细差异

### 修复 contain iOS standalone viewport

修复 contain iOS standalone viewport

- 验证提示：优先运行 `pnpm ui:build`。
- 置信度：`high`

### 新增 add Control UI PWA web push support

新增 add Control UI PWA web push support

- 验证提示：优先运行 `pnpm ui:build`。
- 置信度：`high`

### 维护调整 remove stale preview artifacts

维护调整 remove stale preview artifacts

- 验证提示：优先运行 `pnpm ui:build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 manifest，需要按契约边界审查。

- 验证提示：优先运行 `pnpm ui:build`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `dream diary preview v2`（`dream-diary-preview-v2.html`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `dream diary preview v3`（`dream-diary-preview-v3.html`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm ui:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/ui/web-ui/public-assets`
- Changed path count: `6`
- Status counts: `新增 2、修改 2、删除 2`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+162` / `-1915`

### 归纳依据

- 主要落点：implementation。
- 新增或暴露的关键符号包括：`CACHE_NAME`, `PRECACHE_URLS`。
- 建议优先验证：优先运行 `pnpm ui:build`。
- 相关 commit 主题：fix: contain iOS standalone viewport；chore: remove stale preview artifacts；feat: add Control UI PWA web push support

### Dimension evidence

- `maintenance-修复-contain-iOS-standalone-viewport` / 修复 contain iOS standalone viewport:
  - source: `path` [A] `ui/public/manifest.webmanifest`
  - source: `path` [A] `ui/public/sw.js`
  - source: `path` [M] `ui/index.html`
  - source: `path` [M] `ui/src/main.ts`
  - source: `path` [D] `dream-diary-preview-v2.html`
  - source: `path` [D] `dream-diary-preview-v3.html`
- `user-visible-新增-add-Control-UI-PWA-web-push-support` / 新增 add Control UI PWA web push support:
  - source: `path` [M] `ui/index.html` — semantic cue
  - source: `path` [M] `ui/public/manifest.webmanifest` — semantic cue
  - source: `path` [M] `ui/public/sw.js` — semantic cue
  - source: `path` [M] `ui/src/main.ts` — semantic cue
- `maintenance-维护调整-remove-stale-preview-artifacts` / 维护调整 remove stale preview artifacts:
  - source: `path` [M] `dream-diary-preview-v2.html` — semantic cue
  - source: `path` [M] `dream-diary-preview-v3.html` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `ui/public/manifest.webmanifest` — contract evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `dream-diary-preview-v2.html`
  - source: `path` [D] `dream-diary-preview-v3.html`

### 路径证据

- 新增 `ui/public/manifest.webmanifest`：调整 manifest（implementation）。
- 新增 `ui/public/sw.js`：调整 sw（implementation）。
- 修改 `ui/index.html`：调整 ui index（implementation）。
- 修改 `ui/src/main.ts`：调整 main（implementation）。
- 删除 `dream-diary-preview-v2.html`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `dream-diary-preview-v3.html`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `ui/web-ui/public-assets` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/ui/web-ui/public-assets/change-to-test.md` 的验证建议。
