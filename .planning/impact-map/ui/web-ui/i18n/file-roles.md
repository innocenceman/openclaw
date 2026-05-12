# Web UI i18n File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                         | Role                                                     | Evidence state             | Impact notes                                           |
| ------------------------------------ | -------------------------------------------------------- | -------------------------- | ------------------------------------------------------ |
| `ui/src/i18n/index.ts`               | Public i18n export surface.                              | `exceptioned-deep-partial` | Shared import boundary for the web UI.                 |
| `ui/src/i18n/lib/registry.ts`        | Supported-locale registry and lazy locale loader wiring. | `exceptioned-deep-partial` | Controls locale discovery and dynamic import behavior. |
| `ui/src/i18n/lib/*.ts`               | Translation runtime/controller/helpers.                  | `exceptioned-deep-partial` | Affects translation lookup and Lit integration.        |
| `ui/src/i18n/locales/*.ts`           | Locale resource files.                                   | `exceptioned-deep-partial` | User-visible copy across supported locales.            |
| `ui/src/i18n/test/translate.test.ts` | Closest committed translation regression coverage.       | `exceptioned-deep-partial` | Useful when registry/lookup behavior changes.          |

## Update rule

If a new locale or loading strategy is added, update this leaf before relying on translated UI behavior.
