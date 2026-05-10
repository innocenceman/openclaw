# Google Chat Channel Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                                                                        | Role                                                                               | Impact notes                                          |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `extensions/googlechat/openclaw.plugin.json`, `package.json`, `index.ts`                            | Manifest/package/entry/runtime registration.                                       | Catalog/install/runtime boundary.                     |
| `extensions/googlechat/api.ts`, `runtime-api.ts`, `setup-entry.ts`                                  | Public/runtime/setup entry surfaces.                                               | Export/setup compatibility.                           |
| `extensions/googlechat/src/channel.ts`, `channel.runtime.ts`, `config-schema.ts`, `group-policy.ts` | Channel composition, runtime, config schema, group mention policy.                 | Plugin behavior/status/outbound wiring.               |
| `extensions/googlechat/src/accounts.ts`, `setup-core.ts`, `setup-surface.ts`, `types.config.ts`     | Account and service-account credential setup.                                      | Credential-sensitive setup/config behavior.           |
| `extensions/googlechat/src/auth.ts`                                                                 | Google Chat OAuth token and inbound request verification.                          | Security-sensitive webhook authenticity.              |
| `extensions/googlechat/src/monitor-webhook.ts`, `monitor.ts`, `monitor-types.ts`                    | Webhook request pipeline, target registry, event processing, reply delivery.       | External HTTP surface and inbound dispatch.           |
| `extensions/googlechat/src/monitor-access.ts`                                                       | Sender/group access, pairing, mention gating.                                      | Authorization and command/routing safety.             |
| `extensions/googlechat/src/api.ts`                                                                  | Google Chat REST API calls for messages, attachments, reactions, DM lookup, probe. | Outbound side effects and media.                      |
| `extensions/googlechat/src/targets.ts`, `actions.ts`, `types.ts`                                    | Target normalization/resolution, message actions, event/message types.             | Manual sends, reactions, uploads, user/space routing. |
