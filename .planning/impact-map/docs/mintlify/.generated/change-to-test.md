# Docs Support .generated Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                           | First validation                     | Escalation trigger                                                                                                |
| ------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Config schema/help drift touched      | `pnpm config:docs:check`             | Approved drift refresh uses `pnpm config:docs:gen`; run broader config/docs checks when public help text changes. |
| Plugin SDK API drift touched          | `pnpm plugin-sdk:api:check`          | Approved refresh uses `pnpm plugin-sdk:api:gen`; add export checks when public SDK entrypoints move.              |
| Bundled plugin metadata drift touched | `pnpm check:bundled-plugin-metadata` | Escalate to `pnpm build` or contract tests when runtime catalog behavior changes, not just generated text.        |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `386` (修改 133，删除 81，新增 170，重命名/移动 2).
- Target-existing path refs in active map: `304`; deleted/renamed-away refs kept only in transition artifacts: `82`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/.generated/config-baseline.sha256`
- `docs/.generated/plugin-sdk-api-baseline.sha256`
- `docs/docs.json`
- `scripts/copy-bundled-plugin-metadata.mjs`
- `src/plugin-sdk/AGENTS.md`
- `src/plugin-sdk/access-groups.ts`
- `src/plugin-sdk/acp-runtime-backend.ts`
- `src/plugin-sdk/acp-runtime.test.ts`
- `src/plugin-sdk/acp-runtime.ts`
- `src/plugin-sdk/agent-harness-runtime.test.ts`
- `src/plugin-sdk/agent-harness-runtime.ts`
- `src/plugin-sdk/agent-runtime-test-contracts.ts`
- `src/plugin-sdk/agent-runtime.ts`
- `src/plugin-sdk/allowlist-config-edit.ts`
- `src/plugin-sdk/approval-native-helpers.test.ts`
- `src/plugin-sdk/approval-native-helpers.ts`
- `src/plugin-sdk/approval-reply-runtime.ts`
- `src/plugin-sdk/async-lock-runtime.ts`
- `src/plugin-sdk/browser-config.ts`
- `src/plugin-sdk/browser-maintenance.test.ts`
- `src/plugin-sdk/browser-maintenance.ts`
- `src/plugin-sdk/browser-profiles.ts`
- `src/plugin-sdk/browser-trash.ts`
- `src/plugin-sdk/bundled-channel-config-schema.ts`
- `src/plugin-sdk/cli-backend.ts`
- `src/plugin-sdk/cli-runtime.ts`
- `src/plugin-sdk/command-auth-native.ts`
- `src/plugin-sdk/command-auth.test.ts`
- `src/plugin-sdk/command-auth.ts`
- `src/plugin-sdk/command-status.runtime.test.ts`
- `src/plugin-sdk/command-status.runtime.ts`
- `src/plugin-sdk/command-surface.ts`
- `src/plugin-sdk/compat.ts`
- `src/plugin-sdk/concurrency-runtime.ts`
- `src/plugin-sdk/config-mutation.ts`
- `src/plugin-sdk/config-runtime.ts`
- `src/plugin-sdk/config-schema.ts`
- `src/plugin-sdk/config-types.ts`
- `src/plugin-sdk/conversation-runtime.ts`
- `src/plugin-sdk/core.test.ts`
- … plus 148 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
