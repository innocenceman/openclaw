# synthetic Provider Plugin File Roles

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| File or path                                | Role                                                                   | Evidence state | Impact notes                            |
| ------------------------------------------- | ---------------------------------------------------------------------- | -------------- | --------------------------------------- |
| `extensions/synthetic/openclaw.plugin.json` | Manifest declares provider id(s) `synthetic` and auth/config metadata. | `partial`      | Observed in manifest scan.              |
| `extensions/synthetic/index.ts`             | Provider plugin entrypoint and registration/onboarding/model boundary. | `partial`      | Observed by entrypoint scan.            |
| `extensions/synthetic/package.json`         | Package metadata and runtime dependency declarations.                  | `partial`      | Inspect before install/release changes. |

## Update rule

When a changed file in this leaf reveals a new independently owned behavior path, add that path here and update `code-paths.md` plus `change-to-test.md` before relying on this map for testing decisions.
