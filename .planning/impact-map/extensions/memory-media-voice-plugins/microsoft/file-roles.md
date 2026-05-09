# microsoft Other Config or Tool Plugin File Roles

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                | Role                                              | Evidence state | Impact notes                                                        |
| ------------------------------------------- | ------------------------------------------------- | -------------- | ------------------------------------------------------------------- |
| `extensions/microsoft/openclaw.plugin.json` | Manifest and metadata for manifest/config plugin. | `partial`      | Observed in manifest scan.                                          |
| `extensions/microsoft/index.ts`             | Plugin entrypoint when present.                   | `partial`      | Observed by entrypoint convention; inspect before behavior changes. |
| `extensions/microsoft/package.json`         | Package metadata/runtime deps.                    | `partial`      | Inspect before install/release changes.                             |

## Update rule

When a changed file in this leaf reveals a new independently owned behavior path, add that path here and update `code-paths.md` plus `change-to-test.md` before relying on this map for testing decisions.
