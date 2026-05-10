# Docs and Mintlify File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                               | Role                       | Evidence state             | Impact notes                                                                             |
| ---------------------------------------------------------- | -------------------------- | -------------------------- | ---------------------------------------------------------------------------------------- |
| `docs/docs.json`                                           | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Page moves or new docs often require a docs.json update in the same change.              |
| `docs/nav-tabs-underline.js`                               | `exceptioned-deep-partial` | `exceptioned-deep-partial` | UI drift here affects the public docs shell, not only one page family.                   |
| `docs/<category>/**`                                       | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Child leaf docs own the first-impact map; this parent records the shared Mintlify shell. |
| `docs/.generated/**`, `docs/.i18n/**`, and `docs/zh-CN/**` | `exceptioned-deep-partial` | `exceptioned-deep-partial` | These leaves gate docs drift even when public markdown edits happen elsewhere.           |

## Update rule

Use this parent card for shared Mintlify shell/routing behavior only. Category-specific content ownership belongs in the child leaf cards and their rows in `leaf-index.md`.
