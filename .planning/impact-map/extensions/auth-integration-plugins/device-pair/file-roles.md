# Device Pairing Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                                         | Role                                                                                                          | Impact notes                                                                          |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `extensions/device-pair/openclaw.plugin.json`, `index.ts`                                            | Manifest and orchestration entry for pairing commands, public URL config, and QR/send behavior.               | Pairing setup UX, pairing approvals, and channel-send fan-out.                        |
| `extensions/device-pair/api.ts`                                                                      | Local barrel for device-bootstrap operations, gateway URL helpers, temp-dir helpers, and QR rendering export. | Cross-plugin/public seam used to keep device-pair imports inside allowed boundaries.  |
| `extensions/device-pair/notify.ts`                                                                   | Pairing-notifier state management and pending-request notification formatting.                                | Background notification behavior, state-file persistence, and message target routing. |
| `extensions/device-pair/qr-image.ts`                                                                 | QR PNG renderer used for pairing setup messages.                                                              | User-visible setup QR delivery and media generation.                                  |
| `extensions/device-pair/index.test.ts`, `src/cli/qr-cli.test.ts`, `src/infra/device-pairing.test.ts` | Nearest regression anchors for plugin behavior, CLI QR flow, and core pairing store logic.                    | First stop before widening to gateway auth/control-ui tests.                          |
