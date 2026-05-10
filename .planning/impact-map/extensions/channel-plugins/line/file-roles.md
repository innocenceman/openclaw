# LINE Channel Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                                                                                                   | Role                                                                         | Impact notes                            |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------- |
| `extensions/line/openclaw.plugin.json`, `package.json`, `index.ts`                                                             | Manifest/package/entry/runtime/card command registration.                    | Catalog/install/tool-command boundary.  |
| `extensions/line/api.ts`, `runtime-api.ts`, `setup-api.ts`, `setup-entry.ts`, `setup-runtime-api.ts`                           | Public/setup/runtime surfaces.                                               | Export/setup compatibility.             |
| `extensions/line/src/channel.ts`, `channel-shared.ts`, `channel.setup.ts`, `config-schema.ts`, `config-adapter.ts`             | Plugin composition/config/shared setup.                                      | Channel capability and config behavior. |
| `extensions/line/src/accounts.ts`, `account-helpers.ts`, `channel-access-token.ts`, `setup-core.ts`, `setup-surface.ts`        | Account/token/secret setup.                                                  | Credential-sensitive.                   |
| `extensions/line/src/monitor.ts`, `webhook.ts`, `webhook-node.ts`, `webhook-utils.ts`, `signature.ts`                          | Monitor/webhook HTTP/signature/lifecycle.                                    | External HTTP security and runtime.     |
| `extensions/line/src/bot.ts`, `bot-handlers.ts`, `bot-access.ts`, `bot-message-context.ts`, `group-keys.ts`, `group-policy.ts` | Event handling, replay cache, access/pairing, context/routing, group config. | Main inbound path.                      |
| `extensions/line/src/send.ts`, `auto-reply-delivery.ts`, `reply-chunks.ts`, `download.ts`                                      | Push/reply/delivery/media download/chunking.                                 | Outbound and media behavior.            |
| `extensions/line/src/card-command.ts`, `message-cards`, `template-messages.ts`, `markdown-to-line.ts`, `flex-templates/**`     | Card/flex/template command and rendering.                                    | User-visible UI/payload compatibility.  |
| `extensions/line/src/rich-menu.ts`, `actions.ts`                                                                               | Rich menu and action helpers.                                                | LINE Messaging API side effects.        |
