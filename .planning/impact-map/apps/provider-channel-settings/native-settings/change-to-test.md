# Native Provider and Channel Settings Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| macOS config/channel settings changed | Run the nearest macOS settings/channel smoke on the Mac | Escalate to `scripts/restart-mac.sh` when the change affects gateway lifecycle or packaged runtime behavior. |
| iOS settings/gateway persistence changed | `pnpm ios:gen`, then the nearest iOS settings/gateway smoke in Xcode on a connected device | Escalate to `pnpm ios:build` when signing/project generation or broader onboarding flow changes. |
| Android connect/settings persistence changed | `pnpm android:test` for covered logic, then `pnpm android:assemble` / `pnpm android:install` for device UI flows | Escalate to `pnpm android:run` when onboarding/manual connect behavior changes. |
| Provider/channel option set changed | Validate the matching web settings leaf and docs-sync subtree too | Escalate to cross-platform parity review when user-facing provider/channel lists drift. |

## Validation evidence

No native app tests or builds were run while promoting this leaf. Command references were verified from repo scripts and native app READMEs.
