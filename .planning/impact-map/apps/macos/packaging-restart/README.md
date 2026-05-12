# macOS Packaging and Restart

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## Scope

Leaf module for `scripts/package-mac-app.sh`, `scripts/restart-mac.sh`, and `scripts/clawlog.sh`.

## Leaf status

This is a Wave 3 priority completion unit because it owns the standard developer packaging/restart path for the macOS app and the main log access helper.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
