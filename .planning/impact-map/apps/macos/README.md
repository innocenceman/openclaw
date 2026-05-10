# macOS App

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

macOS app source, gateway lifecycle integration, Info.plist version surfaces, app packaging/restart/logging scripts, and the closest committed XCTest suite under `apps/macos/Tests/**`.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Leaf coverage

| Leaf | Coverage | Why it matters |
| --- | --- | --- |
| `app-sources/` | `exceptioned-deep-partial` | menu bar runtime, settings, onboarding, gateway/process coordination. |
| `packaging-restart/` | `exceptioned-deep-partial` | packaged app generation, restart workflow, log access scripts. |
| `resources-versioning/` | `exceptioned-deep-partial` | bundle metadata and icon/version resources. |
| `tests/` | `exceptioned-deep-partial` | macOS XCTest/smoke coverage concentrated under `OpenClawIPCTests`. |
