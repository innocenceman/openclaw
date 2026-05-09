# Thread Ownership Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                           | First validation                                         | Escalation trigger                                                                                   |
| ------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Hook/ownership behavior changed       | `pnpm test -- extensions/thread-ownership/index.test.ts` | Add Slack/channel contract coverage when metadata shapes or hook timing semantics change.            |
| Shared channel/event contract changed | `pnpm test:contracts:channels`                           | Escalate when event payload assumptions or channel-hook integration changes beyond this plugin leaf. |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
