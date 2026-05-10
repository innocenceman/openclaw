# Package clawdbot File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Path                                       | Role                                                                                       | Impact when changed                                                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/clawdbot/package.json`           | Legacy package metadata, exports, binary declaration, and dependency bridge to `openclaw`. | Affects install/package compatibility for consumers still using `clawdbot`. Check package name/version, `exports`, `bin`, and dependency alignment. |
| `packages/clawdbot/index.js`               | Runtime import compatibility shim: re-exports `openclaw`.                                  | Affects ESM import compatibility; changes can break consumers importing `clawdbot` directly.                                                        |
| `packages/clawdbot/scripts/postinstall.js` | Postinstall rename warning.                                                                | Affects install-time messaging only; avoid noisy or misleading output.                                                                              |
| `packages/clawdbot/bin/clawdbot.js`        | Declared CLI compatibility binary in package metadata.                                     | Package metadata currently declares this path; verify existence before packaging/publishing changes.                                                |

## Evidence limits

Repo-native inspection only. No npm pack/publish simulation or package install was run.
