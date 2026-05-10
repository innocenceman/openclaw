# iOS Project, Signing, and Tests Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Validation risk |
| --- | --- | --- |
| Owned iOS path | `project.yml`, `Config/**`, `*.xcconfig`, `Sources/Info.plist`, `Tests/**` | Gateway trust/session state, SwiftUI behavior, extension/device permission behavior, signing, or generated project drift. |
| Shared kit edge | `apps/shared/OpenClawKit/**` | Cross-platform Swift behavior; validate shared package and app target together. |

## Trace rule

Start in the owning iOS source/test family, then widen to shared kit only when protocol/chat UI behavior crosses platform boundaries.
