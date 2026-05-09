# Provider and Channel Settings Docs Sync Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                                                       | First validation                                                      | Escalation trigger                                                                                         |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Provider or channel docs-only wording changed                                     | `pnpm check:docs`                                                     | Escalate to onboarding/setup-surface tests only when the text claims a behavior change.                    |
| Provider/channel list, setup steps, or settings semantics changed in product code | Inspect the matching docs pages plus the owning setup/UI surface      | Run targeted onboarding or setup-surface tests when the docs drift follows real behavior changes.          |
| Config reference keys or settings labels changed                                  | `pnpm check:docs` plus a repo-native search for the old/new key names | Escalate to config/help or settings-surface validation when the rename crosses docs/UI/runtime boundaries. |

## Validation evidence

No commands above were executed during Wave 4. They were selected from current docs trees, settings UIs, onboarding tests, and extension setup-surface locations without claiming fresh runtime success.
