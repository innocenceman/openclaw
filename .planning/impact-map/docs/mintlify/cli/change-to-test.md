# Docs cli Change-to-Test Matrix

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

- Changed paths: `53` (修改 48，新增 5).
- Target-existing path refs in active map: `53`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/cli/agent.md`
- `docs/cli/agents.md`
- `docs/cli/backup.md`
- `docs/cli/browser.md`
- `docs/cli/channels.md`
- `docs/cli/commitments.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/crestodian.md`
- `docs/cli/cron.md`
- `docs/cli/daemon.md`
- `docs/cli/dashboard.md`
- `docs/cli/devices.md`
- `docs/cli/directory.md`
- `docs/cli/doctor.md`
- `docs/cli/gateway.md`
- `docs/cli/hooks.md`
- `docs/cli/index.md`
- `docs/cli/infer.md`
- `docs/cli/logs.md`
- `docs/cli/mcp.md`
- `docs/cli/memory.md`
- `docs/cli/message.md`
- `docs/cli/migrate.md`
- `docs/cli/models.md`
- `docs/cli/node.md`
- `docs/cli/nodes.md`
- `docs/cli/onboard.md`
- `docs/cli/pairing.md`
- `docs/cli/plugins.md`
- `docs/cli/proxy.md`
- `docs/cli/sandbox.md`
- `docs/cli/security.md`
- `docs/cli/sessions.md`
- `docs/cli/setup.md`
- `docs/cli/skills.md`
- `docs/cli/status.md`
- `docs/cli/tasks.md`
- `docs/cli/update.md`
- `docs/cli/voicecall.md`
- … plus 1 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
