# apps/ios-android/shared-kit

## 1. 功能结论

**新增**：cron surface run diagnostics in status；**修改**：ios harden gateway pairing setup、protocol refresh generated Swift models、move root contract fixture、protocol refresh Swift gateway models；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`ui`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 47

## 3. 功能级详细差异

### 修复 cron persist manual run ids in history

修复 cron：persist manual run ids in history

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 修复 render talk transcripts in native webchat

修复 render talk transcripts in native webchat

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 修复 trace plugin tool factory timings

修复 trace plugin tool factory timings

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 修复 ui preserve local session continuity

修复 ui：preserve local session continuity

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 新增 cron surface run diagnostics in status

新增 cron：surface run diagnostics in status

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 构建/发布调整 protocol refresh Swift gateway models

构建/发布调整 protocol：refresh Swift gateway models

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 构建/发布调整 protocol refresh generated Swift models

构建/发布调整 protocol：refresh generated Swift models

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 测试覆盖 move root contract fixture

测试覆盖 move root contract fixture

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 测试覆盖 stabilize session reset writer coverage

测试覆盖 stabilize session reset writer coverage

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 Talk Prompt Builder，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm ios:build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm ios:build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/ios-android/shared-kit`
- Changed path count: `47`
- Status counts: `修改 47`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `47` files, `+1691` / `-333`

### 归纳依据

- 主要落点：native app runtime。
- 建议优先验证：优先运行 `pnpm ios:build`。
- 相关 commit 主题：feat(cron): surface run diagnostics in status；fix(ios): harden gateway pairing setup；build(protocol): refresh generated Swift models；test: move root contract fixture；build(protocol): refresh Swift gateway models；fix(cron): persist manual run ids in history；test: stabilize session reset writer coverage；fix(ui): preserve local session continuity

### Dimension evidence

- `maintenance-修复-cron-persist-manual-run-ids-in-history` / 修复 cron persist manual run ids in history:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/DeepLinks.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GenericPasswordKeychainStore.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/InstanceIdentity.swift` — semantic cue
- `maintenance-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectChallengeSupport.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayDiscoveryStatusText.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayErrors.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift` — semantic cue
- `maintenance-修复-render-talk-transcripts-in-native-webchat` / 修复 render talk transcripts in native webchat:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/DeepLinks.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GenericPasswordKeychainStore.swift` — semantic cue
- `maintenance-修复-trace-plugin-tool-factory-timings` / 修复 trace plugin tool factory timings:
  - source: `path` [M] `apps/shared/OpenClawKit/Package.swift`
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift`
- `user-visible-修复-ui-preserve-local-session-continuity` / 修复 ui preserve local session continuity:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift` — semantic cue
- `maintenance-新增-cron-surface-run-diagnostics-in-status` / 新增 cron surface run diagnostics in status:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/DeepLinks.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayDiscoveryStatusText.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayPayloadDecoding.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayTLSPinning.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GenericPasswordKeychainStore.swift` — semantic cue
- `integration-build-release-构建-发布调整-protocol-refresh-Swift-gateway-models` / 构建/发布调整 protocol refresh Swift gateway models:
  - source: `path` [M] `apps/shared/OpenClawKit/Package.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift` — semantic cue
- `integration-build-release-构建-发布调整-protocol-refresh-generated-Swift-models` / 构建/发布调整 protocol refresh generated Swift models:
  - source: `path` [M] `apps/shared/OpenClawKit/Package.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift` — semantic cue
- `public-contract-测试覆盖-move-root-contract-fixture` / 测试覆盖 move root contract fixture:
  - source: `path` [M] `apps/shared/OpenClawKit/Tests/OpenClawKitTests/TalkConfigContractTests.swift` — semantic cue
- `tests-docs-测试覆盖-stabilize-session-reset-writer-coverage` / 测试覆盖 stabilize session reset writer coverage:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessions.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift` — semantic cue
  - source: `path` [M] `apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `apps/shared/OpenClawKit/Sources/OpenClawKit/TalkPromptBuilder.swift` — build/release evidence

### 路径证据

- 修改 `apps/shared/OpenClawKit/Package.swift`：调整 Package（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift`：调整 Chat Composer（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift`：调整 Chat Markdown Preprocessor（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift`：调整 Chat Markdown Renderer（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift`：调整 Chat Message Views（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift`：调整 Chat Models（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift`：调整 Chat Payload Decoding（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessions.swift`：调整 Chat Sessions（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTheme.swift`：调整 Chat Theme（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTransport.swift`：调整 Chat Transport（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView.swift`：调整 Chat View（native app runtime）。
- 修改 `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel.swift`：调整 Chat View Model（native app runtime）。
- 其余 35 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/ios-android/shared-kit` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/ios-android/shared-kit/change-to-test.md` 的验证建议。
