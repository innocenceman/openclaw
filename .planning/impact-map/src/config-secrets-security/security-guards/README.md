# Security Guards Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Leaf: `security-guards/`

## Purpose

Audit/fix helpers, safe-regex/temp-path guards, skill scanning, and security policy enforcement.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `78` (重命名/移动 1，修改 21，新增 49，删除 7).
- Target-existing changed paths listed here: `70`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `8`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 58 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `42`
- Target-existing changed paths reflected here: `40`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
