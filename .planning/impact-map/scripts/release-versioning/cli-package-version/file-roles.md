# CLI Package Version File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                               | Role                                                        | Evidence state | Impact notes                                                                                  |
| ------------------------------------------ | ----------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| package.json                               | Primary CLI package version source.                         | deep-partial   | The npm release check reads this directly.                                                    |
| scripts/openclaw-npm-release-check.ts      | Prepublish guardrail for OpenClaw npm releases.             | deep-partial   | Mismatch handling, tag validation, and publish safety live here.                              |
| scripts/openclaw-npm-postpublish-verify.ts | Postpublish verification for the CLI package.               | partial        | Confirms the published npm state after a release.                                             |
| scripts/write-cli-compat.ts                | Writes CLI compatibility metadata consumed by built output. | partial        | Version-related CLI metadata drift can affect runtime diagnostics and distribution artifacts. |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
