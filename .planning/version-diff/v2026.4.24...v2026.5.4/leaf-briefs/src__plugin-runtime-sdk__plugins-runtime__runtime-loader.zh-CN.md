# src/plugin-runtime-sdk/plugins-runtime/runtime-loader

## 1. 功能结论

**修改**：plugins trust official diagnostics installs、plugins ignore invalid managed runtime shadows、resolve small triage issues、plugins narrow optional tool cold loads；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CLI/agent 使用者、Provider/plugin 调用方、agent runtime 集成方、插件作者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 修复 bonjour default LAN discovery on macOS only

修复 bonjour：default LAN discovery on macOS only

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins dedupe manifest diagnostics

修复 plugins：dedupe manifest diagnostics

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins ignore invalid managed runtime shadows

修复 plugins：ignore invalid managed runtime shadows

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins merge external catalog channel hints

修复 plugins：merge external catalog channel hints

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins narrow optional tool cold loads

修复 plugins：narrow optional tool cold loads

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins supplement external catalog contracts

修复 plugins：supplement external catalog contracts

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins suppress mirrored provider env warnings

修复 plugins：suppress mirrored provider env warnings

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins trust official diagnostics installs

修复 plugins：trust official diagnostics installs

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 tolerate prerelease channel metadata

测试覆盖 tolerate prerelease channel metadata

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 manifest registry regression/contract coverage、manifest registry，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 manifest registry regression/contract coverage、runtime plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/runtime-loader`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+1360` / `-272`

### 归纳依据

- 主要落点：tests/contracts、implementation、plugin entry/API surface。
- 新增或暴露的关键符号包括：`normalizePackageChannelCommands`, `mergeContractLists`, `mergeManifestContracts`, `mergeCatalogChannelConfigs`。
- 建议优先验证：优先运行 `| pnpm test -- src/plugins/loader.test.ts src/plugins/discovery.test.ts src/plugins/install.test.ts src/plugins/runtime/index.test.ts | Run pnpm build when lazy-loading or packaged runtime boundaries change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(plugins): trust official diagnostics installs；fix(plugins): ignore invalid managed runtime shadows；fix: resolve small triage issues；fix(plugins): narrow optional tool cold loads；fix(plugins): merge external catalog channel hints；fix(plugins): supplement external catalog contracts；fix(plugins): dedupe manifest diagnostics；fix(bonjour): default LAN discovery on macOS only

### Dimension evidence

- `maintenance-修复-bonjour-default-LAN-discovery-on-macOS-only` / 修复 bonjour default LAN discovery on macOS only:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts`
  - source: `path` [M] `src/plugins/manifest-registry.ts`
  - source: `path` [M] `src/plugins/runtime/index.test.ts`
- `public-contract-修复-plugins-dedupe-manifest-diagnostics` / 修复 plugins dedupe manifest diagnostics:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `runtime-behavior-修复-plugins-ignore-invalid-managed-runtime-shado` / 修复 plugins ignore invalid managed runtime shadows:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `runtime-behavior-修复-plugins-merge-external-catalog-channel-hints` / 修复 plugins merge external catalog channel hints:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `maintenance-修复-plugins-narrow-optional-tool-cold-loads` / 修复 plugins narrow optional tool cold loads:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `public-contract-修复-plugins-supplement-external-catalog-contracts` / 修复 plugins supplement external catalog contracts:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `maintenance-修复-plugins-suppress-mirrored-provider-env-warni` / 修复 plugins suppress mirrored provider env warnings:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `maintenance-修复-plugins-trust-official-diagnostics-installs` / 修复 plugins trust official diagnostics installs:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/manifest-registry.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/runtime/index.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts`
  - source: `path` [M] `src/plugins/manifest-registry.ts`
  - source: `path` [M] `src/plugins/runtime/index.test.ts`
- `public-contract-测试覆盖-tolerate-prerelease-channel-metadata` / 测试覆盖 tolerate prerelease channel metadata:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts`
  - source: `path` [M] `src/plugins/manifest-registry.ts`
  - source: `path` [M] `src/plugins/runtime/index.test.ts`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/manifest-registry.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/plugins/manifest-registry.test.ts` — test evidence
  - source: `path` [M] `src/plugins/runtime/index.test.ts` — test evidence

### 路径证据

- 修改 `src/plugins/manifest-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/manifest-registry.ts`：调整 manifest registry（implementation）。
- 修改 `src/plugins/runtime/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/runtime/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugins-runtime/runtime-loader` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/runtime-loader/change-to-test.md` 的验证建议。
