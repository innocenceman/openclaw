# Compat Hooks Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope    | First validation                                                                          | Escalation trigger                                                    | Notes                                                                |
| --------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `compat-hooks/` | Start with the nearest targeted tests named in `file-roles.md` or parent module evidence. | Escalate to consumer modules when behavior crosses the leaf boundary. | Fill with fresher validation evidence during the next verified wave. |

## 2026-05-09 validation result

Result: `verified`. All hooks tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `41` (新增 6，修改 35).
- Target-existing path refs in active map: `41`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/compat/legacy-names.ts`
- `src/hooks/bundled/README.md`
- `src/hooks/bundled/boot-md/handler.test.ts`
- `src/hooks/bundled/boot-md/handler.ts`
- `src/hooks/bundled/compaction-notifier/HOOK.md`
- `src/hooks/bundled/compaction-notifier/handler.ts`
- `src/hooks/bundled/session-memory/HOOK.md`
- `src/hooks/bundled/session-memory/handler.test.ts`
- `src/hooks/bundled/session-memory/handler.ts`
- `src/hooks/bundled/session-memory/transcript.ts`
- `src/hooks/config.ts`
- `src/hooks/gmail-ops.ts`
- `src/hooks/gmail-setup-utils.test.ts`
- `src/hooks/gmail-setup-utils.ts`
- `src/hooks/gmail-watcher.ts`
- `src/hooks/gmail.ts`
- `src/hooks/hooks.ts`
- `src/hooks/install.test.ts`
- `src/hooks/llm-slug-generator.test.ts`
- `src/hooks/llm-slug-generator.ts`
- `src/hooks/loader.ts`
- `src/hooks/message-hook-mappers.test.ts`
- `src/hooks/message-hook-mappers.ts`
- `src/hooks/plugin-hooks.ts`
- `src/hooks/policy.ts`
- `src/hooks/types.ts`
- `src/hooks/workspace.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
