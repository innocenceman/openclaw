# iOS and Android Apps

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Native iOS and Android apps, shared `OpenClawKit`, onboarding and gateway connection surfaces, platform signing/version inputs, and the closest committed mobile test assets.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Leaf coverage

| Leaf | Coverage | Why it matters |
| --- | --- | --- |
| `android-app/` | `exceptioned-deep-partial` | Android runtime, connection UI, permissions, secure persistence. |
| `android-benchmark/` | `exceptioned-deep-partial` | Macrobenchmark harness configuration for startup/perf work. |
| `ios-app/` | `exceptioned-deep-partial` | iOS runtime, gateway trust/state, onboarding, settings, XCTest coverage. |
| `ios-extensions-watch/` | `exceptioned-deep-partial` | Share extension, live activity widget, watch inbox surfaces. |
| `shared-kit/` | `exceptioned-deep-partial` | Shared Swift package for protocol, chat UI, and reusable native helpers. |
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `mobile-desktop-apps`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `3` (新增 3).
- Target-existing changed paths listed here: `3`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `apps/macos-mlx-tts/Package.resolved`
- `apps/macos-mlx-tts/Package.swift`
- `apps/macos-mlx-tts/Sources/OpenClawMLXTTSHelper/main.swift`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
