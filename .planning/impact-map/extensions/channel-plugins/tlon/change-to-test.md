# tlon Channel Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                            | First validation                                                                                                                                   | Escalation trigger                                                                                                                 |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Manifest/package/tool entry changed    | `pnpm test:contracts:channels` plus `pnpm test -- extensions/tlon/src/core.test.ts`                                                                | `pnpm build` is required if package exports, bundled skill/runtime deps, CLI tool registration, or lazy runtime boundaries change. |
| Setup/config/base URL changed          | `pnpm test -- extensions/tlon/src/core.test.ts extensions/tlon/src/urbit/base-url.test.ts extensions/tlon/src/urbit/auth.ssrf.test.ts`             | Add security review if private/internal host, SSRF, or `allowPrivateNetwork` behavior changes.                                     |
| Target/session routing changed         | `pnpm test -- extensions/tlon/src/core.test.ts extensions/tlon/src/security.test.ts`                                                               | Add routing/session tests if DM/group/thread target grammar or session keys change.                                                |
| Monitor authorization/settings changed | `pnpm test -- extensions/tlon/src/security.test.ts extensions/tlon/src/monitor/settings-helpers.test.ts`                                           | Escalate to cross-channel policy review if default authorization, owner role, approval, or allowlist semantics change.             |
| Processed-message/dedupe changed       | `pnpm test -- extensions/tlon/src/monitor/processed-messages.test.ts`                                                                              | Add monitor integration checks if duplicate suppression or replay behavior changes.                                                |
| Cite/history/privacy changed           | `pnpm test -- extensions/tlon/src/security.test.ts`                                                                                                | Add security review if cited-message expansion can reveal unauthorized private channel/DM content.                                 |
| Urbit auth/fetch/SSE changed           | `pnpm test -- extensions/tlon/src/urbit/auth.ssrf.test.ts extensions/tlon/src/urbit/base-url.test.ts extensions/tlon/src/urbit/sse-client.test.ts` | Escalate to live Urbit smoke only when explicitly validating real ship credentials.                                                |
| Urbit send/upload changed              | `pnpm test -- extensions/tlon/src/urbit/send.test.ts extensions/tlon/src/urbit/upload.test.ts`                                                     | Add media/security validation if upload URLs, S3 presigning, or file payloads change.                                              |
| Gateway/outbound runtime changed       | `pnpm test -- extensions/tlon/src/core.test.ts extensions/tlon/src/urbit/send.test.ts`                                                             | `pnpm build` is required if lazy runtime or production module boundary changes.                                                    |
| Runtime dependency/export changed      | `pnpm test -- test/scripts/stage-bundled-plugin-runtime-deps.test.ts` and targeted Tlon tests                                                      | `pnpm build` is required for package exports, Urbit/Tlon dependency boundary, or bundled skill behavior.                           |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Promote beyond `deep-partial` only after recording dated command output for the affected paths.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `28` (修改 24，新增 3，删除 1).
- Target-existing path refs in active map: `27`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
