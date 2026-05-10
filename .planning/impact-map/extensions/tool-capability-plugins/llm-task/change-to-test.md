# LLM Task Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                   | First validation                                             | Escalation trigger                                                                      |
| ----------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Tool behavior changed         | `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts` | Add broader orchestration tests when embedded-agent contract or safety defaults change. |
| Plugin-SDK seam changed       | `pnpm test -- test/extension-plugin-sdk-boundary.test.ts`    | Escalate to import-boundary checks if local/public seams move.                          |
| Package/build surface changed | `pnpm build`                                                 | Widen if published surfaces or runtime boundaries change.                               |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
