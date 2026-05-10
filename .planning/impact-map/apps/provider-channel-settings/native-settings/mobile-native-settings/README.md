# Mobile Native Settings

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted validation where platform checks were available

## Scope

iOS gateway/settings persistence and Android connect/settings screens.

## Leaf status

Split from the former broad `native-settings/` leaf during G007. Android validation passed; iOS simulator/device checks unavailable here.

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
- Changed paths in this leaf: `8` (新增 3，修改 5).
- Target-existing changed paths listed here: `8`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/ios/Sources/Gateway/ExecApprovalPromptDialog.swift`
- `apps/ios/Sources/Gateway/GatewayConnectionIssue.swift`
- `apps/ios/Sources/Gateway/GatewayProblemView.swift`
- `apps/ios/Sources/Gateway/GatewayQuickSetupSheet.swift`
- `apps/ios/Sources/Status/GatewayStatusBuilder.swift`
- `apps/ios/Tests/GatewayConnectionControllerTests.swift`
- `apps/ios/Tests/GatewayConnectionSecurityTests.swift`
- `apps/ios/Tests/GatewayStatusBuilderTests.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
