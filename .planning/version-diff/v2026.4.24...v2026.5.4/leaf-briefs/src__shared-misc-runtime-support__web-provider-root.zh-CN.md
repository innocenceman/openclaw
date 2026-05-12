# src/shared-misc-runtime-support/web-provider-root

## 1. 功能结论

**修改**：web-search scope explicit provider runtime loading、web-search honor provider abort signals、restore current main ci checks、gemini reuse google provider config for web search；**迁移/重构**：streamline plugin cache helpers；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：修改 7、删除 1

## 3. 功能级详细差异

### 修复 gemini reuse google provider config for web search

修复 gemini：reuse google provider config for web search

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 restore current main ci checks

修复 restore current main ci checks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 runtime resolve web search SecretRefs from snapshots

修复 runtime：resolve web search SecretRefs from snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 web-fetch resolve external providers

修复 web-fetch：resolve external providers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 web-search honor provider abort signals

修复 web-search：honor provider abort signals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 web-search scope explicit provider runtime loading

修复 web-search：scope explicit provider runtime loading

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Fix infer CLI reliability gaps (openclaw#63263)

修改 Fix infer CLI reliability gaps (openclaw#63263)

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 remove unused internal entrypoints

维护调整 remove unused internal entrypoints

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 streamline plugin cache helpers

迁移/重构 streamline plugin cache helpers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channel web、content extractors、runtime regression/contract coverage、web fetch runtime，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 runtime regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `channel web`（`src/channel-web.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/web-provider-root`
- Changed path count: `8`
- Status counts: `修改 7、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+593` / `-116`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`resolveConfiguredWebFetchProviderId`, `resolveWebSearchRuntimeConfig`, `resolveExplicitWebSearchProviderId`, `resolveExplicitWebSearchProviderPluginIds`, `resolveWebSearchProviderLoadScope`, `isStructuredAvailabilityError`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(web-search): scope explicit provider runtime loading；refactor: streamline plugin cache helpers；fix(web-search): honor provider abort signals；fix: restore current main ci checks；fix(gemini): reuse google provider config for web search；fix(web-fetch): resolve external providers；chore: remove unused internal entrypoints；Fix infer CLI reliability gaps (openclaw#63263)

### Dimension evidence

- `maintenance-修复-gemini-reuse-google-provider-config-for-web` / 修复 gemini reuse google provider config for web search:
  - source: `path` [M] `src/channel-web.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime-types.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.test.ts` — semantic cue
- `maintenance-修复-restore-current-main-ci-checks` / 修复 restore current main ci checks:
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts`
  - source: `path` [M] `src/web-fetch/runtime.test.ts`
  - source: `path` [M] `src/web-fetch/runtime.ts`
  - source: `path` [D] `src/channel-web.ts`
- `runtime-behavior-修复-runtime-resolve-web-search-SecretRefs-from-s` / 修复 runtime resolve web search SecretRefs from snapshots:
  - source: `path` [M] `src/channel-web.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime-types.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.test.ts` — semantic cue
- `maintenance-修复-web-fetch-resolve-external-providers` / 修复 web-fetch resolve external providers:
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.ts` — semantic cue
- `maintenance-修复-web-search-honor-provider-abort-signals` / 修复 web-search honor provider abort signals:
  - source: `path` [M] `src/web-search/runtime-types.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.ts` — semantic cue
  - source: `path` [M] `src/web/provider-runtime-shared.ts` — semantic cue
- `runtime-behavior-修复-web-search-scope-explicit-provider-runtime-l` / 修复 web-search scope explicit provider runtime loading:
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime-types.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.ts` — semantic cue
- `maintenance-修改-Fix-infer-CLI-reliability-gaps-openclaw-632` / 修改 Fix infer CLI reliability gaps (openclaw#63263):
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts`
  - source: `path` [M] `src/web-fetch/runtime.test.ts`
  - source: `path` [M] `src/web-fetch/runtime.ts`
  - source: `path` [D] `src/channel-web.ts`
- `maintenance-维护调整-remove-unused-internal-entrypoints` / 维护调整 remove unused internal entrypoints:
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts`
  - source: `path` [M] `src/web-fetch/runtime.test.ts`
  - source: `path` [M] `src/web-fetch/runtime.ts`
  - source: `path` [D] `src/channel-web.ts`
- `runtime-behavior-迁移-重构-streamline-plugin-cache-helpers` / 迁移/重构 streamline plugin cache helpers:
  - source: `path` [M] `src/channel-web.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/web-fetch/runtime.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime-types.ts` — semantic cue
  - source: `path` [M] `src/web-search/runtime.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/channel-web.ts` — contract evidence
  - source: `path` [M] `src/web-fetch/content-extractors.runtime.ts` — contract evidence
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — contract evidence
  - source: `path` [M] `src/web-fetch/runtime.ts` — contract evidence
  - source: `path` [M] `src/web-search/runtime-types.ts` — contract evidence
  - source: `path` [M] `src/web-search/runtime.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/web-fetch/runtime.test.ts` — test evidence
  - source: `path` [M] `src/web-search/runtime.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/channel-web.ts`

### 路径证据

- 修改 `src/web-fetch/content-extractors.runtime.ts`：调整 content extractors（implementation）。
- 修改 `src/web-fetch/runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/web-fetch/runtime.ts`：调整 web fetch runtime（implementation）。
- 修改 `src/web-search/runtime-types.ts`：调整 runtime types（implementation）。
- 修改 `src/web-search/runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/web-search/runtime.ts`：调整 web search runtime（implementation）。
- 修改 `src/web/provider-runtime-shared.ts`：调整 provider runtime shared（implementation）。
- 删除 `src/channel-web.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/web-provider-root` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/web-provider-root/change-to-test.md` 的验证建议。
