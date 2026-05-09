# App Version Surfaces File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                                             | Role                                                       | Evidence state | Impact notes                                                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------- |
| package.json                                                                                             | Canonical CLI/package version source.                      | deep-partial   | The release/version workflow fans out from here into app and docs version surfaces.      |
| apps/android/app/build.gradle.kts                                                                        | Android `versionName`/`versionCode` surface.               | deep-partial   | Android release automation parses and rewrites this file directly.                       |
| apps/ios/Sources/Info.plist, apps/ios/Tests/Info.plist, apps/macos/Sources/OpenClaw/Resources/Info.plist | Apple bundle-version surfaces called out by repo guidance. | partial        | These stay aligned with xcconfig/project-level versioning and should not drift silently. |
| docs/install/updating.md                                                                                 | Pinned user-facing npm update guidance.                    | partial        | Version bumps that ship publicly need the docs pin reviewed at the same time.            |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
