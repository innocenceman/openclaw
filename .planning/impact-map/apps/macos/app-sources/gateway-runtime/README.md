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
