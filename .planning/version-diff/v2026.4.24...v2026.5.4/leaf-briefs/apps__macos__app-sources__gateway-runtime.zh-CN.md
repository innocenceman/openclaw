# apps/macos/app-sources/gateway-runtime

## 1. 功能结论

**修改**：cron clarify no-delivery previews、macos avoid Tailscale hydration config rewrites、macos route Talk providers through gateway TTS、macos preserve gateway auth config writes；**迁移/重构**：macos move sessions into context submenu；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 2、修改 20

## 3. 功能级详细差异

### 修复 cron clarify no-delivery previews

修复 cron：clarify no-delivery previews

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos avoid Tailscale hydration config rewrites

修复 macos：avoid Tailscale hydration config rewrites

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos keep A2UI canvas content visible

修复 macos：keep A2UI canvas content visible

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos parse model catalog without JavaScriptCore

修复 macos：parse model catalog without JavaScriptCore

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos preserve gateway auth config writes

修复 macos：preserve gateway auth config writes

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos repair stale gateway tls pins

修复 macos：repair stale gateway tls pins

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos reserve exec approval dialog layout space

修复 macos：reserve exec approval dialog layout space

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 macos route Talk providers through gateway TTS

修复 macos：route Talk providers through gateway TTS

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 修复 render talk transcripts in native webchat

修复 render talk transcripts in native webchat

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

### 迁移/重构 macos move sessions into context submenu

迁移/重构 macos：move sessions into context submenu

- 验证提示：优先运行 `pnpm check:host-env-policy:swift`。
- 置信度：`high`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:host-env-policy:swift`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `mobile-desktop-apps`
- Impact-map dir: `.planning/impact-map/apps/macos/app-sources/gateway-runtime`
- Changed path count: `22`
- Status counts: `新增 2、修改 20`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `22` files, `+760` / `-94`

### 归纳依据

- 主要落点：native app runtime。
- 建议优先验证：优先运行 `pnpm check:host-env-policy:swift`。
- 相关 commit 主题：fix(cron): clarify no-delivery previews；fix(macos): avoid Tailscale hydration config rewrites；fix(macos): route Talk providers through gateway TTS；fix(macos): preserve gateway auth config writes；fix: render talk transcripts in native webchat；refactor(macos): move sessions into context submenu；fix(macos): reserve exec approval dialog layout space；fix(macos): keep A2UI canvas content visible

### Dimension evidence

- `maintenance-修复-cron-clarify-no-delivery-previews` / 修复 cron clarify no-delivery previews:
  - source: `path` [A] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift`
  - source: `path` [A] `apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift`
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift`
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `maintenance-修复-macos-avoid-Tailscale-hydration-config-rewri` / 修复 macos avoid Tailscale hydration config rewrites:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `user-visible-修复-macos-keep-A2UI-canvas-content-visible` / 修复 macos keep A2UI canvas content visible:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `runtime-behavior-修复-macos-parse-model-catalog-without-JavaScript` / 修复 macos parse model catalog without JavaScriptCore:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `maintenance-修复-macos-preserve-gateway-auth-config-writes` / 修复 macos preserve gateway auth config writes:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `maintenance-修复-macos-repair-stale-gateway-tls-pins` / 修复 macos repair stale gateway tls pins:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `maintenance-修复-macos-reserve-exec-approval-dialog-layout-sp` / 修复 macos reserve exec approval dialog layout space:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `user-visible-修复-macos-route-Talk-providers-through-gateway-T` / 修复 macos route Talk providers through gateway TTS:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
- `maintenance-修复-render-talk-transcripts-in-native-webchat` / 修复 render talk transcripts in native webchat:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/MacGatewayChatTransportMappingTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/MenuSessionsInjectorTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/TailscaleIntegrationSectionTests.swift` — semantic cue
- `migration-迁移-重构-macos-move-sessions-into-context-submenu` / 迁移/重构 macos move sessions into context submenu:
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift` — semantic cue
  - source: `path` [M] `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift` — semantic cue

### 路径证据

- 新增 `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift`：调整 Exec Approval Prompt Layout Tests（native app runtime）。
- 新增 `apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift`：调整 Mac Node Mode Coordinator Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`：调整 App State Remote Config Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift`：调整 Canvas Window Smoke Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`：调整 Exec Allowlist Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift`：调整 Exec Approvals Gateway Prompter Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift`：调整 Exec Skill Bin Trust Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/GatewayWebSocketTestSupport.swift`：调整 Gateway Web Socket Test Support（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/LaunchAgentManagerTests.swift`：调整 Launch Agent Manager Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/LowCoverageHelperTests.swift`：调整 Low Coverage Helper Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/MacGatewayChatTransportMappingTests.swift`：调整 Mac Gateway Chat Transport Mapping Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/MacNodeBrowserProxyTests.swift`：调整 Mac Node Browser Proxy Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/MenuSessionsInjectorTests.swift`：调整 Menu Sessions Injector Tests（native app runtime）。
- 修改 `apps/macos/Tests/OpenClawIPCTests/ModelCatalogLoaderTests.swift`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `apps/macos/app-sources/gateway-runtime` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/apps/macos/app-sources/gateway-runtime/change-to-test.md` 的验证建议。
