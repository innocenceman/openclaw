# Shared Packages File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| File or path                               | Role                                                                             | Evidence state | Notes                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------- |
| `packages/clawdbot/package.json`           | Legacy package metadata for `clawdbot`, including exports/bin/dependency bridge. | repo-inspected | Declared bin path should be validated before package publishing. |
| `packages/clawdbot/index.js`               | Re-export shim to `openclaw`.                                                    | repo-inspected | Import compatibility path.                                       |
| `packages/clawdbot/scripts/postinstall.js` | Rename warning during install lifecycle.                                         | repo-inspected | Messaging only.                                                  |
| `packages/moltbot/package.json`            | Legacy package metadata for `moltbot`, including exports/bin/dependency bridge.  | repo-inspected | Declared bin path should be validated before package publishing. |
| `packages/moltbot/index.js`                | Re-export shim to `openclaw`.                                                    | repo-inspected | Import compatibility path.                                       |
| `packages/moltbot/scripts/postinstall.js`  | Rename warning during install lifecycle.                                         | repo-inspected | Messaging only.                                                  |

## Evidence limits

G009 package validation found missing declared CLI entry files; keep leaves at `exceptioned-deep-partial` until fresh release/package evidence passes.
