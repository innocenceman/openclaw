# Provider and Channel Settings Docs Sync File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                                        | Role                       | Evidence state             | Impact notes                                                                                                     |
| --------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `docs/providers/**` and `docs/channels/**`                                                          | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Drift here misleads operators even when runtime behavior is correct.                                             |
| `docs/gateway/configuration-reference.md` and adjacent setup/tool pages                             | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Settings-name drift often shows up here before it is noticed elsewhere.                                          |
| `ui/src/ui/app-settings.ts`                                                                         | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Provider/channel settings changes can be reflected here without any docs update unless the sync path is watched. |
| `apps/macos/Sources/OpenClaw/ChannelsSettings*.swift`                                               | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Native settings text/order can drift away from docs or web settings if changed in isolation.                     |
| `extensions/*/src/setup-surface.ts`                                                                 | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Channel-specific setup drift often originates here before docs are updated.                                      |
| `src/commands/onboard-auth.test.ts`, `src/commands/onboard-search.test.ts`, and setup-surface tests | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Use when the docs-sync issue is caused by a real settings behavior change, not docs-only text drift.             |

## Update rule

When a new provider/channel settings surface appears in product code or docs, add it here so future sync audits do not stop at only one UI or docs family.
