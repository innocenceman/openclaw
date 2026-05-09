# Release Docs and Changelog File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                     | Role                                                                          | Evidence state | Impact notes                                                                           |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| docs/reference/RELEASING.md                                      | Public release policy and maintainer-oriented release references.             | deep-partial   | This is the primary docs-side owner for release policy text.                           |
| docs/docs.json                                                   | Route and nav exposure for the release reference page.                        | partial        | Redirect or nav drift can make the policy hard to discover.                            |
| .github/pull_request_template.md and .github/ISSUE_TEMPLATE/\*\* | Related contributor-facing docs nearby in the release/change-management flow. | partial        | Outside this worker scope; include as adjacent surfaces for controller awareness only. |

## Update rule

When a new wrapper, docs guide, or shared helper becomes a stable dependency for this script leaf, record it here so future impact checks do not stop at the first shell file they see.
