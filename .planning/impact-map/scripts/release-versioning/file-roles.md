# Release Versioning File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                                               | Role                       | Evidence state             | Impact notes                                                              |
| ---------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- | ------------------------------------------------------------------------- |
| `package.json`, app version files, and docs version pins                                                   | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Version bumps are not single-file changes in this repo.                   |
| `scripts/openclaw-npm-release-check.ts`, `scripts/openclaw-npm-postpublish-verify.ts`, and related helpers | `exceptioned-deep-partial` | `exceptioned-deep-partial` | These are release-sensitive and should be traced before any publish flow. |
| `docs/reference/RELEASING.md` and adjacent route/docs surfaces                                             | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Public docs drift can misroute operators even if scripts are correct.     |

## Update rule

Keep version surfaces, release guard scripts, and release policy docs mapped separately here so future changes do not collapse them into an untraceable "release stuff" bucket.
