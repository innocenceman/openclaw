# Web Provider and Channel Settings Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                          | First validation                                                     | Escalation trigger                                                                                           |
| ------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Config form/controller logic changed | `pnpm test:ui`                                                       | Escalate to `pnpm ui:build` when schema rendering or published control-ui output changes.                    |
| Channel status/config UI changed     | `pnpm test:ui`                                                       | Escalate to broader control-ui smoke when navigation, config save/reload, or multi-channel ordering changes. |
| Provider/channel option set changed  | Validate the matching native settings leaf and docs-sync subtree too | Escalate to cross-platform parity review when web and native settings diverge.                               |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.
