# Web UI

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

## Scope

Control UI source under `ui/`, including the app shell, controllers/views, i18n, public assets, styles, types, build config, and the nearest committed UI test surfaces.

## Detail files

- `file-roles.md`: file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Leaf coverage

| Leaf             | Coverage                   | Why it matters                                                              |
| ---------------- | -------------------------- | --------------------------------------------------------------------------- |
| `components/`    | `exceptioned-deep-partial` | App shell, controllers, and views under `ui/src/ui/**`.                     |
| `i18n/`          | `exceptioned-deep-partial` | Locale registry, lazy locale loading, translation resources/tests.          |
| `public-assets/` | `exceptioned-deep-partial` | HTML boot shell and favicon/apple-touch assets.                             |
| `styles-types/`  | `exceptioned-deep-partial` | Global style import graph and local type declarations for UI build/runtime. |
