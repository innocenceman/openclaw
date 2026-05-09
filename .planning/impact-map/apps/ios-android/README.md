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
