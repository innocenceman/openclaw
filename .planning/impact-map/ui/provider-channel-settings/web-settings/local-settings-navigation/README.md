# Web Local Settings Navigation

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted UI validation

## Scope

Navigation into settings slices, local gateway/token/theme/session persistence, browser routing.

## Leaf status

G007 passed web build/static checks, but web UI tests exited 1 with unhandled Vitest errors; native parity remains exceptioned under `apps/provider-channel-settings/native-settings/` because macOS/iOS platform checks are unavailable.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
