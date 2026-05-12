# Docs install Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                             | Escalation trigger                                                                        |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Existing page copy, examples, or frontmatter changed | `pnpm check:docs`                            | Escalate to product-specific tests only when the docs change is coupled to code behavior. |
| Page added, renamed, moved, or redirect/nav changed  | `pnpm docs:check-links` and `pnpm docs:list` | Update `docs/docs.json` in the same change when Mintlify route ownership changes.         |
| New English title or short label introduced          | `pnpm docs:check-i18n-glossary`              | Add glossary coverage before any zh-CN rerun.                                             |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `24` (修改 22，新增 2).
- Target-existing path refs in active map: `24`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/install/ansible.md`
- `docs/install/bun.md`
- `docs/install/development-channels.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/hetzner.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/macos-vm.md`
- `docs/install/migrating-claude.md`
- `docs/install/migrating-hermes.md`
- `docs/install/migrating.md`
<!-- version-diff-refresh:v2026.5.4:end -->
