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
