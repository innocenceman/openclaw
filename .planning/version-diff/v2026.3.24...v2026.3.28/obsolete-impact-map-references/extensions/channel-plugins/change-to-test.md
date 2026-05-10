# Channel Plugins Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                                              | First validation                                                                                                                            | Escalation trigger                                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Manifest `channels` or channel entry metadata changed    | `pnpm test:contracts:channels` plus `pnpm test -- src/plugins/bundled-plugin-naming.test.ts src/plugins/contracts/catalog.contract.test.ts` | Run `pnpm test:channels` when catalog/setup/status behavior can affect multiple channels.          |
| `src/channel.ts` wiring changed                          | Nearest colocated channel test plus `pnpm test:contracts:channels`                                                                          | Run `pnpm test:channels` if setup/status/send/monitor wiring is shared.                            |
| `src/setup-surface.ts` or config/status behavior changed | Nearest setup/status test plus `pnpm test -- src/channels/plugins/contracts/registry-backed.contract.test.ts`                               | Update docs/UI/app settings maps when user-facing config or provider/channel lists change.         |
| Inbound monitor/event normalization changed              | Nearest monitor/inbound test plus `pnpm test -- src/channels/plugins/contracts/inbound.contract.test.ts`                                    | Run affected routing/command-gating tests if sender/account/thread/group policy changes.           |
| Outbound send/payload/media changed                      | Nearest send/media test plus `pnpm test -- src/channels/plugins/contracts/outbound-payload.contract.test.ts`                                | Run media/security tests when file fetch, SSRF, attachments, or remote media behavior changes.     |
| Group policy / allowlist / command gating changed        | `pnpm test -- src/channels/plugins/contracts/group-policy.contract.test.ts` plus affected channel tests                                     | Run core routing/channel command-gating suites when shared helpers change.                         |
| Browser/session-backed channel changed                   | WhatsApp/BlueBubbles/iMessage nearest mock tests first; consult `../channels/change-to-test.md`                                             | Live/manual联调 only after mock-first compatibility passes.                                        |
| Shared channel helper or SDK seam changed                | `pnpm test:contracts:channels` and `pnpm test:contracts:plugins`                                                                            | `pnpm test:extensions` / `pnpm test:channels` when multiple extension channels consume the helper. |

## Validation evidence

No channel tests/builds/graph indexes were run while deepening these leaves. Paths and commands were selected from repo-native structural inspection and root `package.json` scripts.
