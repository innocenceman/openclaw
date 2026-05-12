# apps/macos/tests

## 1. 功能结论

**修改**：route macos voice wake to selected session、update onboarding wizard step fixtures、downmix speech buffers for macos voice、accept trigger-only voice wake test；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：新增能力或入口、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 13

## 3. 功能级详细差异

### 修复 accept trigger-only voice wake test

修复 accept trigger-only voice wake test

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 app retry device tokens on pinned gateways

修复 app：retry device tokens on pinned gateways

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 downmix speech buffers for macos voice

修复 downmix speech buffers for macos voice

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 harden mac app computer use docs

修复 harden mac app computer use docs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 macos keep attach-only from stopping gateway launchd

修复 macos：keep attach-only from stopping gateway launchd

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 macos repair stale gateway tls pins

修复 macos：repair stale gateway tls pins

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 route macos voice wake to selected session

修复 route macos voice wake to selected session

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 macos remove conflict marker

测试覆盖 macos：remove conflict marker

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 macos stabilize gateway control test

测试覆盖 macos：stabilize gateway control test

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 update onboarding wizard step fixtures

测试覆盖 update onboarding wizard step fixtures

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/tests`
- Changed path count: `14`
- Status counts: `新增 1、修改 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `14` files, `+667` / `-93`

### 归纳依据

- 主要落点：native app runtime。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix: route macos voice wake to selected session；test: update onboarding wizard step fixtures；fix: downmix speech buffers for macos voice；fix: accept trigger-only voice wake test；fix(app): retry device tokens on pinned gateways；fix(macos): repair stale gateway tls pins；fix(macos): keep attach-only from stopping gateway launchd；test(macos): remove conflict marker

### Dimension evidence

- `maintenance-修复-accept-trigger-only-voice-wake-test` / 修复 accept trigger-only voice wake test:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `maintenance-修复-app-retry-device-tokens-on-pinned-gateways` / 修复 app retry device tokens on pinned gateways:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `user-visible-修复-downmix-speech-buffers-for-macos-voice` / 修复 downmix speech buffers for macos voice:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `tests-docs-修复-harden-mac-app-computer-use-docs` / 修复 harden mac app computer use docs:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `maintenance-修复-macos-keep-attach-only-from-stopping-gateway` / 修复 macos keep attach-only from stopping gateway launchd:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `maintenance-修复-macos-repair-stale-gateway-tls-pins` / 修复 macos repair stale gateway tls pins:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `maintenance-修复-route-macos-voice-wake-to-selected-session` / 修复 route macos voice wake to selected session:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `tests-docs-测试覆盖-macos-remove-conflict-marker` / 测试覆盖 macos remove conflict marker:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `tests-docs-测试覆盖-macos-stabilize-gateway-control-test` / 测试覆盖 macos stabilize gateway control test:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift` — semantic cue
- `tests-docs-测试覆盖-update-onboarding-wizard-step-fixtures` / 测试覆盖 update onboarding wizard step fixtures:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/OnboardingRemoteAuthPromptTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/OnboardingWizardStepViewTests.swift` — semantic cue

### 路径证据

- 新增 `apps/macos/Tests/OpenClawIPCTests/GatewayChannelDeviceTokenRetryTests.swift`：调整 Gateway Channel Device Token Retry Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/ChannelsSettingsSmokeTests.swift`：调整 Channels Settings Smoke Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift`：调整 Gateway Channel Connect Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift`：调整 Gateway Connection Control Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayDiscoverySelectionSupportTests.swift`：调整 Gateway Discovery Selection Support Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift`：调整 Gateway Endpoint Store Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayLaunchAgentManagerTests.swift`：调整 Gateway Launch Agent Manager Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift`：调整 Gateway Process Manager Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/OnboardingRemoteAuthPromptTests.swift`：调整 Onboarding Remote Auth Prompt Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/OnboardingWizardStepViewTests.swift`：调整 Onboarding Wizard Step View Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/VoicePushToTalkTests.swift`：调整 Voice Push To Talk Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/VoiceWakeForwarderTests.swift`：调整 Voice Wake Forwarder Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/VoiceWakeRuntimeTests.swift`：调整 Voice Wake Runtime Tests（native app runtime）。
- 其余 1 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/macos/tests` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/macos/tests/change-to-test.md` 的验证建议。
