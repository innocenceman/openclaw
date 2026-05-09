# Generated Baselines Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                                      | First validation                     | Escalation trigger                                                                                                 |
| ---------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Config docs baseline or generator changed                        | `pnpm config:docs:check`             | Approved drift refresh uses `pnpm config:docs:gen`; run broader config/docs checks when public help text changed.  |
| Plugin SDK API baseline or generator changed                     | `pnpm plugin-sdk:api:check`          | Approved refresh uses `pnpm plugin-sdk:api:gen`; add export checks when public entrypoints moved.                  |
| Bundled plugin metadata generator or checked-in artifact changed | `pnpm check:bundled-plugin-metadata` | Escalate to build/runtime/plugin contract checks when the change alters catalog behavior, not only generated text. |

## Validation evidence

No commands above were executed during Wave 4. They were selected from current package scripts, generator source files, and checked-in baseline artifact locations without claiming fresh runtime success.
