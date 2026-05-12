# Security Guards Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/security/**`, `src/infra/net/ssrf*.ts`
- Runtime handoff: Security guards sit in front of file, regex, and remote-content operations and can block downstream runtime paths.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `78` changed path(s) to this final leaf. `70` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 1, 'M': 21, 'A': 49, 'D': 7}`.

- `src/infra/net/ssrf.dispatcher.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/infra/net/ssrf.ts`
- `src/security/audit-channel-account-metadata.test.ts`
- `src/security/audit-channel-dm-policy.test.ts`
- `src/security/audit-channel-readonly-resolution.test.ts`
- `src/security/audit-channel-source-config-discord.test.ts`
- `src/security/audit-channel-source-config-slack.test.ts`
- `src/security/audit-channel-test-helpers.ts`
- `src/security/audit-channel.ts`
- `src/security/audit-config-basics.test.ts`
- `src/security/audit-config-include-perms.test.ts`
- `src/security/audit-config-symlink.test.ts`
- `src/security/audit-deep-code-safety.ts`
- `src/security/audit-deep-probe-findings.ts`
- `src/security/audit-exec-safe-bins.test.ts`
- `src/security/audit-exec-sandbox-host.test.ts`
- `src/security/audit-exec-surface.test.ts`
- `src/security/audit-extra.async.test.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.summary.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit-filesystem-windows.test.ts`
- `src/security/audit-gateway-auth-selection.test.ts`
- `src/security/audit-gateway-config.ts`
- `src/security/audit-gateway-exposure.test.ts`
- `src/security/audit-gateway-http-auth.test.ts`
- `src/security/audit-gateway-tools-http.test.ts`
- `... 另有 40 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/infra/net/ssrf.dispatcher.test.ts`
- `src/infra/net/ssrf.test.ts`
- `src/infra/net/ssrf.ts`
- `src/security/audit-channel-dm-policy.test.ts`
- `src/security/audit-channel-readonly-setup-fallback.test.ts`
- `src/security/audit-channel.ts`
- `src/security/audit-config-include-perms.test.ts`
- `src/security/audit-extra.async.test.ts`
- `src/security/audit-extra.async.ts`
- `src/security/audit-extra.summary.ts`
- `src/security/audit-extra.sync.test.ts`
- `src/security/audit-extra.sync.ts`
- `src/security/audit-gateway-config.ts`
- `src/security/audit-gateway-exposure.test.ts`
- `src/security/audit-model-hygiene.test.ts`
- `src/security/audit-model-refs.ts`
- `src/security/audit-node-command-findings.test.ts`
- `src/security/audit-plugin-readonly-scope.test.ts`
- `src/security/audit-plugins-trust.test.ts`
- `src/security/audit-plugins-trust.ts`
- `src/security/audit-sandbox-docker-config.test.ts`
- `src/security/audit-small-model-risk.test.ts`
- `src/security/audit-workspace-skill-escape.test.ts`
- `src/security/audit-workspace-skills.ts`
- `src/security/audit.nondeep.runtime.ts`
- `src/security/audit.ts`
- `src/security/dangerous-config-flags-core.ts`
- `src/security/dangerous-config-flags.test.ts`
- `src/security/dangerous-config-flags.ts`
- `src/security/dm-policy-shared.test.ts`
- `src/security/dm-policy-shared.ts`
- `src/security/fix.ts`
- `src/security/installed-plugin-dirs.ts`
- `src/security/safe-regex.test.ts`
- `src/security/safe-regex.ts`
- `src/security/secret-equal.ts`
- `src/security/skill-scanner.test.ts`
- `src/security/skill-scanner.ts`
- `src/security/windows-acl.test.ts`
- `src/security/windows-acl.ts`

Deleted or renamed-away paths omitted from this active leaf: `2`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
