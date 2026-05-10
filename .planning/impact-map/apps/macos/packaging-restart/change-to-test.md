# macOS Packaging and Restart Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Packaging script changed | `scripts/package-mac-app.sh` | Escalate to full packaged-app launch verification when bundle contents, signing, or embedded frameworks change. |
| Restart workflow changed | `scripts/restart-mac.sh` on the Mac | Escalate to attached runtime smoke when restart behavior, launch agent handling, or gateway attach-only logic changes. |
| Logging helper changed | `scripts/clawlog.sh --help` and a local log query on macOS | Escalate to broader runtime debug checks when category/predicate handling changes. |

## Validation evidence

No macOS packaging or restart commands were run while promoting this leaf. Command references were verified from root `package.json` and `apps/macos/README.md`.
