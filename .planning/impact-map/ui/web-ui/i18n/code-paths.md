# Web UI i18n Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                        | Trace start                                                         | Likely downstream impact                                        |
| --------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| Supported-locale resolution | `ui/src/i18n/lib/registry.ts`                                       | Locale detection, fallback behavior, dynamic import boundaries. |
| Translation runtime path    | `ui/src/i18n/lib/translate.ts`, `ui/src/i18n/lib/lit-controller.ts` | Rendered copy updates in the running app.                       |
| Locale resource path        | `ui/src/i18n/locales/*.ts`                                          | User-facing translated strings for supported languages.         |
| Translation regression path | `ui/src/i18n/test/translate.test.ts`                                | Guardrail for registry/translation lookup behavior.             |

## Trace rule

Start with the registry/runtime file before editing locale resources so you can see whether the drift is data-only or loader-related.
