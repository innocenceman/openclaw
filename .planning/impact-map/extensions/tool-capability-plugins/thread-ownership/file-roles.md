# Thread Ownership Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                   | Role                                                                                                                    | Impact notes                                                            |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `extensions/thread-ownership/openclaw.plugin.json`, `index.ts` | Manifest and hook registration contract for Slack thread ownership coordination.                                        | Forwarder URL config, A/B channel allowlist, and hook behavior.         |
| `extensions/thread-ownership/index.ts`                         | Hook implementation for mention tracking and outbound ownership checks.                                                 | Can suppress or allow Slack sends depending on ownership API responses. |
| `extensions/thread-ownership/api.ts`                           | Local barrel for the narrowed plugin-SDK seam.                                                                          | Boundary drift can affect allowed imports or downstream helper usage.   |
| `extensions/thread-ownership/index.test.ts`                    | Nearest local regression anchor for hook registration, claim/cancel behavior, mention tracking, and fail-open behavior. | First stop before widening to Slack/channel contract checks.            |
