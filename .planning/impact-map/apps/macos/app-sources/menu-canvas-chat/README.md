# macOS Menu, Canvas, and Chat

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus repo-native inspection

## Scope

Menu bar presentation, sessions/menu cards, canvas windows/scheme handlers, web chat bridge, and usage/context UI.

## Leaf status

Split from the former broad `apps/macos/app-sources/` leaf during G007. The boundary is mapped, but verified promotion requires macOS/Xcode validation that is unavailable in this Linux execution environment.

## Detail files

- `file-roles.md`: concrete path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder and exception rules.
