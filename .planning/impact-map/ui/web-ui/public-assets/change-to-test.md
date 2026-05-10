# Web UI Public Assets Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type               | First validation | Escalation trigger                                                                                 |
| ------------------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| HTML boot shell changed   | `pnpm ui:build`  | Escalate to browser smoke when theme bootstrapping, document metadata, or script mounting changes. |
| Static icon asset changed | `pnpm ui:build`  | Escalate to manual browser refresh/install checks when branding assets change.                     |

## Validation evidence

No UI builds were run while promoting this leaf. Command references were verified from root `package.json` and `ui/package.json`.
