# Docs assets File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path | Role | Evidence state | Impact notes |
| --- | --- | --- | --- |
| docs/assets/** | Static images and supporting assets referenced by docs pages. | partial | Path changes surface first as broken links, stale screenshots, or missing illustrations. |
| docs/**/*.md* | Consuming docs pages that embed or link to these assets. | partial | Update references in the same change when an asset path or filename changes. |
| docs/docs.json | Mintlify shell config and route registry. | partial | Landing-page or nav changes can silently orphan asset-backed pages. |

## Update rule

When a changed path in this leaf becomes the durable owner of a separate validation or synchronization rule, add it here and update `code-paths.md` plus `change-to-test.md` in the same change.
