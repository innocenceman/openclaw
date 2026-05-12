# Security Guards Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation | Escalation trigger | Notes |
| ------------ | ---------------- | ------------------ | ----- |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `78` (重命名/移动 1，修改 21，新增 49，删除 7).
- Target-existing path refs in active map: `70`; deleted/renamed-away refs kept only in transition artifacts: `8`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
