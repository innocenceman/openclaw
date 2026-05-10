# src/shared-misc-runtime-support/shared-primitives

## 一句话结论

shared primitives 所属的 Shared runtime primitives, compatibility, logging and startup support 有 440 个路径变化（新增 128、修改 286、删除 14、重命名 12），兼容性判断为行为变化。

## Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives`
- Changed path count: `440`
- Status counts: `新增 128、修改 286、删除 14、重命名 12`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `440` files, `+37855` / `-9941`

## 功能变化摘要

这个 leaf 属于 `Shared runtime primitives, compatibility, logging and startup support`。本次版本差异显示它的主要变化是：新增 128、修改 286、删除 14、重命名 12。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/chat/canvas-render.ts`
- `src/infra/approval-display-paths.test.ts`
- `src/infra/approval-display-paths.ts`
- `src/infra/approval-errors.test.ts`
- `src/infra/approval-errors.ts`
- `src/infra/approval-gateway-resolver.test.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-adapter-runtime.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `src/infra/approval-handler-runtime-types.ts`
- `src/infra/approval-handler-runtime.test.ts`
- `src/infra/approval-handler-runtime.ts`
- `src/infra/approval-handler.test-helpers.ts`
- `src/infra/approval-native-delivery.test.ts`
- `src/infra/approval-native-delivery.ts`
- `src/infra/approval-native-route-coordinator.test.ts`
- `src/infra/approval-native-route-coordinator.ts`
- `src/infra/approval-native-route-notice.test.ts`
- `src/infra/approval-native-route-notice.ts`
- `src/infra/approval-native-runtime-types.ts`
- `src/infra/approval-native-runtime.test.ts`
- `src/infra/approval-native-runtime.ts`
- `src/infra/approval-native-target-key.test.ts`
- `src/infra/approval-native-target-key.ts`
- `src/infra/approval-request-account-binding.ts`
- `src/infra/approval-request-filters.test.ts`
- `src/infra/approval-request-filters.ts`
- `src/infra/approval-turn-source.test.ts`
- `src/infra/approval-turn-source.ts`
- … 另有 98 个路径，详见 `leaf-impact.json`。

### 修改

- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/archive-staging.test.ts`
- `src/infra/archive.test.ts`
- `src/infra/archive.ts`
- `src/infra/backoff.test.ts`
- `src/infra/backoff.ts`
- `src/infra/backup-create.ts`
- `src/infra/bonjour-discovery.test.ts`
- `src/infra/bonjour-discovery.ts`
- `src/infra/boundary-file-read.ts`
- `src/infra/brew.test.ts`
- `src/infra/browser-open.ts`
- `src/infra/build-stamp.test.ts`
- `src/infra/canvas-host-url.ts`
- `src/infra/channel-activity.ts`
- `src/infra/channel-summary.test.ts`
- `src/infra/channel-summary.ts`
- `src/infra/channels-status-issues.ts`
- `src/infra/clawhub.test.ts`
- `src/infra/clawhub.ts`
- `src/infra/control-ui-assets.test.ts`
- `src/infra/control-ui-assets.ts`
- `src/infra/detect-package-manager.test.ts`
- `src/infra/device-bootstrap.test.ts`
- `src/infra/device-bootstrap.ts`
- `src/infra/device-identity.ts`
- `src/infra/device-pairing.ts`
- `src/infra/diagnostic-events.test.ts`
- `src/infra/diagnostic-events.ts`
- … 另有 256 个路径，详见 `leaf-impact.json`。

### 删除

- `src/infra/binaries.runtime.ts`
- `src/infra/exec-obfuscation-detect.test.ts`
- `src/infra/exec-obfuscation-detect.ts`
- `src/infra/gaxios-fetch-compat.test.ts`
- `src/infra/gaxios-fetch-compat.ts`
- `src/infra/matrix-legacy-crypto.test.ts`
- `src/infra/matrix-legacy-state.test.ts`
- `src/infra/matrix-migration-snapshot.test.ts`
- `src/infra/matrix-plugin-helper.test.ts`
- `src/infra/matrix-plugin-helper.ts`
- `src/types/cli-highlight.d.ts`
- `src/types/napi-rs-canvas.d.ts`
- `src/types/pdfjs-dist-legacy.d.ts`
- `src/types/qrcode-terminal.d.ts`

### 重命名

- `src/infra/bonjour-ciao.test.ts`
- `src/infra/bonjour-ciao.ts`
- `src/infra/bonjour-errors.test.ts`
- `src/infra/bonjour-errors.ts`
- `src/infra/bonjour.test.ts`
- `src/infra/bonjour.ts`
- `src/infra/matrix-account-selection.test.ts`
- `src/infra/matrix-legacy-crypto.ts`
- `src/infra/matrix-legacy-state.ts`
- `src/infra/matrix-migration-config.test.ts`
- `src/infra/matrix-migration-config.ts`
- `src/infra/matrix-migration-snapshot.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/shared-primitives` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/shared-primitives/change-to-test.md` 的验证建议。
