# macOS Gateway Runtime

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus repo-native inspection

## Scope

Gateway process, endpoint, discovery, node mode, launch agent, remote tunnel, health, and runtime locator code paths.

## Leaf status

Split from the former broad `apps/macos/app-sources/` leaf during G007. The boundary is mapped, but verified promotion requires macOS/Xcode validation that is unavailable in this Linux execution environment.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder and exception rules.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `10` (修改 9，新增 1).
- Target-existing changed paths listed here: `10`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/CommandResolverTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalCommandDisplaySanitizerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalHelpersTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsStoreRefactorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeRuntimeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeGatewayConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/WideAreaGatewayDiscoveryTests.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->
## Version diff semantic refresh: v2026.5.4

- Feature: `mobile-desktop-apps`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `22`
- Target-existing changed paths reflected here: `22`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/CanvasWindowSmokeTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalPromptLayoutTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecApprovalsGatewayPrompterTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ExecSkillBinTrustTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/GatewayWebSocketTestSupport.swift`
- `apps/macos/Tests/OpenClawIPCTests/LaunchAgentManagerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/LowCoverageHelperTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacGatewayChatTransportMappingTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeBrowserProxyTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/MenuSessionsInjectorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/ModelCatalogLoaderTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/OpenClawConfigFileTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/RuntimeLocatorTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/SessionDataTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TailscaleIntegrationSectionTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkAudioPlayerTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeGatewayConfigTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/TalkModeRuntimeSpeechTests.swift`
- `apps/macos/Tests/OpenClawIPCTests/WideAreaGatewayDiscoveryTests.swift`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.
<!-- version-diff-refresh:v2026.5.4:end -->
