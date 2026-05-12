# src/shared-misc-runtime-support/root-entrypoints

## 1. 功能结论

**修改**：clean up orphaned child processes、reject unowned CLI roots before plugin load、route session store writes through writer queue、cli scope packaged compile cache；**迁移/重构**：trim core local type exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 7

## 3. 功能级详细差异

### 优化 improve gateway startup diagnostics

优化 improve gateway startup diagnostics

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 优化 test route more unit tests through fast lane

优化 test：route more unit tests through fast lane

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 clean up orphaned child processes

修复 clean up orphaned child processes

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 cli disable source checkout compile cache

修复 cli：disable source checkout compile cache

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 cli scope packaged compile cache

修复 cli：scope packaged compile cache

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 gateway ignore broken pipe crashes

修复 gateway：ignore broken pipe crashes

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 reject unowned CLI roots before plugin load

修复 reject unowned CLI roots before plugin load

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 文档同步 types mark legacy aliases deprecated

文档同步 types：mark legacy aliases deprecated

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 trim core local type exports

迁移/重构 trim core local type exports

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 extension API，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 entry.compile cache regression/contract coverage、entry.respawn regression/contract coverage、entry regression/contract coverage、library regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints`
- Changed path count: `9`
- Status counts: `新增 2、修改 7`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `9` files, `+777` / `-177`

### 归纳依据

- 主要落点：tests/contracts、implementation、plugin entry/API surface。
- 新增或暴露的关键符号包括：`COMPILE_CACHE_RESPAWN_SIGNAL_EXIT_GRACE_MS`, `COMPILE_CACHE_RESPAWN_SIGNAL_FORCE_KILL_GRACE_MS`, `resolveEntryInstallRoot`, `isSourceCheckoutInstallRoot`, `isNodeCompileCacheDisabled`, `isNodeCompileCacheRequested`, `shouldEnableOpenClawCompileCache`, `sanitizeCompileCachePathSegment`, `readPackageVersion`, `resolveOpenClawCompileCacheDirectory`。
- 建议优先验证：优先运行 `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`；`pnpm build`。
- 相关 commit 主题：fix: clean up orphaned child processes；fix: reject unowned CLI roots before plugin load；perf: route session store writes through writer queue；refactor: trim core local type exports；fix(cli): scope packaged compile cache；docs(types): mark legacy aliases deprecated；perf: improve gateway startup diagnostics；fix(cli): disable source checkout compile cache

### Dimension evidence

- `maintenance-优化-improve-gateway-startup-diagnostics` / 优化 improve gateway startup diagnostics:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `maintenance-优化-test-route-more-unit-tests-through-fast-lane` / 优化 test route more unit tests through fast lane:
  - source: `path` [M] `src/entry.compile-cache.test.ts` — semantic cue
  - source: `path` [M] `src/entry.respawn.test.ts` — semantic cue
  - source: `path` [M] `src/entry.test.ts` — semantic cue
  - source: `path` [M] `src/library.test.ts` — semantic cue
- `maintenance-修复-clean-up-orphaned-child-processes` / 修复 clean up orphaned child processes:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `maintenance-修复-cli-disable-source-checkout-compile-cache` / 修复 cli disable source checkout compile cache:
  - source: `path` [M] `src/entry.compile-cache.test.ts` — semantic cue
  - source: `path` [M] `src/entry.compile-cache.ts` — semantic cue
- `integration-build-release-修复-cli-scope-packaged-compile-cache` / 修复 cli scope packaged compile cache:
  - source: `path` [M] `src/entry.compile-cache.test.ts` — semantic cue
  - source: `path` [M] `src/entry.compile-cache.ts` — semantic cue
- `maintenance-修复-gateway-ignore-broken-pipe-crashes` / 修复 gateway ignore broken pipe crashes:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `maintenance-修复-reject-unowned-CLI-roots-before-plugin-load` / 修复 reject unowned CLI roots before plugin load:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `tests-docs-文档同步-types-mark-legacy-aliases-deprecated` / 文档同步 types mark legacy aliases deprecated:
  - source: `path` [A] `src/entry.compile-cache.test.ts`
  - source: `path` [A] `src/entry.compile-cache.ts`
  - source: `path` [M] `src/entry.respawn.test.ts`
  - source: `path` [M] `src/entry.respawn.ts`
  - source: `path` [M] `src/entry.test.ts`
- `migration-迁移-重构-trim-core-local-type-exports` / 迁移/重构 trim core local type exports:
  - source: `path` [M] `src/entry.compile-cache.test.ts` — semantic cue
  - source: `path` [M] `src/entry.compile-cache.ts` — semantic cue
  - source: `path` [M] `src/entry.respawn.test.ts` — semantic cue
  - source: `path` [M] `src/entry.respawn.ts` — semantic cue
  - source: `path` [M] `src/entry.test.ts` — semantic cue
  - source: `path` [M] `src/entry.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/extensionAPI.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/entry.compile-cache.test.ts` — test evidence
  - source: `path` [M] `src/entry.respawn.test.ts` — test evidence
  - source: `path` [M] `src/entry.test.ts` — test evidence
  - source: `path` [M] `src/library.test.ts` — test evidence

### 路径证据

- 新增 `src/entry.compile-cache.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/entry.compile-cache.ts`：调整 entry.compile cache（implementation）。
- 修改 `src/entry.respawn.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/entry.respawn.ts`：调整 entry.respawn（implementation）。
- 修改 `src/entry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/entry.ts`：调整 entry（implementation）。
- 修改 `src/extensionAPI.ts`：调整 extension API（implementation）。
- 修改 `src/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `src/library.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/root-entrypoints` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/root-entrypoints/change-to-test.md` 的验证建议。
