# IRC Channel Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                                                                | Role                                                                          | Impact notes                                     |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| `extensions/irc/openclaw.plugin.json`, `package.json`, `index.ts`                           | Manifest/package/entry/runtime registration.                                  | Catalog/setup/runtime boundary.                  |
| `extensions/irc/api.ts`, `setup-entry.ts`, `src/runtime-api.ts`, `src/runtime.ts`           | Public/runtime/setup surfaces.                                                | Export/runtime compatibility.                    |
| `extensions/irc/src/channel.ts`, `config-schema.ts`, `types.ts`                             | Plugin composition and config/types.                                          | Channel capability/config behavior.              |
| `extensions/irc/src/accounts.ts`, `setup-core.ts`, `setup-surface.ts`, `connect-options.ts` | Server/nick/password/TLS/NickServ setup and account resolution.               | Credential and connection setup.                 |
| `extensions/irc/src/client.ts`, `protocol.ts`, `control-chars.ts`                           | IRC socket client, parser, outbound sanitization/splitting.                   | Network/protocol correctness and message safety. |
| `extensions/irc/src/monitor.ts`, `inbound.ts`                                               | Provider lifecycle, inbound target resolution, access/pairing/reply dispatch. | Main runtime path.                               |
| `extensions/irc/src/policy.ts`, `normalize.ts`                                              | Group/mention/allowlist policy and target normalization.                      | Authorization/routing behavior.                  |
| `extensions/irc/src/send.ts`, `probe.ts`                                                    | Outbound send and connection probe.                                           | Side effects and status.                         |
