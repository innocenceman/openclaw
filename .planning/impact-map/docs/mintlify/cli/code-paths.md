# Docs cli Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/cli` changes or moves.
2. Local index pages plus `docs/docs.json` determine whether the route stays reachable in Mintlify.
3. `pnpm check:docs` and `pnpm docs:check-links` are the first automated checks.

## Translation gate path

1. English page titles, section labels, or short nav labels change.
2. `pnpm docs:check-i18n-glossary` confirms whether glossary coverage is still complete.
3. Locale regeneration stays downstream of approved glossary updates and was not executed during Wave 4.

## Trace rule

When a page change is meant to document a behavior change in code, trace from the docs page to the owning product/config/plugin surface before deciding whether a product test needs to run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `53` changed path(s) to this final leaf. `53` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 48, 'A': 5}`.

- `docs/cli/acp.md`
- `docs/cli/agent.md`
- `docs/cli/agents.md`
- `docs/cli/approvals.md`
- `docs/cli/backup.md`
- `docs/cli/browser.md`
- `docs/cli/channels.md`
- `docs/cli/clawbot.md`
- `docs/cli/completion.md`
- `docs/cli/config.md`
- `docs/cli/configure.md`
- `docs/cli/cron.md`
- `docs/cli/daemon.md`
- `docs/cli/dashboard.md`
- `docs/cli/devices.md`
- `docs/cli/directory.md`
- `docs/cli/dns.md`
- `docs/cli/docs.md`
- `docs/cli/doctor.md`
- `docs/cli/flows.md`
- `docs/cli/gateway.md`
- `docs/cli/health.md`
- `docs/cli/hooks.md`
- `docs/cli/index.md`
- `docs/cli/infer.md`
- `docs/cli/logs.md`
- `docs/cli/mcp.md`
- `docs/cli/memory.md`
- `docs/cli/message.md`
- `docs/cli/models.md`
- `... 另有 23 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
