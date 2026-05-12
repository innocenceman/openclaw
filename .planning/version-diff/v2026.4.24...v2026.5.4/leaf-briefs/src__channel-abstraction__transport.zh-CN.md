# src/channel-abstraction/transport

## 1. 功能结论

**修改**：remove unused internal entrypoints；行为变化，风险 high。

- 变更类型：`deletion`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：删除或废弃旧入口、行为调整
- 特殊形态：deleted-only
- 路径状态摘要（降级事实）：删除 1

## 3. 功能级详细差异

### 维护调整 remove unused internal entrypoints

维护调整 remove unused internal entrypoints

- 验证提示：优先运行 `| pnpm test -- src/channels/transport/stall-watchdog.test.ts | Escalate to channel send/monitor suites when transport timing or web behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.5.4:start --> ## Version diff test focus: v2026.5.4 - Risk:`。
- 置信度：`high`

### 删除/废弃变化

删除或废弃 `web plugin entrypoint`（`src/channels/web/index.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/channels/transport/stall-watchdog.test.ts | Escalate to channel send/monitor suites when transport timing or web behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.5.4:start --> ## Version diff test focus: v2026.5.4 - Risk:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/transport`
- Changed path count: `1`
- Status counts: `删除 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `1` files, `+0` / `-13`

### 归纳依据

- 主要落点：plugin entry/API surface。
- 建议优先验证：优先运行 `| pnpm test -- src/channels/transport/stall-watchdog.test.ts | Escalate to channel send/monitor suites when transport timing or web behavior changes. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.5.4:start --> ## Version diff test focus: v2026.5.4 - Risk:`。
- 相关 commit 主题：chore: remove unused internal entrypoints

### Dimension evidence

- `maintenance-维护调整-remove-unused-internal-entrypoints` / 维护调整 remove unused internal entrypoints:
  - source: `path` [D] `src/channels/web/index.ts`
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/channels/web/index.ts`

### 路径证据

- 删除 `src/channels/web/index.ts`：移除旧的 plugin entry/API surface 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/transport` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/transport/change-to-test.md` 的验证建议。
